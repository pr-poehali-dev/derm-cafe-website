import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function SkinCancer() {
  const navigate = useNavigate();

  const cancerTypes = [
    {
      id: 'basal-cell',
      title: 'Basal Cell Carcinoma',
      description: 'The most common type of skin cancer',
      icon: 'Shield'
    },
    {
      id: 'squamous-cell',
      title: 'Squamous Cell Carcinoma',
      description: 'Second most common skin cancer',
      icon: 'AlertCircle'
    },
    {
      id: 'melanoma',
      title: 'Malignant Melanoma',
      description: 'The most serious form of skin cancer',
      icon: 'AlertTriangle'
    }
  ];

  const mohsResources = [
    { title: 'View Mohs Surgery FAQ', href: '/mohs-faq', icon: 'HelpCircle' },
    { title: 'Mohs Surgery Before & After', href: '/mohs-gallery', icon: 'Image' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Skin Cancer
          </h1>
          <p className="text-xl text-muted-foreground uppercase tracking-wider">
            Be good to yourself, and your skin
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Skin Cancer</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Skin cancer is the most common form of cancer in the U.S., affecting over two million people annually. 
              Along with genetic predisposition and certain biological factors, e.g., a fair complexion, many freckles, 
              a history of tanning beds and excessive sun exposure, and immunosuppression, these factors can increase 
              the likelihood of developing skin cancer in your lifetime. The main skin cancers in terms of their prevalence are
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Basal Cell Carcinoma</li>
              <li>Squamous Cell Carcinoma</li>
              <li>Malignant Melanoma</li>
            </ul>
            <p>
              We will be covering this important subject in our dermcasts so that our listeners will be able to 
              recognize and seek care for these cancers at an early stage.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Skin Cancer */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Types of Skin Cancer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cancerTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => navigate(`/skin-cancer/${type.id}`)}
                className="group bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon name={type.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground">{type.description}</p>
                <div className="flex items-center gap-2 mt-4 text-primary">
                  <span className="text-sm font-medium">Learn more</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Treatment Approaches</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              While skin cancer can negatively impact your health and appearance, there are many effective treatment 
              approaches, including Mohs surgery. With a success rate of 99 percent for certain tumors, Mohs surgery 
              has the advantages of a high cure rate, tissue-sparing effects, and cost-effectiveness.
            </p>
            <p>
              As a board-certified Micrographic Dermatologic Surgeon and fellow of the American Academy of Cosmetic Surgery, 
              Dr. H. will provide expert opinion on how to best address skin cancers from both a surgical and non-surgical 
              perspective. He will also be able to give some insights on the best options for cosmetic reconstruction if 
              surgery is indeed needed.
            </p>
          </div>
        </div>
      </section>

      {/* Mohs Surgery Resources */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Mohs Surgery Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mohsResources.map((resource) => (
              <button
                key={resource.href}
                onClick={() => navigate(resource.href)}
                className="group bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon name={resource.icon} size={24} className="text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors flex-1 text-left">
                  {resource.title}
                </span>
                <Icon name="ArrowRight" size={20} className="text-primary" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mohs Surgery Cost */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Mohs Surgery Cost</h2>
          <div className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At our medical spa, we offer a range of treatments to enhance your natural beauty and rejuvenate your skin. 
              Our pricing varies depending on the specific treatment and individual needs. During your consultation, our 
              experienced professionals will discuss the potential costs and help you choose the best treatment options to 
              achieve your desired results. Contact us now to schedule an appointment and learn more about our treatments 
              and pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Calendar" size={20} />
                Schedule an Appointment
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="MessageSquare" size={20} />
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Schedule a Consultation</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Schedule a consultation today and take the first step towards achieving your desired look. Our experienced 
            staff will assess your needs and recommend personalized treatment options. Contact us now to book your appointment.
          </p>
          <Button size="lg" className="gap-2">
            <Icon name="Calendar" size={20} />
            Schedule an Appointment
          </Button>
        </div>
      </section>

      {/* Questions & Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Questions & Contact</h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Again, if you have a specific question about skin cancer or just want to say hello, please feel free to 
            reach out to us at{' '}
            <a href="mailto:drh@thedermcafe.com" className="text-primary hover:underline font-medium">
              drh@thedermcafe.com
            </a>
            . We would love to hear from you, our valued listener.
          </p>
          <p className="text-xl font-medium text-foreground mt-8">
            Oh yes, one more thing:<br />
            <span className="text-primary">Be good to yourself.. and your skin!</span>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Educational Information:</strong> This section contains educational 
              information related to skin cancer. Some topics may reference clinical conditions and medical procedures. 
              Content is provided for educational purposes and is not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
