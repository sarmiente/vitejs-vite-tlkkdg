import React, { useState, useEffect } from 'react';

import { PDFJSWorker } from 'pdfjs-dist';

const Word = () => {
  const [file, setFile] = useState();
  const [pdf, setPdf] = useState();

  useEffect(() => {
    const worker = new PDFJSWorker();
    worker.onmessage = (event) => {
      setPdf(event.data);
    };
    worker.postMessage(file);
  }, [file]);

  const downloadPdf = () => {
    const blob = new Blob([pdf], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'document.pdf';
    link.click();
  };

  return (
    <div>
      <input type="file" onChange={(event) => setFile(event.target.files[0])} />
      <button onClick={downloadPdf}>Download PDF</button>
      {pdf && (
        <div>
          <iframe
            src={URL.createObjectURL(pdf)}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Word;
