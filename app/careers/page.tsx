import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';
import { WorkCardsCaraousl } from '@sections/work-process/v1/cards-carousel';
import { careersSectionData } from '@/data/careers/v1';

export const metadata: Metadata = {
  title: 'Pie Solution | Careers',
  description: 'Pie Solution - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  const { cards } = careersSectionData;

  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Careers',
          },
        ]}
      />
      {/*<AboutSection />*/}
      {/*<CtaSection />*/}
      {/*<TestimonialSection />*/}
      {/*<StatisticsSection />*/}
      {/*<AboutSectionTwo />*/}
      <WorkCardsCaraousl cards={cards} />
      <Footer />
    </>
  );
}
