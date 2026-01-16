import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8"
          >
            <span className="text-primary font-medium">Cupos Limitados</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
            ¿Listo para dejar de ser{" "}
            <span className="text-gradient-gold">indispensable</span>?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            El control no te hizo fuerte. Te hizo necesario.{" "}
            <span className="text-foreground">Ahora vamos a hacerte libre.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <Button size="lg" className="group px-10 py-7 text-lg glow-gold">
              Solicitar Acceso al Programa
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Aplicación requerida — Solo perfiles ejecutivos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <p className="font-serif italic text-xl text-foreground/80">
              "No necesitas más control. Necesitas un sistema… y alguien que te confronte cuando vuelvas a caer."
            </p>
            <p className="text-primary mt-4 font-medium">— James Lass</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
