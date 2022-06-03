import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL, KEY} from "../../data/data";

export const loadCurrentCourse = createAsyncThunk(
    'converter/load',
    async (currencyTypes) => {
        const {leftSelect, rightSelect} = currencyTypes;
        try {
            const response = await fetch(`${API_URL}?apiKey=${KEY}&q=${leftSelect}_${rightSelect}&compact=ultra`);
            const data = await response.json();
            return data[`${leftSelect}_${rightSelect}`];
        } catch (e) {
            alert(e.message);
        }
    }
);

const converterSlice = createSlice({
    name: 'converter',
    initialState: {
        leftOperand: 1,
        rightOperand: null,
        course: null,
        leftSelect: 'USD',
        rightSelect: 'UAH',
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
      changeLeftSelect: (state, action) => {
          state.leftSelect = action.payload;
      },
      changeRightSelect: (state, action) => {
          state.rightSelect = action.payload;
      },
    },
    extraReducers: {
        [loadCurrentCourse.fulfilled]: (state, action) => {
            state.course = action.payload.toFixed(2);
        }
    }
})

export default converterSlice.reducer;
export const {changeLeftOperand, changeRightOperand, changeLeftSelect, changeRightSelect} = converterSlice.actions;