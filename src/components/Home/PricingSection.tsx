
"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

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
      "Community support"
    ],
    popular: false,
    cta: "Get Started"
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
      "Export options"
    ],
    popular: true,
    cta: "Start Free Trial"
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
      "Team collaboration"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            আপনার needs অনুযায়ী perfect plan choose করুন
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            সব plans এ ৭-day free trial • No commitment • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
