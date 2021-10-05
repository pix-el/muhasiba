import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadReflections = createAsyncThunk('loadReflections', async () => {
    const response = await fetch('/api/fetch-reflections')
    .then(res => res.json());
    return response;
});

export const addReflection = createAsyncThunk('addReflection', async ({ title, text }) => {
    const response = await fetch('/api/save-reflection', {
        method: 'POST',
        body: JSON.stringify({
            keywords: "general",
            text,
            title,
          }),
      })
    .then(res => res.json());
    return response;
});

export const editReflection = createAsyncThunk('editReflection', async ({ id, keywords, title, text }) => {
    const response = await fetch('/api/edit-reflection', {
        method: 'POST',
        body: JSON.stringify({
            id,
            keywords: "general",
            text,
            title,
          }),
      })
    .then(res => res.json());
    return response;
});

export const deleteReflection = createAsyncThunk('deleteReflection', async ({ id }) => {
    const response = await fetch('/api/delete-reflection', {
        method: 'POST',
        body: JSON.stringify({
            id,
          }),
      })
    .then(res => res.json());
    return response;
});

export const reflectionSlice = createSlice({
    name: 'reflections',
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadReflections.fulfilled, (state, action) => {
            state = action.payload?.data?.reflections || [];
            localStorage.setItem('reflections', JSON.stringify(state));
            return state;
        })
        .addCase(addReflection.fulfilled, (state, action) => {
            const reflection = action.payload?.data?.insert_reflections_one;
            state.push({
                ...reflection,
            });
            localStorage.setItem('reflections', JSON.stringify(state));
        })
        .addCase(editReflection.fulfilled, (state, action) => {
            const reflection = action.payload?.data?.update_reflections_by_pk;
            state = state.map(post => {
                if (post.id === reflection.id) {
                    return reflection;
                }
                return post;
            });
            localStorage.setItem('reflections', JSON.stringify(state));
            return state;
        })
        .addCase(deleteReflection.fulfilled, (state, action) => {
            const { id } = action.payload?.data?.delete_reflections_by_pk;
            state = state.filter(post => post.id !== id);
            localStorage.setItem('reflections', JSON.stringify(state));
            return state;
        })
    }
});

export default reflectionSlice.reducer;