import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function ExpoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Evento Anual</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ExpoEPET
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                Feria Técnica
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              La muestra anual donde nuestros estudiantes exhiben sus proyectos innovadores, demostraciones técnicas y desarrollos tecnológicos ante la comunidad educativa y empresas de la provincia.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Próxima Edición</h4>
                  <p className="text-gray-600 text-sm">Octubre 2025 - 1 día de pura innovación</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                  <p className="text-gray-600 text-sm">Instalaciones del colegio - Entrada libre y gratuita</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Para Todos</h4>
                  <p className="text-gray-600 text-sm">Estudiantes, familias, empresas y comunidad en general</p>
                </div>
              </div>
            </div>

            <a
              href="https://epetn7.com.ar/proyectos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              Más Información sobre ExpoEPET
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/Robotic.jpeg"
                    alt="ExpoEPET - Proyectos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/Policia.jpeg"
                    alt="ExpoEPET - Exhibición"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="/Egresados.jpeg"
                    alt="ExpoEPET - Estudiantes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-48">
                  <img
                    src="/Robotic.jpeg"
                    alt="ExpoEPET - Innovación"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-600 font-medium">Proyectos Exhibidos</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}