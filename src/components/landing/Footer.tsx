import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-foreground">
              Arquitectura del Liderazgo Escalable™
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Diseñar líderes que dejan de operar… y empiezan a multiplicar.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} James Lass. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
