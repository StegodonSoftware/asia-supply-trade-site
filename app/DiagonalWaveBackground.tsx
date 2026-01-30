export default function DiagonalWaveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg
        className="
          absolute
          top-1/2 left-1/2
          w-[260vw] h-[260vh]
          opacity-[0.12]
        "
        style={{
          animation: "wave-drift 40s ease-in-out infinite",
          transform: "translate(-50%, -50%) rotate(-18deg)",
        }}
        viewBox="0 0 3000 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Back layer */}
        <path
          d="M-500 300
             C 500 100, 1200 600, 2200 400
             S 3800 200, 4600 500"
          stroke="var(--aqua)"
          strokeWidth="260"
          strokeLinecap="round"
        />

        {/* Middle layer */}
        <path
          d="M-500 500
             C 700 300, 1400 800, 2400 600
             S 3800 400, 4600 700"
          stroke="var(--gold)"
          strokeWidth="180"
          strokeLinecap="round"
        />

        {/* Front layer */}
        <path
          d="M-500 700
             C 900 500, 1600 1000, 2600 800
             S 3800 600, 4600 900"
          stroke="var(--aqua)"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
