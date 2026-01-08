import Icon from '@/components/ui/icon';

export default function Disclaimer() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-amber-600 dark:text-amber-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Disclaimer
                </h2>
              </div>
              
              <div className="space-y-3 text-foreground/70 leading-relaxed">
                <p>
                  The topics and suggestions that are mentioned are our opinions only and may not apply to your particular situation.
                </p>
                <p>
                  Please check with your medical professional before following the advice or recommendations that are stated in our podcasts, as they may not pertain to you.
                </p>
                <p>
                  We have no financial interest in any products, devices, or techniques that are mentioned. These are referred to for educational purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}