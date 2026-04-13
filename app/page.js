'use client'
import { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import FeaturesSection from '@/components/FeaturesSection'
import GallerySection from '@/components/GallerySection'
import LocationSection from '@/components/LocationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
