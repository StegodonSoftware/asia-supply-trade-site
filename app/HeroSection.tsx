export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Dark canvas */}
      <div className="absolute inset-0 bg-[#1f2422]/85" />

      {/* Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2f2c]/85 via-[#1f2422]/85 to-[#161a18]/85" />

      {/* Diagonal light wash */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.025]" />

      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[var(--cream)]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Copy */}
        <div>
          <p className="text-[var(--gold)] font-medium tracking-wide mb-3">
            Canadian Agricultural Commodities
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Connecting <br />
            Canada's Harvest
            <br />
            with Asia's Markets
          </h1>

          <p className="text-lg text-white/80 max-w-xl mb-8">
            Trusted sourcing of oats, wheat, barley, pulses, and canola —
            supplied directly from Canada to food, feed, and pet food buyers
            across Asia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="
            px-7 py-3
            bg-[var(--aqua)]
            text-white font-medium
            rounded-md
            hover:bg-[var(--aqua)]/90
            transition
          "
            >
              Request a Quote
            </a>

            <a
              href="#products"
              className="
            px-7 py-3
            border border-white/30
            text-white font-medium
            rounded-md
            hover:bg-white/10
            transition
          "
            >
              View Products
            </a>
          </div>
        </div>

        {/* Right: Visual anchor */}
        <div className="relative hidden md:block">
          <div
            className="
          absolute inset-0
          rounded-2xl
          bg-gradient-to-br
          from-[var(--aqua)]/20
          to-transparent
          blur-2xl
        "
          />

          <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5">
            <img
              src="/oatfield.png"
              alt="Canada to Asia trade routes"
              className="w-full h-auto opacity-90"
              //   style="animation: route-pulse 6s linear infinite;"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--cream)] to-transparent" /> */}
    </section>
  );
}
