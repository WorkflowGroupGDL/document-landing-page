import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const TruthSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <span className="text-[20rem] font-serif text-primary select-none">?</span>
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            La Verdad Incómoda
          </p>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl rounded-full" />
            <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-foreground">
              "Una empresa que depende de ti para funcionar no es una empresa…{" "}
              <span className="text-gradient-gold font-semibold">
                es un autoempleo de alto estrés.
              </span>
              "
            </blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
