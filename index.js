const express = require("express");
const path = require("path"); // for joining paths
const data = require("./data/data.json");
const app = express();
const port = process.env.PORT || 3000; // use environment variable for port or default to 3000

app.set("view engine", "ejs");

// Serve static files from the 'static' folder at the root
app.use("/static", express.static(path.join(__dirname, "static")));

// Serve index.html for the root path (/)
app.get("/", (req, res) => {
  const { title, tasks } = data;
  const { task_title, task_description, assets } = tasks[0];
  res.render("index", { title, task_title, task_description, assets });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
