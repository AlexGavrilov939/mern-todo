import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const AddTask = () => {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <>
      {isCreating && (
        <Box>
          creating
          <Button variant="outlined" onClick={() => setIsCreating(false)}>
            close
          </Button>
        </Box>
      )}
      {!isCreating && (
        <Button
          variant="contained"
          onClick={() => setIsCreating(() => !isCreating)}
        >
          Add task
        </Button>
      )}
    </>
  );
};

export default AddTask;
