import Modal from '@/components/common/Modal/Modal';
import { MouseEvent } from 'react';
import PDFViewer from '@/components/common/PDFViewer/PDFViewer';
import { documents } from '@/constants/documents';
import styles from './FooterDocuments.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useTranslations } from 'next-intl';

export const FooterDocuments: React.FC = () => {
  const translate = useTranslations('common');
  const { openModal } = useModalContext();
  const handleDocumentClick = (
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
    key: string
  ) => {
    event.stopPropagation();
    openModal(key);
  };
  return (
    <div className={styles.wrapper}>
      <ul>
        {documents &&
          documents.map((doc) => (
            <li key={doc.key}>
              <span onClick={(event) => handleDocumentClick(event, doc.key)}>
                {translate(`docs.${doc.key}`)}
              </span>
              <Modal modalKey={doc.key}>
                <PDFViewer file={doc.url} />
              </Modal>
            </li>
          ))}
      </ul>
    </div>
  );
};
