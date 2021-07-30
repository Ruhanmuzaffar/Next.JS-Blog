export default function handler(req, res) {
  console.log('>>>>',res.body);
  res.status(200).json({ name: "John Doe" });
  
}
