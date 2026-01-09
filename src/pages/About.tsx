import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-semibold hover:opacity-80 transition-opacity"
            >
              The Derm Café
            </button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
            >
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <section className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-semibold">
                About The Derm Café
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                The Derm Café is an educational platform created to share knowledge and expert insight into dermatology through podcasts, videos, and thoughtful discussion.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Our Mission & Who We Are
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  The Derm Café is the creation of Dr. David Harvey, a board-certified dermatologist and fellowship trained Mohs Surgeon.
                </p>
                <p>
                  Its mission is to educate the public about skin diseases and treatments that are relevant to the specialties of dermatology and plastic surgery.
                </p>
                <p>
                  It is through knowledge that we grow, and accordingly, it is our hope that our podcasts will instill a desire in our listeners to take an interest in both personal growth and skin health awareness.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                About Dr. David Harvey
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Dr. David Harvey is board certified in Micrographic and Dermatologic Surgery, the first group of dermatologic surgeons in the country to achieve this designation. He has been chosen as one of Atlanta's "Top Docs" for the past three years.
                </p>
                <p>
                  Dr. Harvey has served as Past President for both the Georgia and Florida Society of Dermatology and Dermatological Surgery societies. He currently serves as an adjunct assistant professor at the Emory School of Medicine, where he instructs dermatology residents and medical students.
                </p>
                <p>
                  With over 25 years' experience in cosmetic and dermatologic surgery, Dr. Harvey's expertise lies in Mohs Micrographic Surgery, dermatoplastic surgery, laser surgery, and eyelid reconstruction. He has authored over 30 peer-reviewed publications in the fields of skin cancer, cosmetic dermatology, aging skin, and eyelid surgery.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Clinical Focus
              </h2>
              <ul className="space-y-3 text-lg text-foreground/80">
                <li>— Skin Cancer Treatment</li>
                <li>— Mohs Micrographic Surgery</li>
                <li>— Dermatoplastic & Reconstructive Surgery</li>
                <li>— Laser Surgery</li>
                <li>— Cosmetic and Dermatologic Surgery</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold">
                Education & Media
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Through The Derm Café, Dr. Harvey combines clinical practice with education by sharing expert insight through podcasts and videos. These conversations are designed to help listeners better understand dermatologic conditions, treatments, and procedures in an accessible and educational format.
              </p>
            </section>

            <section className="space-y-6 border-t border-border pt-12">
              <h2 className="text-2xl font-semibold">
                Disclaimer
              </h2>
              <div className="space-y-3 text-base text-foreground/70 leading-relaxed">
                <p>
                  The content shared reflects our opinions and is provided for educational purposes only.
                </p>
                <p>
                  It may not apply to your individual situation and should not replace a consultation with a medical professional.
                </p>
                <p>
                  We have no financial interest in any products, devices, or techniques mentioned.
                </p>
              </div>
            </section>

            <section className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate('/')}
                className="flex-1"
              >
                Explore Podcasts & Videos
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="flex-1"
              >
                View Clinical Expertise
              </Button>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-sm text-foreground/60">
            <p>© {new Date().getFullYear()} The Derm Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
