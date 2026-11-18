import Logo from "../../components/Logo";

export default function FeesAndOnboarding() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>07 &mdash; What to expect</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[4vh]">
        <div className="grid grid-cols-12 gap-[3vw] items-end">
          <div className="col-span-7 flex flex-col gap-[1.5vh]">
            <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
              What to expect
            </div>
            <h2 className="font-display font-medium text-[3.6vw] leading-[1.04] tracking-tight text-primary text-balance">
              Start with discovery. Let the plan take shape around you.
            </h2>
          </div>
          <div className="col-span-5">
            <p className="font-body font-light text-[1.35vw] leading-snug text-muted text-pretty">
              We begin by understanding your situation, then complete a Financial Audit. Priorities and pace are tailored—not a fixed meeting calendar.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full bg-border" />

        <div className="grid grid-cols-4 gap-[2vw]">
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Begin</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Discovery</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Explore your situation, questions, and fit.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Understand</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Financial Audit</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Build a clear picture of your finances and priorities.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Plan</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Priorities &amp; roadmap</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Shape a live shared action plan for what matters now.
            </span>
          </div>
          <div className="flex flex-col gap-[1vh] border-t-2 border-accent pt-[1.8vh]">
            <span className="font-display text-[1.15vw] tracking-[0.22em] uppercase text-muted">Ongoing</span>
            <span className="font-display text-[1.9vw] leading-tight text-primary">Planning partnership</span>
            <span className="font-body font-light text-[1.2vw] leading-snug text-muted text-pretty">
              Implementation support, professional coordination, and help between conversations.
            </span>
          </div>
        </div>

        <p className="font-body font-light text-[1.05vw] leading-snug text-muted italic">
          Priorities and pace evolve with your circumstances. See the Pricing slide for current fees.
        </p>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>08 / 9</span>
      </div>
    </div>
  );
}
