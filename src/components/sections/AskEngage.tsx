import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AskEngageProps {
  onNavigate: (section: string) => void;
}

export default function AskEngage({ onNavigate }: AskEngageProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary/10 text-center">
            <div className="space-y-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
                Have a Question?
              </h2>
              <div className="prose prose-lg max-w-2xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you have general questions about dermatology or topics discussed on The Derm Café, you're welcome to reach out.
                </p>
                <p className="text-base text-muted-foreground/80">
                  Please note that questions are addressed for educational purposes and do not replace a medical consultation.
                </p>
              </div>
              <div className="pt-2">
                <Button 
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="gap-2"
                >
                  Ask a Question
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}