const express = require("express");
const app = express();
const { client } = require("@repo/db/client");

app.get("/", (req: any, res: any) => {
  res.send("Hello, World!");
});

app.post("/signup", async (req: any, res: any) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.User.create({
    data: {
      username: username,
      password: password,
    },
  });

  return res.json({
    message: "Signup successful",
    id: user.id,
  });
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
