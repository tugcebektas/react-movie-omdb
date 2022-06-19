import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes'

const App = () => {
    const content = useRoutes(routes);

    return (
        <div>
            {content}
        </div>
    );
};

export default App;