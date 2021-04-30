const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/v1/users/login", (req, res) => {
  res.status(200).send({
    users: [
      {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmFrZV93aGF0c2FwcCIsImlhdCI6MTYxOTI3MTc1MCwiZXhwIjoxNjE5ODc2NTUwLCJ3YTpyYW5kIjoiMTJmNGZhOTI0Yzc3ZGNkOTM3YWIyNjQ5ODgwZTY5OGUifQ.-fV0GDShkK5fTHLPZzLWO2OQpseECbQouqW7Tg8TcXE",
        expires_after: "2021-05-01 13:42:30+00:00",
      },
    ],
    meta: {
      version: "v2.31.5",
      api_status: "stable",
    },
  });
});

app.post("/v1/contacts", (req, res) => {
  const phone = req.body.contacts[0];
  const firstCharIsPlus = phone.charAt(0) === "+"
  const firstCharIsZero = phone.charAt(0) === "0"
  res.status(200).send({
    contacts: [
      {
        input: phone,
        status: "valid",
        wa_id: firstCharIsPlus ? phone.substring(1) : firstCharIsZero ? '62' + phone.substring(1) : phone,
      },
    ],
    meta: {
      api_status: "stable",
      version: "2.31.5",
    },
  });
});

app.post("/v1/messages/", (req, res) => {
  res.status(200).send({
    messages: [
      {
        id: "gBGHYoEocFARDwIJmSxR7agGEI1-",
      },
    ],
    meta: {
      api_status: "stable",
      version: "2.31.5",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
