import Icon from '@/components/ui/icon';

export default function Disclaimer() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-3xl p-8 sm:p-12 border border-amber-200 dark:border-amber-900/50">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Icon name="Info" size={28} className="text-amber-600 dark:text-amber-500" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-medium">
                Disclaimer
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  The topics and suggestions that are mentioned are our opinions only and may not apply to your particular situation.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Please check with your medical professional before following any advice or recommendations discussed in our podcasts, as they may not pertain to you.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We have no financial interest in any products, devices, or techniques that are mentioned. All content is provided for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
