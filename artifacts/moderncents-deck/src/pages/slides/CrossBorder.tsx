export default function CrossBorder() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-primary text-bg font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-bg/60">
        <span>06 — Cross-border specialty</span>
        <span className="text-bg">Modern Cents</span>
      </div>

      <div className="grid grid-cols-12 gap-[3vw] items-start">
        <div className="col-span-5 flex flex-col gap-[3vh]">
          <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
            Canada &middot; United States
          </div>
          <h2 className="font-display font-medium text-[4vw] leading-[1.02] tracking-tight text-bg text-balance">
            Planning that respects two tax codes at once.
          </h2>
          <div className="h-[1px] w-[8vw] bg-accent" />
          <p className="font-body font-light text-[1.45vw] leading-relaxed text-bg/75 text-pretty">
            For households moving between Canada and the US — or living a life that straddles both — Modern Cents builds plans that hold up on both sides of the border.
          </p>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-[2.5vw]">
          <div className="flex flex-col gap-[1vh] border-t border-bg/20 pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-bg">Retirement accounts</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-bg/70 text-pretty">
              RRSPs, 401(k)s, and IRAs handled as one coherent retirement picture.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-bg/20 pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-bg">Government benefits</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-bg/70 text-pretty">
              CPP, OAS, and US Social Security coordinated to maximize lifetime income.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-bg/20 pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-bg">Account transitions</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-bg/70 text-pretty">
              401(k) to RRSP transfers and post-move account decisions, done correctly.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-bg/20 pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-bg">Investing across borders</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-bg/70 text-pretty">
              Where to hold what, and how to keep the tax treatment clean over time.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-bg/55 font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>07 / 09</span>
      </div>
    </div>
  );
}
