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

interface ICreateOrUpdateProps {
  id?: ITodoItem["_id"];
  body: ITodoItem;
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
}: ICreateOrUpdateProps): Promise<ITodoItem> => {
  const { data } = await fetch({
    url: `/tasks/${id}`,
    method: "PUT",
    data: body,
  });

  return data;
};
export const createTask = async ({
  body,
}: ICreateOrUpdateProps): Promise<ITodoItem> => {
  const { data } = await fetch({
    url: `/tasks`,
    method: "POST",
    data: body,
  });

  return data;
};

export const deleteTask = async ({
  id,
}: {
  id: ITodoItem["_id"];
}): Promise<ITodoItem> => {
  const { data } = await fetch({
    url: `/tasks/${id}`,
    method: "DELETE",
  });

  return data;
};

export const useGetListQuery = (): UseQueryResult<ITodoItem[], Error> => {
  return useQuery(["getList"], () => getList(), { cacheTime: 0 });
};

export const useUpdateTask = (): UseMutationResult<
  ITodoItem,
  Error | ViolationError,
  ICreateOrUpdateProps
> => {
  return useMutation(updateTask);
};

export const useCreateTask = (): UseMutationResult<
  ITodoItem,
  Error | ViolationError,
  ICreateOrUpdateProps
> => {
  return useMutation(createTask);
};

export const useDeleteTask = (): UseMutationResult<
  ITodoItem,
  Error | ViolationError,
  { id: ITodoItem["_id"] }
> => {
  return useMutation(deleteTask);
};
