import { Github, Heart, Zap, Coffee, GalleryVertical } from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import LifeTrakerThumnail from "../thumnails/LifeTrakerThumnail.png";
import TossSDKShoppingThumnail from "../thumnails/TossSDKShoppingThumnail.png";
import BookRentalThumnail from "../thumnails/BookRentalThumnail.png";

function ProjectsSection() {
  const projects = [
    {
      title: "CHART.JS 기반 투두 리스트 앱",
      description:
        "LifeTracker는 사용자가 매일 할 일과 감정을 기록하고, 이를 통해 성장하는 모습을 추적할 수 있는 애플리케이션입니다.",
      image: LifeTrakerThumnail,
      technologies: ["React", "Chart", "MySQL", "Node", "JWT", "Toastify"],
      github: "https://github.com/sharknell/LifeCheck",
      ppt: "https://docs.google.com/presentation/d/18fY0Gc9YaZbUXK8AxPuI0bmu-7HuuAa1dlIK1rY6FCM/edit?usp=sharing",
      type: "Web 앱 프로젝트",
      mood: "📝 편안한",
      status: "완료",
      gradient: "from-purple-600 to-pink-600",
      icon: Heart,
    },
    {
      title: "Toss-SDK 쇼핑몰",
      description:
        "React 와 Node 그리고 MySQL 를 기반으로 결제까지 진행되는 화장품 쇼핑몰입니다.",
      image: TossSDKShoppingThumnail,
      technologies: ["React", "JavaScript", "TossPayment-SDK", "Node"],
      github: "https://github.com/sharknell/project-one?tab=readme-ov-file",
      ppt: "https://docs.google.com/presentation/d/12kdZX0Zk6109kq7cENdgUdTiy0Qa__zMpzITm1oZvoc/edit?usp=sharing",
      type: "일상 도구",
      mood: "🛒 고민중",
      status: "완료",
      gradient: "from-green-600 to-teal-600",
      icon: Coffee,
    },
    {
      title: "카카오 API 를 활용한 도서대여 서비스",
      description:
        "React, Node, MySQL, 카카오 API를 활용해 책 정보 조회와 대여 서비스를 제공합니다.",
      image: BookRentalThumnail,
      technologies: ["React", "Kakao API", "MySQL", "Node", "Toastify"],
      github: "https://github.com/sharknell/book-tosspay",
      ppt: "https://docs.google.com/presentation/d/1nhGEgDsrFeCX9Ev1fjhn8LCDW1yltH-r5HZiyiepWiM/edit?usp=sharing",
      type: "재미 프로젝트",
      mood: "📙 유쾌한",
      status: "완료",
      gradient: "from-orange-600 to-red-600",
      icon: Zap,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "완료":
        return "bg-green-500";
      case "진행중":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                만든 것들
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              일상의 불편함을 해결하거나 단순히 재미있어서 만든
              프로젝트들입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                  ></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 text-foreground border-0">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getStatusColor(
                        project.status
                      )} text-white border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge
                      variant="outline"
                      className="bg-background/80 border-0"
                    >
                      {project.mood}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="pb-4">
                    <h3 className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center font-semibold">
                      <project.icon className="h-5 w-5 mr-2 text-primary" />
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/10 transition-all duration-200"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                    <a
                      href={project.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary/10 transition-all duration-200"
                      >
                        <GalleryVertical className="mr-2 h-4 w-4" />
                        PPT
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              더 많은 프로젝트들이 GitHub에 있어요!
            </p>
            <Button variant="outline" size="lg" className="hover:bg-primary/10">
              <Github className="mr-2 h-5 w-5" />
              <a
                href="https://github.com/sharknell"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub에서 더 보기
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
