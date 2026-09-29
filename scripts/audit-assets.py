"""Optional media QA utility. Run with Python + Pillow; original media is read-only."""
from pathlib import Path
from PIL import Image
import hashlib,json,re
root=Path(__file__).resolve().parents[1]
parent=root.parent/'siplgroup'
registry=json.loads((root/'src/data/asset-map.json').read_text())
extra=json.loads((root/'src/data/corporate-media.json').read_text())
known={}
def assign(path,category,project=None,subject=None):
 p=Path(path)
 if not p.is_absolute():p=root/p
 if p.is_file():known[hashlib.sha256(p.read_bytes()).hexdigest()]={'category':category,'project':project,'likelySubject':subject or p.stem}
for key,v in registry.items():
 if 'public' not in v:continue
 category='Sri Krishna Vilas';project='sri-krishna-vilas'
 if key=='varanasi':category='Varanasi / City';project=None
 elif key=='hospitality':category='The Kashi Residency';project='the-kashi-residency'
 elif key=='barsana-logo':category='Barsana';project='barsana'
 elif key=='raman-logo':category='Raman Reti';project='raman-reti'
 elif key=='manasi-logo':category='Manasi Ganga';project='manasi-ganga'
 elif 'logo' in key:category='Logos / Brand';project=None
 elif 'certificate' in key or 'brochure' in key:category='Awards / Documents'
 elif key.startswith('progress'):category='Construction'
 assign(root/'public'/v['public'].lstrip('/'),category,project,key)
 original=v.get('original','')
 if original.startswith('siplgroup/'):assign(root.parent/original,category,project,key)
for m in extra:
 category={'team':'Team / People','event':'Events','hospitality':'The Kashi Residency'}.get(m['category'],'SIPL Corporate')
 assign(root/'public'/m['src'].lstrip('/'),category,m.get('project'),m['alt'])
 if m['source'].startswith('../'):assign(root/m['source'],category,m.get('project'),m['alt'])
# Only active gallery content is eligible, not commented template images or stock banners.
for page,category in [('page-event-photos.php','Events'),('page-current-photos.php','Construction')]:
 if not (parent/page).exists():continue
 s=re.sub(r'<!--.*?-->','',(parent/page).read_text(),flags=re.S)
 s=s.split('<main',1)[-1]
 for file in re.findall(r'(?:/img/|/uploads/\d+/\d+/)([^"<>]+)',s):
  for folder in ['img','New Image']:
   assign(parent/folder/file,category,'sri-krishna-vilas',('SIPL project event' if category=='Events' else 'Sri Krishna Vilas site photograph'))
rows=[];unsupported=[]
for base in [parent,root/'public']:
 if not base.exists():continue
 for p in sorted(base.rglob('*')):
  if not p.is_file():continue
  try:
   with Image.open(p) as im:
    w,h=im.size;format=im.format
    px=list(im.convert('L').resize((9,8)).getdata())
    dh=sum((px[y*9+x]>px[y*9+x+1])<<(y*8+x) for y in range(8) for x in range(8))
  except Exception:
   if p.suffix.lower() in ['.jpg','.jpeg','.png','.webp','.gif','.bmp','.svg','.heic','.avif']:unsupported.append(str(p.relative_to(root.parent)))
   continue
  digest=hashlib.sha256(p.read_bytes()).hexdigest();size=p.stat().st_size
  row={'filename':str(p.relative_to(root.parent)),'width':w,'height':h,'bytes':size,'format':format,'sha256':digest,'dhash':f'{dh:016x}',**known.get(digest,{'category':'Unknown / Needs Review','project':None,'likelySubject':p.stem}), 'lowResolution':w<600 or h<350,'orientation':'portrait' if h>w else 'landscape','compressionReview':size/(w*h)<0.045,'usage':'Review before publishing' if digest not in known else 'Source-associated; choose best resolution'}
  rows.append(row)
for r in rows:
 r['exactDuplicates']=[x['filename'] for x in rows if x is not r and x['sha256']==r['sha256']]
 r['nearDuplicateCandidates']=[x['filename'] for x in rows if x['sha256']!=r['sha256'] and (int(x['dhash'],16)^int(r['dhash'],16)).bit_count()<=4]
(root/'docs/corporate-asset-audit.json').write_text(json.dumps(rows,indent=2))
summary={'imageCount':len(rows),'uniqueHashes':len(set(r['sha256'] for r in rows)),'categories':{c:sum(r['category']==c for r in rows) for c in sorted(set(r['category'] for r in rows))},'unsupported':unsupported,'lowResolutionCount':sum(r['lowResolution'] for r in rows),'note':'Near duplicates and compression thresholds are review flags, not definitive judgements. Unknown sources are not newly published.'}
(root/'docs/corporate-asset-summary.json').write_text(json.dumps(summary,indent=2));print(json.dumps(summary,indent=2))
