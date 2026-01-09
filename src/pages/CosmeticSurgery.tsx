import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CosmeticSurgery() {
  const navigate = useNavigate();

  const procedures = [
    {
      title: 'Rhinoplasty',
      description: "Refines the nose's shape and size for improved facial harmony."
    },
    {
      title: 'Breast Augmentation',
      description: 'Enhances breast size and shape with implants.'
    },
    {
      title: 'Liposuction',
      description: 'Removes excess fat from specific areas, sculpting the body.'
    },
    {
      title: 'Facelift',
      description: 'Reduces signs of aging by tightening facial skin and muscles.'
    },
    {
      title: 'Botox and Fillers',
      description: 'Non-surgical options to reduce wrinkles and restore volume.'
    },
    {
      title: 'Tummy Tuck',
      description: 'Removes excess abdominal skin and tightens muscles for a flatter abdomen.'
    }
  ];

  const questions = [
    {
      title: 'Ideal Candidates',
      content: 'Ideal candidates for aesthetic surgery are in good health, have realistic expectations, and understand the risks and benefits. Consultation with a qualified surgeon is essential to determine suitability.'
    },
    {
      title: 'Anesthesia',
      content: "Most cosmetic surgeries require anesthesia, either local, regional, or general, depending on the procedure's complexity and patient preference. Anesthesia is administered by a trained anesthesiologist or nurse anesthetist."
    },
    {
      title: 'Risks',
      content: 'Cosmetic or reconstructive surgery carries inherent risks, including infection, scarring, and complications related to anesthesia. The severity of these risks varies by procedure and individual factors.'
    },
    {
      title: 'Follow-up Care',
      content: 'Post-operative care is crucial for a successful outcome. Patients should follow their surgeon\'s instructions regarding wound care, pain management, and activity restrictions. Regular follow-up appointments are essential to monitor healing and address any concerns about cosmetic enhancements.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={(section) => navigate(section === 'home' ? '/' : `/${section}`)} currentSection="cosmetic-surgery" />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Cosmetic Surgery
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                Plastic surgery, encompassing aesthetic and reconstructive procedures, has gained popularity for enhancing one's appearance and boosting confidence. In this concise guide, we will provide an overview of common cosmetic surgeries, address frequently asked questions, and shed light on the ideal candidates, anesthesia, risks, and follow-up care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Common Cosmetic Surgeries
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <img 
                  src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/03f80fe0-44d4-4a1d-9a26-3628c30fd827.jpg"
                  alt="Professional medical consultation"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {procedures[0].title}
                </h3>
                <p className="text-foreground text-lg">
                  {procedures[0].description}
                </p>
              </div>

              <div className="bg-accent rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {procedures[1].title}
                </h3>
                <p className="text-muted-foreground">
                  {procedures[1].description}
                </p>
              </div>

              <div className="bg-accent rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {procedures[2].title}
                </h3>
                <p className="text-muted-foreground">
                  {procedures[2].description}
                </p>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 border border-border">
                <img 
                  src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/5e323699-00ec-423f-a255-7092b5c70d1f.jpg"
                  alt="Aesthetic beauty concept"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {procedures[3].title}
                </h3>
                <p className="text-muted-foreground">
                  {procedures[3].description}
                </p>
              </div>

              <div className="bg-accent rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {procedures[4].title}
                </h3>
                <p className="text-muted-foreground">
                  {procedures[4].description}
                </p>
              </div>

              <div className="md:col-span-2 lg:col-span-1 bg-primary/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {procedures[5].title}
                </h3>
                <p className="text-muted-foreground">
                  {procedures[5].description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Common Questions about Cosmetic Surgery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {questions[0].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {questions[0].content}
                    </p>
                  </div>
                  <img 
                    src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/5ac8fc6b-11fc-41d1-9575-b2f631828238.jpg"
                    alt="Medical professional care"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {questions[1].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {questions[1].content}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {questions[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {questions[2].content}
                </p>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {questions[3].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {questions[3].content}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Also, if you have a specific question or concern you would like us to review, we would love to hear from you. Feel free to reach out to us c/o{' '}
                <a href="mailto:drh@TheDermCafe.com" className="text-primary hover:underline font-medium">
                  drh@TheDermCafe.com
                </a>
                .
              </p>
              <p className="text-xl font-medium text-primary mb-12">
                Be good to yourself.. and your skin!
              </p>

              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  See The Difference
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Explore our before and after gallery showcasing real results from our cosmetic procedures.
                </p>
                <Button 
                  onClick={() => navigate('/')} 
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8"
                >
                  View Before & After Gallery
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={(section) => navigate(section === 'home' ? '/' : `/${section}`)} />
    </div>
  );
}
