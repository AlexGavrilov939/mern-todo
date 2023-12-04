import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { fetch } from "../utils/dataAccess";
import ViolationError from "../utils/violationError";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export interface ITodoItem {
  _id?: string;
  title: string;
  description: string;
  created_date: string;
  deadline_date?: string;
}

export const getList = async (): Promise<ITodoItem[]> => {
  const { data } = await fetch({
    url: `/tasks`,
  });
  // @TODO remove later, just for demo purposes
  await delay(500);

  return data || [];
};

export const updateTask = async ({
  id,
  body,
}: {
  id: ITodoItem["_id"];
  body: ITodoItem;
}): Promise<any> => {
  const { data } = await fetch({
    url: `/tasks/${id}`,
    method: "PUT",
    data: body,
  });

  return data;
};
export const createTask = async (body: ITodoItem): Promise<any> => {
  const { data } = await fetch({
    url: `/tasks`,
    method: "POST",
    data: body,
  });

  return data;
};

export const useGetListQuery = (): UseQueryResult<ITodoItem[], Error> => {
  return useQuery(["getList"], () => getList());
};

export const useUpdateTask = (): UseMutationResult<
  any,
  Error | ViolationError,
  any
> => {
  return useMutation(updateTask, { mutationKey: `update_task` });
};

export const useCreateTask = (): UseMutationResult<
  { body: ITodoItem },
  Error | ViolationError,
  any
> => {
  return useMutation(createTask);
};
