import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "./helpers/getAllBooks";


const initialState = {
    error: "",
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
            state.error = "";
        },
        [getAllBooks.fulfilled]: (state, { payload }) => {
            state.books = payload;
        },
        [getAllBooks.rejected]: (state, { payload }) => {
            state.error = payload;
        },

    }
});

export const { allBooks } = bookSlice.actions;

export default bookSlice.reducer;