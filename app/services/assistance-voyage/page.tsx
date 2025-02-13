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
import Image from "next/image";
import React from 'react';

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

interface Zone {
  name: string;
  description: string;
  images: string[];
  services: string[];
  flag: string; // Ajout de la propriété pour l'URL du drapeau
}

export default function AssistanceVoyageDetails() {
  const zones: Zone[] = [
    {
      name: "Espace Schengen",
      description: "Facilitation de vos voyages dans l'espace Schengen avec une assistance dédiée.",
      images: [
        "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXIlMjBlaWZmZWx8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1678008630409-1608b48e7ff7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlbGdpcXVlJTIwYXRvbWl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1519458184713-7a7118c219d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      services: ["Assurance Voyage", "Assistance Administrative", "Interprétation"],
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png", // URL du drapeau de l'UE
    },
    {
      name: "États-Unis",
      description: "Un accompagnement personnalisé pour vos voyages aux USA, de la demande de visa à l'assistance sur place.",
      images: [
        "https://plus.unsplash.com/premium_photo-1694475458100-5410cc40d07a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIweW9yayUyMHN0YXR1ZSUyMGRlJTIwbGElMjBsaWJlcnRlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        "https://images.unsplash.com/photo-1493770348161-3698ed94ebda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      ],
      services: ["Assistance Visa", "Conseils Juridiques", "Assistance en Cas de Perte de Documents"],
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", // URL du drapeau des États-Unis
    },
    {
      name: "Canada",
      description: "Voyagez au Canada en toute sérénité grâce à notre assistance complète.",
      images: [
        "https://images.unsplash.com/photo-1727529269745-ec6470562db4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmFkYSUyMG90dGF3YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1542704792-e30dac463c90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9yb250b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=2073&q=80",
        "https://images.unsplash.com/photo-1504928418050-4ca924cae237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      services: ["Assistance AVE", "Soutien Linguistique", "Gestion des Imprévus"],
      flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg", // URL du drapeau du Canada
    },
    {
      name: "Chine",
      description: "Profitez d'une assistance sur mesure pour faciliter vos déplacements en Chine.",
      images: [
        "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlaWppbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1597991840620-cecdef61763b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVraW4lMjBjaGluYSUyMGNpdHl8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=2070&q=80",
         "https://images.unsplash.com/photo-1505702432832-89ea75d0c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      services: ["Assistance Visa", "Interprètes Locaux", "Conseils Culturels"],
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", // URL du drapeau de la Chine
    },
  ];

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-indigo-600 text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488646953014-85cb444b72a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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

      {/* Zones Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="space-y-12 md:space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {zones.map((zone, index) => (
              <motion.div
                key={zone.name}
                className="flex flex-col"
                variants={fadeIn}
                 initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <Image
                    src={zone.flag}
                    alt={`Drapeau de ${zone.name}`}
                    width={30}
                    height={20}
                    className="rounded mr-2"
                  />
                  <h2 className="text-2xl md:text-3xl font-semibold">{zone.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{zone.description}</p>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nos Services Incluent:</h3>
                  <ul className="list-disc list-inside text-gray-500">
                    {zone.services.map((service, i) => (
                      <li key={i} className="mb-1">{service}</li>
                    ))}
                  </ul>
                </div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6"
                      variants={staggerContainer}
                         initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                  >
                  {zone.images.slice(0,2).map((image, i) => (
                    <motion.div key={i} className="relative h-48 md:h-64 overflow-hidden"  variants={fadeIn} >
                      <Image
                        src={image}
                        alt={zone.name}
                        width={500}
                        height={300}
                        className="rounded-lg object-cover h-full w-full"
                      />
                    </motion.div>
                  ))}
                </motion.div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-4"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
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