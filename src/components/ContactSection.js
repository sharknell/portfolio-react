import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import emailjs from "emailjs-com";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Label from "./ui/Label";

function Toast({ type, message, onClose }) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`flex items-center px-4 py-3 rounded shadow-lg transition-all duration-300 ${
          type === "success"
            ? "bg-green-100 text-green-700 border border-green-400"
            : "bg-red-100 text-red-700 border border-red-400"
        }`}
      >
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
        ) : (
          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
        )}
        <p className="text-sm">{message}</p>
        <button onClick={onClose} className="ml-4 text-xs">
          ✕
        </button>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_sk5kurf",
        "template_qj8x8gr",
        templateParams,
        "nIyemAWi2_lF3vgOZ"
      )
      .then(() => {
        setToast({
          type: "success",
          message: "메시지가 성공적으로 전송되었습니다!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setToast({
          type: "error",
          message: "전송에 실패했습니다. 다시 시도해주세요.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "이메일",
      value: "bcspeirs@icloud.com",
      description: "언제든지 연락주세요",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      title: "전화",
      value: "+82 10-2328-5750",
      description: "평일 24시",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      title: "위치",
      value: "관악구, 서울, 대한민국",
      description: "대면 미팅 가능",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기해보세요.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-foreground font-medium mb-1">
                    {method.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* FORM */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  연락해 주세요!
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  새로운 프로젝트, 협업 제안, 또는 인사말이라도 환영합니다.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">빠른 응답</p>
                    <p className="text-sm text-muted-foreground">
                      평균 응답 시간: 2-4시간
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM 카드 */}
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl">
              <div className="p-6">
                <h3 className="flex items-center font-semibold text-xl mb-6">
                  <Send className="mr-2 h-5 w-5 text-primary" />
                  메시지 보내기
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일 *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="hong@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">제목</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="프로젝트 협업 제안"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">메시지 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 resize-none"
                      placeholder="안녕하세요! 프로젝트에 대해 이야기하고 싶습니다..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        메시지 전송
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
