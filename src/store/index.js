import { configureStore } from '@reduxjs/toolkit'
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        movieByImdb: movieSlice.reducer
    }
})

export default store