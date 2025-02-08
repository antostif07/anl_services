"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  Plane,
  Shield,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AssistanceVoyageDetails() {
  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-indigo-600 text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb444b72a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", // Image sur le voyage
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Assistance Voyage Personnalisée
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Votre sécurité et votre tranquillité d'esprit, où que vous soyez.
          </p>
        </motion.div>
      </section>

      {/* Services Détaillés */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Phone className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Assistance Téléphonique 24/7",
                description:
                  "Un conseiller à votre écoute à tout moment, où que vous soyez.",
                details: [
                  "Disponible dans plusieurs langues",
                  "Accès direct à des experts",
                  "Conseils et informations pratiques",
                ],
              },
              {
                icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Assistance Médicale à Distance",
                description:
                  "Consultation et suivi médical par téléphone ou vidéo.",
                details: [
                  "Médecins qualifiés disponibles 24/7",
                  "Diagnostic et conseils médicaux",
                  "Orientation vers des professionnels de santé locaux",
                ],
              },
              {
                icon: (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                ),
                title: "Prise en Charge des Frais Médicaux",
                description: "Avance et remboursement de vos dépenses de santé.",
                details: [
                  "Avance des frais d'hospitalisation",
                  "Remboursement des consultations médicales",
                  "Prise en charge des médicaments",
                ],
              },
              {
                icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Organisation du Rapatriement",
                description: "Retour anticipé en cas d'urgence.",
                details: [
                  "Coordination du transport médical",
                  "Assistance administrative pour le retour",
                  "Prise en charge des coûts de transport",
                ],
              },
              {
                icon: <Plane className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Assistance Juridique",
                description:
                  "Conseils et accompagnement en cas de problèmes légaux.",
                details: [
                  "Mise en relation avec des avocats locaux",
                  "Traduction de documents juridiques",
                  "Assistance en cas de litige",
                ],
              },
              {
                icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />,
                title: "Assurance Voyage Complète",
                description: "Couverture complète pour tous vos déplacements.",
                details: [
                  "Couverture des frais médicaux",
                  "Assistance en cas de perte de bagages",
                  "Indemnisation en cas d'annulation de voyage",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2 md:mb-4">{service.description}</p>
                {service.details && (
                  <ul className="list-disc list-inside text-gray-500">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
            Partez l'esprit tranquille avec notre assistance voyage
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Contactez-nous pour une offre personnalisée
          </p>
          <Link
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Obtenir un Devis
            <ArrowRight className="inline-block ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}