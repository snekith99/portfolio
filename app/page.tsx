import HeaderSection from "../components/HeaderSection";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SectionDivider from "../components/SectionDivider";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] items-center p-32">
      <HeaderSection/>
      <IntroSection/>
      <SectionDivider/>
      <AboutSection/>
      <SectionDivider/>
      <ExperienceSection/>
      <SectionDivider/>
      <SkillsSection/>
      <SectionDivider/>
      <ProjectsSection/>
      <SectionDivider/>
      <ContactSection/>
    </main>
  );
}