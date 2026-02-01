export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfcfc] flex items-center justify-center">
      {/* Diagonal background */}
      <div
        aria-hidden
        className="
          absolute -inset-[50%]
          rotate-[-8deg]
          bg-[linear-gradient(135deg,
            #dc143c_0%,
            #dc143c_7%,
            transparent_7%,
            transparent_20%,
            #ff7722_20%,
            #ff7722_27%,
            transparent_27%,
            transparent_42%,
            #2a2929_42%,
            #2a2929_48%,
            transparent_48%,
            transparent_100%
          )]
        "
      />

      {/* Content */}
      <section className="relative z-10 w-[90%] max-w-3xl rounded-xl bg-white px-10 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        {/* Video */}
        <div className="aspect-video w-full  rounded-lg bg-black">
          {/* <video
            src="/video/AST-animated.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          /> */}
          <img
            src="/AST Animated Logo.gif"
            alt="Asia Supply & Trade"
            className="w-full h-auto"
          />
        </div>

        {/* Message */}
        <p className="mt-8 text-lg leading-relaxed text-[#2a2929]">
          We're building something focused, powerful, and worth the wait.
          <span className="mt-2 block font-semibold">
            Full site launching soon.
          </span>
        </p>
      </section>
    </main>
  );
}
