import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AboutDoctorProps {
  onNavigate: (section: string) => void;
}

export default function AboutDoctor({ onNavigate }: AboutDoctorProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-square lg:aspect-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/06ccf374-27c5-4320-821d-9d5995210d94.jpg"
                  alt="Dr. David Harvey"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  About Dr. David Harvey
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Dr. David Harvey is board certified in Micrographic and Dermatologic Surgery, among the first group of dermatologic surgeons in the country to achieve this designation. With over 25 years' experience in cosmetic and dermatologic surgery, his expertise lies in Mohs Micrographic Surgery, dermatoplastic surgery, laser surgery, and eyelid reconstruction.
                  </p>
                  <p>
                    He has authored over 30 peer-reviewed publications in the fields of skin cancer, cosmetic dermatology, aging skin, and eyelid surgery.
                  </p>
                </div>
                <div>
                  <Button 
                    size="lg"
                    onClick={() => onNavigate('expertise')}
                    className="gap-2"
                  >
                    Explore Clinical Expertise
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