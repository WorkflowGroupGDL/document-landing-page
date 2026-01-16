import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Avatar/Initial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center glow-gold">
                <span className="text-5xl font-serif text-primary">JL</span>
              </div>
            </motion.div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-serif mb-2"
              >
                James Lass
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-primary font-medium mb-4"
              >
                Máster Coach C-Level
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Trabajo con líderes que ya llegaron lejos, pero saben que seguir así no es sostenible.{" "}
                <span className="text-foreground">
                  No ayudo a hacer más. Ayudo a dejar de estorbar al crecimiento.
                </span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
