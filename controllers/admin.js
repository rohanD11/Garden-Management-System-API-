//MODELS here
const Admin = require("../models/Admin");
const User = require("../models/User");
const LandscapeDesign = require("../models/LndscapeDesigns");

const jwt = require("jsonwebtoken");

const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const login = async (req, res) => {
  // await Admin.create({email:"rohan11@gmail.com",name:"Rohan",password:"password"});
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  // console.log(email);
  const user = await Admin.findOne({ email });
  // console.log(user);
  if (!user) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  // console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("invalid credentials");
  }
  const token = jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
  // console.log(token);
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

const addLandScapeDesign = async (req, res) => {
  console.log(req.body);
  const addDesin = await LandscapeDesign.create(req.body);
  
  res.status(StatusCodes.CREATED).json({ addDesin });
};

const addProducts = async (req, res) => {
  req.body.createdBY = req.user.userID;
  const products = await Products.create(req.body);
  res.status(StatusCodes.CREATED).json({ products });
};

const addGardenServices = async (req, res) => {
  req.body.createdBY = req.user.userID;
  const gardenservice = await Products.create(req.body);
  res.status(StatusCodes.CREATED).json({ gardenservice });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users, count: users.length });
};
module.exports = {
  login,
  getAllUsers,
  addLandScapeDesign,
};
