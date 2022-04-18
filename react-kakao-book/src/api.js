import axios from 'axios';

export const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
        Authorization: `KakaoAK 7908728187e094dc18bc579db603620a`,
    },
});

// search book api
export const bookSearch = (params) => {
    return Kakao.get('/v3/search/book?target=title', { params });
};

// book api
export const book = () => {
    return Kakao.get('/v3/search/book?target=title');
};