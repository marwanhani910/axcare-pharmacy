import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FlashDeals from "@/components/FlashDeals";

export default function Home() {
  return (
    <main className="space-y-2">
      <Hero />
      <Categories />
      <FlashDeals />
    </main>
  );
}