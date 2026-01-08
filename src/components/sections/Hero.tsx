import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              The Derm Café
            </h1>
            <div className="space-y-4 text-lg sm:text-xl text-foreground/80 leading-relaxed">
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
              className="gap-2"
            >
              Explore Podcasts & Videos
              <Icon name="PlayCircle" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('expertise')}
              className="gap-2"
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