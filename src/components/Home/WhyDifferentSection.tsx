
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"
import { Brain, Zap, Shield, Globe, Code, Sparkles } from "lucide-react"

const differentiators = [
  {
    author: {
      name: "Advanced AI Models",
      handle: "State-of-the-art technology",
      avatar: "/placeholder.svg"
    },
    text: "Our AI uses the latest GPT-4 and Claude models with custom fine-tuning for English content generation, ensuring superior quality and accuracy.",
    icon: Brain
  },
  {
    author: {
      name: "Lightning Fast Processing",
      handle: "Optimized performance",
      avatar: "/placeholder.svg"
    },
    text: "Generate, paraphrase, and summarize content in seconds with our optimized infrastructure and smart caching technology.",
    icon: Zap
  },
  {
    author: {
      name: "Privacy & Security First",
      handle: "Your data is protected",
      avatar: "/placeholder.svg"
    },
    text: "We don't store your content. All processing happens in real-time with end-to-end encryption and zero data retention policies.",
    icon: Shield
  },
  {
    author: {
      name: "Global Language Support",
      handle: "Multilingual capabilities",
      avatar: "/placeholder.svg"
    },
    text: "From Bengali to English and beyond, our AI understands context and cultural nuances for better content adaptation.",
    icon: Globe
  },
  {
    author: {
      name: "Developer-Friendly API",
      handle: "Easy integration",
      avatar: "/placeholder.svg"
    },
    text: "Simple REST API with comprehensive documentation, SDKs, and webhook support for seamless integration into your workflow.",
    icon: Code
  },
  {
    author: {
      name: "Smart Context Awareness",
      handle: "Understands your intent",
      avatar: "/placeholder.svg"
    },
    text: "Our AI maintains context across conversations and understands tone, style, and purpose for more relevant content generation.",
    icon: Sparkles
  }
]

// Convert differentiators to testimonial format with icon avatars
const testimonials = differentiators.map((diff) => {
  const IconComponent = diff.icon
  return {
    author: {
      name: diff.author.name,
      handle: diff.author.handle,
      avatar: `/placeholder.svg` // Will be replaced with icon
    },
    text: diff.text,
    iconComponent: IconComponent
  }
})

const WhyDifferentSection = () => {
  return (
    <TestimonialsSection
      title="Why Our AI is Different"
      description="Discover what makes our AI tools stand out from the competition with cutting-edge technology and user-focused design"
      testimonials={testimonials}
      className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50"
    />
  )
}

export default WhyDifferentSection
