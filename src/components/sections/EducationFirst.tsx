import Icon from '@/components/ui/icon';

export default function EducationFirst() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12 lg:p-16 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Icon name="GraduationCap" size={32} className="text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">
                An Education-First Approach
              </h2>
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Derm Café is designed to prioritize understanding and education. Many complex topics — including skin cancer — are first introduced through conversations and educational media before any clinical imagery is presented.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This allows visitors to explore dermatologic topics at their own pace and choose how deeply they wish to engage with clinical material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}