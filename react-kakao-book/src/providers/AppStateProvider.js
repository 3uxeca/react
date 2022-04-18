import React, { useCallback, useEffect, useState } from 'react';
import { bookSearch } from '../api';
import AppStateContext from '../contexts/AppStateContext';

const AppStateProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    // book search
    useEffect(() => {
        if (query.length > 0) {
            bookSearchHttpHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
            console.log("useEffect called")
        }
    }, [query]);

    // book search handler
    const bookSearchHttpHandler = async (query, reset) => {
        // set parameter
        const params = {
            query: query,
            sort: 'accuracy',   // accuracy | recency 정확도 or 최신
            page: 1,    // page num
            size: 10,   // page size
        };

        const { data } = await bookSearch(params);  // call api
        if (reset) {
            setBooks(data.documents);
        } else {
            setBooks(books.concat(data.documents));
        }
    };

    const searchBook = (text) => {
        setQuery(text);
    };
    const [orders, setOrders] = useState([]);

    // add to cart
    const addToOrder = useCallback((isbn) => {
        setOrders((orders) => {
            // check isbn (for change quantity when add to cart same books)
            const finded = orders.find((order) => order.isbn === isbn);
            // if no book in cart, set quantity 1
            if(finded === undefined){
                return [...orders, { isbn, quantity: 1 }];
            }   // if already same book exist
            else {
                return orders.map((order) => {
                    if(order.isbn === isbn) {
                        return {
                            isbn,
                            quantity: order.quantity + 1,
                        };
                    } else {
                        return order;
                    }
                });
            }
        });
    }, []);

    // delete books from cart
    const remove = useCallback((isbn) => {
        setOrders((orders) => {
            return orders.filter((order) => order.isbn !== isbn);
        });
    }, []);

    // delete all books from cart
    const removeAll = useCallback(() => {
        setOrders([]);
    }, []);

    return (
        <AppStateContext.Provider
            value={{
                books,
                searchBook,
                orders,
                addToOrder, 
                remove,
                removeAll,
            }}>
            {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;