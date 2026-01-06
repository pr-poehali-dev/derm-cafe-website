import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function ClinicalPortfolio() {
  const [hasAcknowledged, setHasAcknowledged] = useState(false);
  const [showDialog, setShowDialog] = useState(true);

  const portfolioSections = [
    {
      title: 'Basal Cell Carcinoma',
      description: 'Case studies and outcomes for the most common type of skin cancer.',
      cases: 12
    },
    {
      title: 'Squamous Cell Carcinoma',
      description: 'Treatment results for the second most common skin cancer.',
      cases: 8
    },
    {
      title: 'Malignant Melanoma',
      description: 'Diagnosis and treatment outcomes for the most serious skin cancer.',
      cases: 6
    },
    {
      title: 'Mohs Surgery & Reconstruction',
      description: 'Surgical procedures and reconstruction techniques with patient outcomes.',
      cases: 15
    },
    {
      title: 'Before & After Gallery',
      description: 'Comprehensive visual documentation of treatment results.',
      cases: 24
    }
  ];

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
    <section className="py-16">
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

          <h2 className="text-3xl font-medium mb-4">Clinical Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl">
            Documented cases demonstrating treatment outcomes across various dermatological conditions 
            and procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription className="serif-text">{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Available Cases:</span>
                  <Badge className="bg-primary/10 text-primary">{section.cases}</Badge>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Content from existing page: Clinical images, case descriptions, 
                    treatment approaches, and outcomes.
                  </p>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  View Cases
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle>About This Portfolio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground serif-text">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}
