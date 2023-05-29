import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data } from "../../shared/interfaces";

const url = "https://rickandmortyapi.com/api/character?page=";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ["characters"],
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Data, number>({
      query: (pageNum) => `${url}${pageNum}`,
      providesTags: ["characters"],
    }),
  }),
});

export const { useGetAllCharactersQuery } = charactersApi;
