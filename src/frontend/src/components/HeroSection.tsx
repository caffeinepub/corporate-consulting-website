import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const YOUTUBE_VIDEO_ID = "dep5immO3qo";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&fs=0&start=0`}
          allow="autoplay; fullscreen"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "calc(100vw + 200px)",
            height: "calc(56.25vw + 200px)",
            minWidth: "100%",
            minHeight: "100%",
            border: "none",
          }}
          title="Background Video"
        />
      </div>

      {/* White gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 40%, rgba(0,0,0,0.40) 100%)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-sky-700 text-sm font-semibold uppercase tracking-[0.3em] mb-6">
            SAP · EMR · ERP · RCM
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.05] mb-8">
            AYAN TECH
            <br />
            <span className="text-sky-700 italic">SOLUTION</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Ayan Tech Solutions delivers expert SAP, ERP, EMR, and RCM services
            to modernize operations, streamline healthcare, and accelerate
            business growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#services")}
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-6 text-base rounded-none group border border-sky-400"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              variant="outline"
              onClick={() => scrollTo("#references")}
              className="border-gray-400 text-gray-700 hover:bg-gray-900 hover:text-white font-semibold px-8 py-6 text-base rounded-none bg-transparent"
            >
              Our References
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
