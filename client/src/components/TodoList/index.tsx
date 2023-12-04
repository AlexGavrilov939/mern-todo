import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Page from "../Page";
import { ITodoItem, useGetListQuery } from "../../queries/todo";
import RemoveTask from "./RemoveTask";
import { format } from "date-fns";
import Status from "../Status";
import DetailView, { TaskViewMode } from "./DetailView";
import EditTask from "./EditTask";

const TodoList = () => {
  const { data, isLoading, refetch } = useGetListQuery();
  const [detailView, setDetailView] = useState<null | {
    item?: ITodoItem;
    mode: TaskViewMode;
  }>(null);

  const handleChangeItem = useCallback(
    async (isChanged) => {
      setDetailView(null);
      if (isChanged) {
        await refetch();
      }
    },
    [refetch],
  );

  return (
    <Page title={"Todo app"}>
      <Container maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
        <Card>
          <CardContent
            sx={{ p: 4, "&:last-child": { pb: 4 }, textAlign: "left" }}
          >
            <Stack sx={{ mb: 2 }}>
              <Box>
                <Button
                  variant="contained"
                  disabled={!!detailView}
                  onClick={() => setDetailView({ mode: TaskViewMode.CREATE })}
                >
                  Add task
                </Button>
              </Box>
            </Stack>
            <Box>
              {isLoading && <LinearProgress />}
              {!isLoading && data && (
                <Stack direction="row" spacing={3}>
                  <Stack
                    sx={{ width: !!detailView ? "45%" : "100%" }}
                    spacing={1}
                  >
                    {data.map((item, index) => (
                      <React.Fragment key={item._id}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Box sx={{ flex: 1 }}>{item.title}</Box>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1.5}
                          >
                            <Status status={"active"} />
                            <Typography
                              variant="body2"
                              align="center"
                              color={"text.secondary"}
                            >
                              {format(
                                new Date(item.created_date),
                                "dd MMM H:I",
                              )}
                            </Typography>

                            <Stack direction="row" spacing={1}>
                              <EditTask
                                onEditTask={() =>
                                  setDetailView({
                                    item,
                                    mode: TaskViewMode.UPDATE,
                                  })
                                }
                              />
                              <RemoveTask id={item._id} />
                            </Stack>
                          </Stack>
                        </Stack>
                        {index < data.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </Stack>
                  {!!detailView && (
                    <Box sx={{ flex: 1 }}>
                      <DetailView
                        item={detailView?.item}
                        mode={detailView.mode}
                        onChangeItem={handleChangeItem}
                      />
                    </Box>
                  )}
                </Stack>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default TodoList;
