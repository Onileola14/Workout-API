const User = require("../models/User");


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ msg: "Please provide name, email and password" });
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    return res.status(400).json({ msg: "Email already in use" });
  }



  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(201).json({ msg: "User registered successfully", user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please provide  email and password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }


  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ msg: "Please provide the correct password" });
  }

  const token = user.createJWT();
  res.status(200).json({ msg: "User logged in successfully", user, token });

};


module.exports = { register, login };
