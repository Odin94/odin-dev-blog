export function WavyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* soft radial warm glow, top-left */}
      <div
        className="absolute -left-40 -top-40 h-[80vh] w-[80vh] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle at center, var(--color-wave-2), transparent 65%)",
        }}
      />
      {/* soft radial glow, bottom-right */}
      <div
        className="absolute -right-40 top-1/3 h-[70vh] w-[70vh] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle at center, var(--color-stamp-soft), transparent 65%)",
        }}
      />

      {/* Layered wave curves */}
      <svg
        className="absolute inset-x-0 top-0 h-[85vh] w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-wave-1)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--color-wave-1)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-wave-2)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--color-wave-2)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="wave-grad-3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-wave-3)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-wave-3)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0,320 C240,420 420,180 720,240 C1020,300 1200,460 1440,360 L1440,0 L0,0 Z"
          fill="url(#wave-grad-1)"
        />
        <path
          d="M0,220 C300,320 540,80 840,180 C1140,280 1260,340 1440,240 L1440,0 L0,0 Z"
          fill="url(#wave-grad-2)"
        />
        <path
          d="M0,120 C260,220 520,20 780,90 C1080,170 1240,220 1440,140 L1440,0 L0,0 Z"
          fill="url(#wave-grad-3)"
        />
      </svg>

      {/* Bottom counter-waves */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[55vh] w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-grad-b1" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="var(--color-wave-2)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-wave-2)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-b2" x1="0" x2="0" y1="1" y2="0">
            <stop offset="0%" stopColor="var(--color-wave-3)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-wave-3)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,420 C260,300 520,540 820,420 C1120,300 1260,360 1440,320 L1440,600 L0,600 Z"
          fill="url(#wave-grad-b1)"
        />
        <path
          d="M0,520 C300,440 600,600 900,500 C1180,400 1300,460 1440,440 L1440,600 L0,600 Z"
          fill="url(#wave-grad-b2)"
        />
      </svg>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='260' height='260'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.3  0 0 0 0 0.24  0 0 0 0 0.16  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
