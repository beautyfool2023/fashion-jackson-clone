import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DailiesSection() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">the dailies</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">VIEW ALL DAILY OUTFITS</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <img
                src="/woman-in-jeans-and-blazer-daily-outfit.jpg"
                alt="Daily Outfit 1"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-xs text-center text-muted-foreground">04.24.24</p>
            </div>
            <div className="space-y-2">
              <img
                src="/woman-in-dress-casual-chic-outfit.jpg"
                alt="Daily Outfit 2"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-xs text-center text-muted-foreground">04.23.24</p>
            </div>
            <div className="space-y-2">
              <img
                src="/woman-in-sweater-and-pants-outfit.jpg"
                alt="Daily Outfit 3"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-xs text-center text-muted-foreground">04.22.24</p>
            </div>
            <div className="space-y-2">
              <img
                src="/woman-in-white-shirt-and-jeans-outfit.jpg"
                alt="Daily Outfit 4"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-xs text-center text-muted-foreground">04.21.24</p>
            </div>
          </div>

          <Button variant="ghost" size="sm" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
