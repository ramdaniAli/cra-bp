import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const ListLink = ({ current_page_title, breadcrumbs }) => {
  const navigate = useNavigate();
  return !(breadcrumbs && current_page_title) ? null : (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs?.map((elmt, index) => {
        return (
          <Link
            key={index}
            component="button"
            underline="hover"
            color="inherit"
            onClick={() => {
              navigate(elmt.url);
            }}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {elmt.title}
          </Link>
        );
      })}
      <Typography
        color="text.primary"
        sx={{
          textTransform: "capitalize",
        }}
      >
        {current_page_title}
      </Typography>
    </Breadcrumbs>
  );
};

export default ListLink;
