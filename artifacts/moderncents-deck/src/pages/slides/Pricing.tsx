import Logo from "../../components/Logo";

export default function Pricing() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>06 — Pricing</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[3.5vh]">
        <div className="grid grid-cols-12 gap-[3vw] items-end">
          <div className="col-span-7 flex flex-col gap-[1.5vh]">
            <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
              Transparent &middot; advice-only
            </div>
            <h2 className="font-display font-medium text-[3.6vw] leading-[1.04] tracking-tight text-primary text-balance">
              Flat fees, agreed in writing before you sign on.
            </h2>
          </div>
          <div className="col-span-5">
            <p className="font-body font-light text-[1.4vw] leading-snug text-muted text-pretty">
              No assets-under-management charges. No product commissions. No referral kickbacks. You pay us for advice — that&rsquo;s the entire business.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-border" />

        <div className="grid grid-cols-[1.25fr_1.15fr_1.6fr] gap-x-[2.5vw] text-[0.9vw] tracking-[0.28em] uppercase text-muted">
          <span>Engagement</span>
          <span>How it&rsquo;s priced</span>
          <span className="text-right">Starting fees</span>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-[1.25fr_1.15fr_1.6fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.6vh]">
            <div className="flex flex-col gap-[0.3vh]">
              <span className="font-display text-[1.85vw] leading-tight text-primary">Ongoing Planning Partnership</span>
              <span className="font-body text-[0.95vw] tracking-[0.22em] uppercase text-accent">Flagship</span>
            </div>
            <span className="font-body font-light text-[1.35vw] text-muted leading-snug">
              One-time plan development fee + monthly retainer from month two
            </span>
            <div className="flex flex-col gap-[0.4vh] text-right">
              <span className="font-display text-[1.2vw] text-primary leading-tight">Domestic &middot; individual $3,000 &middot; couple $4,500</span>
              <span className="font-body text-[1.2vw] text-muted leading-snug">
                Cross-border &middot; individual $4,500 &middot; couple $6,000
              </span>
              <span className="font-body text-[1.2vw] text-muted leading-snug">
                Retainer &middot; $199/mo individual &middot; $250/mo couple
              </span>
              <span className="font-body text-[1.2vw] text-muted leading-snug">
                $330/mo cross-border or corporate complexity
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1.25fr_1.15fr_1.6fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.6vh]">
            <span className="font-display text-[1.85vw] leading-tight text-primary">Ad-hoc Consultations</span>
            <span className="font-body font-light text-[1.35vw] text-muted leading-snug">
              One focused hour; flat fee paid in advance
            </span>
            <div className="flex flex-col gap-[0.2vh] text-right">
              <span className="font-display text-[1.55vw] text-primary leading-tight">$375 / hour domestic</span>
              <span className="font-body text-[1.2vw] text-muted">$575 / hour cross-border</span>
            </div>
          </div>

        </div>

        <p className="font-body font-light text-[1.05vw] leading-snug text-muted italic">
          All fees in CAD. Cross-border planning is for Canadian residents; monthly retainers are subject to inflationary increases. Exact fee depends on scope.
        </p>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>07 / 10</span>
      </div>
    </div>
  );
}
