import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedPost } from "@/components/featured-post"
import { TrendingSection } from "@/components/trending-section"
import { ShopSection } from "@/components/shop-section"
import { DailiesSection } from "@/components/dailies-section"
import { RecentPosts } from "@/components/recent-posts"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedPost />
      <TrendingSection />
      <ShopSection />
      <DailiesSection />
      <RecentPosts />
      <Footer />
    </main>
  )
}
