import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AskEngageProps {
  onNavigate: (section: string) => void;
}

export default function AskEngage({ onNavigate }: AskEngageProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Icon name="MessageCircle" size={40} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            Have a Question?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground serif-text leading-relaxed">
            <p>
              If you have general questions about dermatology, skin health, or topics discussed on The Derm Cafe, you're welcome to reach out.
            </p>
            <p className="text-sm">
              Please note: submitted questions are for educational purposes and do not replace a medical consultation.
            </p>
          </div>
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
    </section>
  );
}
