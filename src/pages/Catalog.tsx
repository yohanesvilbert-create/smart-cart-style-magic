import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star,
  Heart,
  Plus,
  X
} from "lucide-react";
import phoneImage from "@/assets/product-phone.jpg";
import laptopImage from "@/assets/product-laptop.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";

const products = [
  { id: 1, title: "iPhone 15 Pro Max", price: "$1199", rating: 4.8, reviews: 234, image: phoneImage, category: "phones" },
  { id: 2, title: "MacBook Air M3", price: "$1299", rating: 4.9, reviews: 156, image: laptopImage, category: "laptops" },
  { id: 3, title: "AirPods Pro 2", price: "$249", rating: 4.7, reviews: 445, image: headphonesImage, category: "audio" },
  { id: 4, title: "iPhone 15", price: "$899", rating: 4.6, reviews: 189, image: phoneImage, category: "phones" },
  { id: 5, title: "MacBook Pro 16\"", price: "$2499", rating: 4.9, reviews: 78, image: laptopImage, category: "laptops" },
  { id: 6, title: "Sony WH-1000XM5", price: "$399", rating: 4.8, reviews: 267, image: headphonesImage, category: "audio" },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "phones", label: "Phones" },
  { id: "laptops", label: "Laptops" },
  { id: "audio", label: "Audio" },
];

const priceRanges = [
  { id: "under-500", label: "Under $500" },
  { id: "500-1000", label: "$500 - $1000" },
  { id: "1000-2000", label: "$1000 - $2000" },
  { id: "over-2000", label: "Over $2000" },
];

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRanges(prev => 
      prev.includes(rangeId) 
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedPriceRanges([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Search Header */}
      <motion.div 
        className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="shrink-0">
                  <Filter className="w-4 h-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <DrawerTitle>Filters</DrawerTitle>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="text-primary"
                    >
                      Clear All
                    </Button>
                  </div>
                </DrawerHeader>
                <div className="p-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="font-semibold mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={category.id}
                            checked={selectedCategory === category.id}
                            onCheckedChange={() => setSelectedCategory(category.id)}
                          />
                          <label htmlFor={category.id} className="text-sm">
                            {category.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <div key={range.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={range.id}
                            checked={selectedPriceRanges.includes(range.id)}
                            onCheckedChange={() => handlePriceRangeChange(range.id)}
                          />
                          <label htmlFor={range.id} className="text-sm">
                            {range.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <DrawerClose asChild>
                    <Button className="w-full">Apply Filters</Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={isGridView ? "default" : "outline"}
                size="sm"
                onClick={() => setIsGridView(true)}
                className="h-8 w-8 p-0"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={!isGridView ? "default" : "outline"}
                size="sm"
                onClick={() => setIsGridView(false)}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>
        </div>
      </motion.div>

      {/* Active Filters */}
      <AnimatePresence>
        {(selectedCategory !== "all" || selectedPriceRanges.length > 0 || searchQuery) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 py-2 border-b border-border bg-muted/30"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {categories.find(c => c.id === selectedCategory)?.label}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSelectedCategory("all")}
                  />
                </Badge>
              )}
              {selectedPriceRanges.map(rangeId => (
                <Badge key={rangeId} variant="secondary" className="gap-1">
                  {priceRanges.find(r => r.id === rangeId)?.label}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => handlePriceRangeChange(rangeId)}
                  />
                </Badge>
              ))}
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  "{searchQuery}"
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid/List */}
      <div className="px-6 py-6">
        <motion.div
          className={isGridView ? "grid grid-cols-2 gap-4" : "space-y-4"}
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Card className="card-gradient hover:shadow-elevated transition-all duration-300">
                  <CardContent className={isGridView ? "p-4" : "p-4 flex gap-4"}>
                    <div className={isGridView ? "" : "w-20 h-20 shrink-0"}>
                      <div className="relative mb-3">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className={`object-cover rounded-lg ${
                            isGridView ? "w-full h-32" : "w-full h-full"
                          }`}
                        />
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-6 w-6 p-0 bg-white/80 hover:bg-white"
                        >
                          <Heart className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 ${isGridView ? "text-sm" : "text-base"}`}>
                        {product.title}
                      </h3>
                      
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">{product.price}</span>
                        <Button size="sm" className="h-8">
                          <Plus className="w-3 h-3 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}