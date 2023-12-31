import * as React from 'react';
import '../styles/savePDF.css';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function SavePDF(){
  const generatePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a4');
    report.html(document.getElementById('resume')).then(() => {
      report.save('cv.pdf');
    });
  };
  return (
    <>
      <div className='savePDF'>
        <button onClick={generatePDF}>
          Download CV
        </button>
      </div>
    </>
  )
}