import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "EcoDepto",
    description: "Este proyecto es un sistema de riego inteligente para jardines verticales en terrazas y balcones de edificios utilizando el agua de condensación de los aires acondicionados. Diseñado para entornos dónde el espacio es limitado, para optimizar el uso del agua y promover la jardinería urbana.",
    image: "../../public/EcoDeptoLogo.jpeg",
    category: "Informática",
    year: "2025",
    url: "https://ecodepto3d.netlify.app/",
  },
  {
    title: "Sistema Gestor de Biblioteca",
    description: "Este proyecto es una plataforma web diseñada para gestionar de manera eficiente los recursos y actividades de una biblioteca municipal, facilitando el préstamo y devolución de libros, así como la administración de usuarios y catálogos.",
    image: "../../public/Biblioteca-1.png",
    category: "Informática",
    year: "2025",
    url: "https://bibliotmunicipaljardin.netlify.app",
  },
  {
    title: "SmartHouse",
    description: "Proyecto de automatización del hogar que integra dispositivos inteligentes para mejorar la comodidad, seguridad y eficiencia energética en viviendas. Permite controlar y monitorear diversos aspectos del hogar a través de una interfaz centralizada.",
    image: "../../public/SmartHouse.jpeg",
    category: "Electromecánica",
    year: "2025",
    url: "https://vddc34h2-smart-house.vercel.app/",
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