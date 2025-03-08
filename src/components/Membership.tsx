import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Basic",
    price: "₹2,999",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free parking"
    ]
  },
  {
    name: "Premium",
    price: "₹4,999",
    features: [
      "All Basic features",
      "Group fitness classes",
      "Personal trainer consultation",
      "Towel service",
      "Sauna access"
    ]
  },
  {
    name: "Elite",
    price: "₹7,999",
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Nutrition consultation",
      "Priority class booking",
      "Guest passes",
      "Recovery zone access"
    ]
  }
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 transform-gpu"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 2,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-center text-red-500 mb-6">{plan.price}<span className="text-sm text-gray-500">/month</span></p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check size={20} className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button 
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;