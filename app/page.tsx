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
            affiliateLink="https://app.partnerboost.com/track/df000UdWCUDYlnL78iUB1btaCk5rzIi_b8cLIu3p8BwaePm_bUTUWGEdWeGWfJtibX6V1VsV8_c?url=https%3A%2F%2Fwww.amazon.com%2Fdp%2FB08KHYP2KV%3Fmaas%3Dmaas_adg_api_581697951548837409_static_12_201%26ref_%3Daa_maas%26tag%3Dmaas%26aa_campaignid%3D640ae36f6729c4fc131912d9df106def%26aa_adgroupid%3Dfde6DiRIT2fXfUdGDRC7nXsS6yTYWUdxcWPBOWkp8wQyLESMpwErZFUs7OB0dsCbtWUggJ_bLi_aPbuC3Zngs_c%26aa_creativeid%3D5c5aLiI5_bXw53_bxXpBy2ADRqrpApbspiwuDVfjYaBGTMraE_c
" 
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