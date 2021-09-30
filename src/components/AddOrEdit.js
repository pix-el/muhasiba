import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import { addReflection, editReflection } from '../ducks/reflectionSlice';

function useMode() {
    const ADD = 'add';
    const EDIT = 'edit';
    const isEditMode = mode => mode === EDIT;
    let mode = useRef(ADD);
    const routeMatch = useRouteMatch("/edit/:id");

    useEffect(() => {
        if (routeMatch?.isExact) {
            mode.current = EDIT;  
        }
    }, [routeMatch?.isExact]);

    return [mode.current, isEditMode];
}

const AddOrEdit = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [mode, isEditMode] = useMode();
    const initialState = useSelector((state) => state.reflections.find(post => post.id === params.id));
    const [title, setTitle] = useState(initialState?.title || '');
    const [text, setText] = useState(initialState?.text || '');
    const [ id ] = useState(initialState?.id);

    if (isEditMode(mode) && (!id || !initialState)) {
        history.push("/add")
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const onTextChange = (event) => {
        setText(event.target.value);
    }
    const onSubmit = () => {
        if(isEditMode(mode)) {
            dispatch(editReflection({
                id,
                title,
                text,
            }));
        } else {
            dispatch(addReflection({
                title,
                text,
            }));
        }
        history.push('/');
    }
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                   id="title"
                   label="Title"
                   onChange={onTitleChange}
                   placeholder="Enter title here..."
                   value={title}
                />
                <TextField
                   id="text"
                   label="Text"
                   onChange={onTextChange}
                   placeholder="Enter your reflections here..."
                   value={text}
                   multiline
                />
                <Button variant="contained" onClick={onSubmit} size="large">Submit</Button>
            </Box>
        </div>
    );
}

export default AddOrEdit;