import React, { useContext, useEffect, useState } from "react";
import image2 from "../images/logo.svg";
import "./Navbar2.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { postContext } from "../../context/postContext";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import image7 from "../images/prem.svg";
import { Link } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Pizza = ({ title, setTitle }) => {
  const { getPost } = useContext(postContext);
  const { post } = useContext(postContext);
  const [info, setInfo] = useState(false);
  const [open, setOpen] = React.useState(false);
  console.log(title);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="container">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            We have a settings with <br /> payment try it in one hour
          </Alert>
        </Snackbar>
      </Stack>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>COLLECTIONS</h3>
          <Link style={{ textDecoration: "none" }} to="/collections">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>See All</h3>
              <img className="col_all" src={image2} alt="" />
            </div>
          </Link>
        </div>
        <div className="col">
          <div onClick={handleClick} className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fhandling_difficult_people.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Handling Difficult <br /> People
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
          <div onClick={handleClick} className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fask_for_a_raise.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Ask For a Raise <br /> For Someone
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
          <div onClick={handleClick} className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fboost_your_emotional_intelligence.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Boost Your <br /> Emotional...
            </h3>
            <h4 className="col_h4">
              <img className="prem" src={image7} alt="" /> pro
            </h4>
          </div>
          <div onClick={handleClick} className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fa_job_seekers_guide.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              A Job Seeker's <br /> Guide
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
        </div>
        <div className="phone">
          <div className="phone_block1">
            <img
              className="phone_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fstatic.deepstash.com%2Fillustrations%2Fhand_phone_dark.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="phone_block2">
            <h4 className="phone_h3">Continue reading your collections</h4>
            <h4 className="phone_h3">
              Pick up where you left off your collections with the mobile app.
            </h4>
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              to="/phone"
            >
              <h5 className="phone_h4">Get the App</h5>
            </Link>
          </div>
        </div>
        <div className="list">
          <h3>DISCOVER NEW IDEAS</h3>
        </div>
        <div className="select">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Filter by title
              </InputLabel>
              <Select
                displayEmpty={false}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={title}
                label="Filter by title"
                onChange={(e) => setTitle(e.target.value)}
              >
                {post.map((item) => (
                  <MenuItem key={item.id} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
