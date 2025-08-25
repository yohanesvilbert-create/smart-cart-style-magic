import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, 
  Star, 
  ShoppingCart, 
  Zap, 
  ChevronRight,
  Heart,
  Plus,
  TrendingUp,
  TrendingDown,
  Coffee,
  Headphones,
  Sparkles,
  Award,
  Eye,
  Package
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-ai-assistant.jpg";
import phoneImage from "@/assets/product-phone.jpg";
import laptopImage from "@/assets/product-laptop.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const hotDeals = [
  { 
    id: 1, 
    title: "iPhone 15 Pro", 
    price: "$999", 
    originalPrice: "$1199", 
    discount: "17%", 
    image: phoneImage,
    aiTag: "AI Pick",
    priceChange: "up",
    pricePercentage: "+2.1%"
  },
  { 
    id: 2, 
    title: "MacBook Air M3", 
    price: "$1199", 
    originalPrice: "$1299", 
    discount: "8%", 
    image: laptopImage,
    aiTag: "Based on your habits",
    priceChange: "down",
    pricePercentage: "-5.3%"
  },
  { 
    id: 3, 
    title: "AirPods Pro", 
    price: "$199", 
    originalPrice: "$249", 
    discount: "20%", 
    image: headphonesImage,
    aiTag: "AI Pick",
    priceChange: "up",
    pricePercentage: "+1.8%"
  },
];

const aiPicksData = {
  trending: [
    { id: 1, title: "iPhone 15 Pro", subtitle: "Popular this week", image: phoneImage, contextTag: "Because you viewed similar" },
    { id: 2, title: "MacBook Air M3", subtitle: "Trending in tech", image: laptopImage, contextTag: "Based on your style" },
  ],
  recommended: [
    { id: 3, title: "AirPods Pro", subtitle: "Perfect for you", image: headphonesImage, contextTag: "Because you bought iPhone" },
    { id: 4, title: "iPhone 15 Pro", subtitle: "AI recommended", image: phoneImage, contextTag: "Matches your preferences" },
  ],
  bestValue: [
    { id: 5, title: "MacBook Air M3", subtitle: "Best price & quality", image: laptopImage, contextTag: "Great value pick" },
    { id: 6, title: "AirPods Pro", subtitle: "Unbeatable deal", image: headphonesImage, contextTag: "Limited time offer" },
  ]
};

