import axios from 'axios';

export const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com',
    headers: {
        Authorization: `KakaoAK 7908728187e094dc18bc579db603620a`,
    },
});

// translate api
export const translate = (params) => {
    return Kakao.get('/v2/translation/translate', { params });
};