"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
} from "lucide-react";

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

interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Assistance Voyage",
      description: "Une assistance complète pour tous vos déplacements.",
      link: "/services/assistance-voyage",
      image: "https://images.unsplash.com/photo-1530469641172-8ac15d0a7d6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm95YWdlfGVufDB8fDB8fHwy",
    },
    {
      title: "Service Traiteur",
      description: "Des menus sur mesure pour tous vos événements.",
      link: "/services/service-traiteur",
      image: "https://images.unsplash.com/photo-1475610003943-f778cd2c3a6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhJTIwZm9vZHxlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      title: "Commerce Général",
      description: "Des solutions pour vos besoins commerciaux.",
      link: "/services/commerce-generale",
      image: "https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-blue-600 text-white overflow-hidden"> {/* Ajout de overflow-hidden */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXN8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=2070&q=80')", // Image de fond
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay noir */}
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Nos Services
          </h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Découvrez l'ensemble de nos services pour vous accompagner dans vos
            démarches.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-xl shadow-sm"
                variants={fadeIn}
              >
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500} // Ajustez la largeur selon vos besoins
                    height={300} // Ajustez la hauteur selon vos besoins
                    className="rounded-lg object-cover h-full w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}