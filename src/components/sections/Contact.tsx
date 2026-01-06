import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-medium mb-4">Ask Us</h2>
            <p className="text-muted-foreground">
              Have questions about dermatology or our services? We're here to provide educational information.
            </p>
          </div>

          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <Icon name="Info" size={20} className="text-blue-600" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>
                This form is for educational inquiries and general questions only. 
                Responses are for informational purposes and do not constitute medical advice.
              </p>
              <p className="font-medium">
                For medical concerns, diagnosis, or treatment, please schedule a formal consultation.
              </p>
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Send Your Question</CardTitle>
              <CardDescription>
                We'll respond to educational inquiries as time permits. 
                Please do not include personal health information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Topic or area of interest" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Question</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your educational question..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="bg-muted/30 p-4 rounded-lg text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Before submitting:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Do not include personal medical information</li>
                    <li>Do not request diagnosis or treatment advice</li>
                    <li>Questions are for educational purposes only</li>
                    <li>Response time is not guaranteed</li>
                  </ul>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Icon name="Send" size={20} />
                  Submit Question
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Calendar" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Schedule Consultation</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For medical concerns or treatment inquiries, schedule a formal consultation.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  Book Appointment
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="BookOpen" size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Browse Resources</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our library of educational content, podcasts, and videos.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  View Media Hub
                  <Icon name="ArrowRight" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
