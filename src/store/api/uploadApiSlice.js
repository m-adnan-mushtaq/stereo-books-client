import { apiSlice } from "./apiSlice";


export const extendedUploadApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        uploadAudioFile:builder.mutation({
            query:(formData)=>({
                url:`/books/upload`,
                method:'POST',
                body:formData,
            }),
        }),
        uploadBook:builder.mutation({
            query:(formData)=>({
                url:`/books`,
                method:'POST',
                body:formData,
            }),
            invalidatesTags:['Book']
        }),
        deletBookById:builder.mutation({
            query:(id)=>({
                url:`/books/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:(response,error,id)=>([{type:'Book',id}])
        })
    })
})

export const {useUploadAudioFileMutation , useUploadBookMutation , useDeletBookByIdMutation} = extendedUploadApiSlice