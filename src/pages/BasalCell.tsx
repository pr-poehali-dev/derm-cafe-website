import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function BasalCell() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      navigate('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} currentSection="" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Basal Cell Carcinoma</h1>
          <p className="text-lg text-muted-foreground">
            Basal cell carcinoma can be a major health risk if not discovered and treated right away. This type of skin cancer can develop through too much exposure to UV rays. For more details about basal cell carcinoma (BCC), patients can get in touch with the Derm Café.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* What Is BCC */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What Is Basal Cell Carcinoma?</h2>
          <p className="text-muted-foreground mb-4">
            Basal cell carcinoma has distinctive features, which can differ depending on the skin type. For patients with lighter complexions, for example, the color of the affected area of the skin would either be the same as the surrounding spot or would be pink. For those with darker skin, it would either have the same color or would be distinctly black.
          </p>
          <p className="text-muted-foreground">
            In both cases, the lesion would be bumpy. BCCs typically form in areas that receive a lot of sun exposure, such as the face.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Causes of Basal Cell Carcinoma</h2>
          <p className="text-muted-foreground mb-4">
            The general process of the formation of basal cell carcinoma involves the DNA mutation of the skin's basal cells. Instead of producing new skin cells that lead to older ones sloughing off, the production rate increases without the latter half of the equation. This is how the lesion forms.
          </p>
          <p className="text-muted-foreground">
            UV rays, which can come from the sun, and artificial sources like tanning beds are often considered the main cause of this condition. Other risk factors include having lighter skin, advanced age, and genetic factors.
          </p>
        </div>
      </section>

      {/* When to Get Treatment */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">When to Get Treatment for Basal Cell Carcinoma</h2>
          <p className="text-muted-foreground">
            It is generally recommended that as soon as symptoms of basal cell carcinoma appear, patients should schedule a consultation right away. The earlier the issue is diagnosed, the better.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Basal Cell Carcinoma Treatment Options</h2>
          <p className="text-muted-foreground mb-4">
            Once the presence of basal cell carcinoma has been diagnosed, the next steps will depend on the details of each patient's case. The most common method is Mohs surgery, which involves removing skin layers and analyzing them under a microscope. Each layer is examined for the presence of cancer cells, and once there are no more cancer cells, the process is complete.
          </p>
          <p className="text-muted-foreground">
            For those who are unable to undergo surgery, other options are also available. These include freezing, radiation therapy, and topical treatments.
          </p>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Basal Cell Carcinoma Aftercare</h2>
          <p className="text-muted-foreground">
            The aftercare instructions following basal cell carcinoma treatment will vary depending on which treatment method was used. For surgical procedures, it's vital to take the prescribed medications and to follow the aftercare directions closely.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How Much Does Basal Cell Carcinoma Cost?</h2>
          <p className="text-muted-foreground mb-8">
            Experience peace of mind with our affordable Basal Cell Carcinoma resources at The Derm Cafe. We offer comprehensive information, expert insights, and a supportive community, all in one place. Empower yourself with knowledge about this common skin condition without straining your budget. Join us in the journey towards understanding and managing Basal Cell Carcinoma effectively.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Learn More from the Experts</h2>
          <p className="text-lg mb-8">
            For more details on basal cell carcinoma, contact the Derm Café today! We will be happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule an appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              MEET DR. DAVID HARVEY
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
