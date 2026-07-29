import Logo from "../../components/Logo";

export default function FeesAndOnboarding() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>08 &mdash; What to expect</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[4vh]">
        <div className="grid grid-cols-12 gap-[3vw] items-end">
          <div className="col-span-7 flex flex-col gap-[1.5vh]">
            <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
              What to expect
            </div>
            <h2 className="font-display font-medium text-[3.6vw] leading-[1.04] tracking-tight text-primary text-balance">
              A simple path from first call to kickoff.
            </h2>
          </div>
          <div className="col-span-5">
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              Every engagement is scoped and quoted in writing before you commit &mdash; no surprises, no pressure, and a clear timeline from the very first conversation.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-border" />

        <div className="grid grid-cols-4 gap-[2vw]">
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Step 01</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Discovery call</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              30 minutes, complimentary. We listen, you ask anything.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Step 02</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Written proposal</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Scope, deliverables, and a fixed fee &mdash; in writing, in 5 business days.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Step 03</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Engagement signed</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Letter of engagement, secure document portal, kickoff scheduled.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Step 04</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Kickoff &amp; first plan</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Working sessions begin, first plan delivered within 60 days.
            </span>
          </div>
        </div>

        <p className="font-body font-light text-[1.05vw] leading-snug text-muted italic">
          Fees for every engagement are detailed on the Pricing page &mdash; flat, transparent, and agreed before you sign on.
        </p>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>09 / 10</span>
      </div>
    </div>
  );
}
