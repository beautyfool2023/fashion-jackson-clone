export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold">Fashion Jackson</h3>
            <p className="text-sm opacity-90">
              Minimalist sophistication with maximum style. Your source for timeless fashion inspiration.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Beauty
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Travel
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Follow</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Newsletter</h4>
            <p className="text-sm opacity-90">Get style inspiration delivered to your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-primary-foreground text-primary rounded-l-md"
              />
              <button className="px-4 py-2 text-sm bg-primary-foreground text-primary rounded-r-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/privacy-policy" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:opacity-100 transition-opacity">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75 mb-4">
            Affiliate Disclosure In compliance with the FTC guidelines, please be advised that allbeautylife.com is a participant in several affiliate marketing programs. We are a professional marketing entity that receives commissions from third-party retailers (such as Amazon) for referring customers through our promotional links. As an Amazon Associate, we earn from qualifying purchases. This comes at no extra cost to the consumer. Our goal is to provide honest and helpful information to help you make informed purchasing decisions.
          </p>
          <p className="text-sm opacity-75">© 2024 Fashion Jackson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
