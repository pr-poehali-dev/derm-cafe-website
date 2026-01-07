import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              The Derm Cafe
            </h1>
            
            <div className="prose prose-lg max-w-2xl">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Welcome to The Derm Café — a place to learn about the latest dermatology treatments and procedures through conversations, podcasts, and videos led by experts from around the world.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                From understanding how to treat winter itch to exploring modern anti-aging procedures, The Derm Café is where education, experience, and real clinical insight come together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/194ff998-1668-425b-82fa-580dcadcf409.jpg" 
                alt="Modern dermatology clinic interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}