import Application from '@/components/main/application/Application';
import ButtonsExample from '@/components/examples/ButtonsExample';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import Modal from '@/components/common/Modal/Modal';
import TextExample from '@/components/examples/TextExample';

export default function Home() {
  return (
    <>
      <Application />
      <Modal modalKey="error_message">
        <ErrorMessage />
      </Modal>
      <ButtonsExample />
      <TextExample />
    </>
  );
}
