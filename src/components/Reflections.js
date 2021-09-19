import React, { useEffect } from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const Reflections = () => {
    useEffect(() => {

    }, []);

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