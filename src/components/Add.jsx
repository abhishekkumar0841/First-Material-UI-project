import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  ListItemAvatar,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBackOutlined,
} from "@mui/icons-material";

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Post"
        sx={{
          //   border: "2px solid black",
          position: "fixed",
          bottom: "20px",
          left: { md: "20px", xs: "calc(50% - 25px)" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            border: "2px solid yellow",
            width: "50%",
            height: "53%",
            borderRadius: 5,
            padding: 3,
          }}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography
            variant="h6"
            color="gray"
            textAlign="center"
            fontWeight={"900"}
            fontSize={"30px"}
          >
            Create Post
          </Typography>
          <ListItemAvatar
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="h6" fontWeight={"500"}>
              John Doe
            </Typography>
          </ListItemAvatar>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Write your post..."
            multiline
            rows={4}
            placeholder="What's In Your Mind, Today?"
          />
          <Stack direction={"row"} gap={2} mt={2}>
            <EmojiEmotions color="primary" sx={{ cursor: "pointer" }} />
            <Image color="secondary" sx={{ cursor: "pointer" }} />
            <VideoCameraBackOutlined color="error" sx={{ cursor: "pointer" }} />
            <PersonAdd color="success" sx={{ cursor: "pointer" }} />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            fullWidth
            sx={{ marginTop: "15px" }}
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
