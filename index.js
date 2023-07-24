const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const port = 3000;
const { mergedPdf } = require("./testpdfs");
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 12), async (req, res, next) => {
  console.log(req.files);

  try {
    let pdfPaths = req.files.map((file) => path.join(__dirname, file.path));

    let d = await mergedPdf(pdfPaths);

    res.redirect(`http://localhost:3000/static/${d}.pdf`);
  } catch (error) {
    console.error("Error while merging PDFs:", error);
    res.status(500).send("Error while merging PDFs.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
