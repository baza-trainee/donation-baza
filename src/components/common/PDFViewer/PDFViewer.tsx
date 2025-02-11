'use client';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useRef, useState } from 'react';
import styles from './PDFViewer.module.scss';
import { useTranslations } from 'next-intl';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const [pages, setPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const pageRef = useRef<HTMLDivElement>(null);
  const translations = useTranslations('common.pdfViewer');

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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setPages(numPages);
  }

  // Const changePage = (newPageNumber: number) => {
  //   SetPageNumber(newPageNumber);
  //   If (pageRef.current) {
  //     PageRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <article ref={pageRef}>
        <Document {...{ file }} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </article>
      {/* <div className={styles.pageIndicator}>
        {translations('page')} {pageNumber} {translations('from')} {pages}
      </div> */}
      {/* <div className={styles.pagination}>
        {pageNumber > 1 && (
          <button onClick={() => changePage(pageNumber - 1)}>←</button>
        )}
        {pages && pageNumber + 1 <= pages && (
          <button onClick={() => changePage(pageNumber + 1)}>→</button>
        )}
      </div> */}
    </div>
  );
};

export default PDFViewer;
