"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, Clock4, Users } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services d'Assistance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Une expertise complète pour faciliter vos démarches de voyage et garantir l'obtention de vos visas
          </p>
        </motion.div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FileText className="w-8 h-8 text-primary" />,
                title: "Constitution de Dossier",
                description: "Nous vous guidons dans la préparation de tous les documents nécessaires pour votre demande de visa.",
                features: [
                  "Vérification des pièces justificatives",
                  "Aide au remplissage des formulaires",
                  "Traduction de documents",
                  "Organisation chronologique du dossier"
                ]
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Conseil Personnalisé",
                description: "Un accompagnement sur-mesure adapté à votre situation et à vos besoins spécifiques.",
                features: [
                  "Analyse de votre situation",
                  "Recommandations personnalisées",
                  "Stratégie de demande optimale",
                  "Support multilingue"
                ]
              },
              {
                icon: <Clock4 className="w-8 h-8 text-primary" />,
                title: "Suivi de Demande",
                description: "Nous suivons l'avancement de votre dossier et vous tenons informé à chaque étape.",
                features: [
                  "Suivi en temps réel",
                  "Notifications d'avancement",
                  "Gestion des délais",
                  "Relances si nécessaire"
                ]
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
                title: "Vérification Finale",
                description: "Une revue complète de votre dossier avant soumission pour maximiser vos chances de succès.",
                features: [
                  "Double vérification",
                  "Contrôle qualité",
                  "Conformité aux exigences",
                  "Validation finale"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}