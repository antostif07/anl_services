"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Utensils,
    ChefHat,
    Calendar,
    Music,
    Users
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

export default function ServiceTraiteurDetails() {
    return (
        <div className="min-h-screen pt-0">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 bg-green-700 text-white">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1555529777-3c3e9cf53489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
                        Service Traiteur
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Votre expert en organisation de fêtes et cérémonies.
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
                                icon: <Utensils className="w-6 h-6 md:w-8 md:h-8 text-green-700" />,
                                title: "Cuisine Congolaise Traditionnelle",
                                description:
                                    "Des plats authentiques pour émerveiller vos invités.",
                                details: [
                                    "Moambe, pondu, fufu...",
                                    "Ingrédients frais et locaux",
                                    "Recettes familiales revisitées",
                                ],
                            },
                            {
                                icon: <ChefHat className="w-6 h-6 md:w-8 md:h-8 text-green-700" />,
                                title: "Maîtres Cuisiniers Congolais",
                                description:
                                    "Des chefs passionnés par la richesse de notre gastronomie.",
                                details: [
                                    "Art culinaire",
                                    "Créativité et innovation",
                                    "Présentation soignée des plats",
                                ],
                            },
                            {
                                icon: (
                                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-green-700" />
                                ),
                                title: "Organisation de Cérémonies Complètes",
                                description:
                                    "Nous gérons tous les aspects de votre événement.",
                                details: [
                                    "Mariages traditionnels",
                                    "Baptêmes et communions",
                                    "Fêtes de fiançailles",
                                ],
                            },
                            // {
                            //     icon: <Music className="w-6 h-6 md:w-8 md:h-8 text-green-700" />,
                            //     title: "Ambiance Musicale Africaine",
                            //     description:
                            //         "Groupe de musique, DJ, ambiance sonore sur mesure.",
                            //     details: [
                            //         "Musique traditionnelle congolaise",
                            //         "Artistes locaux de renom",
                            //         "Sonorisation professionnelle",
                            //     ],
                            // },
                            {
                                icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-green-700" />,
                                title: "Décoration et Thématique",
                                description:
                                    "Une ambiance chaleureuse et authentique pour votre fête.",
                                details: [
                                    "Tissus, couleurs et motifs africains",
                                    "Artisanat local",
                                    "Mise en scène personnalisée",
                                ],
                            },
                            {
                                icon: <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-green-700" />,
                                title: "Conseils Personnalisés",
                                description:
                                    "Un accompagnement sur mesure pour une fête inoubliable.",
                                details: [
                                    "Planification détaillée",
                                    "Gestion du budget",
                                    "Coordination des prestataires",
                                ],
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white p-6 md:p-8 rounded-xl shadow-sm"
                                variants={fadeIn}
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
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
                        Célébrez vos moments précieux avec authenticité
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                        Contactez-nous pour discuter de votre projet
                    </p>
                    <Link
                        href="/contact"
                        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                        Demander un Devis
                        <ArrowRight className="inline-block ml-2" size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}