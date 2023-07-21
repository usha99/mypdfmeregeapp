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
  await mergedPdf(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect("http://localhost:3000/static/merged.pdf");
  //   res.send({ data: req.files });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
