"use client";

import {
  ArrowRight,
  Phone as Phone24,
  FileText,
  CheckCircle2,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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

const cardHover = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
    },
  },
};

interface Destination {
  title: string;
  description: string;
  items: string[];
  flag: string;  // Ajout de la propriété pour l'URL du drapeau
}

export default function Home() {
  const destinations: Destination[] = [
    {
      title: "Espace Schengen",
      description:
        "Constitution de dossiers pour visa Schengen et assistance complète",
      items: [
        "Formulaires de demande",
        "Justificatifs nécessaires",
        "Assurance voyage",
      ],
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png", // URL du drapeau de l'UE
    },
    {
      title: "États-Unis",
      description: "Accompagnement ESTA et visa américain",
      items: ["Demande ESTA", "Formulaire DS-160", "Préparation entretien"],
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", // URL du drapeau des États-Unis
    },
    {
      title: "Canada",
      description: "AVE et demandes de visa canadien",
      items: ["Demande AVE", "Biométrie", "Documents supports"],
      flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg", // URL du drapeau du Canada
    },
    {
      title: "Chine",
      description: "Assistance visa chinois complète",
      items: ["Lettre d'invitation", "Formulaire spécifique", "Planning détaillé"],
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", // URL du drapeau de la Chine
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Simplifiez Vos Démarches de Voyage
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Experts en constitution de dossiers pour vos visas et autorisations
            de voyage
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 text-lg font-semibold transition-colors"
            >
              Nous Contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full flex items-center justify-center gap-2 text-lg font-semibold transition-colors"
            >
              Nos Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Assistance Pour Vos Destinations
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons dans la préparation de vos dossiers de
              voyage pour les destinations majeures
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.title}
                className="bg-gray-50 rounded-xl p-6 md:p-8 text-center"
                variants={fadeIn}
                whileHover={cardHover.hover}
              >
                  <div className="w-12 h-12 md:w-16 md:h-16  rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Image
                        src={destination.flag}
                        alt={`Drapeau de ${destination.title}`}
                        width={50}
                        height={30}
                        className="rounded"
                      />
                  </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4">{destination.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {destination.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre Accompagnement
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
                title: "Vérification Dossier",
                description:
                  "Examen complet de vos documents pour garantir un dossier conforme",
              },
              {
                icon: <Users className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
                title: "Conseil Personnalisé",
                description:
                  "Accompagnement sur-mesure selon votre situation et destination",
              },
              {
                icon: <Calendar className="w-6 h-6 md:w-7 md:h-7 text-primary" />,
                title: "Suivi de Demande",
                description:
                  "Suivi régulier de l'avancement de votre dossier jusqu'à l'obtention",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
                variants={fadeIn}
                whileHover={cardHover.hover}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Prêt à Démarrer Votre Projet de Voyage ?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Nous sommes là pour vous guider à chaque étape de votre dossier
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Phone24 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 md:mb-4" />,
                title: "Support Expert",
                description: "Conseil personnalisé",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-3 md:mb-4" />,
                title: "95%",
                description: "Taux de réussite",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
                variants={fadeIn}
                whileHover={cardHover.hover}
              >
                {stat.icon}
                <p className="text-xl md:text-2xl font-bold">{stat.title}</p>
                <p>{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}