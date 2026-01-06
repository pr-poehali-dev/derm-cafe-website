import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FeaturedTopicsProps {
  onNavigate: (section: string) => void;
}

export default function FeaturedTopics({ onNavigate }: FeaturedTopicsProps) {
  const topics = [
    {
      icon: 'Shield',
      title: 'Skin Cancer',
      description: 'Comprehensive resources on skin cancer prevention, diagnosis, and treatment including Mohs surgery.',
      action: () => onNavigate('expertise'),
      color: 'from-red-50 to-red-100'
    },
    {
      icon: 'Sparkles',
      title: 'Cosmetic Dermatology',
      description: 'Expert insights on aesthetic procedures and surgical techniques for skin rejuvenation.',
      action: () => onNavigate('expertise'),
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: 'BookOpen',
      title: 'Educational Content',
      description: 'Podcasts, videos, and articles covering the latest in dermatology practice and research.',
      action: () => onNavigate('media'),
      color: 'from-blue-50 to-blue-100'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Key Topics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive coverage of dermatology subspecialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className={`hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br ${topic.color}`}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={topic.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle>{topic.title}</CardTitle>
                <CardDescription className="serif-text">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" onClick={topic.action} className="gap-2 hover:bg-white/50">
                  Learn More
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}