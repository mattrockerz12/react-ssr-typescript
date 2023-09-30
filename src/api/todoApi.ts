import { createApi } from "@reduxjs/toolkit/query/react";
import { ITodoResponse } from "./types";
import customFetchBase from "./customFetchBase";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: customFetchBase,
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodoResponse[], void>({
      query() {
        return {
          url: "/todos",
        };
      },
      providesTags: ["Todos"],
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;
