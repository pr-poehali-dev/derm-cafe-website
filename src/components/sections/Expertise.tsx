import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

interface ExpertiseProps {
  onNavigate: (section: string) => void;
}

export default function Expertise({ onNavigate }: ExpertiseProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Clinical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            Specialized dermatology services with focus on skin cancer treatment and cosmetic procedures.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">Skin Cancer</CardTitle>
                </div>
                <CardDescription className="text-base serif-text">
                  Comprehensive diagnosis and treatment of skin cancers including basal cell carcinoma, 
                  squamous cell carcinoma, and malignant melanoma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="border-amber-200 bg-amber-50">
                  <Icon name="AlertTriangle" size={20} className="text-amber-600" />
                  <AlertTitle>Content Notice</AlertTitle>
                  <AlertDescription>
                    Clinical portfolio sections contain medical images that may be sensitive. 
                    Confirmation required before viewing.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Conditions Treated:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Basal Cell Carcinoma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Squamous Cell Carcinoma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Malignant Melanoma</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Pre-cancerous Lesions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Specialized Services:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Mohs Micrographic Surgery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Surgical Reconstruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Skin Cancer Screening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Prevention Education</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={() => onNavigate('portfolio')} className="gap-2">
                    View Clinical Portfolio
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                  <Button variant="outline" onClick={() => onNavigate('media')} className="gap-2">
                    Related Media
                    <Icon name="PlayCircle" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          <div>
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Cosmetic Dermatology & Surgery</CardTitle>
                </div>
                <CardDescription className="text-base serif-text">
                  Advanced aesthetic procedures combining medical expertise with artistic precision 
                  for natural-looking results.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Surgical Procedures:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Facial Reconstruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Scar Revision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Lesion Removal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Cosmetic Enhancement</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Non-surgical Treatments:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Injectable Treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Laser Therapy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Chemical Peels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Skin Rejuvenation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground serif-text">
                    <strong>Content from existing page:</strong> Detailed descriptions of cosmetic procedures, 
                    treatment approaches, recovery expectations, and educational resources on aesthetic dermatology.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button onClick={() => onNavigate('portfolio')} className="gap-2">
                    Before & After Gallery
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                  <Button variant="outline" onClick={() => onNavigate('media')} className="gap-2">
                    Educational Videos
                    <Icon name="Video" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
