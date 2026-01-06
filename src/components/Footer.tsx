interface FooterProps {
  onNavigate?: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-muted mt-24 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium mb-4">Media</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleClick('media')} className="hover:text-primary transition-colors">
                  Podcasts & Videos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleClick('expertise')} className="hover:text-primary transition-colors">
                  Clinical Expertise
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleClick('about')} className="hover:text-primary transition-colors">
                  About Dr. Harvey
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Ask Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => handleClick('contact')} className="hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
              <strong>Medical Disclaimer:</strong> Content is for educational purposes only. Not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Derm Cafe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}