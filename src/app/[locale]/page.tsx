import BannerSection from '@/features/home/sections/BannerSection';
// Import ButtonsExample from '@/components/examples/ButtonsExample';
import ContactUsFormSection from '@/features/home/sections/ContactUsFormSection';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import EventsSection from '@/features/home/sections/EventsSection';
import FirstViewSection from '@/features/home/sections/FirstViewSection';
import HelpNowSection from '@/features/home/sections/HelpNowSection';
import InstructionSection from '@/features/home/sections/InstructionSection';
import Modal from '@/components/common/Modal/Modal';
import QASection from '@/features/home/sections/QASection';
import SecondViewSection from '@/features/home/sections/SecondViewSection';
// Import TextExample from '@/components/examples/TextExample';

export default function Home() {
  return (
    <>
      <FirstViewSection />
      <InstructionSection />
      <BannerSection />
      <SecondViewSection />
      <EventsSection />
      <QASection />
      {/* <HelpNowSection /> */}
      <ContactUsFormSection />
      <Modal modalKey="error_message">
        <ErrorMessage />
      </Modal>
      {/* <ButtonsExample /> */}
      {/* <TextExample /> */}
    </>
  );
}
