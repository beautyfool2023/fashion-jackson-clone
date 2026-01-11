export function RecentPosts() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground">recent posts:</h2>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground uppercase tracking-wide">
            <span>FASHION WEEK 24</span>
            <span>AMAZON</span>
            <span>LECTURES</span>
            <span>FASHION</span>
            <span>TRAVEL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/woman-in-black-dress-elegant-fashion.jpg" alt="Recent Post 1" className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-lg font-serif font-semibold text-foreground">
              The Perfect Black Dress for Every Occasion
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover the versatility of the little black dress and how to style it for different events.
            </p>
          </div>

          <div className="space-y-4">
            <img src="/woman-in-yellow-shirt-summer-fashion.jpg" alt="Recent Post 2" className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-lg font-serif font-semibold text-foreground">
              Summer Essentials: Building Your Capsule Wardrobe
            </h3>
            <p className="text-sm text-muted-foreground">
              Essential pieces that will take you through the summer season with style and ease.
            </p>
          </div>

          <div className="space-y-4">
            <img src="/woman-in-blue-dress-casual-chic.jpg" alt="Recent Post 3" className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-lg font-serif font-semibold text-foreground">
              Effortless Elegance: Mastering Casual Chic
            </h3>
            <p className="text-sm text-muted-foreground">
              How to achieve that perfectly undone look that appears effortless but is carefully curated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
