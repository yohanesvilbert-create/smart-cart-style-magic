import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Grid3X3, 
  Bot, 
  ShoppingCart, 
  User 
} from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/catalog", icon: Grid3X3, label: "Catalog" },
  { path: "/ai", icon: Bot, label: "AI Assistant" },
  { path: "/cart", icon: ShoppingCart, label: "Cart" },
  { path: "/profile", icon: User, label: "Profile" },
];

export const BottomNavigation = () => {
  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50 bottom-nav-safe"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-0 ${
                isActive
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <item.icon className="h-5 w-5" />
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{ x: "-50%" }}
                    />
                  )}
                </motion.div>
                <span className="text-xs font-medium truncate max-w-16">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
};