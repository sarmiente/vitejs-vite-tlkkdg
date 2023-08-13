import React, { useState } from 'react';
import jsPDF from 'jspdf';

function WordToPDFConverter() {
  const [file, setFile] = useState(null);

  const u = null;

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Read the file contents as an array of bytes
    const reader = new FileReader();
    reader.onload = (e) => {
      // Create a new File object from the array of bytes
      const file = new File([e.target.result], file.name, { type: file.type });
      // Create a new PDF from the File object
      const pdf = new jsPDF();
      pdf.write(file);
      // Download the PDF
      pdf.save(`${file.name}.pdf`);
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Word Document:
        <input type="file" accept=".doc,.docx" onChange={handleChange} />
      </label>
      <button type="submit">Convert to PDF</button>
    </form>
  );
}

export default WordToPDFConverter;
