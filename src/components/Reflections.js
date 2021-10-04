import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Reflection from './Reflection';
import { useDispatch, useSelector } from 'react-redux';
import { loadReflections } from '../ducks/reflectionSlice';

const Reflections = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReflections());
    }, [dispatch]);

    const reflections = useSelector((state) => state.reflections);
    const items = reflections.length > 0 ? reflections.map(({ id, title, text }) => (
            <Reflection
                key={id}
                id={id}
                title={title}
                text={text}
            />
    )) : <Paper>You have no posts</Paper>;
    return (
    <Stack spacing={2}>
        {items}    
    </Stack>
    );
}

export default Reflections;