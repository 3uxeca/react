import React, { useMemo } from 'react';
import styled from 'styled-components';
import useActions from '../hooks/useActions';
import useBooks from '../hooks/useBooks';
import useOrders from '../hooks/useOrders';

const Order = () => {
    const orders = useOrders();
    const { books } = useBooks();
    const { remove, removeAll } = useActions();
    const totalPrice = useMemo(() => {
        return orders.map((order) => {
            const { isbn, quantity } = order;
            const book = books.find((b) => b.isbn === isbn);
            return book.sale_price * quantity;
        })
        .reduce((l, r) => l + r, 0);
    }, [orders, books]);
    if(orders.length === 0){
        return (
            <OrderWrapper>
                <Title>You Don't any orders</Title>
                <SubTitle>책을 추가해주세요.</SubTitle>
            </OrderWrapper>
        );
    }
    
    return (
        <>
            <OrderWrapper>
                <Title>장바구니</Title>
                {orders.map((order) => {
                    const { isbn } = order;
                    const book = books.find((b) => b.isbn === isbn);
                    const click = () => {
                        remove(isbn);
                    };
                    return (
                        <>
                            <div className='item' key={isbn}>
                                <div className='bookImg'>
                                    <img src={book.thumbnail} alt={book.thumbnail} />
                                </div>
                                <div className='content'>
                                    <p className='bookTitle'>
                                        {book.title} {order.quantity}권
                                    </p>
                                    <p className='bookPrice'>
                                        &#8361; {book.sale_price * order.quantity}
                                    </p>
                                </div>
                                <div className='icon'>
                                    <img src='/img/cancel.png' alt='cancel' onClick={click} />
                                </div>
                            </div>
                        </>
                    );
                })}
                <div>
                    <hr />
                    <div className='totalItem'>
                        <div className='total'>Total</div>
                        <div className='PriceBox'>
                            <div className='bookTotalPrice'>&#8361; {totalPrice}</div>
                            <div className='icon'>
                                <img src='/img/cancel.png' alt='cancel' onClick={removeAll} />
                            </div>
                        </div>
                    </div>
                </div>
            </OrderWrapper>
        </>
    );
};

const OrderWrapper = styled.aside`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 40rem;
  min-height: 30rem;
  margin-left: auto;
  border-radius: 4px;
  padding: 1rem;
  background-color: var(--white-color);
  padding: 2rem;
  overflow: hidden;
  border: 2px solid var(--navy-color);
  h1 {
    text-align: center;
    margin-bottom: 4rem;
  }
  .item {
    display: flex;
    // background-color: var(--grey-color);
    margin-bottom: 1rem;
  }
  .bookImg {
    img {
      width: 60px;
      height: 80px;
    }
  }
  .content {
    margin: 1rem;
    font-size: 1.4rem;
    line-height: 20px;
    align-items: center;
    width: 80%;
    .bookTitle {
      color: var(--black-color);
      font-weight: 600;
    }
    .bookPrice {
      color: var(--darkgrey-color);
    }
  }
  .icon {
    display: flex;
    margin: 1rem 0;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  .totalItem {
    margin-top: 1rem;
    display: flex;
    //grid-template-columns: repeat(3, 1fr);
    align-items: center;
    .total {
      color: var(--black-color);
      font-weight: 600;
      font-size: 1.8rem;
      width: 67%;
    }
    .PriceBox {
      display: flex;
      align-items: center;
      text-align: right;
      .bookTotalPrice {
        color: var(--darkgrey-color);
        font-weight: 600;
        font-size: 1.8rem;
        margin-right: 2rem;
      }
    }
  }
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--navy-color);
  text-align: center;
  margin-bottom: 3rem;
`;
const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--navy-color);
`;

export default Order;