export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/5be91477-fe81-410a-afd4-96d3a7b8026b/files/c00dfc28-bd50-4b5b-be69-7838ff4c3f69.jpg"
                  alt="Dr. David Harvey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-medium mb-4">About Dr. David Harvey</h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-muted-foreground italic mb-0">
                  Content from existing page: Professional biography, credentials, clinical focus, and media activity
                </p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none serif-text">

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">Professional Background</h3>
                <p className="text-muted-foreground">
                  Board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. 
                  Extensive experience in skin cancer treatment and Mohs micrographic surgery.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Education & Media</h3>
                <p className="text-muted-foreground">
                  Creator of The Derm Cafe podcast and video series, dedicated to making dermatology 
                  education accessible to both medical professionals and patients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Clinical Focus</h3>
                <p className="text-muted-foreground">
                  Specializing in skin cancer detection and treatment, cosmetic procedures, 
                  and general dermatological care with a focus on patient education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}