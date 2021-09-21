import { createSlice } from '@reduxjs/toolkit';

export const reflectionSlice = createSlice({
    name: 'reflections',
    initialState: localStorage.getItem('reflections') ? JSON.parse(localStorage.getItem('reflections')) : [],
    reducers: {
        loadReflections: (state, action) => {
            state = action.payload;
            localStorage.setItem('reflections', JSON.stringify(state));
        },
        addReflection: (state, action) => {
            const id = `uniq${state.length}`;
            state.push({
                ...action.payload,
                id,
            });
            localStorage.setItem('reflections', JSON.stringify(state));
        },
        editReflection: (state, action) => {
            state.map(post => console.log(post));
            state = state.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
            localStorage.setItem('reflections', JSON.stringify(state));
            return state;
        },
        deleteReflection: (state, action) => {
            const { id } = action.payload;
            state = state.filter(post => post.id !== id);
            localStorage.setItem('reflections', JSON.stringify(state));
            return state;
        }
    }
});

export const { loadReflections, addReflection, editReflection, deleteReflection } = reflectionSlice.actions;

export default reflectionSlice.reducer;