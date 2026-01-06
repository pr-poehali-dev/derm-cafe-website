export default function Footer() {
  return (
    <footer className="bg-muted mt-24 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">The Derm Cafe</h3>
            <p className="text-sm text-muted-foreground">
              Professional dermatology education and clinical expertise
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Medical Disclaimer</h4>
            <p className="text-xs text-muted-foreground">
              Content is for educational purposes only. Not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Derm Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
