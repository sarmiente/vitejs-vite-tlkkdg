import React, { useState } from 'react';
import jsPDF from 'jspdf';

function WordToPDFConverter() {
  const [file, setFile] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Read the file contents as a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      // Create a new Blob from the data URL
      const blob = new Blob([e.target.result], { type: file.type });
      // Create a new PDF from the Blob
      const pdf = new jsPDF();
      pdf.fromDataURL(blob);
      // Download the PDF
      pdf.save(`${file.name}.pdf`);
    };
    reader.readAsDataURL(file);
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
