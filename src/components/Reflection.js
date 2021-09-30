import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteReflection } from '../ducks/reflectionSlice';

const Reflection = ({ id, title, text }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteReflection({ id }));
    const handleEdit = () => { history.push(`/edit/${id}`) };
    return (
        <Card id={id} sx={{ maxWidth: 400 }}>
        <CardContent>
            <Typography component="h5">{title}</Typography>
            <Typography variant="body2">{text}</Typography>
        <CardActions>
            <Button size="small" onClick={handleEdit}>Edit</Button>
            <Button size="small" onClick={handleDelete}>Delete</Button>
        </CardActions>
        </CardContent>
    </Card>
    )
}

export default Reflection;