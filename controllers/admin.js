//MODELS here
const Admin = require("../models/Admin");
const User = require("../models/User");
const LandscapeDesign = require("../models/LndscapeDesigns");
const Products = require("../models/Products");
const Services = require("../models/Services");
const Project = require("../models/Projects");
const Plant = require("../models/Plants");
const Contact = require("../models/Contact");
const ServiceBooking = require("../models/Client_service_Booking");

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
  // console.log(req.body);
  const addDesin = await LandscapeDesign.create(req.body);

  res.status(StatusCodes.CREATED).json({ addDesin });
};
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users, count: users.length });
};
const addProducts = async (req, res) => {
  // req.body.createdBY = req.user.userID;
  const products = await Products.create(req.body);
  res.status(StatusCodes.CREATED).json({ products });
};

const addGardenServices = async (req, res) => {
  // req.body.createdBY = req.user.userID;
  const service = await Services.create(req.body);
  res.status(StatusCodes.CREATED).json({ service });
};
const addGardenProjects = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(StatusCodes.CREATED).json({ project });
};
const addGardenPlants = async (req, res) => {
  const plant = await Plant.create(req.body);
  res.status(StatusCodes.CREATED).json({ plant });
};

const getAllServices = async (req, res) => {
  const service = await Services.find({});
  res.status(StatusCodes.OK).json({ service, count: service.length });
};
const getAllPlants = async (req, res) => {
  const plant = await Plant.find({});
  res.status(StatusCodes.OK).json({ plant, count: plant.length });
};
const getAllProducts = async (req, res) => {
  const product = await Products.find({});
  res.status(StatusCodes.OK).json({ product, count: product.length });
};

const getContacts = async (req, res) => {
  const contact = await Contact.find({});
  res.status(StatusCodes.OK).json({ contact, count: contact.length });
};
const getServiceBooking = async (req, res) => {
  const service = await ServiceBooking.find({});
  res.status(StatusCodes.OK).json({ service, count: service.length });
};
module.exports = {
  login,
  getAllUsers,
  addLandScapeDesign,
  addProducts,
  addGardenServices,
  addGardenProjects,
  addGardenPlants,
  getAllServices,
  getAllPlants,
  getAllProducts,
  getContacts,
  getServiceBooking,
};
