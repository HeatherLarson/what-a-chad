import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// THE ONE TRUE CHAD
const CHAD = {
  npub: 'npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8',
  name: 'chad',
  about: 'Boo.',
  picture: 'https://media.ditto.pub/4e8489e648325c36dd09b1ced74f1c49ba211f4d716eefd567a070a475611647.png',
  banner: 'https://media.ditto.pub/c4afd6e52e1edd983a911b463eba3ef87e864b9c53d4a49f41b8dd65f9815600.jpeg',
  website: 'https://chadwick.site',
  nip05: 'chad@chadwick.site',
  lud16: 'heartwarmingsea7713@getalby.com',
  projects: [
    { name: 'Treasures', url: 'https://treasures.to' },
    { name: 'Nostrdamus', url: 'https://nostrdamus.me' },
    { name: 'Surveil', url: 'https://surveil.cards' },
  ],
};

const CHAD_PHRASES = [
  'WHAT A CHAD!',
  'ABSOLUTE CHAD!',
  'PEAK CHAD ENERGY!',
  'THE CHADLIEST CHAD!',
  'CHAD OF CHADS!',
  'LEGENDARY CHAD!',
  'ULTRA CHAD MODE!',
  'MEGA CHAD VIBES!',
  'SUPREME CHAD!',
  'GIGACHAD STATUS!',
];

const FloatingChad = ({ delay, x, y }: { delay: number; x: number; y: number }) => {
  return (
    <div
      className="absolute text-primary font-display text-2xl md:text-4xl opacity-20 animate-float pointer-events-none select-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
      }}
    >
      WHAT A CHAD!
    </div>
  );
};

