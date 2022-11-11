import React, { useState } from "react";
import { signOutAction } from "app/redux/actions/auth.actions";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import stringAvatar from "utils/stringAvatar";
// import { routes_list } from "routes";
import { userSelector } from "app/redux/selectors/auth.selector";

const AccountMenu = () => {
  const authState = useSelector(userSelector);
  const { user } = authState;

  const navigate = useNavigate();

  const settings = [
    { name: "Logout", url: "logout" },
  ];

  const [anchorElUser, setAnchorElUser] = useState();

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOutAction());
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenu = (option) => {
    switch (option) {
      case "logout":
        handleCloseUserMenu();
        logOut();
        break;
      default:
        handleCloseUserMenu();
        navigate(option);
        break;
    }
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            {...stringAvatar(user.displayName)}
            alt={user.displayName}
            src={user.photoURL}
            imgProps={{
              referrerPolicy: "no-referrer",
              loading: "lazy",
            }}
          />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.name} onClick={() => handleMenu(setting.url)}>
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AccountMenu;
