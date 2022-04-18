import React from "react";
import image7 from "../images/prem.svg";
import "./Collections.css";
import image5 from "../images_add/instagram.svg";
import image4 from "../images_add/facebook.svg";
import image3 from "../images_add/footer.svg";
import image8 from "../images_add/fav.svg";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Collections = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <div className="container_col">
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
        <h1>All Collections</h1>
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
          <div onClick={handleClick} className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fproductivity_hacks.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Productivity <br /> Hacks
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fbeat_procrastination.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Beat <br /> Procrastination
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fmaking_remote_work_work.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Making Remote <br /> Job
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fthink_outside_the_box.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Think outside <br /> The box
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fthe_power_of_storytelling.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              The Power of <br /> StoryTelling
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fjoining_a_new_team.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Joining a <br /> New Team
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fno_more_broke.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              No More <br /> Broke
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fproduct_management_essentials.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Product <br /> Management
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fdesign_frameworks.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Desing <br /> FrameWorks
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fhow_to_sell_anything.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              How to Sell <br /> Anything
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fhow_to_succeed_at_investing.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              How to Succeed <br /> at Investing
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
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fhappiness_at_work.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Happiness <br /> at Work
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
