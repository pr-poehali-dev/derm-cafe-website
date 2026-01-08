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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#1a1625] via-[#251f3d] to-[#1a1625] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#534F8C]/20 to-transparent rounded-full blur-[100px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <p className="text-[#6961D7] text-sm font-medium tracking-wider uppercase text-center">TOPICS</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-center text-white">
              TOPICS WE EXPLORE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#6961D7]/20 space-y-6"
              >
                <div className="text-6xl font-bold text-[#6961D7]">
                  0{index + 1}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black">{topic.title}</h3>
                  <p className="text-black/70 leading-relaxed">
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