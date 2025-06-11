import { Gamepad2, Music, Camera, Swords, Palette, Zap } from "lucide-react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

function FunSection() {
  const funFacts = [
    {
      icon: Gamepad2,
      title: "게임 취향",
      content:
        "FPS와 인디게임을 좋아해요. 특히 스토리가 좋은 게임에 빠져들곤 합니다.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Music,
      title: "음악 취향",
      content:
        "Lo-fi, 재즈, 클래식을 들으며 코딩해요. 집중할 때는 빗소리도 함께!",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Camera,
      title: "사진 찍기",
      content:
        "일상의 소소한 순간들을 담는 걸 좋아해요. 특히 하늘과 카페 사진을 자주 찍어요.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Swords,
      title: "에어소프트",
      content:
        "에어소프트 총을 수집하고, 커스터마이징하는 걸 좋아해요. 실제 전투는 아니지만, 전술적인 재미가 쏠쏠해요.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const tools = [
    { name: "VS Code", emoji: "💻", reason: "확장 프로그램이 너무 좋아요" },
    { name: "Figma", emoji: "🎨", reason: "디자인 아이디어를 구체화할 때" },
    { name: "Notion", emoji: "📝", reason: "모든 것을 정리하는 만능 도구" },
    { name: "Spotify", emoji: "🎵", reason: "코딩할 때 필수 BGM" },
    { name: "GitHub", emoji: "🐙", reason: "코드의 안전한 보금자리" },
    {
      name: "Chrome DevTools",
      emoji: "🔧",
      reason: "버그 잡을 때의 든든한 친구",
    },
  ];

  const currentlyInto = [
    "🎮 인디게임 '할로우 나이트' 플레이 중",
    "📚 '클린 코드' 책 읽는 중",
    "🎵 새로운 Lo-fi 플레이리스트 만들기",
    "📱 Flutter로 모바일 앱 만들어보기",
    "☕ 집 근처 카페 맛집 탐방",
    "🎨 새로운 디자인 트렌드 찾아보기",
  ];

  return (
    <section
      id="fun"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                개발 외의 이야기
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              개발자이기 전에 한 명의 사람으로서의 모습들이에요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {funFacts.map((fact, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${fact.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <fact.icon className={`h-8 w-8 ${fact.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fact.content}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl mb-12">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Zap className="mr-3 h-6 w-6 text-primary" />
                자주 사용하는 도구들
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary/5 transition-colors bg-background/50"
                  >
                    <span className="text-2xl">{tool.emoji}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {tool.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Palette className="mr-3 h-6 w-6 text-primary" />
                요즘 관심있는 것들
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentlyInto.map((item, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-3 text-sm justify-start hover:bg-primary/10 transition-colors duration-200 cursor-default backdrop-blur-sm bg-background/50"
                  >
                    {item}
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

export default FunSection;
