import { useState, useEffect, useMemo } from "react";
import { Github, Mail, ChevronDown, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import ThreeBackground from "./3d/ThreeBackground";
import FloatingElements from "./3d/FloatingElements";

function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "재미있는 것을 만드는",
      "아이디어를 실현하는",
      "일상을 편리하게 하는",
      "창의적인",
    ],
    []
  );

  useEffect(() => {
    const current = texts[currentIndex];
    const isComplete = !isDeleting && currentText === current;
    const isEmpty = isDeleting && currentText === "";

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          setCurrentText((prev) => current.slice(0, prev.length + 1));
        }

        if (isComplete) {
          setTimeout(() => setIsDeleting(true), 1000);
        }

        if (isEmpty) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <ThreeBackground />
      <FloatingElements />

      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 group">
            <div className="relative inline-block">
              <img
                src="https://via.placeholder.com/200"
                alt=""
                className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/25 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin"
                style={{ animationDuration: "10s" }}
              ></div>
              <div
                className="absolute inset-2 rounded-full border border-blue-500/20 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              ></div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              안녕하세요,{" "}
              <span className="text-primary bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                백승현
              </span>
              입니다
            </h1>

            <div className="text-xl md:text-3xl text-muted-foreground h-12 flex items-center justify-center">
              <span className="mr-2">저는</span>
              <span className="text-primary font-semibold min-w-[200px] text-left bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse text-primary">|</span>
              </span>
              <span className="ml-2">개발자입니다</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-background/20 p-4 rounded-lg border border-primary/10">
              일상에서 "이런 게 있으면 좋겠다"라고 생각하는 것들을 직접
              만들어보는 걸 좋아합니다. 사용자가 즐겁게 사용할 수 있는 서비스를
              만드는 것이 목표예요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover:bg-primary/10 transform hover:scale-105 transition-all duration-200 border-2 backdrop-blur-sm bg-background/20"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              <a
                href="https://github.com/sharknell"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보기
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
