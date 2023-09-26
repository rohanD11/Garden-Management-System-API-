const { StatusCodes } = require("http-status-codes");

const Contact = require("../models/Contact");
const Services = require("../models/Client_service_Booking");
const Tools = require("../models/Client_Tool_Buying");
const serviceBooking = async (req, res) => {
  req.body.serviceID = req.user.userId;
  const service = await Services.create(req.body);
  res.status(StatusCodes.CREATED).json({ service });
};

const toolBuying = async (req,res) => {
  req.body.createdBy = req.user.userId;
  const tool = await Tools.create(req.body);
  res.status(StatusCodes.CREATED).json({ tool });
};

const contact = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const contact = await Contact.create(req.body);
  res.status(StatusCodes.CREATED).json({ contact });
};

module.exports = {
  contact,
  serviceBooking,
  toolBuying,
};
