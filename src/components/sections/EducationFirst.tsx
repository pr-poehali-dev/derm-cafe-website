import Icon from '@/components/ui/icon';

export default function EducationFirst() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="GraduationCap" size={40} className="text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
              Education Comes First
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground serif-text leading-relaxed">
              <p>
                The Derm Cafe emphasizes understanding before treatment. Many topics — including skin cancer — are explored through educational podcasts and videos before clinical imagery is introduced.
              </p>
              <p>
                This approach allows visitors to learn at their own pace and choose how deeply they wish to explore clinical material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
