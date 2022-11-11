import React, { Fragment } from "react";
import { Box, Stack } from "@mui/material";

import {
  formDefaultValues,
  formModel,
  formValidationSchema,
} from "app/models/resetPassword.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputFieldHook from "components/forms/forms-inputs/InputFieldHook";
import CustomButton from "components/button/CustomButton";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordWithEmail } from "app/redux/actions/auth.actions";
import { userSelector } from "app/redux/selectors/auth.selector";

const ForgetPassword = () => {
  const dispatch = useDispatch();

  const authState = useSelector(userSelector);
  const { loading } = authState;

  const { control, handleSubmit } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmitForm = (data) => {
    dispatch(resetPasswordWithEmail(data.email));
  };

  return (
    <Fragment>
      <Box component="form" onSubmit={handleSubmit(onSubmitForm)}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={3}
          sx={{
            width: "100%",
          }}
        >
          {formModel.map((item) => {
            return (
              <InputFieldHook
                key={item.id}
                control={control}
                size="small"
                {...item}
              />
            );
          })}

          <CustomButton
            type="submit"
            text="reset password"
            disabled={loading}
          />
        </Stack>
      </Box>
      <DevTool control={control} />
    </Fragment>
  );
};

export default ForgetPassword;
