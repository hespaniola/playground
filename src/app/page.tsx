import { Hero } from "@/components/hero";
import { ImageGrid } from "@/components/image-grid";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ImageGrid />
    </main>
  );
}
