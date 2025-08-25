import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Star, 
  ShoppingCart, 
  Zap, 
  ChevronRight,
  Heart,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ai-assistant.jpg";
import phoneImage from "@/assets/product-phone.jpg";
import laptopImage from "@/assets/product-laptop.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";

const hotDeals = [
  { id: 1, title: "iPhone 15 Pro", price: "$999", originalPrice: "$1199", discount: "17%", image: phoneImage },
  { id: 2, title: "MacBook Air M3", price: "$1199", originalPrice: "$1299", discount: "8%", image: laptopImage },
  { id: 3, title: "AirPods Pro", price: "$199", originalPrice: "$249", discount: "20%", image: headphonesImage },
];

const aiPicks = [
  { id: 1, title: "Recommended for You", subtitle: "Based on your browsing", image: phoneImage },
  { id: 2, title: "Trending Now", subtitle: "Popular this week", image: laptopImage },
  { id: 3, title: "Best Value", subtitle: "Great price & quality", image: headphonesImage },
];

const quickBuy = [
  { id: 1, title: "Often Buy", items: ["Coffee", "Headphones", "Books"], color: "bg-blue-500" },
  { id: 2, title: "AI Smart Cart", items: ["Recommended", "Bundled", "Trending"], color: "bg-ai" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative h-80 bg-gradient-hero">
          <img 
            src={heroImage} 
            alt="AI Assistant" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-ai-accent/90" />
          <div className="relative z-10 flex flex-col justify-center h-full px-6 text-white">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Bot className="w-3 h-3 mr-1" />
                  AI Powered
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Smart Shopping
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-3 leading-tight">
                Your AI Shopping Companion
              </h1>
              <p className="text-white/95 mb-6 text-base leading-relaxed">
                Discover products tailored just for you with intelligent recommendations, instant answers, and personalized deals
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => navigate("/ai")}
                  className="bg-white text-primary hover:bg-white/90 flex-1"
                  size="lg"
                >
                  <Bot className="w-4 h-4 mr-2" />
                  Chat with AI
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                  size="lg"
                >
                  <Zap className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hot Deals */}
      <section className="px-6 py-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">AI Smart Deals</h2>
              <Badge className="bg-gradient-ai text-white text-xs">
                <Zap className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              See All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {hotDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Card className="min-w-[160px] card-gradient hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative mb-3">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <Badge className="absolute -top-2 -right-2 bg-destructive text-white text-xs">
                        -{deal.discount}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 left-1 h-6 w-6 p-0 bg-white/80 hover:bg-white"
                      >
                        <Heart className="w-3 h-3" />
                      </Button>
                    </div>
                    <h3 className="font-semibold text-sm mb-1 truncate">{deal.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-primary">{deal.price}</span>
                      <span className="text-xs text-muted-foreground line-through">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <Button size="sm" className="w-full">
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Picks */}
      <section className="px-6 py-6 bg-muted/30">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-ai">
              <Bot className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">AI Powered</span>
            </div>
            <h2 className="text-xl font-bold">Personalized For You</h2>
          </div>
          
          <div className="space-y-3">
            {aiPicks.map((pick, index) => (
              <motion.div
                key={pick.id}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Card className="card-gradient hover:shadow-elevated transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={pick.image} 
                        alt={pick.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{pick.title}</h3>
                        <p className="text-sm text-muted-foreground">{pick.subtitle}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Buy */}
      <section className="px-6 py-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4">Quick Buy</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {quickBuy.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="card-gradient hover:shadow-elevated transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-3`}>
                      {category.id === 1 ? (
                        <ShoppingCart className="w-6 h-6 text-white" />
                      ) : (
                        <Zap className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-2">{category.title}</h3>
                    <div className="space-y-1">
                      {category.items.map((item, i) => (
                        <p key={i} className="text-xs text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;