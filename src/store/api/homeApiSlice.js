// import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


// export const authorAdapter=createEntityAdapter({
//     selectId:(user)=>user._id
// })

export const extendedHomeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getHomeData: builder.query({
            query: () => `/`,
            providesTags: (result, error, args) => (
                result ?
                    [
                        ...result.recentBooks.map(({ _id: id }) => ({ type: 'Book', id })),
                        ...result.randomBooks.map(({ _id: id }) => ({ type: 'Book', id })),
                        { type: 'Book', id: 'RANDOM_BOOKS' }, { type: 'Book', id: 'RECENT_BOOKS' }
                    ] : ['Book']
            )
        }),
        getUsers: builder.query({
            query: () => `/users`,
            transformResponse: (response, meta, args) => (
                response.reduce((obj,user)=>{
                    obj[user._id]=user
                    return obj
                },{})
            ),
            providesTags: [{ type: 'User', id: 'LIST' }],
        })
    })
})


export const { useGetHomeDataQuery, useGetUsersQuery } = extendedHomeApiSlice