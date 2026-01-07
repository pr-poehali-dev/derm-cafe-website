import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FeaturedMediaProps {
  onNavigate: (section: string) => void;
}

const featuredItems = [
  {
    title: "Winter Skin Care & Itch Management",
    type: "Podcast",
    description: "Understanding and treating common winter skin conditions.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/ea433978-e042-4760-ba0c-c26ff636d2a8.jpg",
    duration: "42 min"
  },
  {
    title: "Modern Anti-Aging Procedures",
    type: "Video",
    description: "Educational overview of contemporary anti-aging treatments.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/41c136bd-bdbc-4470-9b44-c2d7d98bddf6.jpg",
    duration: "28 min"
  },
  {
    title: "Skin Cancer Detection Insights",
    type: "Podcast",
    description: "Expert discussion on early detection and prevention.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/194ff998-1668-425b-82fa-580dcadcf409.jpg",
    duration: "45 min"
  }
];

export default function FeaturedMedia({ onNavigate }: FeaturedMediaProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
              Featured Podcasts & Videos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Listen to recent conversations and watch educational videos covering dermatology, skin health, cosmetic procedures, and skin cancer education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <div 
                key={index} 
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-normal">
                      {item.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('media')}
              className="gap-2"
            >
              Browse All Media
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}