import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const modules = [
  {
    number: "01",
    title: "El Desmantelamiento del Control",
    description: "Identidad del líder, ego y dopamina, reescritura del rol.",
  },
  {
    number: "02",
    title: "Neurociencia del Alto Rendimiento",
    description: "Amígdala vs Corteza prefrontal, seguridad psicológica aplicada.",
  },
  {
    number: "03",
    title: "Delegación Estratégica Profunda",
    description: "Mapa de Delegación, niveles de autoridad, prevención del upward delegation.",
  },
  {
    number: "04",
    title: "Sistemas que Sustituyen al Líder",
    description: "OKRs, Dashboards, ritmos operativos, IA aplicada al liderazgo.",
  },
  {
    number: "05",
    title: "Cultura de Dueñidad",
    description: "Manifiesto del equipo empoderado, conversaciones difíciles, confianza radical.",
  },
  {
    number: "06",
    title: "El Líder como Arquitecto",
    description: "Visión a 3–5 años, empresa que funciona sin ti, preparación para escalar.",
  },
];

export const ModulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Estructura del Programa
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            6 Módulos de Transformación
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            12 semanas de acompañamiento estratégico con certificación privada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <span className="text-5xl font-serif text-primary/20 group-hover:text-primary/30 transition-colors absolute top-4 right-6">
                {module.number}
              </span>
              <div className="relative z-10 pt-8">
                <h3 className="text-lg font-serif mb-3 text-foreground pr-12">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
