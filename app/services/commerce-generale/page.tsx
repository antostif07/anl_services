"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Box,
    Handshake,
    TrendingUp,
    PiggyBank,
    Lightbulb,
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

export default function CommerceGeneralDetails() {
    return (
        <div className="min-h-screen pt-0">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 bg-orange-600 text-white">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            "url(https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-working-on-a-laptop-kegLZjrNzpI')",
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
                        Commerce Général : Solutions d'Achat et de Vente
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Notre expertise pour tous vos besoins commerciaux.
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
                                icon: <Box className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                                title: "Import-Export",
                                description:
                                    "Facilitation des échanges internationaux de marchandises.",
                                details: [
                                    "Gestion des formalités douanières",
                                    "Optimisation de la logistique",
                                    "Recherche de fournisseurs",
                                ],
                            },
                            {
                                icon: <Handshake className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                                title: "Négociation Commerciale",
                                description:
                                    "Représentation pour des négociations efficaces.",
                                details: [
                                    "Préparation des offres",
                                    "Analyse des marchés",
                                    "Gestion des contrats",
                                ],
                            },
                            {
                                icon: (
                                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                                ),
                                title: "Développement Commercial",
                                description:
                                    "Stratégies pour accroître votre chiffre d'affaires.",
                                details: [
                                    "Étude de marché",
                                    "Planification marketing",
                                    "Prospection de nouveaux clients",
                                ],
                            },
                            {
                                icon: <PiggyBank className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                                title: "Gestion des Achats",
                                description:
                                    "Optimisation de vos coûts et de vos processus d'achat.",
                                details: [
                                    "Centralisation des commandes",
                                    "Négociation des prix",
                                    "Suivi des livraisons",
                                ],
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                                title: "Conseil en Stratégie",
                                description:
                                    "Solutions innovantes pour vos défis commerciaux.",
                                details: [
                                    "Analyse de la concurrence",
                                    "Identification des opportunités",
                                    "Recommandations personnalisées",
                                ],
                            },
                            {
                                icon: <Box className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                                title: "Distribution",
                                description:
                                    "Nous prenons en charge votre distribution de A à Z",
                                details: [
                                    "Livraisons dans les delais",
                                    "Suivi de livraison",
                                    "Gestion des stocks",
                                ],
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
                                variants={fadeIn}
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
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
                        Développez votre activité avec notre expertise
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                        Contactez-nous pour une consultation personnalisée
                    </p>
                    <Link
                        href="/contact"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                        Obtenir un Devis
                        <ArrowRight className="inline-block ml-2" size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}