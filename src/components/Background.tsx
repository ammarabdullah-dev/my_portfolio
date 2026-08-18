export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-50 animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 220 / 0.55), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.20 260 / 0.55), transparent 70%)" }}
      />
    </div>
  );
}
