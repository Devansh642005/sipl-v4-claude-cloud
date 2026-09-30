#!/usr/bin/env python3
"""Rebuilds the Sri Krishna Vilas property film.

Takes the uploaded 52 s film, hides the baked-in AI-tool mark with a SIPL logo
badge, and inserts four extra render scenes (entrance, landscape, living/dining,
bedroom) in the same visual style before the end card.

Usage: python3 build-film.py <original.mp4> <renders-dir> <out-dir> [ffmpeg]
Needs: Pillow, ffmpeg (imageio-ffmpeg's binary works).
"""
import subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

orig, renders, out = map(Path, sys.argv[1:4])
FF = sys.argv[4] if len(sys.argv) > 4 else "ffmpeg"
REPO = Path(__file__).resolve().parents[2]
out.mkdir(parents=True, exist_ok=True)

W, H = 1920, 1080
PX, PY, PW, PH = 96, 0, 1728, 972           # picture window inside the film frame
BG = (36, 24, 28)
FT = "/usr/share/fonts/truetype/"
SERIF = FT + "liberation/LiberationSerif-Regular.ttf"
SANS = FT + "dejavu/DejaVuSans.ttf"

CLIPS = [  # still, chapter label, title, subline, motion
    ("vilas-govardhan-entrance-1600", "07 / THE ENTRANCE", "Step inside",
     "Arrival at the tower entrance.", "push"),
    ("vilas-frontage-landscape-road-2400", "08 / THE LANDSCAPE", "Paths through green",
     "Landscaped lawns and walkways.", "pan"),
    ("vilas-living-dining-1600", "09 / THE HOME", "Made for living",
     "Living and dining, considered.", "push"),
    ("vilas-bedroom-1600", "10 / THE RETREAT", "Rest, well",
     "Warm timber. Quiet light.", "push"),
]
CLIP_S, XF = 4.6, 0.5


def tracked(d, xy, text, font, fill, gap):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + gap
    return x


def tracked_w(d, text, font, gap):
    return sum(d.textlength(c, font=font) + gap for c in text) - gap


def make_bg(path):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype(SANS, 14)
    c = (222, 214, 200)
    tracked(d, (96, 1007), "SIPL GROUP", f, c, 6)
    mid = "SRI KRISHNA VILAS / A PROPERTY FILM"
    tracked(d, (960 - tracked_w(d, mid, f, 2) / 2, 1009), mid, f, c, 2)
    r = "AI-ANIMATED ARTIST IMPRESSIONS"
    tracked(d, (1824 - tracked_w(d, r, f, 1.5), 1009), r, f, c, 1.5)
    im.save(path)


def make_caption(path, label, title, sub):
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grad = Image.new("RGBA", (1100, 200))
    gp = grad.load()
    for x in range(1100):
        a = int(150 * max(0, 1 - x / 1100) ** 1.3)
        for y in range(200):
            gp[x, y] = (12, 8, 10, int(a * min(1, y / 60)))
    im.alpha_composite(grad, (PX, PY + PH - 200))
    d = ImageDraw.Draw(im)
    tracked(d, (130, 800), label, ImageFont.truetype(SANS, 14), (205, 190, 165), 1.2)
    d.text((126, 822), title, font=ImageFont.truetype(SERIF, 54), fill=(244, 238, 226))
    d.text((130, 902), sub, font=ImageFont.truetype(SANS, 19), fill=(238, 232, 222))
    im.save(path)


def make_badge(path):
    logo = Image.open(REPO / "public/assets/logo-light.png").convert("RGBA")
    logo = logo.crop((60, 60, 1540, 440))          # flame + SIPL, tagline dropped
    lh = 46
    logo = logo.resize((round(logo.width * lh / logo.height), lh), Image.LANCZOS)
    pw, ph = logo.width + 40, 80
    s = 4
    pill = Image.new("RGBA", (pw * s, ph * s), (0, 0, 0, 0))
    d = ImageDraw.Draw(pill)
    d.rounded_rectangle((0, 0, pw * s - 1, ph * s - 1), radius=ph * s // 2,
                        fill=BG + (250,), outline=(255, 255, 255, 38), width=s)
    pill = pill.resize((pw, ph), Image.LANCZOS)
    pill.alpha_composite(logo, (20, (ph - lh) // 2))
    pill.save(path)
    return pw, ph


def run(*args):
    subprocess.run([FF, "-hide_banner", "-loglevel", "error", "-y", *map(str, args)], check=True)


bg = out / "bg.png"; make_bg(bg)
bw, bh = make_badge(out / "badge.png")
bx, by = PX + PW - 16 - bw, 809 - bh // 2       # star sits at ~(1665, 810)

fps = 24
n = round(CLIP_S * fps)
parts = []
for i, (still, label, title, sub, motion) in enumerate(CLIPS):
    cap = out / f"cap{i}.png"; make_caption(cap, label, title, sub)
    z = "1+0.05*on/%d" % n if motion == "push" else "1.07"
    x = "iw/2-(iw/zoom/2)" if motion == "push" else "(iw-iw/zoom)*on/%d" % n
    y = "ih/2-(ih/zoom/2)"
    dst = out / f"ext{i}.mp4"
    parts.append(dst)
    if dst.exists():                              # reuse earlier renders
        continue
    run("-loop", 1, "-t", CLIP_S, "-i", bg,
        "-loop", 1, "-t", CLIP_S, "-i", renders / f"{still}.webp",
        "-loop", 1, "-t", CLIP_S, "-i", cap,
        "-filter_complex",
        f"[1]scale=3456:1944:flags=lanczos,zoompan=z='{z}':x='{x}':y='{y}':d={n}:s={PW}x{PH}:fps={fps}[v];"
        f"[0][v]overlay={PX}:{PY}[b];[2]format=rgba,fade=t=in:st=0.5:d=0.7:alpha=1[c];"
        f"[b][c]overlay,format=yuv420p[o]",
        "-map", "[o]", "-r", fps, "-c:v", "libx264", "-crf", 16, "-preset", "fast", dst)

# final assembly: original picture scenes, new scenes, end card, badge on top
inputs = ["-t", 48, "-i", orig] + sum([["-i", p] for p in parts], []) \
    + ["-ss", 48, "-t", 4, "-i", orig, "-i", out / "badge.png"]
ne = len(parts) + 1                                # index of the end-card input
norm = "setpts=PTS-STARTPTS,fps=24,settb=1/24"
f = [f"[0:v]{norm}[a]", f"[{ne}:v]{norm}[e]"]
f += [f"[{i + 1}:v]{norm}[p{i}]" for i in range(len(parts))]
prev, length = "a", 48.0
for i in range(len(parts)):
    f.append(f"[{prev}][p{i}]xfade=transition=fade:duration={XF}:offset={length - XF}[x{i}]")
    prev, length = f"x{i}", length + CLIP_S - XF
f.append(f"[{prev}][e]xfade=transition=fade:duration={XF}:offset={length - XF}[m]")
f.append(f"[m][{ne + 1}:v]overlay={bx}:{by},format=yuv420p[final]")
graph = ";".join(f)

for name, crf, extra in [("skv-film-web", 27, ["-maxrate", "2500k", "-bufsize", "5000k"]),
                         ("skv-film-final", 20, [])]:
    run(*inputs, "-filter_complex", graph, "-map", "[final]", "-an", "-r", fps,
        "-c:v", "libx264", "-profile:v", "high", "-crf", crf, "-preset", "medium",
        *extra, "-movflags", "+faststart", out / f"{name}.mp4")
    print("wrote", out / f"{name}.mp4", flush=True)
