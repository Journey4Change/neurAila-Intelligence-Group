import { Users, Target, Zap } from "lucide-react";

const VisionSection = () => {
  const goals = [
    {
      icon: Users,
      number: "100K+",
      label: "Students to Help",
      description: "Empowering learners across Africa with AI-driven education"
    },
    {
      icon: Target,
      number: "10+",
      label: "AI Apps to Launch",
      description: "Innovative solutions addressing real African challenges"
    },
    {
      icon: Zap,
      number: "1",
      label: "Transformative Journey",
      description: "Journey4Change inspiring nationwide transformation"
    }
  ];

  return (
    <section id="vision" className="py-24 gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Founder Quote */}
          <div className="text-white">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "We envision an Africa where technology serves humanity, where AI amplifies 
              our collective potential, and where innovation creates opportunities for every person 
              to thrive."
            </blockquote>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">N</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Founder</p>
                <p className="text-white/80">neurAila Intelligence Group</p>
              </div>
            </div>
          </div>

          {/* Right side - Impact Goals */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Impact Goals
            </h2>
            
            {goals.map((goal, index) => (
              <div 
                key={goal.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{goal.number}</div>
                    <div className="text-white/80 font-medium">{goal.label}</div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;