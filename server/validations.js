import { body } from "express-validator";

export const loginValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password should be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password should be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Enter post title").isLength({ min: 3 }).isString(),
  body("subtitle", "Enter post subtitle").isLength({ min: 3 }).isString(),
  body("description", "Enter post description")
    .isLength({ min: 3 })
    .isString(),
  /* body("imgUrl", "Wrong image link").isString(), */
];

export const carCreateValidation = [
  body("name", "Enter car name").isLength({ min: 1 }).isString(),
  body("price", "Enter car price").isLength({ min: 1 }).isNumeric(),
  body("power", "Enter car power").isLength({ min: 1 }).isNumeric(),
  body("wheelbase", "Enter car wheelbase").isLength({ min: 4 }).isNumeric(),
  body("weight", "Enter car weight").isLength({ min: 2 }).isNumeric(),
  body("sellfyLink", "Wrong sellfy link").isString(),
  body("imgUrl", "Wrong image link").isString(),
  body("templateUrl", "Wrong template image link").isString(),
];
