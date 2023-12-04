import React, { memo, useState } from "react";
import { ITodoItem, useDeleteTask } from "../../../queries/todo";
import { Close as CloseIcon } from "@mui/icons-material";
import ConfirmModal from "./ConfirmModal";

type RemoveTaskType = {
  id: ITodoItem["_id"];
  onChangeItem: (isChanged: boolean) => void;
};
const RemoveTask = ({ id, onChangeItem }: RemoveTaskType) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { mutate: deleteTask, isLoading } = useDeleteTask();

  const handleConfirm = () => {
    deleteTask(
      { id },
      {
        onError: (err) => console.error(err),
        onSuccess: () => onChangeItem(true),
        onSettled: () => setModalOpened(false),
      }
    );
  };

  return (
    <>
      <CloseIcon
        onClick={() => setModalOpened(true)}
        sx={{ cursor: "pointer", "&:hover": { opacity: 0.9 } }}
      />
      <ConfirmModal
        opened={modalOpened}
        setOpened={setModalOpened}
        isLoading={isLoading}
        onConfirm={handleConfirm}
      />
    </>
  );
};
export default memo(RemoveTask);
