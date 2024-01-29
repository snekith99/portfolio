import HeaderSection from "../components/HeaderSection";
import IntroSection from "../components/IntroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] items-center p-36">
      <HeaderSection/>
      <IntroSection/>
    </main>
  );
}