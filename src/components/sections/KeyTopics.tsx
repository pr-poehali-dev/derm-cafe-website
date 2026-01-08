import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface KeyTopicsProps {
  onNavigate: (section: string) => void;
}

const topics = [
  {
    icon: "GraduationCap",
    title: "Dermatology Education",
    description: "Podcasts and videos focused on understanding skin conditions, treatments, and overall skin health."
  },
  {
    icon: "Stethoscope",
    title: "Clinical Expertise",
    description: "Clinical experience in dermatology, including skin cancer treatment and Mohs surgery."
  },
  {
    icon: "Sparkles",
    title: "Cosmetic Dermatology & Surgery",
    description: "Cosmetic procedures and surgical techniques grounded in medical expertise."
  }
];

export default function KeyTopics({ onNavigate }: KeyTopicsProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center">
            Topics We Explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 space-y-4"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={topic.icon as any} size={28} className="text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}