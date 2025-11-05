import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User, Package, Heart, Settings } from "lucide-react";

interface ProfileSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileSheet({ open, onOpenChange }: ProfileSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Akun Saya</SheetTitle>
        </SheetHeader>
        
        <Tabs defaultValue="login" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Masuk</TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@anda.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Lupa password?
            </a>
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              MASUK
            </Button>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="Nama Anda"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input
                id="register-email"
                type="email"
                placeholder="email@anda.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <Input
                id="register-password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              BUAT AKUN
            </Button>
          </TabsContent>
        </Tabs>

        <div className="mt-8 pt-8 border-t">
          <h3 className="mb-4">Menu Cepat</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <User className="h-5 w-5" />
              <span>Profil Saya</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Package className="h-5 w-5" />
              <span>Riwayat Pesanan</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors">
              <Settings className="h-5 w-5" />
              <span>Pengaturan</span>
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
