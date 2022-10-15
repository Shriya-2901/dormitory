const godavari = async (req, res) => {
  res.json({ message: "Welcome to Pampa Hostel" });
};

const sindhu = async (req, res) => {
  res.json({ message: "Welcome to Sindhu Hostel" });
};

const pampa = async (req, res) => {
  res.json({ message: "Welcome to Pampa Hostel" });
};

module.exports = {
  godavari,
  sindhu,
  pampa,
};
