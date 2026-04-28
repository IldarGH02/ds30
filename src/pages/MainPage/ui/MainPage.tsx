import {
  Hero,
  SectionCards,
  ImportantInfo,
  WelcomePoem,
  QuickLinks,
  InfoBanner,
} from '@/widgets';
import {SEO} from "@/entites/SEO";

export function MainPage() {
      return (
            <>
                <SEO/>
                <Hero />
                <SectionCards />
                <ImportantInfo />
                <WelcomePoem />
                <QuickLinks />
                <InfoBanner />
            </>
      );
}
