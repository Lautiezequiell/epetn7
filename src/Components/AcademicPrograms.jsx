import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const programs = [
  {
    title: "Robótica",
    description: "Diseño, construcción y programación de sistemas robóticos para diversas aplicaciones industriales y tecnológicas.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    title: "Informática",
    description: "Desarrollo de software, redes, bases de datos y tecnologías emergentes para el mundo digital.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    title: "Electromecánica",
    description: "Especialización en sistemas eléctricos, electrónicos y control de procesos industriales.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    title: "Automotores",
    description: "Conocimientos en mecánica, electrónica y gestión de vehículos para la industria automotriz.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconBg: "bg-green-100",
  },
];

export default function AcademicPrograms() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold">Nuestras Especialidades</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Propuestas Académicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carreras técnicas reconocidas con orientación práctica y formación integral para tu futuro profesional
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a
                href="https://epetn7.netlify.app/propuestas"
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className={`h-full ${program.bgColor} rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-transparent`}>
                  <div className={`w-16 h-16 ${program.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <img src="/epet7logo.png" alt="EPET N°7" className="w-10 h-10 object-cover rounded" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {program.description}
                  </p>
                  <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                    Ver más
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="inline-block ml-1"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://epetn7.netlify.app/propuestas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            Ver Todas las Carreras
            <BookOpen className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}