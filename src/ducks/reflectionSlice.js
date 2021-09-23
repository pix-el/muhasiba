import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadReflections = createAsyncThunk('loadReflections', async () => {
    const response = await fetch('http://localhost:8888/.netlify/functions/fetch-reflections')
    .then(res => res.json());
    return response;
});

export const addReflection = createAsyncThunk('addReflection', async ({ title, text }) => {
    const response = await fetch('http://localhost:8888/.netlify/functions/save-reflection', {
        method: 'POST',
        body: JSON.stringify({
            keywords: "general",
            text,
            title,
          }),
      })
    .then(res => res.json());
    return response;
  })

export const reflectionSlice = createSlice({
    name: 'reflections',
    initialState: [],
    reducers: {
        addReflection: (state, action) => {
            const id = `uniq${state.length}`;
            state.push({
                ...action.payload,
                id,
            });
            localStorage.setItem('reflections', JSON.stringify(state));
        },
        editReflection: (state, action) => {
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
    }
});

export const { editReflection, deleteReflection } = reflectionSlice.actions;

export default reflectionSlice.reducer;