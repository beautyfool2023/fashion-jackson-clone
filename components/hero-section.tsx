import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              Welcome to Minimalist Sophistication with Maximum Style
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fashion Jackson is a source of style inspiration for those who prefer quality over quantity, subtle over
              obvious, and ease over complexity.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">EXPLORE STYLE</Button>
          </div>
          <div className="relative">
            <img
              src="/elegant-woman-in-white-outfit-sitting-on-modern-ch.jpg"
              alt="Fashion Jackson - Minimalist Style"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
