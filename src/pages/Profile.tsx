import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Edit, 
  Star, 
  Gift, 
  LogOut, 
  Crown, 
  Zap,
  Calendar,
  Phone,
  Mail,
  User,
  Save,
  X
} from "lucide-react";

const coupons = [
  { id: 1, title: "20% OFF Electronics", code: "TECH20", expiry: "2024-02-15", type: "discount" },
  { id: 2, title: "Free Shipping", code: "FREESHIP", expiry: "2024-02-28", type: "shipping" },
  { id: 3, title: "$50 OFF $200+", code: "SAVE50", expiry: "2024-03-10", type: "discount" },
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
  });
  const [editProfile, setEditProfile] = useState(profile);

  const loyaltyPoints = 2450;
  const nextLevelPoints = 3000;
  const currentLevel = "Gold";
  const progressPercentage = (loyaltyPoints / nextLevelPoints) * 100;

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEditing(false);
  };

  const getCouponIcon = (type: string) => {
    switch (type) {
      case "discount":
        return <Gift className="h-4 w-4" />;
      case "shipping":
        return <Zap className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  const getDaysUntilExpiry = (expiry: string) => {
    const today = new Date();
    const expiryDate = new Date(expiry);
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <motion.div 
        className="bg-gradient-ai text-white px-6 py-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-20 w-20 border-4 border-white/20">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="text-2xl font-bold bg-white/20">
              {profile.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-white/80">{profile.email}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="text-white hover:bg-white/20 mt-2"
              disabled={isEditing}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Loyalty Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-white">
                    {currentLevel} Member
                  </span>
                </div>
                <Badge className="bg-yellow-400 text-yellow-900">
                  {loyaltyPoints} points
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-white/80">
                  <span>Progress to Platinum</span>
                  <span>{nextLevelPoints - loyaltyPoints} points to go</span>
                </div>
                <Progress 
                  value={progressPercentage} 
                  className="h-2 bg-white/20"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="px-6 space-y-6 -mt-4">
        {/* Coupons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="card-gradient shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                My Coupons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {coupons.map((coupon, index) => (
                <motion.div
                  key={coupon.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-dashed border-border">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {getCouponIcon(coupon.type)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{coupon.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          Code: {coupon.code}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={getDaysUntilExpiry(coupon.expiry) <= 7 ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {getDaysUntilExpiry(coupon.expiry)}d
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="card-gradient shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Profile Information
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4" />
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                      <Save className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={isEditing ? editProfile.name : profile.name}
                    onChange={(e) => setEditProfile(prev => ({ ...prev, name: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={isEditing ? editProfile.email : profile.email}
                    onChange={(e) => setEditProfile(prev => ({ ...prev, email: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={isEditing ? editProfile.phone : profile.phone}
                    onChange={(e) => setEditProfile(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logout Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button 
            variant="destructive" 
            className="w-full h-12 text-lg"
            onClick={() => {
              // Handle logout logic here
              console.log("Logout clicked");
            }}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </motion.div>
      </div>
    </div>
  );
}