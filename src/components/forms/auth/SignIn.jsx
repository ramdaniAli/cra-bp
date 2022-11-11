import React, { Fragment } from "react";
import { Box, Stack } from "@mui/material";

import { useForm } from "react-hook-form";
/*
  ? JSX Component <DevTool control={control} />
  ! Only for development
  * A dev tool to help you debug your form. 
*/
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  formDefaultValues,
  formModel,
  formValidationSchema,
} from "app/models/signIn.model";

import InputFieldHook from "components/forms/forms-inputs/InputFieldHook";
import CustomButton from "components/button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "app/redux/actions/auth.actions";
import { userSelector } from "app/redux/selectors/auth.selector";
import isDevMode from "utils/isDevMode";
import { useNotify } from "app/redux/hooks/notification.hooks";

const SignIn = () => {
  const dispatch = useDispatch();

  const notificationHook = useNotify();

  const { notify } = notificationHook;

  const authState = useSelector(userSelector);
  const { loading } = authState;

  const { control, handleSubmit, reset } = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmitForm = (data) => {
    dispatch(signInAction(data, reset, notify));
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

          <CustomButton type="submit" text="Sign In" disabled={loading} />
        </Stack>
      </Box>
      {isDevMode && <DevTool control={control} />}
    </Fragment>
  );
};

export default SignIn;
