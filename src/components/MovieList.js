import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {Button, Table} from "antd";
import 'antd/dist/antd.css'

const MovieList = (props) => {
    const navigate = useNavigate()
    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'index',
            render: (_,__,index) => <Button onClick={()=> {navigate(`/movieDetail/${props.movies[index].imdbID}`)}}>{props.movies[index].Title}</Button>,
        },
        {
            title: 'Year',
            dataIndex: 'Year',
            key: 'index',
        },
        {
            title: 'imdbID',
            dataIndex: 'imdbID',
            key: 'index',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            key: 'index',
        },
    ];
    return (
        <>
            <Table dataSource={props.movies}
                   columns={columns}
                   pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
            />
        </>
    );
};

export default MovieList;