import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#534F8C] via-[#6961D7] to-transparent rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#6961D7] via-[#534F8C] to-transparent rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              The Derm Café
            </h1>
            <div className="space-y-4 text-lg sm:text-xl text-white/70 leading-relaxed">
              <p>
                Welcome to The Derm Café — a place to learn about the latest dermatology treatments and procedures through conversations, podcasts, and videos led by experts around the world.
              </p>
              <p>
                From understanding how to treat winter itch to exploring modern anti-aging procedures, The Derm Café is where education, experience, and real clinical insight come together.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate('media')}
              className="gap-2 bg-white text-black hover:bg-white/90"
            >
              Explore Podcasts & Videos
              <Icon name="PlayCircle" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('expertise')}
              className="gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              View Clinical Expertise
              <Icon name="Stethoscope" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}