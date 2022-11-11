import {
  signIn,
  loadingRequest,
  signOut,
  resetPassword,
} from "app/redux/reducers/auth.reducer";
import { v4 as uuidv4 } from "uuid";

export const signInAction =
  (credentials, resetForm, notify) => async (dispatch) => {
    dispatch(loadingRequest());
    dispatch(
      signIn({
        ...credentials,
        accessToken: uuidv4(),
      })
    );
    notify({
      message: `Nous sommes ravie de vous revoir ${credentials.email}`,
      type: "success",
    });

    resetForm();
  };

export const signOutAction = () => async (dispatch) => {
  dispatch(loadingRequest());
  dispatch(signOut());
};

export const resetPasswordWithEmail =
  (email, resetForm) => async (dispatch) => {
    dispatch(loadingRequest());
    dispatch(resetPassword());
    resetForm();
  };
