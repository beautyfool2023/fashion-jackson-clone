import { Button } from "@/components/ui/button"

export function TrendingSection() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-serif italic">fj</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">TRENDING</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Copy These Outfits to Make Getting Dressed Easier
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Wednesday Kara's FYI outfit. This page may be monetized against with what she's wearing in partnership
              with Nordstrom. I love how she styled this outfit and you can recreate it make your.
            </p>
            <Button variant="outline">VIEW THE POST</Button>
          </div>
          <div className="relative">
            <img src="/woman-in-casual-chic-outfit-mirror-selfie-getting-.jpg" alt="Outfit Inspiration" className="w-full h-auto rounded-lg" />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium text-foreground">
                25 <span className="text-muted-foreground">outfits</span>
              </p>
              <p className="text-xs text-muted-foreground">that make getting dressed exciting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
