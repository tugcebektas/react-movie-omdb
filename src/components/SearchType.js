import React from 'react';

const SearchType = (props) => {
    return (
        <div className='col col-sm-3'>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <select className="form-select" aria-label="Default select example" value={props.value}  onChange={(event) => props.setTypeValue(event.target.value)}>
                <option>Select Type</option>
                <option value="movie">movie</option>
                <option value="series">series</option>
                <option value="episode">episode</option>
            </select>
        </div>
    );
};

export default SearchType;