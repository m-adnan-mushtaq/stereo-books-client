import { openSnackBar, removeUserCredentials, setUserCredentials } from "store/actionCreator"
import { apiSlice } from "./apiSlice"

// fetchBaseQuery automatically adds `content-type: application/json` to the Headers and calls `JSON.stringify(body)`
export const extendedAuthApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signUp: builder.mutation({
            query: (credentials) => ({
                url: `/auth/sign-up`,
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags:['User']
        }),
        signIn: builder.mutation({
            query: (credentials) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: credentials,

            })
        }),
        logOut: builder.query({
            query: () => ({
                url: `/auth/logout`,
                credentials: 'include',
            }),
            // The 2nd parameter is the destructured `QueryLifecycleApi`
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    // console.log('logout request completed!');
                    dispatch(removeUserCredentials())
                    localStorage.removeItem('persist')
                } catch (error) {
                    // console.error(error)
                    dispatch(openSnackBar('error', 'Invalid Request'))
                }

            },
        }),
        getrefreshToken: builder.query({
            query: () => ({
                url: `/auth/refresh`,
                method: 'GET',
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    //get credentials
                    const refreshResult = await queryFulfilled
                    if (refreshResult?.data?.accessToken) {
                        dispatch(setUserCredentials({
                            user: refreshResult.data.user,
                            token: refreshResult.data.accessToken
                        }))
                        localStorage.setItem('persist',true)
                    }
                } catch (error) {
                    // console.error(error)
                }

            }
        })
    })
})


//hooks
export const { useSignInMutation, useSignUpMutation, useLogOutQuery , useGetrefreshTokenQuery } = extendedAuthApiSlice