import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SeeTheDifferenceProps {
  onNavigate: (section: string) => void;
}

export default function SeeTheDifference({ onNavigate }: SeeTheDifferenceProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1a1625] via-[#251f3d] to-[#1a1625] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#534F8C] via-[#6961D7] to-[#534F8C] rounded-full blur-[120px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              SEE THE DIFFERENCE
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 font-light">
              Before & After Gallery
            </p>
          </div>
          
          <Button 
            size="lg"
            onClick={() => onNavigate('portfolio')}
            className="gap-2 bg-white text-black hover:bg-white/90"
          >
            View Gallery
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}