import React, { memo } from "react";
import { Edit as EditIcon } from "@mui/icons-material";

type EditTaskType = {
  onEditTask: () => void;
};
const EditTask = ({ onEditTask }: EditTaskType) => {
  return (
    <EditIcon
      onClick={() => onEditTask()}
      sx={{ cursor: "pointer", "&:hover": { opacity: 0.9 } }}
    />
  );
};
export default memo(EditTask);
