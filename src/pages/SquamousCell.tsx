import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function SquamousCell() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Squamous Cell Carcinoma</h1>
          <p className="text-lg text-muted-foreground">
            Squamous Cell Carcinoma (SCC) is a common form of skin cancer that affects thousands of people in the United States. At The Derm Cafe, we are committed to providing comprehensive dermatology information and expert care for individuals dealing with SCC.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* What Is SCC */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What Is Squamous Cell Carcinoma?</h2>
          <p className="text-muted-foreground">
            Squamous Cell Carcinoma is a type of skin cancer that arises from the squamous cells in the outermost layer of the skin. These cells are responsible for the skin's flexibility and protective qualities. SCC typically develops in areas that have been exposed to the sun, such as the face, neck, ears, and hands. While SCC is usually slow-growing and may not spread as quickly as other skin cancers, early diagnosis and treatment are crucial for successful outcomes.
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
          <h2 className="text-3xl font-bold mb-6">Causes of Squamous Cell Carcinoma</h2>
          <p className="text-muted-foreground">
            The primary cause of SCC is prolonged exposure to ultraviolet (UV) radiation from the sun or tanning beds. Other risk factors include a history of sunburn, fair skin, a weakened immune system, and a family history of skin cancer. It is essential to protect your skin from excessive sun exposure and take preventive measures such as using sunscreen, wearing protective clothing, and avoiding indoor tanning.
          </p>
        </div>
      </section>

      {/* When to Get Treatment */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">When to Get Treatment for Squamous Cell Carcinoma</h2>
          <p className="text-muted-foreground">
            If you suspect that you may have SCC or notice any unusual changes in your skin, it is crucial to seek professional evaluation. At The Derm Cafe, our dermatologists specialize in diagnosing and treating SCC. Common signs of SCC include persistent scaly patches, open sores that don't heal, or growths with raised edges. Early detection and prompt treatment can significantly improve your prognosis.
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
          <h2 className="text-3xl font-bold mb-6">Squamous Cell Carcinoma Treatment Options</h2>
          <p className="text-muted-foreground mb-6">
            Treatment options for SCC depend on factors like the tumor's size, location, and how deeply it has invaded the skin. At The Derm Cafe, we offer a range of treatments, including:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li><strong>Surgical Excision:</strong> This involves the removal of the tumor along with a margin of healthy tissue.</li>
            <li><strong>Mohs Micrographic Surgery:</strong> A precise surgical technique that removes the tumor layer by layer, minimizing damage to healthy skin.</li>
            <li><strong>Radiation Therapy:</strong> Effective for treating SCC in areas where surgery may be challenging.</li>
            <li><strong>Topical Chemotherapy:</strong> A cream or lotion applied to the skin to destroy cancer cells.</li>
            <li><strong>Cryotherapy:</strong> Freezing the tumor with liquid nitrogen.</li>
          </ul>
          <p className="text-muted-foreground mt-6">
            Our experienced dermatologists will determine the most suitable treatment plan for your specific case, considering your health and cosmetic concerns.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Squamous Cell Carcinoma Aftercare</h2>
          <p className="text-muted-foreground">
            After treatment, it's crucial to follow our recommended aftercare procedures. This may include wound care, sunscreen use, and regular follow-up appointments. Monitoring your skin and protecting it from further UV exposure are essential to prevent the recurrence of SCC.
          </p>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How Much Does Squamous Cell Carcinoma Treatment Cost?</h2>
          <p className="text-muted-foreground mb-4">
            The cost of SCC treatment can vary based on the chosen treatment method, the extent of the disease, and your location. Insurance plans often cover the cost of treatment, but you should consult your insurance provider for details.
          </p>
          <p className="text-muted-foreground">
            At The Derm Cafe, we are committed to providing transparent and affordable care. We can assist you in understanding the costs involved and help you navigate insurance claims.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Schedule Your Consultation</h2>
          <p className="text-lg mb-4">
            Squamous Cell Carcinoma is a form of skin cancer that necessitates prompt attention and specialized care. The Derm Cafe is your partner in the fight against SCC, offering comprehensive information and expert dermatological services.
          </p>
          <p className="text-lg mb-8">
            Early detection and appropriate treatment can make a significant difference in your journey to recovery. Contact us today to schedule your consultation and take the first step toward a healthier, cancer-free future.
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
