import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-foreground">
            Welcome to The Derm Cafe
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 serif-text">
            A curated platform for dermatology education, clinical expertise, and professional insights. 
            Explore podcasts, videos, and clinical content designed for both patients and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('media')}
              className="gap-2"
            >
              Explore Media
              <Icon name="PlayCircle" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('expertise')}
              className="gap-2"
            >
              Clinical Expertise
              <Icon name="Stethoscope" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
