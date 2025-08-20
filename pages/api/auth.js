export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Demo: login cứng
    if (username === "guest" && password === "123456") {
      // Redirect về trang success
      res.writeHead(302, { Location: "/success" });
      res.end();
    } else {
      res.status(401).send("Invalid credentials. Try again.");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
