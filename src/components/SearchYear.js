import React from 'react';

const SearchYear= (props) => {
    return (
        <div className='col col-sm-3'>
            <input
                className='form-control'
                type="number"
                value={props.year}
                onChange={(event) => props.setYearValue(event.target.value)}
                placeholder='Year...'
            />
        </div>
    );
};

export default SearchYear;