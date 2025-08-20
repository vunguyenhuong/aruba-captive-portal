export default async function handler(req, res) {
  if (req.method === "POST") {
    const { switchip, mac, url } = req.body;

    try {
      if (switchip && mac) {
        await fetch(`http://${switchip}/cgi-bin/login`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            // Aruba chỉ cần thông tin cơ bản để xác thực
            mac: mac,
            cmd: "authenticate"
          }),
        });
      }

      // Redirect client về URL ban đầu (nếu có) hoặc Google
      res.writeHead(302, {
        Location: url || "http://www.google.com",
      });
      res.end();
    } catch (err) {
      console.error("Error notifying Aruba:", err);
      res.status(500).send("Login server error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
