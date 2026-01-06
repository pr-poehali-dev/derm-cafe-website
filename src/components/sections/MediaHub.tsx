import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function MediaHub() {
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    {
      type: 'podcast',
      title: 'Understanding Basal Cell Carcinoma',
      description: 'A comprehensive discussion on the most common form of skin cancer, its treatment options, and prevention strategies.',
      duration: '45 min',
      topic: 'skin-cancer',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/c2d7e0d6-2493-476e-a761-89c3af682620.jpg'
    },
    {
      type: 'video',
      title: 'Mohs Surgery Explained',
      description: 'Visual guide to the Mohs micrographic surgery technique and what patients can expect during the procedure.',
      duration: '12 min',
      topic: 'skin-cancer',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/c00dfc28-bd50-4b5b-be69-7838ff4c3f69.jpg'
    },
    {
      type: 'podcast',
      title: 'Cosmetic Procedures: What Really Works',
      description: 'Evidence-based review of popular cosmetic dermatology treatments and their actual effectiveness.',
      duration: '38 min',
      topic: 'cosmetic',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/c2d7e0d6-2493-476e-a761-89c3af682620.jpg'
    },
    {
      type: 'article',
      title: 'Sun Protection: Beyond the Basics',
      description: 'Advanced strategies for protecting your skin from UV damage and preventing skin cancer.',
      duration: '8 min read',
      topic: 'education',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/0e49861d-bd8a-49bf-9f70-e8335131de3b.jpg'
    },
    {
      type: 'video',
      title: 'Before & After: Surgical Reconstruction',
      description: 'Patient cases demonstrating reconstruction outcomes following Mohs surgery.',
      duration: '15 min',
      topic: 'skin-cancer',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/c00dfc28-bd50-4b5b-be69-7838ff4c3f69.jpg'
    },
    {
      type: 'article',
      title: 'The Science of Skin Aging',
      description: 'Understanding the biological processes behind skin aging and evidence-based anti-aging approaches.',
      duration: '10 min read',
      topic: 'education',
      image: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/0e49861d-bd8a-49bf-9f70-e8335131de3b.jpg'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'podcast': return 'Mic';
      case 'video': return 'Video';
      case 'article': return 'FileText';
      default: return 'File';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'podcast': return 'bg-blue-100 text-blue-800';
      case 'video': return 'bg-purple-100 text-purple-800';
      case 'article': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Media Hub</h2>
          <p className="text-muted-foreground max-w-2xl">
            Educational content spanning podcasts, videos, and articles covering all aspects of dermatology.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="podcast">Podcasts</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
            <TabsTrigger value="article">Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name={getIcon(item.type) as any} size={20} className="text-primary" />
                        <Badge className={getTypeColor(item.type)}>
                          {item.type}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="serif-text">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full gap-2">
                      View Content
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podcast" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.filter(item => item.type === 'podcast').map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Mic" size={20} className="text-primary" />
                        <Badge className={getTypeColor(item.type)}>podcast</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="serif-text">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full gap-2">
                      Listen Now
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.filter(item => item.type === 'video').map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Video" size={20} className="text-primary" />
                        <Badge className={getTypeColor(item.type)}>video</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="serif-text">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full gap-2">
                      Watch Now
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="article" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.filter(item => item.type === 'article').map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="FileText" size={20} className="text-primary" />
                        <Badge className={getTypeColor(item.type)}>article</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="serif-text">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full gap-2">
                      Read Article
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}