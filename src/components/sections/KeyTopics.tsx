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
    description: "Educational content and clinical insight into skin cancer diagnosis, treatment, and reconstruction.",
    cta: "Learn More"
  },
  {
    icon: "Sparkles",
    title: "Cosmetic Dermatology & Surgery",
    description: "Information on cosmetic procedures, techniques, and outcomes, grounded in medical expertise.",
    cta: "Explore Cosmetic Dermatology"
  },
  {
    icon: "BookOpen",
    title: "General Dermatology Education",
    description: "Podcasts, videos, and articles addressing common dermatologic conditions and skin health questions.",
    cta: "View Educational Content"
  }
];

export default function KeyTopics({ onNavigate }: KeyTopicsProps) {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
              Key Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={topic.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription className="serif-text text-base leading-relaxed">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="gap-2"
                    onClick={() => onNavigate('expertise')}
                  >
                    {topic.cta}
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
