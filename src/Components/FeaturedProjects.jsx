import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Robot Autónomo de Competición",
    description: "Estudiantes de Electrónica desarrollaron un robot capaz de navegar de forma autónoma en competencias nacionales.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    category: "Electrónica",
    year: "2024",
    url: "https://epetn7.netlify.app/proyectos",
  },
  {
    title: "Sistema de Gestión Escolar Web",
    description: "Plataforma completa desarrollada por alumnos de Informática para administrar inscripciones y calificaciones.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Informática",
    year: "2024",
    url: "https://epetn7.netlify.app/proyectos",
  },
  {
    title: "Prototipo de Vehículo Eléctrico",
    description: "Proyecto interdisciplinario que combina mecánica y electricidad para crear movilidad sustentable.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    category: "Electromecánica",
    year: "2023",
    url: "https://epetn7.netlify.app/proyectos",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Innovación Estudiantil</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestros estudiantes aplican conocimientos en proyectos reales que marcan la diferencia
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                      {project.year}
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Ver proyecto completo
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}