import CarModel from "../models/Car.js";

export const getAll = async (req, res) => {
  try {
    const cars = await CarModel.find().populate({ path: "user", select: ["name"] }).exec();

    res.json(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not find cars",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const carId = req.params.id;

    const car = await CarModel.findById(carId);
    if (!car) {
      return res.status(404).json({
        message: "Car was not found",
      });
    }

    res.json(car);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not find car",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const carId = req.params.id;

    const deletedCar = await CarModel.findOneAndDelete({ _id: carId });

    if (!deletedCar) {
      return res.status(404).json({
        message: "Car was not found",
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not find car",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new CarModel({
      name: req.body.name,
      price: req.body.price,
      power: req.body.power,
      wheelbase: req.body.wheelbase,
      weight: req.body.weight,
      sellfyLink: req.body.sellfyLink,
      imgUrl: req.body.imgUrl,
      templateUrl: req.body.templateUrl,
      user: req.userId,
    });

    const car = await doc.save();

    res.json(car);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not create car",
    });
  }
};

export const update = async (req, res) => {
  try {
    const carId = req.params.id;

    await CarModel.updateOne(
      {
        _id: carId,
      },
      {
        name: req.body.name,
        price: req.body.price,
        power: req.body.power,
        wheelbase: req.body.wheelbase,
        weight: req.body.weight,
        sellfyLink: req.body.sellfyLink,
        imgUrl: req.body.imgUrl,
        templateUrl: req.body.templateUrl,
        user: req.userId,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Could not update car",
    });
  }
};
