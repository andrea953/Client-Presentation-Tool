import Logo from "../../components/Logo";

export default function Engagements() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>05 — Other ways we work together</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[4vh]">
        <h2 className="font-display font-medium text-[3.6vw] leading-[1.05] tracking-tight text-primary text-balance max-w-[58vw]">
          Right-sized engagements when comprehensive isn&rsquo;t the right fit.
        </h2>

        <div className="grid grid-cols-2 gap-[3vw]">
          <div className="flex flex-col gap-[1.6vh] bg-white border border-border p-[2.6vw] h-[38vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-accent">Hourly</span>
            <span className="font-display text-[2.2vw] leading-tight text-primary">Ad-hoc Consultations</span>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty mt-[0.5vh]">
              A focused conversation on a specific question — when a second opinion is what you need, without committing to an ongoing engagement.
            </p>
          </div>

          <div className="flex flex-col gap-[1.6vh] bg-white border border-border p-[2.6vw] h-[38vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-accent">Pre &amp; post</span>
            <span className="font-display text-[2.2vw] leading-tight text-primary">Retirement Planning</span>
            <p className="font-body font-light text-[1.5vw] leading-snug text-muted text-pretty mt-[0.5vh]">
              Income, drawdowns, government benefits, and tax — sequenced for the next chapter so the numbers and the lifestyle line up.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>06 / 09</span>
      </div>
    </div>
  );
}
