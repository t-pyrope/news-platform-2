import React from 'react';
import { useHistory } from 'react-router';

const Page404 = () => {
    const history = useHistory();

    return (
        <main>
            <h2>Page not found</h2>
            <button onClick={() => history.goBack()}>Go Back </button>
        </main>
    );
};

export default Page404;
