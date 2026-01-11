import { Card } from "@/components/ui/card"

export function ShopSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">shop</h2>
          <p className="text-muted-foreground">PURCHASE OR PERSONALIZE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center space-y-4">
            <img
              src="/black-ankle-boots-fashion.jpg"
              alt="Black Boots"
              className="w-32 h-32 mx-auto object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground">
              This effortlessly chic and low-key day one go-to this season.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">STEVE 17 - SHOP 17</p>
              <p className="text-xs text-muted-foreground">VALUE 17 - SHOP 17</p>
            </div>
          </Card>

          <Card className="p-6 text-center space-y-4">
            <img
              src="/burgundy-leather-handbag-luxury.jpg"
              alt="Burgundy Bag"
              className="w-32 h-32 mx-auto object-cover rounded-lg"
            />
            <div className="space-y-2">
              <p className="text-sm font-medium">VALUE 17 - SHOP 17</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
