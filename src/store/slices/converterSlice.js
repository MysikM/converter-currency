import {createSlice} from "@reduxjs/toolkit";

const converterSlice = createSlice({
    name: 'converter',
    initialState: {
        leftOperand: null,
        rightOperand: null,
        course: null,
    },

})

export default converterSlice.reducer;