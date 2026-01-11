import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-serif font-bold text-foreground">AllBeautyLife</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              FASHION
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              BEAUTY
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              LIFESTYLE
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              TRAVEL
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
              PRODUCT REVIEWS
            </a>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              SHOP
            </Button>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
