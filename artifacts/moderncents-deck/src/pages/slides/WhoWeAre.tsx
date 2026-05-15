import Logo from "../../components/Logo";

export default function WhoWeAre() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>01 — Who we are</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="grid grid-cols-12 gap-[3vw] items-end mt-[2vh]">
        <div className="col-span-7 flex flex-col gap-[3vh]">
          <h2 className="font-display font-medium text-[4.6vw] leading-[1.02] tracking-tight text-primary text-balance">
            A women-led, advice-only planning firm.
          </h2>
          <div className="h-[1px] w-[10vw] bg-accent" />
          <p className="font-body font-light text-[1.6vw] leading-relaxed text-muted text-pretty max-w-[40vw]">
            Modern Cents serves Canadian and cross-border households with CFP®-led planning grounded in real life — not product sales, not commissions, not noise.
          </p>
        </div>

        <div className="col-span-5 flex flex-col gap-[2.5vh] border-l border-border pl-[2.5vw]">
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-display text-[3.2vw] leading-none text-accent">Fee-only</span>
            <span className="font-body text-[1.15vw] text-muted tracking-wide uppercase">No commissions, no products</span>
          </div>
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-display text-[3.2vw] leading-none text-accent">CFP®</span>
            <span className="font-body text-[1.15vw] text-muted tracking-wide uppercase">Certified Financial Planner</span>
          </div>
          <div className="flex flex-col gap-[0.4vh]">
            <span className="font-display text-[3.2vw] leading-none text-accent">Cross-border</span>
            <span className="font-body text-[1.15vw] text-muted tracking-wide uppercase">Canada &amp; United States</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>02 / 10</span>
      </div>
    </div>
  );
}
