import { CollabModel, ExperienceSection, FinalCTA, Hero, Numbers, ValueSection } from "@/components/partnersPage";

export const metadata = {
  title: "Partners | ZenZebra",
  description:
    "Transform your space into a BreakSpot with ZenZebra. Elevate your coworking, hotel, or café with experiential retail that drives engagement, dwell time, and belonging.",
  keywords: [
    "ZenZebra partners",
    "space partnerships",
    "coworking collaborations",
    "hotel retail concepts",
    "experiential retail India",
    "brand x space partnership",
    "BreakSpot model"
  ],
  openGraph: {
    title: "Partners | ZenZebra",
    description:
      "Partner with ZenZebra to turn everyday movement into memorable moments. Build BreakSpots inside your space — where curiosity meets culture.",
    url: "https://zenzebra.in/partners",
    siteName: "ZenZebra",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "ZenZebra Partners Page"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  metadataBase: new URL("https://zenzebra.in"),
  themeColor: "#CC2224"
}

export default function PartnersPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <ValueSection />
      <ExperienceSection />
      <Numbers />
      <CollabModel />
      <FinalCTA />
    </main>
  )
}

