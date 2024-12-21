import SpotlightCard from "./custom-component/spotlight-card";
import H1 from "./custom-component/h1";

export default function ProductSpotlight() {
  return (
    <div className="px-14 py-16">
      <H1>Product Spotlight</H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        <SpotlightCard
          categoryName="Pantony 6P Activity Tracker"
          linkUrl="/"
          backgroundImageUrl="/pantony_tracker.webp"
          price="1600000"
        />

        <SpotlightCard
          categoryName="Studio 8 Portable Bluetooth Speaker"
          linkUrl="/"
          backgroundImageUrl="/studio8_portable_speaker.webp"
          price="1600000"
        />
      </div>
    </div>
  );
}
