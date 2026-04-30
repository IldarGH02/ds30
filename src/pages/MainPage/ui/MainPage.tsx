import {
  Hero,
  WelcomePoem,
  QuickLinks,
  InfoBanner,
} from '@/widgets';
import { SEO } from "@/entites/SEO";
import { UnifiedInfoCards } from "@/widgets/UnifiedInfoCards";

export function MainPage() {
      return (
            <>
                <SEO/>
                <Hero />
                <UnifiedInfoCards/>
                <WelcomePoem />
                <QuickLinks />
                <InfoBanner />
            </>
      );
}
