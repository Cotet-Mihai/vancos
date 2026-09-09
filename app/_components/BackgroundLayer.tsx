export function BackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 25% 15%, #1c2a1e 0%, #0e0e0c 65%)",
        }}
      />
      <div
        className="absolute top-1/3 left-2/3 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[120px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(62,155,92,0.25) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="vancosGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#vancosGrain)" />
        </svg>
      </div>
    </div>
  );
}
