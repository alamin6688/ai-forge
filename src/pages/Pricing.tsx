
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Shield } from "lucide-react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const plans = [
  {
    name: "Free",
    price: "৳০",
    period: "/month",
    description: "Basic tools এর জন্য perfect",
    features: [
      "৫০টি credits monthly",
      "Basic paraphrasing",
      "Standard summarizer",
      "Community support",
      "Basic export options"
    ],
    popular: false,
    cta: "Get Started",
    icon: Shield,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200"
  },
  {
    name: "Starter",
    price: "৳২৯৯",
    period: "/month",
    description: "Small businesses এবং freelancers এর জন্য",
    features: [
      "৫০০টি credits monthly",
      "Advanced paraphrasing",
      "Smart summarizer",
      "Caption generator",
      "Priority support",
      "PDF export",
      "History tracking"
    ],
    popular: true,
    cta: "Start Free Trial",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500"
  },
  {
    name: "Pro",
    price: "৳৭৯৯",
    period: "/month",
    description: "Large teams এবং agencies এর জন্য",
    features: [
      "২০০০টি credits monthly",
      "All premium features",
      "Custom tone options",
      "Bulk processing",
      "API access",
      "Dedicated support",
      "Team collaboration",
      "White-label options"
    ],
    popular: false,
    cta: "Contact Sales",
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500"
  }
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Monthly Credits", free: "50", starter: "500", pro: "2000" },
      { name: "Bangla Paraphraser", free: "Basic", starter: "Advanced", pro: "Premium" },
      { name: "Text Summarizer", free: "Standard", starter: "Smart", pro: "AI-Powered" },
      { name: "Caption Generator", free: "❌", starter: "✅", pro: "✅" },
    ]
  },
  {
    category: "Advanced Tools",
    features: [
      { name: "Custom Tone Options", free: "❌", starter: "Limited", pro: "Unlimited" },
      { name: "Bulk Processing", free: "❌", starter: "❌", pro: "✅" },
      { name: "API Access", free: "❌", starter: "❌", pro: "✅" },
      { name: "White-label", free: "❌", starter: "❌", pro: "✅" },
    ]
  },
  {
    category: "Support & Export",
    features: [
      { name: "Support Level", free: "Community", starter: "Priority", pro: "Dedicated" },
      { name: "Export Formats", free: "Text", starter: "PDF, DOCX", pro: "All Formats" },
      { name: "History Tracking", free: "7 days", starter: "30 days", pro: "Unlimited" },
      { name: "Team Collaboration", free: "❌", starter: "❌", pro: "✅" },
    ]
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold gradient-text mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              আপনার needs অনুযায়ী perfect plan choose করুন। সব plans এ ৭-day free trial পাবেন।
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? `border-2 ${plan.borderColor} scale-105` : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-full ${plan.bgColor} mb-4`}>
                      <IconComponent className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Feature Comparison
            </h2>
            <p className="text-muted-foreground">
              সব features এর detailed comparison দেখুন
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {comparisonFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0">
                <div className="bg-gray-50 px-6 py-4">
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-100 last:border-b-0">
                    <div className="font-medium text-foreground">{feature.name}</div>
                    <div className="text-center text-muted-foreground">{feature.free}</div>
                    <div className="text-center text-blue-600 font-medium">{feature.starter}</div>
                    <div className="text-center text-purple-600 font-medium">{feature.pro}</div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                q: "কিভাবে payment করব?",
                a: "আমরা Stripe, Bkash এবং অন্যান্য local payment methods support করি।"
              },
              {
                q: "Free trial কতদিনের?",
                a: "সব paid plans এ ৭ দিনের free trial পাবেন। কোন commitment নেই।"
              },
              {
                q: "Credits expire হয় কি?",
                a: "Monthly credits প্রতি মাসে reset হয়। Unused credits carry forward হয় না।"
              },
              {
                q: "Plan change করতে পারব?",
                a: "যেকোনো সময় plan upgrade বা downgrade করতে পারবেন।"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                আজই শুরু করুন এবং আপনার productivity বাড়ান
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
