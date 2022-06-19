import {useLocation, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieByImdbId} from "../store/movieSlice";

function MovieDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;
    const id = pathname.split("/");

    const dispatch = useDispatch()
    const {movieByImdb} = useSelector(state => state?.movieByImdb)

    useEffect(() => {
        dispatch(fetchMovieByImdbId({id: id[2]}))
    }, [dispatch]);

    return (
        <div className="container mt-5">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <div className="col col-3 d-flex align-items-center mt-3">
                    <div className="card mb-3">
                        <img className="card-img-top" src={movieByImdb.Poster} alt="Card image cap"/>
                    </div>
                </div>
                <div className="col col-9">
                    <div className="card-body">
                        <h2 className="card-title">{movieByImdb.Title}</h2>
                        <p className="card-text"><small className="text-muted">Year : {movieByImdb.Year}</small></p>
                        <p className="card-text"><small className="text-muted">Language : {JSON.stringify(movieByImdb.Language)}</small></p>
                        <p className="card-text"><small className="text-muted">Released : {movieByImdb.Released}</small></p>
                        <p className="card-text"><small className="text-muted">Runtime : {movieByImdb.Runtime}</small></p>
                        <p className="card-text"><small className="text-muted">Genre : {movieByImdb.Genre}</small></p>
                        <p className="card-text"><small className="text-muted">Actors : {JSON.stringify(movieByImdb.Actors)}</small></p>
                        <p className="card-text"><small className="text-muted">Director : {JSON.stringify(movieByImdb.Director)}</small></p>
                        <p className="card-text"><small className="text-muted">Writer : {JSON.stringify(movieByImdb.Writer)}</small></p>
                        <p className="card-text"><small className="text-muted">Plot : {JSON.stringify(movieByImdb.Plot)}</small></p>
                        <p className="card-text"><small className="text-muted">Ratings : {JSON.stringify(movieByImdb.Ratings)}</small></p>
                    </div>
                </div>
                <div className="col col-3 mt-3">
                    <button className="btn btn-primary btn-lg" onClick={()=> {navigate(`/`)}}>Home
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MovieDetails