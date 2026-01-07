import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FinalCTAProps {
  onNavigate: (section: string) => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl sm:text-3xl text-foreground font-light leading-relaxed">
            Explore dermatology through conversation, education, and real clinical experience.
          </p>
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