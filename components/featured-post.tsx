import { Button } from "@/components/ui/button"

export function FeaturedPost() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/luxury-handbags-and-shoes-flat-lay-fashion-styling.jpg" alt="Amazon Fashion Finds" className="w-full h-auto rounded-lg" />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">MUST HAVE</span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                7 Amazon Finds Worth Adding to Your Wardrobe
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              With every new season, I start curating a new list of wardrobe staples and essentials that are worth the
              investment. Here are my top picks that work all the essentials, and manage to be the thrill of something
              new and different.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="outline">VIEW THE POST</Button>
              <Button variant="ghost" size="sm">
                SAVE
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <img src="/brown-leather-handbag.jpg" alt="Product 1" className="w-15 h-15 rounded-lg" />
              <img src="/olive-green-jacket.png" alt="Product 2" className="w-15 h-15 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
