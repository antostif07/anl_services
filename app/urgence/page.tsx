"use client";

import { motion } from "framer-motion";
import { Phone, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Urgence() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-destructive text-white">
        <motion.div 
          className="max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Assistance d'Urgence 24/7</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Une urgence concernant votre dossier ? Notre équipe est disponible 24h/24 et 7j/7 pour vous assister.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+243823064789"
              className="bg-white text-destructive px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +243 823 064 789
            </a>
          </div>
        </motion.div>
      </section>

      {/* Informations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Quand Nous Contacter en Urgence ?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Problème de Visa Imminent",
                  description: "Votre départ est prévu dans moins de 72h et vous rencontrez des difficultés avec votre visa."
                },
                {
                  title: "Documents Manquants",
                  description: "Vous constatez qu'il manque des documents essentiels à la dernière minute."
                },
                {
                  title: "Changement de Situation",
                  description: "Un changement soudain dans votre situation nécessite une modification urgente de votre dossier."
                },
                {
                  title: "Convocation Impromptue",
                  description: "Vous recevez une convocation urgente de l'ambassade ou du consulat."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white p-6 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Pas d'Urgence ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Si votre situation n'est pas urgente, nous vous invitons à nous contacter pendant nos horaires d'ouverture habituels.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Nous Contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}