import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const InputFieldHook = ({ control, name, label, type, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          error={fieldState.error ? true : false}
          helperText={fieldState.error?.message}
          {...rest}
        />
      )}
    />
  );
};

export default InputFieldHook;
