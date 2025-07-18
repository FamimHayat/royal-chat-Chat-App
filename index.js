module.exports = (req, res) => {
  try {
    res.status(200).send("✅ Hello from Vercel!");
  } catch (error) {
    res.status(500).send("❌ Something went wrong.");
  }
};
