import GuitarString from "@/components/LooseThread";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyDoYouNeedAWebsite from "@/components/WhyDoYouNeedAWebsite";
import PortfolioScroll from "@/components/PortfolioScroll";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <GuitarString />
      <Services />
      <GuitarString />
      <WhyDoYouNeedAWebsite />
      <PortfolioScroll />
      <FAQ />
    </>
  );
}
