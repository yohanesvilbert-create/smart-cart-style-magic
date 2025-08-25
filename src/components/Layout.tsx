import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BottomNavigation } from "./BottomNavigation";
import { AIAssistant } from "./AIAssistant";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content with bottom padding for fixed nav */}
      <motion.main 
        className="pb-20 min-h-screen"
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>

      {/* Fixed Bottom Navigation */}
      <BottomNavigation />

      {/* AI Assistant Dialog */}
      <AIAssistant />
    </div>
  );
};