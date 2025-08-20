export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const { switchip, mac, url } = req.query; // Aruba gửi khi redirect ban đầu

    // Demo: user/password cứng
    if (username === "guest" && password === "123456") {
      try {
        // Gửi thông báo authenticated về Aruba
        if (switchip && mac) {
          await fetch(`http://${switchip}/cgi-bin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              user: username,
              password: password,
              mac: mac,
            }),
          });
        }

        // Redirect client về URL gốc mà Aruba muốn (hoặc fallback Google)
        res.writeHead(302, {
          Location: url || "http://www.google.com",
        });
        res.end();
      } catch (err) {
        console.error("Error notifying Aruba:", err);
        res.status(500).send("Login server error");
      }
    } else {
      res.status(401).send("Invalid credentials. Try again.");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
