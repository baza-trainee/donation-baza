'use client';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './PDFViewer.module.scss';
import { useModalContext } from '@/context/ModalContext';
import { useTranslations } from 'next-intl';
import { useWindowWidth } from '@/features/home/hooks/useWindowWidth';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  docKey: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, docKey }) => {
  const [pages, setPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pageRef = useRef<HTMLDivElement>(null);
  const translations = useTranslations('common.pdfViewer');
  const { closeModal } = useModalContext();
  const clientWidth = useWindowWidth();
  const [viewerWidth, setViewerWidth] = useState<number>(0);

  useEffect(() => {
    const preventCopy = (ev: Event) => {
      ev.preventDefault();
    };

    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('contextmenu', preventCopy);

    return () => {
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('contextmenu', preventCopy);
    };
  }, []);

  useEffect(() => {
    const getWidth = () => {
      if (clientWidth < 1280) {
        return clientWidth - 40;
      }
      return 1040;
    };

    const handleResize = () => {
      setViewerWidth(getWidth());
    };

    setViewerWidth(getWidth());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [clientWidth]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setPages(numPages);

  const changePage = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
    if (pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <article ref={pageRef} className={styles.article}>
          <Document {...{ file }} onLoadSuccess={onDocumentLoadSuccess}>
            <div className={styles.closeContainer}>
              <div
                onClick={() => closeModal(docKey)}
                className={styles.modalClose}
              >
                <Image
                  src="/svg/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <Page pageNumber={pageNumber} width={viewerWidth}>
              <div>
                <div className={styles.pageIndicator}>
                  {translations('page')} {pageNumber} {translations('from')}
                  {pages}
                </div>
                <div className={styles.pagination}>
                  {pageNumber > 1 && (
                    <button onClick={() => changePage(pageNumber - 1)}>
                      ←
                    </button>
                  )}
                  {pages && pageNumber + 1 <= pages && (
                    <button onClick={() => changePage(pageNumber + 1)}>
                      →
                    </button>
                  )}
                </div>
              </div>
            </Page>
          </Document>
        </article>
      </div>
    </div>
  );
};

export default PDFViewer;
