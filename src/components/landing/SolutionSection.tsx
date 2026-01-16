import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Brain, Settings, Users } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Rediseñas tu rol como líder",
    description: "De ejecutor a arquitecto estratégico",
  },
  {
    icon: Brain,
    title: "Desmantelas la necesidad de control",
    description: "Liberándote del ego y la dopamina de la crisis",
  },
  {
    icon: Settings,
    title: "Construyes sistemas autónomos",
    description: "Que sustituyen tu presencia operativa",
  },
  {
    icon: Users,
    title: "Formas líderes independientes",
    description: "Que piensan y deciden sin ti",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            La Solución
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
            Arquitecto del Liderazgo Escalable™
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso de <span className="text-foreground font-medium">12 semanas</span> donde:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
