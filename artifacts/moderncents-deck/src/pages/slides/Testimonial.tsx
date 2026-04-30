import Logo from "../../components/Logo";

export default function Testimonial() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[8vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>08 — In their words</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[4vh] max-w-[80vw]">
        <span className="font-display text-[10vw] leading-[0.7] text-accent/30">&ldquo;</span>
        <p className="font-display italic font-normal text-[2.6vw] leading-[1.25] text-primary text-pretty -mt-[5vh]">
          Andrea took the time to understand our cross-border situation in a way no one else had. The plan she built finally connects our Canadian and US accounts into one picture — and made decisions we&rsquo;d been putting off for years feel obvious.
        </p>
        <div className="h-[1px] w-[10vw] bg-accent" />
        <div className="flex flex-col gap-[0.6vh]">
          <span className="font-body font-medium text-[1.55vw] text-primary">Laura — Toronto, ON</span>
          <span className="font-body font-light text-[1.25vw] text-muted tracking-wide">
            Cross-Border Comprehensive Client &middot; worked with Andrea Thompson, CFP®
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>09 / 10</span>
      </div>
    </div>
  );
}
