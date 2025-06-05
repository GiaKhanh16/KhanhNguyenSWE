import NavigationMenu from "@/components/nav";
import StickyTitleScroll from "@/components/test/sticky";
export default function Home2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">Component Showcase</h1>
        <NavigationMenu />
      </div>
    </main>
  );
}
