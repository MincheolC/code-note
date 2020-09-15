import * as Yup from "yup";

function validator(schema, target) {
  try {
    schema.validateSync(target, { abortEarly: false });
    return null;
  } catch (err) {
    const { inner } = err;
    return inner.reduce(
      (obj, error) => ({
        ...obj,
        [error.path]: error.message,
      }),
      {}
    );
  }
}

export function foodValidator(food) {
  const FoodSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    calories: Yup.number().min(1, "Too small").required("Required"),
    fat: Yup.number().min(0, "Too small").required("Required"),
    carbs: Yup.number().min(0, "Too small").required("Required"),
    protein: Yup.number().min(0, "Too small").required("Required"),
  });
  return validator(FoodSchema, food);
}

export function userValidator(user) {
  const UserSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    age: Yup.number().min(1, "Too small").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .min(8, "-없이 입력")
      .max(11, "-없이 입력")
      .required("Required"),
  });
  return validator(UserSchema, user);
}

export function userValidator2(user) {
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(5, "Too long")
      .required("Required"),
    age: Yup.number().min(1, "Too small").required("Required"),
  });
  return validator(UserSchema, user);
}
