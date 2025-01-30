"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Nos Coordonnées</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-primary" />,
                    title: "Téléphone",
                    content: "+243 823 064 789",
                    description: "Du lundi au vendredi, 9h-18h"
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-primary" />,
                    title: "Email",
                    content: "contact@anlservices.com",
                    description: "Réponse sous 24h ouvrées"
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-primary" />,
                    title: "Adresse",
                    content: "", //"123 Avenue des Champs-Élysées",
                    description: "", //"75008 Paris, France"
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-primary" />,
                    title: "Horaires",
                    content: "Lun-Ven: 9h-18h",
                    description: "Week-end: Fermé"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-1">{item.content}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Envoyer
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}