import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FeaturedMediaProps {
  onNavigate: (section: string) => void;
}

const featuredItems = [
  {
    title: "Understanding Skin Cancer Detection",
    type: "Podcast",
    description: "Early detection strategies and common warning signs.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/77d7c8f7-cae4-4c60-a00e-cc4a12eddbde.jpg",
    duration: "45 min"
  },
  {
    title: "Mohs Surgery Explained",
    type: "Video",
    description: "A comprehensive overview of the Mohs surgical technique.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/b6d8b8fb-a3b7-4801-bcb0-b99a8ad14ad9.jpg",
    duration: "22 min"
  },
  {
    title: "Cosmetic Procedures in Dermatology",
    type: "Podcast",
    description: "Medical perspective on cosmetic dermatology techniques.",
    image: "https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/4e764ee3-c35c-408c-84db-adf8cba06e12.jpg",
    duration: "38 min"
  }
];

export default function FeaturedMedia({ onNavigate }: FeaturedMediaProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
              Featured Conversations & Videos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground serif-text max-w-3xl mx-auto">
              Explore recent podcasts and videos covering skin health, dermatology, cosmetic procedures, and skin cancer education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="font-normal">
                      {item.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="serif-text">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
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
