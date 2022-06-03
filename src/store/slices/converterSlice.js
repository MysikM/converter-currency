import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, KEY} from "../../data/data";
const loadCurrentCourse = createAsyncThunk(
    'converter/load',
    async (f,s) => {
        try {
            const response = await fetch(`${API_URL}?apiKey=${KEY}&q=${f}_${s}&compact=ultra`);
        } catch (e) {
            alert(e.message);
        }
    }
);

const converterSlice = createSlice({
    name: 'converter',
    initialState: {
        leftOperand: null,
        rightOperand: null,
        course: null,
        leftSelect: null,
        rightSelect: null,
    },
    reducers: {
      changeLeftOperand: (state, action) => {
          state.leftOperand = action.payload;
          state.rightOperand = state.leftOperand * state.course;
      },
      changeRightOperand: (state, action) => {
          state.rightOperand = action.payload;
          state.leftOperand = state.course/state.rightOperand;
      },
    },
    extraReducers: {
        [loadCurrentCourse.fulfilled]: (state, action) => {
            state.course = action.payload
        }
    }
})

export default converterSlice.reducer;