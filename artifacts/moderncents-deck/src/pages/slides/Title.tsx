import lifestyleHome from "@assets/moderncents/lifestyle-home.jpg";
import Logo from "../../components/Logo";

export default function Title() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex">
      <div className="w-[54%] h-full flex flex-col justify-between px-[5.5vw] py-[6.5vh]">
        <div className="flex items-center gap-[1.2vw]">
          <Logo className="h-[3.6vw] w-[3.6vw] rounded-md object-cover" />
          <div className="font-body text-[1.05vw] tracking-[0.32em] uppercase text-primary">
            Modern Cents
          </div>
        </div>

        <div className="flex flex-col gap-[4vh]">
          <h1 className="font-display font-medium text-[5vw] leading-[1.08] tracking-tight text-primary text-balance">
            Financial planning for life as it actually unfolds.
          </h1>
          <div className="h-[1px] w-[16vw] bg-accent" />
          <p className="font-body font-light text-[1.5vw] leading-relaxed text-muted max-w-[36vw] text-pretty">
            Independent, fee-only advice for households navigating the realities of work, family, and cross-border life.
          </p>
        </div>

        <div className="flex items-end justify-between gap-[2vw] text-[0.9vw] text-muted font-body">
          <span className="uppercase tracking-[0.24em] whitespace-nowrap">Independent &middot; Fee-only &middot; Cross-border</span>
          <span className="text-right tracking-wide">moderncents.ca</span>
        </div>
      </div>

      <div className="w-[48%] h-full relative overflow-hidden">
        <img
          src={lifestyleHome}
          crossOrigin="anonymous"
          alt="A family enjoying time together at home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg/40" />
      </div>
    </div>
  );
}
