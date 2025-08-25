import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Grid3X3, 
  Sparkles, 
  ShoppingCart, 
  User 
} from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/catalog", icon: Grid3X3, label: "Catalog" },
  { path: "/ai", icon: Sparkles, label: "AI Assistant" },
  { path: "/cart", icon: ShoppingCart, label: "Cart" },
  { path: "/profile", icon: User, label: "Profile" },
];

export const BottomNavigation = () => {
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border z-50 bottom-nav-safe"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              const isAI = item.path === "/ai";
              return `flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-0 relative ${
                isActive
                  ? isAI 
                    ? "text-white" 
                    : "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`;
            }}
          >
            {({ isActive }) => {
              const isAI = item.path === "/ai";
              return (
                <>
                  {isActive && isAI && (
                    <motion.div
                      layoutId="aiBackground"
                      className="absolute inset-0 bg-gradient-ai rounded-lg ai-glow"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 ${isAI && isActive ? "ai-float" : ""}`}
                  >
                    <item.icon className={`h-5 w-5 ${isAI ? "ai-pulse" : ""}`} />
                    {isActive && !isAI && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ x: "-50%" }}
                      />
                    )}
                  </motion.div>
                  <span className={`text-xs font-medium truncate max-w-16 relative z-10 ${
                    isAI && isActive ? "text-white" : ""
                  }`}>
                    {item.label}
                  </span>
                  {isAI && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-ai rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </>
              );
            }}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};