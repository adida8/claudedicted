const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Root → the Claudicted landing page. Redirect (not rewrite) so the page's
// relative asset paths (./*.kit.jsx, ../../styles.css) resolve correctly.
app.get("/", (_req, res) => {
  res.redirect("/ui_kits/marketing/index.html");
});

// Serve the whole repo: styles.css, _ds_bundle.js, assets/, components/,
// ui_kits/, guidelines/ — everything the kit files reference.
app.use(
  express.static(ROOT, {
    extensions: ["html"],
    setHeaders: (res, filePath) => {
      // .kit.jsx files are JSX served as text/babel; force a sane content type.
      if (filePath.endsWith(".jsx")) res.type("text/babel");
    },
  })
);

app.listen(PORT, () => {
  console.log(`Claudicted site running on port ${PORT}`);
});
