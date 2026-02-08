import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { ProblemSection } from "@/components/sections/problem"
import { Methodology } from "@/components/sections/methodology"
import { About } from "@/components/sections/about"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white selection:bg-muted-gold selection:text-white">
      <Header />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <Methodology />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}

