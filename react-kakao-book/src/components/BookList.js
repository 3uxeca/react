import React from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';

const BookList = () => {
    const { books } = useBooks();
    const { addToOrder } = useActions();
    return (
        <BookListWrapper>
            {books.map((book) => {
                const { isbn, thumbnail, title, price, sale_price, publisher, url } = book;
                const click = () => {
                    addToOrder(isbn);
                };

                return (
                    <BookItem key={isbn}>
                        <div className='bookImg'>
                            <a href={url} target='_blank' rel='noreferrer'>
                                <img src={thumbnail} alt={thumbnail} />
                            </a>
                        </div>
                        <div className='bookContents'>
                            <div className='bookPublisher'>{publisher}</div>
                            <div className='bookTitle'>{title}</div>
                            <div className='bookPrice'>
                                &#8361; {sale_price.toLocaleString()}
                                <strike>{price.toLocaleString()}</strike>{' '}
                            </div>
                            <div className='icons'>
                                <img src='/img/cart.png' alt='cart' onClick={click} />
                                <a href={url} target='_blank' rel='noreferrer'>
                                    <img src='/img/increase.png' alt='increase' />
                                </a>
                            </div>
                        </div>
                    </BookItem>
                );
            })}
        </BookListWrapper>
    );
};

const BookListWrapper = styled.li`
 bakcground-color: var(--grey--color);
 display: grid;
 width: 90rem;
 min-height: 40rem;
 margin: auto;
 grid-gap: 3rem;
 grid-template-columns: repeat(3, 1fr);
`;

const BookItem = styled.dl`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  .bookImg {
    img {
      width: 100%;
    }
  }
  .bookContents {
    position: absolute;
    text-align: left;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    background-color: rgba(36, 76, 112, 0.9);
    padding: 15px;
    opacity: 0;
    visibility: visible;
    width: 100%;
  }
  &:hover {
    .bookImg {
      img {
        opacity: 0.5;
      }
    }
    .bookContents {
      opacity: 1;
      transition: all 0.6s 0s;
      .bookPublisher {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        font-weight: 300;
        color: var(--darkgrey-color);
      }
      .bookTitle {
        margin-bottom: 1rem;
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 25px;
        color: var(--white-color);
      }
      .bookPrice {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 25px;
        color: var(--white-color);
        strike {
          color: var(--darkgrey-color);
          font-size: 1.4rem;
          margin-left: 1rem;
        }
      }
      .icons {
        display: flex;
        cursor: pointer;
        justify-content: flex-end;
        img {
          width: 3rem;
          height: 3rem;
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default BookList;