
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../store/movieSlice";
import SearchYear from "../components/SearchYear";
import SearchType from "../components/SearchType";

const Home = () => {
    const dispatch = useDispatch()
    const {movieList} = useSelector(state=>state?.movie)

    const [searchValue, setSearchValue] = useState('pokemon');
    const [year, setYearValue] = useState('');
    const [type, setTypeValue] = useState('');

    useEffect(() => {
        dispatch(fetchMovies({searchText: searchValue, year: year,type:type }))
    }, [dispatch, searchValue, year, type]);

    return (
        <div className='container movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchType type={type} setTypeValue={setTypeValue}/>
                <SearchYear year={year} setYearValue={setYearValue} />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                {movieList && <MovieList movies={movieList} />}
            </div>
        </div>
    );
};

export default Home;
