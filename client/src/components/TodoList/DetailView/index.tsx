import { ITodoItem, useCreateTask, useUpdateTask } from "../../../queries/todo";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField as MuiTextField,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { HighlightOff as HighlightOffIcon } from "@mui/icons-material";
import React from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { format } from "date-fns";
import ViolationError from "../../../utils/violationError";

export enum TaskViewMode {
  CREATE,
  UPDATE,
}

const modeViewTitle = (mode: TaskViewMode, item?: ITodoItem) => {
  if (mode === TaskViewMode.UPDATE) {
    return `Update ${item!.title}`;
  } else {
    return `Create new task`;
  }
};

const modeButtonTitle = (mode: TaskViewMode) => {
  if (mode === TaskViewMode.UPDATE) {
    return `Update task`;
  } else {
    return `Create task`;
  }
};

type DetailViewType = {
  item?: ITodoItem;
  mode: TaskViewMode;
  onChangeItem: (isChanged: boolean) => void;
};
const DetailView = ({ item, mode, onChangeItem }: DetailViewType) => {
  const { mutate: updateTask } = useUpdateTask();
  const { mutate: createTask } = useCreateTask();
  const formInitialData = {
    title: item?.title,
    description: item?.description,
    created_date: format(
      item?.created_date ? new Date(item.created_date) : new Date(),
      "y-MM-dd"
    ),
    deadline_date: format(
      item?.deadline_date ? new Date(item.deadline_date) : new Date(),
      "y-MM-dd"
    ),
  };
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: "6px",
        border: "1px solid",
        position: "relative",
        borderColor: (theme) => theme.palette.grey[300],
      }}
    >
      <HighlightOffIcon
        onClick={() => onChangeItem(false)}
        sx={{
          position: "absolute",
          right: "10px",
          top: "10px",
          opacity: 0.8,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.95,
          },
        }}
      />
      <Typography variant="h4" sx={{ mb: 1.5 }}>
        {modeViewTitle(mode, item)}
      </Typography>
      <Stack>
        <Formik
          enableReinitialize
          initialValues={formInitialData}
          onSubmit={(values, { setStatus, setErrors, setSubmitting }) => {
            const options = {
              onError: (error: Error | ViolationError) => {
                setStatus({
                  isValid: false,
                  msg: `Unexpected error`,
                });
                setSubmitting(false);
              },
              onSuccess: async () => {
                setTimeout(() => {
                  onChangeItem(true);
                  setSubmitting(false);
                }, 1000);
              },
            };
            if (mode === TaskViewMode.UPDATE) {
              updateTask({ id: item!._id, body: values as ITodoItem }, options);
            } else {
              createTask({ body: values as ITodoItem }, options);
            }
          }}
        >
          {({
            values,
            isSubmitting,
            setFieldValue,
            touched,
            errors,
            handleBlur,
          }) => (
            <Form>
              <Stack spacing={1} sx={{ mb: 4 }}>
                <Field
                  autoComplete="off"
                  id="field-title"
                  type={"test"}
                  name="title"
                  variant="standard"
                  component={TextField}
                  label={"Title"}
                  fullWidth
                  disabled={isSubmitting}
                />
                <Field
                  autoComplete="description-nope"
                  id="field-description"
                  type="text"
                  label={"Description"}
                  name="description"
                  variant="standard"
                  component={TextField}
                  multiline
                  rows={4}
                  fullWidth
                  disabled={isSubmitting}
                  required
                />
                <Box>
                  <Field
                    type="date"
                    name={"created_date"}
                    label={"Created date"}
                    variant="standard"
                    component={MuiTextField}
                    onBlur={handleBlur}
                    onChange={(e: React.SyntheticEvent) => {
                      // @ts-ignore
                      setFieldValue("created_date", e.target.value);
                    }}
                    inputProps={{
                      autoComplete: "created-date-nope",
                      id: "field-created-date",
                      name: "created_date",
                      defaultValue: values.created_date,
                      min: format(new Date(), "y-MM-dd"),
                    }}
                    disabled
                    required
                  />
                  {touched["created_date"] && errors["created_date"] && (
                    <FormHelperText error>
                      {errors["created_date"]}
                    </FormHelperText>
                  )}
                </Box>
                <Box>
                  <Field
                    type="date"
                    name={"deadline_date"}
                    label={"Deadline"}
                    variant="standard"
                    component={MuiTextField}
                    onBlur={handleBlur}
                    onChange={(e: React.SyntheticEvent) => {
                      // @ts-ignore
                      setFieldValue("deadline_date", e.target.value);
                    }}
                    inputProps={{
                      autoComplete: "deadline-date-nope",
                      id: "field-deadline-date",
                      name: "deadline_date",
                      defaultValue: values.deadline_date,
                      min: format(new Date(), "y-MM-dd"),
                    }}
                    disabled={isSubmitting}
                    required
                  />
                  {touched["deadline_date"] && errors["deadline_date"] && (
                    <FormHelperText error>
                      {errors["deadline_date"]}
                    </FormHelperText>
                  )}
                </Box>
              </Stack>
              <Button
                variant="contained"
                type="submit"
                size="large"
                id="submit-button"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? (
                    <CircularProgress size="1.4rem" sx={{ color: "#fff" }} />
                  ) : (
                    <></>
                  )
                }
              >
                {modeButtonTitle(mode)}
              </Button>
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
};

export default DetailView;
