import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { userValidator2 } from "../../libs/formSchema";

function isNumeric(type) {
  return type === "number";
}

function CForm() {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, type, value } = e.target;
    const v = isNumeric(type) ? Number(value) : value;
    const error = userValidator2({ ...state, [name]: v });

    setState({
      ...state,
      [name]: v,
    });
    setErrors({ ...error });
  };

  console.log(errors);
  return (
    <div>
      <TextField
        error={errors.name ? true : false}
        helperText={errors.name}
        type="text"
        name="name"
        label="Name"
        value={state.name}
        onChange={onChange}
      />
      <TextField
        error={errors.age ? true : false}
        helperText={errors.age}
        type="number"
        name="age"
        label="Age"
        value={state.age}
        onChange={onChange}
      />
    </div>
  );
}

export default CForm;
