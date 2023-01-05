import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


  export const DeezerApi = createApi({
    reducerPath: "DeezerApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://api.deezer.com/",
        mode: "cors",
        
        
    }),
  endpoints:(builder) =>({
    getTopCharts: builder.query({query: () =>'/chart/0' }),
  }),
    
  });
  export const {
    useGetTopChartsQuery
  } = DeezerApi;