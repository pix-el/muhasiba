import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReflection } from '../ducks/reflectionSlice';

const styles = {
    width: "400px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    margin: "auto",
    padding: "10px 10px"
}

const Card = ({ id, title, text }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteReflection({ id }));
    const handleEdit = () => { history.push(`/edit/${id}`) };
    return (
        <div id={id} style={styles}>
            <h2>{title}</h2>
            <hr />
            <p>{text}</p>
            <hr />
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Card;