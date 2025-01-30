"use client";

import { motion } from "framer-motion";
import { Award, Users, Globe, Shield } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <motion.div 
          className="max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos d'ANL Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Votre partenaire de confiance pour simplifier vos démarches de voyage depuis plus de 10 ans
          </p>
        </motion.div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-8">
              Fondée en 2014, ANL Services est née d'une volonté simple : rendre les démarches de voyage accessibles à tous. Notre expertise s'est construite au fil des années, nous permettant aujourd'hui d'accompagner des milliers de voyageurs dans leurs projets.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                number: "15,000+",
                label: "Clients Satisfaits"
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                number: "50+",
                label: "Pays Couverts"
              },
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                number: "95%",
                label: "Taux de Réussite"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                number: "10+",
                label: "Années d'Expérience"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une équipe d'experts passionnés, dédiés à la réussite de vos projets de voyage
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                name: "Marie Laurent",
                role: "Directrice",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Thomas Dubois",
                role: "Expert Visa",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Sophie Martin",
                role: "Responsable Client",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}