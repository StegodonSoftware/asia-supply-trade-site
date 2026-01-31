import Image from "next/image";
import DiagonalWaveBackground from "../DiagonalWaveBackground";
import HeroSection from "../HeroSection";
import ComingSoon from "../page";

const products = [
  { name: "Oats", description: "Food-grade, feed-grade & pet food oats" },
  { name: "Wheat", description: "Milling, food ingredient & feed wheat" },
  { name: "Barley", description: "Feed, malting-adjacent & specialty barley" },
  { name: "Pulses", description: "Whole & split peas for food and feed" },
  { name: "Canola", description: "Canola seed, oil & meal" },
];

const segments = [
  { name: "Food Grade", icon: "🌾" },
  { name: "Animal Feed", icon: "🐄" },
  { name: "Pet Food", icon: "🐕" },
];

const connectApps = [
  { name: "Whatsapp", icon: "/logos/whatsapp-logo.png", link: "" },
  { name: "Line", icon: "/logos/line-logo.png", link: "" },
  { name: "Viber", icon: "/logos/viber-logo.png", link: "" },
  { name: "Zalo", icon: "/logos/zalo-logo.png", link: "" },
  { name: "KakaoTalk", icon: "/logos/kakaotalk-logo.png", link: "" },
];

const year = new Date().getFullYear();

