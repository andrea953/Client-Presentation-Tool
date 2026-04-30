import lifestyleAdaptive from "@assets/moderncents/lifestyle-adaptive.jpg";
import Logo from "../../components/Logo";

export default function Comprehensive() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex">
      <div className="w-[44%] h-full relative overflow-hidden">
        <img
          src={lifestyleAdaptive}
          crossOrigin="anonymous"
          alt="A planner working through a household financial review"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-[6vh] left-[3vw] flex items-center gap-[0.8vw] text-bg">
          <div className="w-[1.2vw] h-[1.2vw] rounded-full bg-accent" />
          <span className="font-body text-[0.95vw] tracking-[0.32em] uppercase">Flagship engagement</span>
        </div>
      </div>

      <div className="w-[56%] h-full flex flex-col justify-between px-[5vw] py-[7vh]">
        <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
          <span>04 — How we work</span>
          <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
        </div>

        <div className="flex flex-col gap-[3vh]">
          <div className="font-body text-[1.05vw] tracking-[0.3em] uppercase text-accent">
            Comprehensive Planning
          </div>
          <h2 className="font-display font-medium text-[4.4vw] leading-[1.02] tracking-tight text-primary text-balance">
            One ongoing relationship across every part of your finances.
          </h2>
          <div className="h-[1px] w-[10vw] bg-accent" />

          <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[1.6vh] mt-[1vh] max-w-[40vw]">
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Cash flow &amp; tax</span>
            </div>
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Investments &amp; risk</span>
            </div>
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Retirement &amp; pensions</span>
            </div>
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Estate &amp; insurance</span>
            </div>
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Cross-border coordination</span>
            </div>
            <div className="flex items-baseline gap-[0.8vw]">
              <span className="text-accent font-display text-[1.5vw] leading-none">→</span>
              <span className="font-body text-[1.5vw] text-primary">Ongoing reviews</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
          <span>moderncents.ca</span>
          <span>05 / 09</span>
        </div>
      </div>
    </div>
  );
}
