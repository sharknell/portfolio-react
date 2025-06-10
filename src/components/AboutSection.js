import { MapPin, Coffee, Gamepad2, Music, Sword, Code } from "lucide-react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import InteractiveSphereCanvas from "./3d/InteractiveSphere";

function AboutSection() {
  const stats = [
    {
      icon: Code,
      label: "만든 프로젝트",
      value: "4개",
      color: "text-blue-500",
    },
    {
      icon: Gamepad2,
      label: "좋아하는 게임",
      value: "FPS",
      color: "text-green-500",
    },
    {
      icon: Music,
      label: "즐겨듣는 장르",
      value: "US-POP / EDM",
      color: "text-purple-500",
    },
    {
      icon: Sword,
      label: "취미",
      value: "에어소프트",
      color: "text-orange-500",
    },
  ];

  const interests = ["🎮 3D 총기 모딩", "📱 3D 군장 세팅", "📱웹 팬 클럽"];

  const personality = [
    {
      emoji: "🚀",
      trait: "새로운 것에 도전하는",
      description: "항상 흥미로운 프로젝트를 찾아다녀요",
    },
    {
      emoji: "🎯",
      trait: "완벽주의자",
      description: "디테일에 신경쓰고 깔끔한 결과물을 좋아해요",
    },
    {
      emoji: "🎨",
      trait: "창의적인",
      description: "독특하고 재미있는 아이디어를 구현하는 걸 즐겨요",
    },
    {
      emoji: "🤝",
      trait: "소통을 중시하는",
      description: "사용자 피드백을 듣고 개선하는 걸 좋아해요",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              개발을 통해 재미있는 것들을 만드는 사람입니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <InteractiveSphereCanvas />
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>관악구 ,서울, 대한민국</span>
                </div>

                <p className="text-lg leading-relaxed backdrop-blur-sm bg-background/50 p-4 rounded-lg border border-primary/10">
                  안녕하세요! 저는{" "}
                  <span className="text-primary font-semibold">
                    아이디어를 코드로 만드는 것
                  </span>
                  을 좋아하는 개발자입니다. 일상에서 불편한 점을 발견하면 앱으로
                  해결해보고, 재미있는 아이디어가 떠오르면 바로 만들어보는
                  편이에요.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground backdrop-blur-sm bg-background/30 p-4 rounded-lg border border-primary/5">
                  게임, 음악, 사진 등 다양한 취미를 가지고 있고, 이런 관심사들을
                  개발 프로젝트에 자주 진행해보고 싶은 꿈이 있습니다. 사용자가
                  "이거 재미있네!"라고 말할 수 있는 서비스를 만드는 게 목표예요.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-card/50 border-primary/10"
                  >
                    <div className="p-6 text-center">
                      <stat.icon
                        className={`h-8 w-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-card/30 backdrop-blur-sm border-primary/10 shadow-xl mb-8">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Coffee className="mr-3 h-6 w-6 text-primary" />
                저는 이런 사람이에요
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {personality.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <div>
                      <h4 className="font-semibold text-primary">
                        {item.trait}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-primary/10 shadow-xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Gamepad2 className="mr-3 h-6 w-6 text-primary" />
                만들고 싶은 것들
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-3 text-sm justify-center hover:bg-primary/10 transition-colors duration-200 cursor-default backdrop-blur-sm bg-background/50"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
