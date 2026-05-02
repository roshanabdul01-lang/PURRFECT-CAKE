import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Heart, 
  ChefHat, 
  Clock, 
  Sparkles, 
  Star, 
  Instagram, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { ReactNode } from 'react';

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const whatsappNumber = "+32471234407";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Cake%20Purrfect!%20I'd%20like%20to%20order.`;
  const websiteLink = "https://www.cakepurrfect.be/";

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blush selection:text-brand-brown-dark w-full overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blush-light text-brand-brown font-semibold text-sm mb-6 tracking-wide uppercase">
              Conceptstore & Cakery
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-brand-brown-dark mb-6 leading-[1.1]">
              Artisan Cakes & <span className="text-brand-brown italic">Purrfect</span> Decor
            </h1>
            <p className="text-lg lg:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Located in Mol, we combine a great love for pastry with beautiful home decor. We follow the latest trends to bring you a unique and extensive assortment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-brown text-white rounded-full font-bold text-lg hover:bg-brand-brown-dark transition-all active:scale-95 shadow-lg shadow-brand-brown/20 w-full sm:w-auto"
              >
                <Sparkles size={20} className="group-hover:animate-bounce" />
                Explore Options
              </a>
              <span className="text-sm text-stone-500 font-medium flex items-center justify-center gap-1 mt-4 sm:mt-0">
                <MapPin size={16} /> Visit us in Mol
              </span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 bg-brand-blush rounded-full blur-3xl opacity-50 -z-10 translate-x-10 translate-y-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2160&auto=format&fit=crop" 
            alt="Beautiful pink layered cake with flowers" 
            className="w-full aspect-[4/5] object-cover rounded-[2rem] lg:rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
            <div className="bg-brand-blush-light p-2 rounded-full text-brand-brown">
              <Star fill="currentColor" size={24} />
            </div>
            <div>
              <p className="text-brand-brown-dark font-bold text-sm">5 Star Rating</p>
              <p className="text-xs text-stone-500">From 200+ customers</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-blush-light transition-colors">
                <ChefHat className="text-brand-brown w-12 h-12 mb-4" />
                <h3 className="text-xl font-serif font-bold text-brand-brown-dark mb-2">Chef Patissier</h3>
                <p className="text-stone-600">Expertly crafted with deep passion and professional excellence.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-blush-light transition-colors">
                <Clock className="text-brand-brown w-12 h-12 mb-4" />
                <h3 className="text-xl font-serif font-bold text-brand-brown-dark mb-2">Always Trending</h3>
                <p className="text-stone-600">We keep up with new trends daily for an innovative assortment.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-blush-light transition-colors">
                <Sparkles className="text-brand-brown w-12 h-12 mb-4" />
                <h3 className="text-xl font-serif font-bold text-brand-brown-dark mb-2">Home Decor</h3>
                <p className="text-stone-600">More than just cakes—discover a beautifully curated conceptstore.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-brand-blush-light transition-colors">
                <Heart className="text-brand-brown w-12 h-12 mb-4" />
                <h3 className="text-xl font-serif font-bold text-brand-brown-dark mb-2">Born from Love</h3>
                <p className="text-stone-600">What began as a hobby blossomed into a full-time passion.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS / OFFER SECTION */}
      <section className="py-24 px-6 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-brown-dark mb-4">Our Sweet Creations</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Every celebration is unique, and so is our menu. Choose from our delightful selection of handcrafted treats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop" 
                    alt="Custom Bespoke Cake" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Bespoke Cakes</h3>
                  <p className="text-stone-600 mb-6 text-sm flex-grow">
                    Elegant, personalized centerpieces for birthdays, weddings, and milestones. Completely tailored to you.
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block text-brand-brown font-bold uppercase tracking-wider text-sm hover:text-brand-brown-dark border-b-2 border-brand-blush pb-1 transition-colors">
                    Order Custom Cake
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group relative top-0 md:top-8 h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop" 
                    alt="Purrfect Cupcakes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center flex flex-col items-center flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Purrfect Cupcakes</h3>
                  <p className="text-stone-600 mb-6 text-sm flex-grow">
                    Bite-sized joy, beautifully piped and decorated to match your theme. The ultimate party favor.
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block text-brand-brown font-bold uppercase tracking-wider text-sm hover:text-brand-brown-dark border-b-2 border-brand-blush pb-1 transition-colors mt-auto">
                    Order Cupcakes
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Home Decor" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center flex flex-col items-center flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Woondecoratie</h3>
                  <p className="text-stone-600 mb-6 text-sm flex-grow">
                    Discover our amazing selection of home goods and interior decoration to complement your taste.
                  </p>
                  <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="inline-block text-brand-brown font-bold uppercase tracking-wider text-sm hover:text-brand-brown-dark border-b-2 border-brand-blush pb-1 transition-colors mt-auto">
                    Visit Our Store
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-24 px-6 bg-brand-blush/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-brown-dark mb-4">How It Works</h2>
            <p className="text-stone-600 text-lg">Getting your dream cake is as easy as 1, 2, 3.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[30%] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-brand-brown/30 -z-10"></div>
            
            <FadeIn delay={0}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-brand-blush-light text-brand-brown font-serif text-2xl font-bold">1</div>
                <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Dream It</h3>
                <p className="text-stone-600">Tell us your theme, flavors, and date. Send us photo inspiration or let us design something unique.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-brand-blush-light text-brand-brown font-serif text-2xl font-bold">2</div>
                <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Refine It</h3>
                <p className="text-stone-600">We'll confirm the design details, finalize flavors, and provide a secure quote for your order.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-brown text-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-brand-blush font-serif text-2xl font-bold">3</div>
                <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-3">Devour It!</h3>
                <p className="text-stone-600">Pick up your fresh masterpiece or enjoy reliable delivery straight to your celebration.</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-16 text-center">
             <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-brown text-white rounded-full font-bold hover:bg-brand-brown-dark transition-all active:scale-95 shadow-md"
              >
                Let's Start Planning
             </a>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-brown-dark mb-4">Sweet Words</h2>
            <p className="text-stone-600 text-lg">Don't just take our word for it. Here's what our customers say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Vandaag voor de eerste keer geweest. Wat een leuke winkel met toffe geschenkjes en lekkere gebakjes. Ik kom zeker nog eens terug.",
                name: "Mirella G.",
                event: "Bezoek"
              },
              {
                text: "Elke jaar bestellen we voor ons zoontje zijn verjaardag een taart bij hun! En altijd zijn het prachtige exemplaren en zijn ze ook nog eens superlekker! Zeker een aanrader!",
                name: "Sofie V.",
                event: "Verjaardag"
              },
              {
                text: "Ze waren heerlijk! Om duimen en vingers van af te likken!",
                name: "Veerle G.",
                event: "Feestje"
              }
            ].map((testimonial, i) => (
              <FadeIn delay={i * 0.15} key={i}>
                <div className="bg-brand-cream/50 p-8 rounded-3xl h-full flex flex-col justify-between border border-brand-blush">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="text-amber-400 w-5 h-5" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-stone-700 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                  </div>
                  <div>
                    <p className="font-bold text-brand-brown-dark">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section className="py-24 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif text-brand-brown-dark mb-4">A Peek at Our Work</h2>
              <p className="text-stone-600 text-lg max-w-lg">
                Follow us on Instagram for daily dose of sweetness and inspiration for your next event.
              </p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-brown font-bold hover:text-brand-brown-dark transition-colors"
            >
              <Instagram size={20} /> @cakepurrfect
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:-mb-12">
            <FadeIn delay={0}>
              <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&auto=format&fit=crop" alt="Cake detail" className="w-full aspect-square object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer shadow-md" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop" alt="Cupcakes" className="w-full aspect-square object-cover rounded-2xl md:mt-12 hover:opacity-90 transition-opacity cursor-pointer shadow-md" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop" alt="Cake decorating" className="w-full aspect-square object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer shadow-md" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" alt="Elegant Cake" className="w-full aspect-square object-cover rounded-2xl md:mt-12 hover:opacity-90 transition-opacity cursor-pointer shadow-md" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SECTION */}
      <section className="py-24 px-6 bg-white overflow-hidden mt-0 md:mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <FadeIn delay={0}>
            <div className="w-full relative">
              <div className="absolute inset-0 bg-brand-blush rounded-[3rem] -rotate-6 scale-105 -z-10 blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop" 
                alt="Baker decorating cake" 
                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-xl"
              />
            </div>
          </FadeIn>
          <div className="w-full mt-12 md:mt-0">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-serif text-brand-brown-dark mb-6">Our Conceptstore Story</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Welcome to <span className="font-bold text-brand-brown">Cake Purrfect</span>, our beloved conceptstore in Mol. 
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                With a great love for pastry, our hobby evolved into a daily passion. As an experienced pastry chef, we closely follow new trends to always offer you an innovative and extensive assortment of delights alongside beautiful home decorations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-brand-brown-dark font-medium">
                  <CheckCircle2 className="text-brand-brown" size={24} /> Professional Chef Patissier
                </li>
                <li className="flex items-center gap-3 text-brand-brown-dark font-medium">
                  <CheckCircle2 className="text-brand-brown" size={24} /> Extensive Assortment & Decor
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-brown-dark -z-20"></div>
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-brown rounded-full blur-[100px] opacity-20 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blush rounded-full blur-[100px] opacity-10 -z-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-serif text-white mb-6">Ready to Make Your Celebration Purrfect?</h2>
            <p className="text-brand-blush-light text-xl mb-12 max-w-2xl mx-auto font-medium">
              We only take a limited number of orders each week to ensure every cake gets the attention it deserves. Reach out now to secure your date!
            </p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-brand-brown-dark rounded-full font-bold text-xl hover:bg-brand-blush transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <MessageCircle size={24} />
              Message on WhatsApp
            </a>
            <p className="mt-6 text-brand-blush/70 text-sm">
              No commitment required to get a quote. Friendly, fast responses guaranteed!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-brand-cream border-t border-brand-brown/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left mb-12 border-b border-brand-brown/10 pb-12">
          <div className="flex flex-col md:flex-row gap-12 w-full justify-between items-start text-stone-600">
            <div>
              <h4 className="font-bold text-brand-brown-dark mb-4 text-lg">Visit Our Store</h4>
              <p className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <MapPin size={18} className="text-brand-brown" /> Statiestraat 33A, Mol, Belgium, 2400
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <MessageCircle size={18} className="text-brand-brown" /> +32 471 23 44 07
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-brand-brown-dark mb-4 text-lg">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-center md:text-left">
                <li><span className="inline-block w-20">Tue - Sat:</span> 10:00 - 18:00</li>
                <li><span className="inline-block w-20">Sun - Mon:</span> Closed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-brown-dark mb-2">Cake Purrfect</h3>
            <p className="text-stone-500 text-sm">Conceptstore & Cakery in Mol.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-stone-600 font-medium">
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-brown transition-colors">
              <Sparkles size={18} /> Official Website
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-brown transition-colors">
              <Instagram size={18} /> @cakepurrfect
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} /> Local Pickup & Delivery
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-brown/10 text-center text-sm text-stone-400">
          <p>© {new Date().getFullYear()} Cake Purrfect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

