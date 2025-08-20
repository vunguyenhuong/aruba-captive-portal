export default function handler(req, res) {
  if (req.method === "POST") {
    // Aruba chỉ cần HTTP 200 + chữ "Authenticated"
    res.status(200).send("Authenticated");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
