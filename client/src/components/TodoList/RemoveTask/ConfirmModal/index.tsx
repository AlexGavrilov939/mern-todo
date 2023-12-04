import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React, { Dispatch, SetStateAction } from "react";

type ConfirmModalType = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  onConfirm?: () => void;
};

const ConfirmModal = ({
  opened,
  setOpened,
  isLoading,
  onConfirm = async () => {},
}: ConfirmModalType) => {
  const handleClose = () => {
    setOpened(false);
  };

  return (
    <Dialog
      open={opened}
      maxWidth="xl"
      PaperProps={{ elevation: 1 }}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      aria-describedby="form-dialog-description"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 5, px: 5, pb: 1.5 }}
      >
        <Typography variant="h3">Removing the task</Typography>
        <IconButton disableRipple={true} onClick={handleClose}>
          <Close sx={{ width: "20px", height: "20px" }} />
        </IconButton>
      </Stack>
      <DialogContent sx={{ mb: 5 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Please note, this action cannot be undone
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={4}
          sx={{ mt: 4, width: "100%" }}
        >
          <Button
            id="cancel-button"
            variant="outlined"
            size="large"
            onClick={handleClose}
            sx={{ px: 11 }}
            disabled={isLoading}
            fullWidth
          >
            Cancel
          </Button>

          <Button
            id="confirm-button"
            type="submit"
            variant="contained"
            size="large"
            sx={{ px: 11 }}
            onClick={onConfirm}
            disabled={isLoading}
            fullWidth
          >
            Confirm
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
