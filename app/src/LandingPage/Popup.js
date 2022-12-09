import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

// Model Component

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  // After 3 Second popup model
  React.useEffect(() => {
    setTimeout(() => setOpen(true), 3000);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <center>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <h1>Hungry ? signup for amazing food</h1>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Link to={"/Signup"}>
                  <button className="signupBtn">Signup</button>
                </Link>
              </Typography>
            </center>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
