import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
            The Derm Cafe
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-light">
            Dermatology conversations, education, and clinical insight — led by Dr. David Harvey.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto serif-text">
            The Derm Cafe is a dermatology-focused media platform featuring podcasts, videos, and educational content, alongside the clinical expertise of board-certified dermatologist Dr. David Harvey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
              View Clinical Expertise
              <Icon name="Stethoscope" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}