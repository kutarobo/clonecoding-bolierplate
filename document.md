```
npm init
npm install express --save
```

[expressjs.com hello world guide](https://expressjs.com/en/starter/hello-world.html)

```js
const express = require("express");
const app = express();
const port = 3000; // 우리는 5000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```
