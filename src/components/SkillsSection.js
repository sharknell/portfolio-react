import { useState } from "react";
import Card from "./ui/Card";
import Progress from "./ui/Progress";
import ParticleWaveCanvas from "./3d/ParticleWave";

function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 50 },
        { name: "Tailwind CSS", level: 35 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "MySQL", level: 45 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [{ name: "Git", level: 45 }],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <ParticleWaveCanvas />

      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto backdrop-blur-sm bg-background/50 p-4 rounded-lg border border-primary/10">
              다양한 기술 스택을 활용하여 완성도 높은 프로젝트를 구현합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group backdrop-blur-sm bg-card/50 border-primary/10 ${
                  hoveredCategory === index
                    ? "ring-2 ring-primary/50 shadow-primary/25"
                    : ""
                }`}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="text-center pb-4 p-6">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4 px-6 pb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={hoveredCategory === index ? skill.level : 0}
                        className="h-2"
                        style={{
                          transition: `all ${
                            skillIndex * 100 + 300
                          }ms ease-out`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