const MarqueeText = ({ reverse = false }: { reverse?: boolean }) => {
  const text = Array(10).fill('WHAT A CHAD! ★ ').join('');
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-chad-gold via-chad-pink to-chad-purple">
      <div className={`inline-block ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <span className="font-display text-2xl md:text-4xl text-background tracking-wider">
          {text}{text}
        </span>
      </div>
    </div>
  );
};

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setSparkles((prev) => [...prev.slice(-20), newSparkle]);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % CHAD_PHRASES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with Chad's banner */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CHAD.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <SparkleEffect />

      {/* Floating WHAT A CHAD! texts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingChad
          key={i}
          delay={i * 0.5}
          x={10 + (i * 12) % 80}
          y={10 + (i * 15) % 70}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-bounce-slow mb-8">
          <Badge className="text-lg md:text-xl px-6 py-2 bg-gradient-to-r from-chad-gold to-chad-pink text-background font-display tracking-wider">
            🏆 THE ONE TRUE CHAD 🏆
          </Badge>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-chad-gold via-chad-pink to-chad-purple rounded-full blur-3xl opacity-50 animate-pulse-glow" />
          <Avatar className="w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-primary animate-pulse-glow relative">
            <AvatarImage src={CHAD.picture} alt={CHAD.name} className="object-cover" />
            <AvatarFallback className="text-6xl bg-gradient-to-br from-chad-gold to-chad-pink">
              C
            </AvatarFallback>
          </Avatar>
        </div>

        <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] text-gradient-chad mb-4 leading-none animate-rainbow">
          CHAD
        </h1>

        <p className="font-display text-3xl md:text-5xl lg:text-6xl text-primary mb-6 animate-shake">
          {CHAD_PHRASES[currentPhrase]}
        </p>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          "{CHAD.about}" — The legendary words of the most chad person to ever chad.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="font-display text-xl tracking-wider bg-gradient-to-r from-chad-gold to-chad-pink hover:from-chad-pink hover:to-chad-gold transition-all duration-500 animate-pulse-glow"
            asChild
          >
            <a href={CHAD.website} target="_blank" rel="noopener noreferrer">
              VISIT THE CHAD ⚡
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-display text-xl tracking-wider border-2 border-primary hover:bg-primary hover:text-background transition-all duration-300"
            asChild
          >
            <a href={`https://njump.me/${CHAD.npub}`} target="_blank" rel="noopener noreferrer">
              VIEW ON NOSTR 🟣
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ChadFactsSection = () => {
  const facts = [
    { emoji: '👑', title: 'WHAT A CHAD!', description: 'Chad is so chad that other chads look up to him for chad advice.' },
    { emoji: '⚡', title: 'WHAT A CHAD!', description: 'When Chad sends a zap, the entire Lightning Network feels it.' },
    { emoji: '🔮', title: 'WHAT A CHAD!', description: 'Chad doesn\'t follow trends. Trends follow Chad.' },
    { emoji: '🚀', title: 'WHAT A CHAD!', description: 'Chad builds the future while others are still loading the present.' },
    { emoji: '💎', title: 'WHAT A CHAD!', description: 'Chad\'s diamond hands make actual diamonds jealous.' },
    { emoji: '🏆', title: 'WHAT A CHAD!', description: 'The Chad of Chads. The legend. The myth. THE CHAD.' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chad-purple/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-display text-5xl md:text-7xl text-center text-gradient-chad mb-16">
          UNDENIABLE CHAD FACTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group"
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce-slow">{fact.emoji}</div>
                <h3 className="font-display text-2xl text-primary mb-3">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChadProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-chad-blue/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-gradient-chad mb-4">
          CHAD'S LEGENDARY CREATIONS
        </h2>
        <p className="font-display text-2xl md:text-3xl text-primary mb-12">
          WHAT A CHAD! HE BUILDS THINGS!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHAD.projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-2 border-chad-gold/30 hover:border-chad-gold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-chad-gold/30">
                <CardContent className="p-8">
                  <h3 className="font-display text-3xl text-primary mb-2 group-hover:text-chad-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    WHAT A CHAD PROJECT!
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { text: 'WHAT A CHAD!', author: 'Everyone on the Internet' },
    { text: 'WHAT A CHAD!', author: 'All of Nostr' },
    { text: 'WHAT A CHAD!', author: 'The Entire Bitcoin Community' },
    { text: 'WHAT A CHAD!', author: 'Your Mom' },
    { text: 'WHAT A CHAD!', author: 'The Future' },
    { text: 'WHAT A CHAD!', author: 'The Past (retroactively)' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-center text-gradient-chad mb-16">
          WHAT PEOPLE SAY ABOUT CHAD
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card to-chad-purple/20 border-2 border-chad-purple/30 hover:border-chad-purple transition-all duration-300"
            >
              <CardContent className="p-6">
                <p className="font-display text-4xl text-primary mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-muted-foreground">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Real Testimonial */}
        <div className="mt-16">
          <h3 className="font-display text-3xl md:text-5xl text-center text-primary mb-8">
            ⚡ REAL PROOF OF CHADNESS ⚡
          </h3>
          <Card className="max-w-xl mx-auto bg-gradient-to-br from-card via-chad-gold/10 to-chad-pink/10 border-4 border-chad-gold hover:scale-105 transition-all duration-300 animate-pulse-glow overflow-hidden">
            <CardContent className="p-0">
              <img
                src="/what-a-chad-tweet.jpeg"
                alt="BOB Space on X: Game changing stuff, built on Nostr. What a Chad! - featuring Soapbox saying: This is our dev, Chad! A few of him may know him for his excellent ability to fix all the things in the blink of an eye."
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <p className="text-center font-display text-2xl text-chad-gold mt-6">
            EVEN SOAPBOX SAYS: "WHAT A CHAD!"
          </p>
          <p className="text-center text-muted-foreground mt-2">
            "We hear this so often about Chad, we may just make him a business card that says, 'What a Chad!'"
          </p>
        </div>
      </div>
    </section>
  );
};

const ChadStatsSection = () => {
  const stats = [
    { value: '∞', label: 'CHAD LEVEL' },
    { value: '100%', label: 'CHAD ENERGY' },
    { value: '24/7', label: 'BEING A CHAD' },
    { value: '#1', label: 'CHAD RANKING' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-chad-gold/20 via-chad-pink/20 to-chad-purple/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-center text-gradient-chad mb-16">
          CHAD STATISTICS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-7xl text-primary animate-pulse-glow inline-block">
                {stat.value}
              </div>
              <p className="font-display text-xl text-muted-foreground mt-2">{stat.label}</p>
              <p className="font-display text-lg text-chad-gold">WHAT A CHAD!</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ZapSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chad-gold/5 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl text-gradient-chad mb-8">
          ZAP THE CHAD ⚡
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Show your appreciation for THE CHAD by sending some sats. Because WHAT A CHAD!
        </p>

        <Card className="bg-card/50 backdrop-blur-sm border-2 border-chad-gold p-8 inline-block hover:scale-105 transition-transform duration-300 animate-pulse-glow">
          <p className="font-mono text-sm text-muted-foreground mb-2">Lightning Address:</p>
          <p className="font-display text-xl text-primary break-all">{CHAD.lud16}</p>
        </Card>

        <div className="mt-8">
          <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-chad-gold to-chad-pink text-background font-display">
            WHAT A CHAD!
          </Badge>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-4xl md:text-6xl text-gradient-chad mb-4">
          WHAT A CHAD!
        </p>
        <p className="font-display text-2xl text-primary mb-4">
          WHAT A CHAD! WHAT A CHAD! WHAT A CHAD!
        </p>

        <Separator className="my-8 bg-primary/30" />

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge variant="outline" className="font-display text-lg border-chad-gold text-chad-gold">
            WHAT A CHAD!
          </Badge>
          <Badge variant="outline" className="font-display text-lg border-chad-pink text-chad-pink">
            WHAT A CHAD!
          </Badge>
          <Badge variant="outline" className="font-display text-lg border-chad-purple text-chad-purple">
            WHAT A CHAD!
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          This site exists for one purpose: to proclaim that <span className="text-primary font-bold">CHAD</span> is, indeed, <span className="text-primary font-bold">WHAT A CHAD!</span>
        </p>

        <p className="text-xs text-muted-foreground">
          Vibed with <a href="https://shakespeare.diy" className="text-primary hover:underline">Shakespeare</a> 🎭 • Dedicated to {CHAD.name} ({CHAD.nip05}) • WHAT A CHAD!
        </p>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <MarqueeText />
      <ChadFactsSection />
      <MarqueeText reverse />
      <ChadProjectsSection />
      <MarqueeText />
      <TestimonialsSection />
      <MarqueeText reverse />
      <ChadStatsSection />
      <ZapSection />
      <MarqueeText />
      <Footer />
    </div>
  );
};

export default Index;
