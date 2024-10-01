import BannerSection from '@/features/home/sections/BannerSection';
import ButtonsExample from '@/components/examples/ButtonsExample';
import ContactUsFormSection from '@/features/home/sections/ContactUsFormSection';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import EventsSection from '@/features/home/sections/EventsSection';
import Modal from '@/components/common/Modal/Modal';
import QASection from '@/features/home/sections/QASection';
import SecondViewSection from '@/features/home/sections/SecondViewSection';
import TextExample from '@/components/examples/TextExample';

export default function Home() {
  return (
    <>
      <BannerSection />
      <SecondViewSection />
      <QASection />
      <ContactUsFormSection />
      <Modal modalKey="error_message">
        <ErrorMessage />
      </Modal>
      <EventsSection />
      {/* <ButtonsExample /> */}
      <TextExample />
    </>
  );
}
