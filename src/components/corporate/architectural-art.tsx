/** Original abstract brochure drawings. Decorative, never a project plan or map. */
export function ArchitecturalLineArt({ variant = "elevation", className = "" }: {
  variant?: "elevation" | "river" | "plan" | "lattice"; className?: string;
}) {
  return <svg className={`r-art r-art-${variant} ${className}`} viewBox="0 0 640 480" fill="none" aria-hidden="true" focusable="false">
    <g stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
      {variant === "elevation" && <>
        <path className="r-draw" pathLength="1" d="M42 411H603M99 410V180H190V105H435V155H533V410M176 409V126H451V410M207 126V86H413V126M225 87V64H395V87M88 431H546M68 450H570" />
        {[0,1,2,3,4,5].map(i=><g key={i}><path d={`M190 ${157+i*39}H436M184 ${163+i*39}H443M104 ${209+i*32}H175M452 ${194+i*36}H526`} />{[0,1,2,3,4].map(j=><path key={j} d={`M${205+j*45} ${133+i*39}v22h29v-22h-29`} />)}</g>)}
        <path d="M285 410V368Q315 330 346 368V410M62 180H149M62 410H149M73 171V419M68 185L78 175M68 415L78 405M188 43H435M190 37V49M435 37V49M566 182V409M561 185L571 175M561 413L571 403" />
      </>}
      {variant === "river" && <>
        {[0,1,2,3,4,5,6,7].map(i=><path className={i===2?"r-draw":""} pathLength="1" key={i} d={`M-35 ${390+i*10}C110 ${230+i*12} 270 ${445+i*8} 415 ${280+i*13}S580 ${170+i*12} 680 ${210+i*13}`} />)}
        <path className="r-draw" pathLength="1" d="M64 300H144V274H191V252H239V225H290V190H328V219H360V184H388V216H414V171H447V216H480V186H515V236H555V253H591M75 316H160V291H207V269H254V244H304M97 332H177V307H224V285H271V262H310" />
        <path d="M111 101H254M182 61V142M177 66L182 54L187 66M115 96V106M249 96V106M431 65H578V132H535V153H490V171H447V115H431Z" strokeDasharray="4 7" />
      </>}
      {variant === "plan" && <>
        <path className="r-draw" pathLength="1" d="M85 380V120H225V70H493V144H550V380H85ZM108 355V145H249V95H468V170H522V355H108ZM249 95V244H365V95M108 244H249M365 244H522M365 244V355M185 244V355M249 244V296H312V355M108 300H185M414 244V355" />
        <path d="M85 410H550M85 404V416M550 404V416M55 120V380M49 120H61M49 380H61M277 151H334V214H277ZM401 121H445V207H401ZM205 280H229V334H205Z" />
        <path d="M575 110V45L565 64M575 45L585 64M565 85H585M320 390V430M310 400H330M300 50H440" />
        <circle cx="309" cy="183" r="18" /><path d="M165 145A45 45 0 0 1 210 190H165V145M418 355A40 40 0 0 1 458 315V355" />
      </>}
      {variant === "lattice" && <>{[0,1,2,3,4,5,6].map(i=><g key={i}>{[0,1,2,3,4].map(j=><path key={j} d={`M${80+i*70} ${50+j*82}l35 41-35 41-35-41Z M${80+i*70} ${71+j*82}l18 20-18 20-18-20Z`} />)}</g>)}</>}
      <path d="M25 35H52M38 22V49M583 441H610M597 428V454" />
    </g>
  </svg>;
}
export function GraphicSideRail({ label, number = "01" }: {label: string; number?: string}) {
 return <div className="r-side-rail" aria-hidden="true"><span>{number}</span><i /><span>{label}</span></div>;
}
export function PortraitPlane({children}: {children:React.ReactNode}) {
 return <div className="r-portrait-plane"><span className="r-portrait-halo" aria-hidden="true" />{children}</div>;
}
