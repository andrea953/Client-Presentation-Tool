import Logo from "../../components/Logo";

export default function FeesAndOnboarding() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[6vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>09 — Fees &amp; onboarding</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[2.6vh]">
        <div className="grid grid-cols-12 gap-[3vw] items-end">
          <div className="col-span-7 flex flex-col gap-[1.2vh]">
            <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
              What to expect
            </div>
            <h2 className="font-display font-medium text-[3.2vw] leading-[1.04] tracking-tight text-primary text-balance">
              Clear fees, and a simple path from first call to kickoff.
            </h2>
          </div>
          <div className="col-span-5">
            <p className="font-body font-light text-[1.3vw] leading-snug text-muted text-pretty">
              Every engagement is scoped and quoted in writing before you commit. The starting fees below are a guide &mdash; the final number depends on complexity.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-border" />

        <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] text-[0.85vw] tracking-[0.28em] uppercase text-muted">
          <span>Engagement</span>
          <span>How it&rsquo;s priced</span>
          <span className="text-right">Starting fees (CAD)</span>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.1vh]">
            <div className="flex flex-col">
              <span className="font-display text-[1.5vw] leading-tight text-primary">Comprehensive Planning</span>
              <span className="font-body text-[0.8vw] tracking-[0.22em] uppercase text-accent">Flagship</span>
            </div>
            <span className="font-body font-light text-[1.15vw] text-muted leading-snug">
              Onboarding fee + ongoing monthly retainer
            </span>
            <div className="flex flex-col text-right">
              <span className="font-display text-[1.3vw] text-primary leading-tight">From $3,000 onboarding</span>
              <span className="font-body text-[0.95vw] text-muted">+ $250–$330 / month</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.1vh]">
            <span className="font-display text-[1.5vw] leading-tight text-primary">Project-Based Planning</span>
            <span className="font-body font-light text-[1.15vw] text-muted leading-snug">
              One-time flat fee, scoped to a defined goal
            </span>
            <div className="flex flex-col text-right">
              <span className="font-display text-[1.3vw] text-primary leading-tight">From $2,500 / project</span>
              <span className="font-body text-[0.95vw] text-muted">Quoted after scoping call</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.1vh]">
            <span className="font-display text-[1.5vw] leading-tight text-primary">Ad-hoc Consultations</span>
            <span className="font-body font-light text-[1.15vw] text-muted leading-snug">
              Flat hourly fee, paid in advance
            </span>
            <div className="flex flex-col text-right">
              <span className="font-display text-[1.3vw] text-primary leading-tight">$375 / hr domestic</span>
              <span className="font-body text-[0.95vw] text-muted">$575 / hr cross-border</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] items-baseline border-t border-border py-[1.1vh]">
            <span className="font-display text-[1.5vw] leading-tight text-primary">Wealth Foundations</span>
            <span className="font-body font-light text-[1.15vw] text-muted leading-snug">
              Starter engagement for early-career households
            </span>
            <div className="flex flex-col text-right">
              <span className="font-display text-[1.3vw] text-primary leading-tight">From $1,800 flat</span>
              <span className="font-body text-[0.95vw] text-muted">Single deliverable</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.4fr_1.7fr_1fr] gap-x-[2.5vw] items-baseline border-t border-b border-border py-[1.1vh]">
            <span className="font-display text-[1.5vw] leading-tight text-primary">Retirement Planning</span>
            <span className="font-body font-light text-[1.15vw] text-muted leading-snug">
              Annual flat fee, product-independent
            </span>
            <div className="flex flex-col text-right">
              <span className="font-display text-[1.3vw] text-primary leading-tight">From $3,500 / yr individual</span>
              <span className="font-body text-[0.95vw] text-muted">From $4,500 / yr couple</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1.4vh] mt-[1vh]">
          <div className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-accent">
            How onboarding works
          </div>
          <div className="grid grid-cols-4 gap-[1.6vw]">
            <div className="flex flex-col gap-[0.6vh] border-t-2 border-accent pt-[1.2vh]">
              <span className="font-display text-[1.05vw] tracking-[0.22em] uppercase text-muted">Step 01</span>
              <span className="font-display text-[1.5vw] leading-tight text-primary">Discovery call</span>
              <span className="font-body font-light text-[1.05vw] leading-snug text-muted text-pretty">
                30 minutes, complimentary. We listen, you ask anything.
              </span>
            </div>
            <div className="flex flex-col gap-[0.6vh] border-t-2 border-accent pt-[1.2vh]">
              <span className="font-display text-[1.05vw] tracking-[0.22em] uppercase text-muted">Step 02</span>
              <span className="font-display text-[1.5vw] leading-tight text-primary">Written proposal</span>
              <span className="font-body font-light text-[1.05vw] leading-snug text-muted text-pretty">
                Scope, deliverables, and a fixed fee &mdash; in writing, in 5 business days.
              </span>
            </div>
            <div className="flex flex-col gap-[0.6vh] border-t-2 border-accent pt-[1.2vh]">
              <span className="font-display text-[1.05vw] tracking-[0.22em] uppercase text-muted">Step 03</span>
              <span className="font-display text-[1.5vw] leading-tight text-primary">Engagement signed</span>
              <span className="font-body font-light text-[1.05vw] leading-snug text-muted text-pretty">
                Letter of engagement, secure document portal, kickoff scheduled.
              </span>
            </div>
            <div className="flex flex-col gap-[0.6vh] border-t-2 border-accent pt-[1.2vh]">
              <span className="font-display text-[1.05vw] tracking-[0.22em] uppercase text-muted">Step 04</span>
              <span className="font-display text-[1.5vw] leading-tight text-primary">Kickoff &amp; first plan</span>
              <span className="font-body font-light text-[1.05vw] leading-snug text-muted text-pretty">
                Working sessions begin, first plan delivered within 60 days.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>09 / 10</span>
      </div>
    </div>
  );
}
