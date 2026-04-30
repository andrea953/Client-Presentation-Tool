export default function Philosophy() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-bg text-primary font-body flex flex-col justify-between px-[7vw] py-[7vh]">
      <div className="flex items-center justify-between text-[1vw] tracking-[0.32em] uppercase text-muted">
        <span>02 — Our philosophy</span>
        <span className="text-primary">Modern Cents</span>
      </div>

      <div className="flex flex-col gap-[4vh] max-w-[78vw]">
        <div className="font-body text-[1.1vw] tracking-[0.3em] uppercase text-accent">
          What we believe
        </div>
        <h2 className="font-display font-medium text-[5.4vw] leading-[1.02] tracking-tight text-primary text-balance">
          Plans should bend with your life — not the other way around.
        </h2>
        <div className="h-[1px] w-[14vw] bg-accent" />
        <p className="font-body font-light text-[1.7vw] leading-relaxed text-muted text-pretty max-w-[62vw]">
          Career changes, growing families, moves across borders, ageing parents, sabbaticals — the plan adapts. We build advice around the life you are actually living, then revisit it as that life keeps moving.
        </p>
      </div>

      <div className="flex items-center justify-between text-[0.9vw] text-muted font-body tracking-wide">
        <span>moderncents.ca</span>
        <span>03 / 10</span>
      </div>
    </div>
  );
}
