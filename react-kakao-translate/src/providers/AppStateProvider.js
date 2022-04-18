import React, { useCallback, useEffect, useState } from 'react';
import { translate } from '../api';
import AppStateContext from '../contexts/AppStateContext';

const AppStateProvider = ({children}) => {
    const [srcText, setSrcText] = useState('');
    const [srcLang, setSrcLang] = useState('');
    const [targetLang, setTargetLang] = useState('');
    const [targetText, setTargetText] = useState('');

    // translate
    useEffect(() => {
        if(srcText.length > 0){
            translateHttpHandler(srcText, srcLang, targetLang, true);
            console.log("useEffect called");
        }
    }, [srcText]);

    const translateHttpHandler = async (srcText, srcLang, targetLang, reset) => {
        const params = {
            query: srcText,
            src_lang: srcLang,
            target_lang: targetLang,
        };

        const { data } = await translate(params);
        console.log(data.translated_text[0][0]);
        if (reset) {
            setTargetText(data.translated_text[0][0]);
        }
    };

    const translateWord = (srcText, srcLang, targetLang) => {
        setSrcText(srcText);
        setSrcLang(srcLang);
        setTargetLang(targetLang);
    };
    
    return (
        <AppStateContext.Provider
            value={{
                translateWord,
                targetText,
            }}>
                {children}
        </AppStateContext.Provider>
    );
};

export default AppStateProvider;