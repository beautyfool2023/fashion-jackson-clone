// 1. All imports at the VERY TOP
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturedPost } from "@/components/featured-post";
import { TrendingSection } from "@/components/trending-section";
import { ShopSection } from "@/components/shop-section";
import { DailiesSection } from "@/components/dailies-section";
import { RecentPosts } from "@/components/recent-posts";
import { Footer } from "@/components/footer";
import ProductCard from '../components/ProductCard';

// 2. ONLY ONE export default function
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Your New Product Section */}
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8">Daily Fashion Finds</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard 
            brand="Worx"
            title="Worx 40V 20&quot; Cordless Snow Blower Power Share with Brushless Motor - WG471"
            price="$399.99"
            // ✅ REMINDER: Ensure this image is moved to your /public folder
            image="/413FssKgWHL._SS500_.jpg" 
            affiliateLink="https://app.partnerboost.com/track/..." 
          />
        </div>
      </section>

      <FeaturedPost />
      <TrendingSection />
      <ShopSection />
      <DailiesSection />
      <RecentPosts />
      <Footer />
    </main>
  );
}