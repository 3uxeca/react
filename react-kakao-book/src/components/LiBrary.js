import React, { useState } from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import BookList from './BookList';

const LiBrary = () => {
    const { searchBook } = useBooks();
    const [text, setText] = useState('');

    // press enter
    const onEnter = (e) => {
        if(e.keyCode === 13) {
            searchBook(text);
        }
    };
    // text change function
    const onTextUpdate = (e) => {
        setText(e.target.value);
    };

    return (
        <LibraryWrapper>
            <h1 className='title'>LIBRARY</h1>
            <div className='searchBox'>
                <input
                    type='search'
                    placeholder='검색어를 입력해주세요.'
                    name='query'
                    onKeyDown={onEnter}
                    onChange={onTextUpdate}
                    value={text}
                    className='input_search'
                />
            </div>
            <ul>
                <BookList />
            </ul>
        </LibraryWrapper>
    );
};

const LibraryWrapper = styled.div`
    width: 100rem;
    margin: 3rem auto;
    border-radius: 4px;
    background-color: var(--white-color);
    padding: 2rem;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    .title {
    font-family: 'Poppins', sans-serif;
    color: var(--navy-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    }
    .books {
    display: flex;
    }
    .searchBox {
    position: relative;
    width: 70%;
    height: 5rem;
    padding: 0 10rem;
    margin: 4rem auto;
    background: #fff;
    text-align: left;
    box-sizing: border-box;
    }
`;

export default LiBrary;