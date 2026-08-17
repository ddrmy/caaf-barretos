"use client"

import { AboutSection } from "./_components/about-section"
import { ContactSection } from "./_components/contact-section"
import { DonationSection } from "./_components/donation-section"
import { Footer } from "./_components/footer"
import { GallerySection } from "./_components/gallery-section"
import { Header } from "./_components/header"
import { Hero } from "./_components/hero"
import { ImpactSection } from "./_components/impact-section"
import { TransparencySection } from "./_components/transparency-section"
import { VideoSection } from "./video-section"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ImpactSection />
      <AboutSection />
      <DonationSection />
      <TransparencySection />
      <VideoSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
