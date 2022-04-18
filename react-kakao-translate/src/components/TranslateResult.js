import React from 'react';
import styled from 'styled-components';
import useTranslate from '../hooks/useTranslate';

const TranslateResult = () => {
    const { targetText } = useTranslate();
    return (
        <Wrapper>
            {targetText}
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 500px;
    padding: 40px;
    margin: 0 auto;
    border: 1px solid #e0e2e7;
    border-radius: 8px;
    margin-top: 10px;
`;

export default TranslateResult;