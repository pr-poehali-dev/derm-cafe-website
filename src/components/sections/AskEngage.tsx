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
          <div className="bg-card rounded-3xl p-8 sm:p-12 lg:p-16 border border-border shadow-lg text-center">
            <div className="space-y-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Have a Question?
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                If you have general questions about dermatology or topics discussed on The Derm Café, you're welcome to reach out.
              </p>
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