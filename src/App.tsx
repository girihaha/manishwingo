import React, { useState, useEffect } from 'react';
import { Gift, Users, Trophy, Bell, Home, Gift as GiftIcon, Users as CommunityIcon, Siren as Fire, GamepadIcon, Sparkles, Crown, Star } from 'lucide-react';

const platforms = [
  {
    id: 1,
    name: "DMWIN",
    icon: <GamepadIcon className="w-16 h-16 text-white/90" />,
    link: "https://www.dmwin1.com/#/register?invitationCode=763831339391",
    badge: "🔥 TOP RATED",
    description: "Best Gaming Experience",
    features: ["Daily Rewards", "24/7 Support", "Instant Payouts"]
  },
  {
    id: 2,
    name: "91club",
    icon: <Crown className="w-16 h-16 text-white/90" />,
    link: "https://www.hjIndia.com/#/register?invitationCode=3542786305",
    badge: "💎 EXCLUSIVE",
    description: "Massive Rewards Daily",
    features: ["VIP Benefits", "Special Events", "Huge Bonuses"]
  },
  {
    id: 3,
    name: "Daman Club",
    icon: <Star className="w-16 h-16 text-white/90" />,
    link: "https://damanclub.bet/#/register?invitationCode=ER5DY11003",
    badge: "⚡ HOT",
    description: "Premium Gaming Hub",
    features: ["Elite Games", "Fast Withdrawals", "Pro Support"]
  }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Trophy, label: 'Rewards', href: 'https://t.me/+RY8FWRfsUAk3MTk1' },
    { icon: Bell, label: 'Updates', href: 'https://t.me/best_colour_games' },
    { icon: Users, label: 'Community', href: 'https://t.me/best_colour_games' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-white p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group flex items-center space-x-2 text-white hover:text-white/80 transition-all duration-300"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden py-4 space-y-4">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center space-x-2 text-white hover:text-white/80 transition-all duration-300 px-4 py-2"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "🎮 Join Now for Exclusive Daily Rewards!",
    "🎁 New Members Get Special Bonus!",
    "🏆 Win Big with Our Top Platforms!",
    "💎 VIP Benefits Waiting for You!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24 bg-gradient-to-b from-[#111] to-black">
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-[0.02]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="animate-pulse-slow">
            <GamepadIcon className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="relative z-10 text-center space-y-8 sm:space-y-12 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter animate-title">
            <span className="block mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              BEST GAMING
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#ff3333] to-[#ff4444]">
              PLATFORMS
            </span>
          </h1>
          <div className="h-20 sm:h-24 flex items-center justify-center overflow-hidden">
            <p className="text-2xl sm:text-4xl font-bold text-white/90 animate-float">
              {slides[currentSlide]}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <a
            href="https://t.me/+RY8FWRfsUAk3MTk1"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-xl sm:text-2xl animate-bounce-slow"
          >
            Daily Gift Code 🎁
          </a>
          <a
            href="https://t.me/best_colour_games"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary px-6 py-4 sm:px-10 sm:py-5 rounded-xl text-xl sm:text-2xl animate-bounce-slow"
          >
            Join Predictions 🎯
          </a>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ platform }: { platform: typeof platforms[0] }) {
  return (
    <div className="platform-card relative group h-full">
      <span className="badge text-sm sm:text-base">{platform.badge}</span>
      <div className="platform-border h-full">
        <div className="relative bg-[#111] p-6 sm:p-8 rounded-xl h-full flex flex-col">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="relative w-24 h-24 flex items-center justify-center animate-float">
              {platform.icon}
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-black mb-2 text-white">
                {platform.name}
              </h3>
              <p className="text-lg sm:text-xl text-white/80">{platform.description}</p>
            </div>
          </div>
          <div className="space-y-4 flex-grow">
            <ul className="space-y-3">
              {platform.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-white/90">
                  <Fire className="w-5 h-5 text-[#ff3333]" />
                  <span className="text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-auto block w-full py-4 text-center rounded-xl text-xl"
            >
              Play Now 🎮
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsTickerBanner() {
  return (
    <div className="relative overflow-hidden py-4 sm:py-6 bg-[#111] border-y border-white/10">
      <div className="ticker whitespace-nowrap font-bold text-lg sm:text-2xl text-white/90">
        🎁 Daily Gift Codes Available! • 🎯 Expert Predictions • 💰 Massive Rewards • 🎮 Elite Gaming Community • 
        ⚡ Instant Payouts • 💎 VIP Benefits • 🏆 Weekly Tournaments • 🚀 Join Now!
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <NewsTickerBanner />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {platforms.map(platform => (
              <PlatformCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-xl sm:text-2xl font-bold text-white/90">
            © 2024 Created with 💖 by Manish
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;