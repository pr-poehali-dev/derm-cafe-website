import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AboutDoctorProps {
  onNavigate: (section: string) => void;
}

export default function AboutDoctor({ onNavigate }: AboutDoctorProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/e1dea7e5-3cce-4e41-8d64-4fc4c4f4d2f6.jpg"
                alt="Dr. David Harvey"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
                Meet Dr. David Harvey
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground serif-text leading-relaxed">
                <p>
                  Dr. David Harvey is a board-certified dermatologist with extensive experience in medical, surgical, and cosmetic dermatology. His clinical focus includes skin cancer treatment, Mohs surgery, and reconstruction.
                </p>
                <p>
                  Through The Derm Cafe, Dr. Harvey combines clinical practice with education, offering transparent insight into dermatology for both patients and professionals.
                </p>
              </div>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="gap-2"
              >
                About Dr. Harvey
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
