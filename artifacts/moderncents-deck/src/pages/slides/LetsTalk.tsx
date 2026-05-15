import Logo from "../../components/Logo";

export default function LetsTalk() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>10 — Let&rsquo;s talk</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="grid grid-cols-12 gap-[3vw] items-end">
        <div className="col-span-8 flex flex-col gap-[3vh]">
          <div className="font-body text-[1.1vw] tracking-[0.3em] uppercase text-accent">
            Next step — complimentary
          </div>
          <h2 className="font-display font-medium text-[6vw] leading-[0.98] tracking-tight text-primary text-balance">
            A 30-minute conversation, no obligation.
          </h2>
          <div className="h-[1px] w-[14vw] bg-accent" />
          <p className="font-body font-light text-[1.7vw] leading-snug text-muted text-pretty max-w-[52vw]">
            Tell us where you are, what you&rsquo;re weighing, and what a good outcome looks like. We&rsquo;ll tell you honestly whether Modern Cents is the right fit.
          </p>
        </div>

        <div className="col-span-4 flex flex-col gap-[2.5vh] border-l border-border pl-[2.5vw]">
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-muted">Book a call</span>
            <span className="font-display text-[2vw] leading-tight text-primary">moderncents.ca/contact</span>
          </div>
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-muted">Online</span>
            <span className="font-display text-[2vw] leading-tight text-primary">moderncents.ca</span>
          </div>
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-muted">Based in</span>
            <span className="font-display text-[2vw] leading-tight text-primary">Toronto, Canada</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <div className="flex items-center gap-[0.8vw]">
          <Logo className="h-[1.8vw] w-[1.8vw] rounded-sm object-cover" />
          <span className="text-primary font-medium tracking-[0.32em] uppercase">Modern Cents</span>
        </div>
        <span>10 / 10</span>
      </div>
    </div>
  );
}