const smartBundles = [
  { 
    id: 1, 
    title: "Coffee Lover Bundle", 
    items: ["Premium Coffee", "Smart Mug", "Coffee Beans"], 
    price: "$49",
    originalPrice: "$67",
    image: Coffee,
    color: "bg-amber-500",
    bundleType: "AI Smart Bundle"
  },
  { 
    id: 2, 
    title: "Work From Home", 
    items: ["Wireless Mouse", "Keyboard", "Monitor Stand"], 
    price: "$89",
    originalPrice: "$120",
    image: Package,
    color: "bg-blue-500",
    bundleType: "Popular Bundle"
  },
  { 
    id: 3, 
    title: "Audio Experience", 
    items: ["Headphones", "DAC", "Premium Cable"], 
    price: "$199",
    originalPrice: "$289",
    image: Headphones,
    color: "bg-purple-500",
    bundleType: "AI Smart Bundle"
  },
  { 
    id: 4, 
    title: "Quick Essentials", 
    items: ["Phone Charger", "Power Bank", "Cable"], 
    price: "$35",
    originalPrice: "$49",
    image: Zap,
    color: "bg-green-500",
    bundleType: "Often Bought"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("trending");
  
  console.log("Home component is rendering");

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
                <Badge className="glass-button text-primary border-primary/30 ai-glow">
                  <Bot className="w-3 h-3 mr-1 ai-float" />
                  AI Powered
                </Badge>
                <Badge className="glass-button text-primary border-primary/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Smart Shopping
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-3 leading-tight">
                Your AI Shopping Companion
              </h1>
              <p className="text-white/95 mb-4 text-base leading-relaxed">
                Discover products tailored just for you with intelligent recommendations, instant answers, and personalized deals
              </p>
              <p className="text-sm text-white/80 mb-6 italic">
                "Ask me anything about products, deals, or your rewards"
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => navigate("/ai")}
                  className="bg-white text-primary hover:bg-white/90 flex-1 ai-glow hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-ai flex items-center justify-center mr-2">
                    <Bot className="w-4 h-4 text-white ai-float" />
                  </div>
                  Chat with AI
                </Button>
                <Button 
                  variant="outline"
                  className="glass-button text-white border-white/30 hover:bg-white/20 ai-pulse"
                  size="lg"
                >
                  <Sparkles className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* AI Smart Deals */}
      <section className="px-6 py-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">AI Smart Deals</h2>
              <Badge className="bg-gradient-ai text-white text-xs ai-pulse">
                <Zap className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              See All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {hotDeals.map((deal, index) => (
                <CarouselItem key={deal.id} className="pl-2 md:pl-4 basis-[160px]">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="glass-card ai-glow hover:shadow-glass transition-all duration-300 h-full">
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
                          <Badge className="absolute top-1 left-1 bg-gradient-ai text-white text-xs px-2 py-1">
                            {deal.aiTag}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute bottom-1 right-1 h-6 w-6 p-0 glass-button hover:bg-white/80"
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
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs text-white ${
                            deal.priceChange === 'up' ? 'price-trend-up' : 'price-trend-down'
                          }`}>
                            {deal.priceChange === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {deal.pricePercentage}
                          </div>
                        </div>
                        <Button size="sm" className="w-full ai-glow">
                          <Plus className="w-3 h-3 mr-1" />
                          Add
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-button" />
            <CarouselNext className="glass-button" />
          </Carousel>
        </motion.div>
      </section>

      {/* Personalized For You */}
      <section className="px-6 py-6 bg-muted/30">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-ai ai-glow">
              <Bot className="w-4 h-4 text-white ai-float" />
              <span className="text-sm font-medium text-white">AI Powered</span>
            </div>
            <h2 className="text-xl font-bold">Personalized For You</h2>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 glass-card mb-4">
              <TabsTrigger value="trending" className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="recommended" className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                Recommended
              </TabsTrigger>
              <TabsTrigger value="bestValue" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                Best Value
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(aiPicksData).map(([tabKey, picks]) => (
              <TabsContent key={tabKey} value={tabKey} className="space-y-3">
                {picks.map((pick, index) => (
                  <motion.div
                    key={pick.id}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Card className="glass-card hover:shadow-glass transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img 
                              src={pick.image} 
                              alt={pick.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <Badge className="absolute -top-1 -right-1 bg-gradient-ai text-white text-xs px-1 py-0.5">
                              AI
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{pick.title}</h3>
                            <p className="text-sm text-muted-foreground">{pick.subtitle}</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <Badge variant="outline" className="mt-2 text-xs bg-ai-light border-primary/30">
                              <Eye className="w-3 h-3 mr-1" />
                              {pick.contextTag}
                            </Badge>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </section>

      {/* Smart Bundles & Quick Buy */}
      <section className="px-6 py-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-4">Quick Buy & Smart Bundles</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {smartBundles.map((bundle, index) => {
              const IconComponent = bundle.image;
              return (
                <motion.div
                  key={bundle.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="glass-card hover:shadow-glass transition-all duration-300 cursor-pointer ai-glow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-xl ${bundle.color} flex items-center justify-center ai-float`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs bg-gradient-ai-glow border-primary/30">
                          {bundle.bundleType}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2 text-sm">{bundle.title}</h3>
                      <div className="space-y-1 mb-3">
                        {bundle.items.map((item, i) => (
                          <p key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-primary"></div>
                            {item}
                          </p>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-primary">{bundle.price}</span>
                        <span className="text-xs text-muted-foreground line-through">
                          {bundle.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="w-full ai-glow">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        Add Bundle
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;