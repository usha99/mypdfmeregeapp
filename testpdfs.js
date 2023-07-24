const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergedPdf = async (pdfPaths) => {
  var merger = new PDFMerger();

  for (const path of pdfPaths) {
    await merger.add(path);
  }

  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`);
  return d;
};

module.exports = { mergedPdf };
