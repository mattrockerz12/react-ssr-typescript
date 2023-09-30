const express = require("express");
const fs = require("fs");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const { App } = require("../src/components/app");
const { StaticRouter } = require("react-router-dom/server");

const app = express();

app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../dist"))
);

app.use("*", (req: any, res: any) => {
  fs.readFile(
    path.resolve(__dirname, "../dist/index.html"),
    "utf8",
    (err: any, data: any) => {
      return res.send(
        data.replace(
          '<div id="app"></div>',
          `<div id="app">${ReactDOMServer.renderToString(
            <StaticRouter location={req.originalUrl}>
              <App />
            </StaticRouter>
          )}</div>`
        )
      );
    }
  );
});

app.listen("9000", () => {
  console.log("Express server started at localhost:9000");
});
