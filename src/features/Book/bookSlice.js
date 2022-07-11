import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "./helpers/getAllBooks";


const initialState = {
    error: "",
    isLoading: false,
    books: [],
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        allBooks: state => {
            state.books = [];
        }
    },
    extraReducers: {
        [getAllBooks.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getAllBooks.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.books = payload;
        },
        [getAllBooks.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

    }
});

export const { allBooks } = bookSlice.actions;

export default bookSlice.reducer;