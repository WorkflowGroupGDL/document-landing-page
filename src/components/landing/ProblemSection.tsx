import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Calendar, Users, Battery } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "Todo pasa por ti",
  },
  {
    icon: Calendar,
    text: "Tu agenda está llena de urgencias",
  },
  {
    icon: Users,
    text: "El equipo espera validación constante",
  },
  {
    icon: Battery,
    text: "Te cuesta desconectarte sin culpa",
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Identificación
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            Si eres CEO, Founder o Director, probablemente esto te resulte familiar:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-5 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-foreground/90">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-lg"
        >
          No porque seas malo delegando. Sino porque{" "}
          <span className="text-foreground font-medium">
            nadie te enseñó a dejar de operar
          </span>{" "}
          y empezar a liderar estratégicamente.
        </motion.p>
      </div>
    </section>
  );
};
