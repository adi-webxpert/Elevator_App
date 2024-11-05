import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PopUp({
  open,
  handleClose,
  setEmailValue,
  handleSubmit,
  emailValue,
  done,
  loader,
}) {

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogActions>
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        </DialogActions>
        {done === true ? (
          <DialogContent className="MainHeadingDiscount">
            <img
              className="thankyouImage"
              src="/images/greencheck.jpg"
              alt="image"
            />

            <DialogContentText className="Headingthankyou">
              Thank you
            </DialogContentText>
            <DialogContentText className="thankyoutext">
              We have received your request. We will reach <br />
              out to you soon.
            </DialogContentText>
          </DialogContent>
        ) : (
          <DialogContent className="MainHeadingDiscount">
            <DialogContentText className="HeadingDiscountBlack">
              Build Your Website That Convert!
            </DialogContentText>
            <DialogContentText className="HeadingDiscount">
              Enjoy 10% Discount on Your First Website Development.
            </DialogContentText>
            <DialogContentText className="secondHeadingDiscount">
              Limited Period Offer. Start Now!
            </DialogContentText>
            <Box className="formItems">
              <input
                value={emailValue}
                id="discountMail"
                className="emailInput"
                style={{ border: "1px solid gray" }}
                placeholder="Enter your email..."
                type="email"
                onChange={(e) => setEmailValue(e.target.value)}
              />
              {loader ? (
                <span>
                  <i class="bx bx-loader bx-spin bx-md"></i>
                </span>
              ) : (
                <span className="formBtn">
                  <Button onClick={handleSubmit}>Submit</Button>
                </span>
              )}
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </React.Fragment>
  );
}
