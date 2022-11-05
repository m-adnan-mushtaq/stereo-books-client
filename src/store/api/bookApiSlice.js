import { apiSlice } from "./apiSlice";

export const extendedBookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPaginatedBooks: builder.query({
      query: ({ page, search, category, authors }) => {
        let url = "/books";
        if (page) url += `?page=${page || 1}`;
        if (search) url += `&search=${search.trim()}`;
        if (category) url += `&category=${category}`;
        if (authors && Object.keys(authors)?.length) {
          //extract only checked:true
          let authorsArr = Object.keys(authors).reduce((prev, current) => {
            if (authors[current] && authors[current]?.checked)
              prev.push(current);
            return prev;
          }, []);

          let idsParams = authorsArr.join("&author[]=");
          if (idsParams) {
            url += `&author[]=${idsParams}`;
          }
        }
        return { url };
      },
      providesTags: (result, error, args) =>
        result
          ? [
              { type: "Book", id: "PARTIAL-LIST" },
              ...result.foundBooks?.map(({ _id }) => ({
                type: "Book",
                id: _id,
              })),
            ]
          : [{ type: "Book", id: "PARTIAL-LIST" }],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (response, error, id) =>
        response
          ? [
              { type: "Book", id },
              ...response.randomBooks?.map(({ _id }) => ({
                type: "Book",
                id: _id,
              })),
            ]
          : [{ type: "Book", id }],
    }),
    getSignedUrl: builder.query({
      query: ({ fileKey ,id}) =>({
        url: `/books/audio?fileKey=${fileKey}`
      }),
      providesTags: (response, error, { id }) => [{ type: "AudioUrl", id }],
    }),
  }),
});

export const {
  useGetPaginatedBooksQuery,
  useGetBookByIdQuery,
  useGetSignedUrlQuery,
  useLazyGetSignedUrlQuery
} = extendedBookApiSlice;
