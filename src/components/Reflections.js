import React, { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { loadReflections } from '../ducks/reflectionSlice';

const Reflections = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReflections());
    }, [dispatch]);

    const reflections = useSelector((state) => state.reflections);
    return reflections.length > 0 ? reflections.map(({ id, title, text }) => (
        <Card
            key={id}
            id={id}
            title={title}
            text={text}
        />
    )) : 'You have no posts';
}

export default Reflections;