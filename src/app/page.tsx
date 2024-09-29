import BannerSection from '@/features/home/sections/BannerSection';
import ButtonsExample from '@/components/examples/ButtonsExample';
import ContactUsFormSection from '@/features/home/sections/ContactUsFormSection';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import Modal from '@/components/common/Modal/Modal';
import TextExample from '@/components/examples/TextExample';

export default function Home() {
  return (
    <>
      <BannerSection />
      <ContactUsFormSection />
      <Modal modalKey="error_message">
        <ErrorMessage />
      </Modal>
      <ButtonsExample />
      <TextExample />
    </>
  );
}