export default function Home() {
  // return <ComingSoon />;
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <DiagonalWaveBackground />
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white border-b border-[var(--charcoal)]/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/new-logo.png"
                alt="Asia Supply & Trade"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-semibold text-[var(--charcoal)]">
                Asia Supply & Trade
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#products"
                className="text-[var(--charcoal)] hover:text-[var(--aqua)]"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-[var(--charcoal)] hover:text-[var(--aqua)]"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[var(--charcoal)] hover:text-[var(--aqua)]"
              >
                Contact
              </a>
              <a
                href="#suppliers"
                className="px-4 py-2 bg-[var(--aqua)] text-white rounded hover:bg-[var(--aqua)]/90"
              >
                For Suppliers
              </a>
            </nav>
          </div>
        </header>
        <HeroSection />
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-br from-[var(--charcoal)] to-[var(--charcoal)]/90 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-[var(--gold)] font-medium mb-2">
                Canadian Agricultural Commodities
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Connecting Canada&apos;s Finest with Asia&apos;s Markets
              </h1>
              <p className="text-lg text-white/80 mb-8">
                With over 10 years of experience across ASEAN, Oceania, Japan,
                and South Korea, we supply premium Canadian oats, wheat, barley,
                pulses, and canola to food manufacturers, feed mills, and pet
                food companies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[var(--aqua)] text-white rounded font-medium hover:bg-[var(--aqua)]/90"
                >
                  Request a Quote
                </a>
                <a
                  href="#products"
                  className="px-6 py-3 border border-white/30 text-white rounded font-medium hover:bg-white/10"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* Segments */}
        <section className="relative py-12 px-4 bg-white/85">
          {/* <div className="absolute inset-0 bg-white/85 -skew-y-1 origin-top" /> */}
          <div className="relative max-w-6xl mx-auto">
            {/* <div className="flex flex-wrap justify-center gap-8"> */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {segments.map((s) => (
                <div key={s.name} className="text-center">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-2 text-center">
              Our Products
            </h2>
            <p className="text-[var(--charcoal)]/70 text-center mb-10">
              Premium Canadian commodities for food, feed, and pet food markets
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white p-6 rounded-lg border border-[var(--charcoal)]/10 hover:border-[var(--aqua)]/50 hover:shadow-md transition-all"
                >
                  <div className="w-full h-32 bg-[var(--cream)] rounded mb-4 flex items-center justify-center">
                    <span className="text-4xl text-[var(--gold)]">
                      <Image
                        src="/logo.jpg"
                        alt="Asia Supply & Trade"
                        width={150}
                        height={150}
                        className="rounded-full"
                      />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                    Canadian {product.name}
                  </h3>
                  <p className="text-[var(--charcoal)]/70 text-sm mb-4">
                    {product.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-[var(--aqua)] text-sm font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 px-4">
          <div className="absolute inset-0 bg-white/85 -skew-y-1 origin-top" />
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[var(--aqua)] font-medium mb-2">About Us</p>
                <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                  10+ Years of Asian Market Experience
                </h2>
                <p className="text-[var(--charcoal)]/80 mb-4">
                  Founded on over a decade of hands-on experience in Asian
                  agriculture and food sectors, Asia Supply Trade connects
                  high-quality Canadian agricultural commodities with trusted
                  buyers across Asia.
                </p>
                <p className="text-[var(--charcoal)]/80 mb-6">
                  We work directly with food manufacturers, feed mills, pet food
                  producers, distributors, and trading companies—providing
                  reliable supply backed by deep regional expertise.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-[var(--charcoal)]">
                    ASEAN
                  </span>
                  <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-[var(--charcoal)]">
                    Japan
                  </span>
                  <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-[var(--charcoal)]">
                    South Korea
                  </span>
                  <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-[var(--charcoal)]">
                    Oceania
                  </span>
                </div>
              </div>
              <div className="bg-[var(--cream)] rounded-lg p-8">
                <p className="text-[var(--gold)] font-medium mb-2">
                  Our Approach
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--aqua)] mt-1">✓</span>
                    <span className="text-[var(--charcoal)]">
                      Direct Canadian sources—no intermediaries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--aqua)] mt-1">✓</span>
                    <span className="text-[var(--charcoal)]">
                      Established importer & distributor network
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--aqua)] mt-1">✓</span>
                    <span className="text-[var(--charcoal)]">
                      Long-term relationship focus
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--aqua)] mt-1">✓</span>
                    <span className="text-[var(--charcoal)]">
                      Quality, traceability & reliability
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier CTA */}
        <section id="suppliers" className="py-16 px-4 bg-[var(--aqua)]/85">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Canadian Suppliers</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Are you a Canadian producer, farmer, or exporter? We&apos;re
              looking for direct sources to connect with our established network
              of Asian buyers.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-[var(--aqua)] rounded font-medium hover:bg-white/90"
            >
              Partner With Us
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-16 px-4">
          <div className="absolute inset-0 bg-white/85 -skew-y-1 origin-top" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-2">
              Get in Touch
            </h2>
            <p className="text-[var(--charcoal)]/70 mb-8">
              Ready to discuss your supply needs? Contact us through your
              preferred channel.
            </p>

            <div className="bg-[var(--cream)] rounded-lg p-8 mb-8">
              <p className="text-[var(--charcoal)] font-medium mb-4">
                Messaging Apps
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {connectApps.map((app) => (
                  <a
                    href={app.link}
                    key={app.name}
                    className="group
                      flex items-center gap-4
                      p-4 rounded-lg
                      bg-white/70
                      hover:bg-white
                      border border-[var(--charcoal)]/10
                      hover:border-[var(--aqua)]/40
                      transition
                    "
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-[var(--cream)]">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="text-[var(--charcoal)] font-medium group-hover:text-[var(--aqua)] transition">
                      {app.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2 text-[var(--charcoal)]">
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+66927644981"
                  aria-label="Call Asia Supply &amp; Trade"
                >
                  +66&nbsp;92&nbsp;764&nbsp;4981
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:contact@asiasupplytrade.com?subject=Supply%20Inquiry&body=Hello%20Asia%20Supply%20%26%20Trade,">
                  contact@asiasupplytrade.com
                </a>
              </p>
              <p className="text-sm text-[var(--charcoal)]/60">
                Based in Thailand, sourcing from Canada
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--charcoal)] text-white/70 py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/new-logo.jpg"
                alt="Asia Supply & Trade"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-white font-medium">
                Asia Supply & Trade
              </span>
            </div>
            <p className="text-sm">
              © {year} Asia Supply & Trade. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
