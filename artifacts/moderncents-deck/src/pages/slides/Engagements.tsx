import Logo from "../../components/Logo";

export default function Engagements() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>05 — Other ways we work together</span>
        <Logo className="h-[2.4vw] w-[2.4vw] rounded-sm object-cover" />
      </div>

      <div className="flex flex-col gap-[5vh]">
        <h2 className="font-display font-medium text-[3.6vw] leading-[1.05] tracking-tight text-primary text-balance max-w-[58vw]">
          One focused option beyond the ongoing partnership.
        </h2>

        <div className="grid grid-cols-12 items-center gap-[3vw] border-y border-border py-[5vh]">
          <div className="col-span-3">
            <span className="font-display text-[8vw] leading-none tracking-tight text-accent">01</span>
          </div>
          <div className="col-span-9 flex flex-col gap-[1.6vh]">
            <span className="font-body text-[0.95vw] tracking-[0.3em] uppercase text-accent">One focused hour</span>
            <span className="font-display text-[2.8vw] leading-tight text-primary">Ad-hoc Consultations</span>
            <p className="font-body font-light text-[1.7vw] leading-snug text-muted text-pretty mt-[0.5vh] max-w-[58vw]">
              Bring your questions and documents. Fee is paid in advance; no pre-meeting analysis and no obligation to continue.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>06 / 10</span>
      </div>
    </div>
  );
}
