import { motion } from "framer-motion";

type TagTypes = "div" | "section" | "article" | "main" | "header" | "footer" | "ul" | "li";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  as?: TagTypes;
  className?: string;
}

export const Reveal = ({ children, delay = 0, className = "", as = "div" }:RevealProps) => {
    const Component = motion [as] as any;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 30}} // Começa invisível e 30px para baixo (movimento curto é mais elegante)
      whileInView={{ opacity: 1, y: 0 }} // Fica visível e volta pro lugar
      viewport={{ once: true, margin: "-50px" }} // margin: -50px faz a animação começar um pouquinho antes de chegar
      transition={{ 
        duration: 1.0, // Duração rápida (não deixa o usuário esperando)
        delay: delay, // Opcional: atraso se tiver vários itens
        ease: "easeOut" 
      }}
    >
      {children}
    </Component>
  );
};