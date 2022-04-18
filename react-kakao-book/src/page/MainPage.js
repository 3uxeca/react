import React from 'react';
import BookList from '../components/BookList';
import LiBrary from '../components/LiBrary';
import Order from '../components/Order';

const MainPage = () => {
    return (
        <div>
            {' '}
            <LiBrary>
                <BookList />
            </LiBrary>
            <Order />
        </div>
    );
};

export default MainPage;