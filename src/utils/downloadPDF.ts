import pdfFile from '/EDGARCV.pdf';

export const DownloadPDF = (): void => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'nombre-del-archivo.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};