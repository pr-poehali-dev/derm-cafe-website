import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FeaturedCasesProps {
  onNavigate: (section: string) => void;
}

const featuredCases = [
  {
    id: 1,
    title: 'Basal Cell Carcinoma - Nasal',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/48e34b2a-42e4-47bf-a636-e50b9c724f54.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/48e34b2a-42e4-47bf-a636-e50b9c724f54.jpg',
    procedure: 'Mohs Surgery',
    area: 'Nose'
  },
  {
    id: 2,
    title: 'Mohs Surgery Reconstruction',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/63737b0b-4db6-4cef-a873-eb50e8b22967.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/63737b0b-4db6-4cef-a873-eb50e8b22967.jpg',
    procedure: 'Reconstruction',
    area: 'Facial'
  },
  {
    id: 3,
    title: 'Melanoma Excision',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/8766adbb-9096-4a2e-a29f-15c9e96a5223.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/8766adbb-9096-4a2e-a29f-15c9e96a5223.jpg',
    procedure: 'Wide Excision',
    area: 'Back'
  },
  {
    id: 4,
    title: 'Squamous Cell Carcinoma',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/2823c31b-0f73-42a8-9d92-c26477f51590.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/2823c31b-0f73-42a8-9d92-c26477f51590.jpg',
    procedure: 'Mohs Surgery',
    area: 'Ear'
  }
];

export default function FeaturedCases({ onNavigate }: FeaturedCasesProps) {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Before & After Cases
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Real patient outcomes demonstrating surgical precision and reconstruction expertise across various dermatological procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredCases.map((caseItem) => (
              <div 
                key={caseItem.id}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="p-5 border-b border-border">
                  <h3 className="text-lg font-semibold mb-1.5">{caseItem.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Icon name="Scissors" size={14} />
                      {caseItem.procedure}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="MapPin" size={14} />
                      {caseItem.area}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-0">
                  <div className="p-4 border-r border-border">
                    <div className="text-xs font-medium text-foreground/60 mb-2">BEFORE</div>
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Image" size={40} className="text-muted-foreground/30" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs font-medium text-foreground/60 mb-2">AFTER</div>
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Image" size={40} className="text-muted-foreground/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Button 
              size="lg" 
              onClick={() => onNavigate('portfolio')}
              className="gap-2"
            >
              View All Before & After Cases
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}