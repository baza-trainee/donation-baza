'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useModalContext } from '@/context/ModalContext';

interface ModalProps {
  modalKey: string;
  children: React.ReactNode;
}

const Modal = ({ modalKey, children }: ModalProps) => {
  const { modals, closeModal } = useModalContext();

  useBodyScrollLock(modals[modalKey]);

  const isModalOpen = modals[modalKey];
  const ModalLayout = () => (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div onClick={() => closeModal(modalKey)} className={styles.modalClose}>
          <Image src="/svg/close.svg" alt="close" width={20} height={20} />
        </div>
        {children}
      </div>
    </div>
  );

  const DocumentsLayout = () => (
    <div className={styles.documentsOverlay}>
      <div className={styles.documentsContent}>{children}</div>
    </div>
  );

  switch (modalKey) {
    case 'error_message':
    case 'application_feedback': {
      return <>{isModalOpen && createPortal(<ModalLayout />, document.body)}</>;
    }
    default:
      return (
        <>{isModalOpen && createPortal(<DocumentsLayout />, document.body)}</>
      );
  }
};

export default Modal;
