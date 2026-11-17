import Logo from "../../components/Logo";

export default function CrossBorder() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>07 — Cross-border specialty</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="grid grid-cols-12 gap-[3vw] items-start">
        <div className="col-span-5 flex flex-col gap-[3vh]">
          <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
            Canada &middot; United States
          </div>
          <h2 className="font-display font-medium text-[4vw] leading-[1.02] tracking-tight text-primary text-balance">
            Cross-border expertise within your ongoing plan.
          </h2>
          <div className="h-[1px] w-[8vw] bg-accent" />
          <p className="font-body font-light text-[1.45vw] leading-relaxed text-muted text-pretty">
            For Canadian residents with U.S. ties, assets, or plans to move. Cross-border work is integrated into the ongoing partnership, not a standalone engagement.
          </p>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-[2.5vw]">
          <div className="flex flex-col gap-[1vh] border-t border-border pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-primary">Retirement accounts</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              Coordinate Canadian and U.S. accounts, pensions, and retirement decisions.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-border pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-primary">Government benefits</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              Consider CPP, OAS, and U.S. Social Security timing.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-border pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-primary">Account transitions</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              Plan for a move to or from the U.S. while you remain a Canadian resident.
            </p>
          </div>
          <div className="flex flex-col gap-[1vh] border-t border-border pt-[1.8vh]">
            <span className="font-display text-[1.9vw] leading-tight text-primary">Investing across borders</span>
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              Coordinate with cross-border CPAs and estate lawyers; we do not prepare tax returns or draft legal documents.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>08 / 10</span>
      </div>
    </div>
  );
}
