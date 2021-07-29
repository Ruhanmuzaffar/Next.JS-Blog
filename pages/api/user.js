export default function handler(req, res) {
  console.log('>>>>',res.method);
  res.status(200).json({ name: "John Doe" });
}
