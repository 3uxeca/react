import React from 'react';
import BookList from '../components/BookList';
import LiBrary from '../components/LiBrary';
import Order from '../components/Order';

const LibraryPage = () => {
    return (
        <div>
            <LiBrary >
                <BookList />
            </LiBrary>
            <Order />
        </div>
    );
};

export default LibraryPage;