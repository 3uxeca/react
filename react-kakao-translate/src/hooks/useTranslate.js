import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

export default function useTranslate(){
    const { targetText, translateWord } = useContext(AppStateContext);
    return { targetText, translateWord };
}