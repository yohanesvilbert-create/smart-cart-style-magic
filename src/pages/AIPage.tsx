import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Send, 
  Mic, 
  Camera, 
  Sparkles, 
  ShoppingCart,
  Heart,
  TrendingUp
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const quickActions = [
  { id: 1, title: "Find Products", icon: ShoppingCart, description: "Search for specific items" },
  { id: 2, title: "Price Compare", icon: TrendingUp, description: "Compare prices across brands" },
  { id: 3, title: "Recommendations", icon: Heart, description: "Get personalized suggestions" },
  { id: 4, title: "Smart Bundle", icon: Sparkles, description: "Create product bundles" },
];

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI shopping assistant. I can help you find products, compare prices, get recommendations, and create smart bundles. What can I help you with today?",
      isAI: true,
      timestamp: new Date(),
      suggestions: [
        "Find me a laptop under $1000",
        "Recommend headphones for gaming",
        "Compare iPhone vs Samsung",
        "Create a work from home bundle"
      ]
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isAI: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          text: "I found several great options for you! Based on your request, here are my top recommendations:",
          suggestions: ["Show me more details", "Compare these options", "Add to cart", "Find similar products"]
        },
        {
          text: "Great choice! I can help you compare these products across different features like price, reviews, and specifications.",
          suggestions: ["Show price history", "Check availability", "Find better deals", "Read reviews"]
        },
        {
          text: "Perfect! I've analyzed your preferences and found products that match your needs and budget.",
          suggestions: ["Personalize further", "Save to wishlist", "Share with friends", "Set price alerts"]
        }
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse.text,
        isAI: true,
        timestamp: new Date(),
        suggestions: randomResponse.suggestions,
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleQuickAction = (action: string) => {
    setMessage(`I need help with ${action.toLowerCase()}`);
    handleSend();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.div 
        className="bg-gradient-ai text-white px-6 py-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Shopping Assistant</h1>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Online and ready to help</span>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className="bg-white/10 border-white/20 cursor-pointer hover:bg-white/20 transition-all"
                onClick={() => handleQuickAction(action.title)}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <action.icon className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">{action.title}</span>
                  </div>
                  <p className="text-xs text-white/70">{action.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 px-6 py-4">
        <div className="space-y-4 mb-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${msg.isAI ? "justify-start" : "justify-end"}`}
            >
              <div className={`max-w-[80%] ${msg.isAI ? "mr-4" : "ml-4"}`}>
                <div
                  className={`p-4 rounded-2xl ${
                    msg.isAI
                      ? "bg-ai-light text-foreground rounded-bl-md"
                      : "bg-primary text-primary-foreground rounded-br-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-2">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                
                {/* Suggestions */}
                {msg.suggestions && (
                  <motion.div 
                    className="mt-3 space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {msg.suggestions.map((suggestion, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs mr-2 mb-2 bg-background/50"
                        >
                          {suggestion}
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-ai-light rounded-2xl rounded-bl-md p-4 mr-4">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">AI is thinking...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <motion.div 
        className="border-t border-border bg-card/50 backdrop-blur-sm p-4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="h-10 w-10 p-0 shrink-0"
          >
            <Camera className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-10 w-10 p-0 shrink-0"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about shopping..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            onClick={handleSend}
            disabled={!message.trim() || isTyping}
            className="h-10 w-10 p-0 shrink-0"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Example prompts */}
        <div className="mt-3 flex gap-2 overflow-x-auto scrollbar-none">
          {["Find laptops", "Compare prices", "Gift ideas", "Tech deals"].map((prompt, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
              onClick={() => handleSuggestionClick(prompt)}
            >
              {prompt}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}