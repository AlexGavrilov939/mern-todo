import React, { memo } from "react";
import { ITodoItem } from "../../../queries/todo";
import { Close as CloseIcon } from "@mui/icons-material";

type RemoveTaskType = {
  id: ITodoItem["_id"];
};
const RemoveTask = ({ id }: RemoveTaskType) => {
  const onDelete = () => {
    console.log("delete-id", id);
  };
  return (
    <>
      <CloseIcon
        onClick={onDelete}
        sx={{ cursor: "pointer", "&:hover": { opacity: 0.9 } }}
      />
    </>
  );
};
export default memo(RemoveTask);
