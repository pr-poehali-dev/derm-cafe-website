import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AboutDoctorProps {
  onNavigate: (section: string) => void;
}

export default function AboutDoctor({ onNavigate }: AboutDoctorProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-muted/30 rounded-3xl border border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-square lg:aspect-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/06ccf374-27c5-4320-821d-9d5995210d94.jpg"
                  alt="Dr. David Harvey"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
                  About Dr. David Harvey
                </h2>
                <div className="prose prose-lg space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Derm Café is hosted by Dr. David Harvey, a board-certified dermatologist with experience in medical, surgical, and cosmetic dermatology. His clinical focus includes skin cancer treatment, Mohs surgery, and reconstruction.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through this platform, Dr. Harvey combines clinical practice with education, offering insight into dermatology through real-world experience and expert discussion.
                  </p>
                </div>
                <div>
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
        </div>
      </div>
    </section>
  );
}