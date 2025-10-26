import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, FileText } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para Comenzar tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Futuro Profesional?
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed">
              Unite a la comunidad de la EPET N°7 y formá parte de la próxima generación de técnicos profesionales
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://epetn7.netlify.app/inscripciones"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105"
            >
              <GraduationCap className="w-6 h-6" />
              Inscribite Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://epetn7.netlify.app/contacto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              Solicitar Información
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                Reconocimiento Oficial
              </div>
              <p className="text-blue-200 text-sm">Títulos reconocidos nacionalmente</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                Inserción Laboral
              </div>
              <p className="text-blue-200 text-sm">Nexo con empresas del sector</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                Becas Disponibles
              </div>
              <p className="text-blue-200 text-sm">Convenios de Intercambio para estudiantes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}