import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import { addReflection, editReflection } from '../ducks/reflectionSlice';

const styles = {
    width: "600px",
    height: "120px",
    border: "3px solid #cccccc",
    padding: "5px",
    fontFamily: "Helvetica Neue"
}

const containerStyles = {
    display: "flex",
    justifyContent: "center", /* center horizontally */
    alignItems: "center", /* center vertically */
    margin: "auto",
}

const innerContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", /* center horizontally */
    alignItems: "flex-start", /* center vertically */
    margin: "auto",
}

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
        <div style={containerStyles}>
            <div style={innerContainerStyles}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    onChange={onTitleChange}
                    placeholder="Enter title here..."
                    value={title}
                />
                <label htmlFor="text">Text</label>
                <textarea
                    id="text"
                    style={styles}
                    onChange={onTextChange}
                    placeholder="Enter your reflections here..."
                    value={text}
                />
                <button type="button" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default AddOrEdit;