import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Coverage from "@/components/Coverage";
import Gallery from "@/components/Gallery";
import DriverRecruitment from "@/components/DriverRecruitment";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1 — Hero */}
        <Hero />
        {/* 2 — How It Works */}
        <HowItWorks />
        {/* 3 — Why Choose Us */}
        <WhyChooseUs />
        {/* 4 — Pricing */}
        <Pricing />
        {/* 5 — Coverage Area */}
        <Coverage />
        {/* 6 — Driver Recruitment */}
        <DriverRecruitment />
        {/* 7 — Gallery */}
        <Gallery />
        {/* 8 — FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
