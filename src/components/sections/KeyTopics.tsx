import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface KeyTopicsProps {
  onNavigate: (section: string) => void;
}

const topics = [
  {
    icon: "Shield",
    title: "Skin Cancer & Mohs Surgery",
    description: "Educational discussions and clinical insight into skin cancer diagnosis, treatment, and reconstruction.",
    cta: "Learn More"
  },
  {
    icon: "Sparkles",
    title: "Cosmetic Dermatology & Surgery",
    description: "Conversations and education around cosmetic procedures, techniques, and outcomes.",
    cta: "Explore Cosmetic Dermatology"
  },
  {
    icon: "Heart",
    title: "General Dermatology",
    description: "Podcasts and videos focused on common skin conditions, prevention, and overall skin health.",
    cta: "View Educational Content"
  }
];

export default function KeyTopics({ onNavigate }: KeyTopicsProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
            Topics We Explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={topic.icon as any} size={28} className="text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium">{topic.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  className="gap-2 px-0 hover:gap-3 transition-all"
                  onClick={() => onNavigate('expertise')}
                >
                  {topic.cta}
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}