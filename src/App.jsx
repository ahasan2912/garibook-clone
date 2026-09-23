import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import FreedomSection from "./components/FreedomSection";
import PeopleTogetherSection from "./components/PeopleTogetherSection";
import BookingArrivalSection from "./components/BookingArrivalSection";
import SmartDriverSection from "./components/SmartDriverSection";
import NewsroomSection from "./components/NewsroomSection";
import PassengerSection from "./components/PassengerSection";
import BlogSection from "./components/BlogSection";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
import { useGsapReveal } from "./hooks/useGsapReveal";
import { ScrollTrigger } from "./utils/gsapLib";
import { loadHomepageData } from "./data/fetchData";
import { NEWS, BLOG_POSTS, PASSENGERS } from "./data/siteData";

import { LanguageProvider, useI18n } from "./i18n";

function Home() {
  const scopeRef = useRef(null);
  const { wrapperClass } = useI18n();
  useGsapReveal(scopeRef);

  const [content, setContent] = useState({
    news: NEWS,
    blogs: BLOG_POSTS,
    passengers: PASSENGERS.slides,
  });

  useEffect(() => {
    let mounted = true;
    loadHomepageData().then((data) => {
      if (mounted) setContent(data);
    });
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      mounted = false;
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div ref={scopeRef} className={`${wrapperClass} overflow-x-clip`}>
      <Navbar />
      <main id="top">
        <Hero />
        <StatsSection />
        <ServicesSection />
        <FreedomSection />
        <PeopleTogetherSection />
        <BookingArrivalSection />
        <SmartDriverSection />
        <NewsroomSection />
        <PassengerSection slides={content.passengers} />
        <BlogSection posts={content.blogs} />
        <DownloadAppSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}