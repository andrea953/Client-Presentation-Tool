export default function Differentiators() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>03 — What makes us different</span>
        <span className="text-primary">Modern Cents</span>
      </div>

      <div className="flex flex-col gap-[4vh]">
        <h2 className="font-display font-medium text-[3.6vw] leading-[1.05] tracking-tight text-primary text-balance max-w-[60vw]">
          Four things our clients consistently tell us they value.
        </h2>

        <div className="grid grid-cols-2 gap-x-[5vw] gap-y-[4vh] max-w-[82vw]">
          <div className="flex flex-col gap-[1.2vh] border-t border-border pt-[2vh]">
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.4vw] leading-none text-accent">01</span>
              <span className="font-display text-[2vw] leading-tight text-primary">Independence first</span>
            </div>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty">
              No commissions, no product quotas, no third-party incentives. The advice is the product.
            </p>
          </div>

          <div className="flex flex-col gap-[1.2vh] border-t border-border pt-[2vh]">
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.4vw] leading-none text-accent">02</span>
              <span className="font-display text-[2vw] leading-tight text-primary">Adaptive delivery</span>
            </div>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty">
              Comprehensive engagements, focused projects, or ad-hoc consultations — sized to where you are right now.
            </p>
          </div>

          <div className="flex flex-col gap-[1.2vh] border-t border-border pt-[2vh]">
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.4vw] leading-none text-accent">03</span>
              <span className="font-display text-[2vw] leading-tight text-primary">Cross-border depth</span>
            </div>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty">
              Real fluency with RRSP, 401(k), IRA, CPP, OAS, and Social Security planning across both sides of the line.
            </p>
          </div>

          <div className="flex flex-col gap-[1.2vh] border-t border-border pt-[2vh]">
            <div className="flex items-baseline gap-[1vw]">
              <span className="font-display text-[2.4vw] leading-none text-accent">04</span>
              <span className="font-display text-[2vw] leading-tight text-primary">Women-led firm</span>
            </div>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty">
              A planning practice built on listening, plain language, and respect for the full picture of a household.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>04 / 09</span>
      </div>
    </div>
  );
}
