import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Icon from '@/components/ui/icon';

const portfolioCases = [
  {
    id: 1,
    title: 'Basal Cell Carcinoma - Nasal',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/48e34b2a-42e4-47bf-a636-e50b9c724f54.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/48e34b2a-42e4-47bf-a636-e50b9c724f54.jpg',
    procedure: 'Mohs Surgery & Reconstruction',
    area: 'Nose',
    featured: true
  },
  {
    id: 2,
    title: 'Mohs Surgery Reconstruction',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/63737b0b-4db6-4cef-a873-eb50e8b22967.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/63737b0b-4db6-4cef-a873-eb50e8b22967.jpg',
    procedure: 'Surgical Reconstruction',
    area: 'Facial',
    featured: true
  },
  {
    id: 3,
    title: 'Melanoma Excision',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/8766adbb-9096-4a2e-a29f-15c9e96a5223.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/8766adbb-9096-4a2e-a29f-15c9e96a5223.jpg',
    procedure: 'Wide Local Excision',
    area: 'Back',
    featured: true
  },
  {
    id: 4,
    title: 'Squamous Cell Carcinoma',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/2823c31b-0f73-42a8-9d92-c26477f51590.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/2823c31b-0f73-42a8-9d92-c26477f51590.jpg',
    procedure: 'Mohs Surgery',
    area: 'Ear',
    featured: true
  },
  {
    id: 5,
    title: 'Forehead Reconstruction',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/636b51d9-2cc9-4ac8-8b39-6c71f46676de.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/636b51d9-2cc9-4ac8-8b39-6c71f46676de.jpg',
    procedure: 'Flap Reconstruction',
    area: 'Forehead'
  },
  {
    id: 6,
    title: 'Cheek Lesion Removal',
    beforeImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/00653f05-aa9d-4ab9-be68-41415fb2c1e6.jpg',
    afterImage: 'https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/00653f05-aa9d-4ab9-be68-41415fb2c1e6.jpg',
    procedure: 'Excision & Closure',
    area: 'Cheek'
  }
];

export default function ClinicalPortfolio() {
  const [hasAcknowledged, setHasAcknowledged] = useState(false);
  const [showDialog, setShowDialog] = useState(true);

  const handleAcknowledge = () => {
    setHasAcknowledged(true);
    setShowDialog(false);
  };

  if (!hasAcknowledged) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Icon name="AlertTriangle" size={24} className="text-amber-600" />
                  </div>
                  <AlertDialogTitle className="text-xl">Content Warning</AlertDialogTitle>
                </div>
                <AlertDialogDescription className="text-base space-y-3">
                  <p>
                    This section contains clinical images of medical conditions and surgical procedures 
                    that may be disturbing or sensitive to some viewers.
                  </p>
                  <p>
                    These images are included for educational purposes and to demonstrate treatment 
                    outcomes. They show real patient cases with their consent.
                  </p>
                  <p className="font-medium">
                    By continuing, you acknowledge that you understand the nature of this content.
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Go Back</AlertDialogCancel>
                <AlertDialogAction onClick={handleAcknowledge}>
                  I Understand, Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-amber-600" />
            </div>
            <h2 className="text-3xl font-medium mb-4">Clinical Portfolio</h2>
            <p className="text-muted-foreground mb-8">
              Please acknowledge the content warning to view clinical images and case studies.
            </p>
            <Button onClick={() => setShowDialog(true)} size="lg">
              View Content Warning
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Alert className="border-amber-200 bg-amber-50 mb-8">
            <Icon name="Info" size={20} className="text-amber-600" />
            <AlertTitle>Educational Content</AlertTitle>
            <AlertDescription>
              All images are used with patient consent for educational purposes. 
              These cases demonstrate treatment approaches and outcomes.
            </AlertDescription>
          </Alert>

          <h2 className="text-3xl font-semibold mb-4">Clinical Portfolio</h2>
          <p className="text-foreground/70 max-w-2xl">
            Documented cases demonstrating treatment outcomes across various dermatological conditions 
            and surgical procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioCases.map((caseItem) => (
            <div 
              key={caseItem.id}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Scissors" size={16} />
                    {caseItem.procedure}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="MapPin" size={16} />
                    {caseItem.area}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-0">
                <div className="p-4 border-r border-border">
                  <div className="text-xs font-medium text-foreground/60 mb-3">BEFORE</div>
                  <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground/30" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs font-medium text-foreground/60 mb-3">AFTER</div>
                  <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-2xl p-6 space-y-3 text-sm text-foreground/70">
            <p className="font-medium text-foreground">About This Portfolio</p>
            <p>
              This clinical portfolio demonstrates treatment outcomes across a range of dermatological 
              conditions, with particular focus on skin cancer treatment and surgical reconstruction.
            </p>
            <p>
              All cases are presented with patient consent and are intended for educational purposes 
              to help patients understand treatment options and expected outcomes.
            </p>
            <p>
              Individual results may vary. These cases represent actual patient outcomes but should 
              not be considered a guarantee of results for any individual patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}