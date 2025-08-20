// pages/api/auth.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Aruba chỉ quan tâm response này
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("Authenticated");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
