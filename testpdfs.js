const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

// const mergedPdf = (async (p1, p2) => {
//   await merger.add("1.pdf"); //merge all pages. parameter is the path to file and filename.
//   await merger.add("2.pdf"); // merge only page 2

//   await merger.save("public/merged.pdf"); //save under given name and reset the internal document
// })();

// module.exports = { mergedPdf };
const mergedPdf = async (p1, p2) => {
  var merger = new PDFMerger();
  await merger.add(p1); // Merge all pages from p1
  await merger.add(p2); // Merge only page 2 from p2
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`);
  return d; // Save under the given name and reset the internal document
  return merger; // Return the merger instance
};

// Export the mergedPdf function
module.exports = { mergedPdf };
