'use client';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFViewer() {
  const [pages, setPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setPages(numPages);
  }

  return (
    <div>
      <Document
        file="/docs/privacy_policy.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {pages}
      </p>
      <div>
        {pageNumber > 1 && (
          <button onClick={() => setPageNumber(pageNumber - 1)}>←</button>
        )}
        {pages && pageNumber + 1 <= pages && (
          <button onClick={() => setPageNumber(pageNumber + 1)}>→</button>
        )}
      </div>
    </div>
  );
}

export default PDFViewer;
