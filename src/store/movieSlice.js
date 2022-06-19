import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {movieService} from "../service/movieService";

export const fetchMovies = createAsyncThunk('movie/movieList',
    async (params) => {
        return await movieService.getMovies(params)
    }
)

export const fetchMovieByImdbId = createAsyncThunk('movie/movieByImdb',
    async (params) => {
        return await movieService.getMovies(params)
    }
)

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: [],
        movieByImdb:{},
        messageText:''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movieList = action.payload.Search
        })
        builder.addCase(fetchMovies.pending, (state) => {
            state.movieList = []
            state.messageText = "Data Loading..."
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.movieList = []
            state.messageText = "An Error Occurred While Loading Data."
        })

        builder.addCase(fetchMovieByImdbId.fulfilled, (state, action) => {
            state.movieByImdb = action.payload
        })
        builder.addCase(fetchMovieByImdbId.pending, (state) => {
            state.movieByImdb = {}
            state.messageText = "Data Loading..."
        })
        builder.addCase(fetchMovieByImdbId.rejected, (state) => {
            state.movieByImdb = {}
            state.messageText = "An Error Occurred While Loading Data."
        })
    }
})

export default movieSlice