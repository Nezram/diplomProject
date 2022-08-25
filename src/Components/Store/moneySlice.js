import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "money",
  initialState: {
    payments: [],
  },
  reducers: {
    removeRow(state, action) {
      state.payments = state.payments.filter(
        (row) => row.id !== action.payload.id
      );
    },
    editName(state, action) {
      let searchRow = state.payments.find(
        (elem) => elem.id === action.payload.id
      );
      searchRow.name = action.payload.name;
    },
    editSum(state, action) {
      let searchRow = state.payments.find(
        (elem, index) => elem.id === action.payload.id
      );

      searchRow.sum = action.payload.sum;
    },
    addRow(state, action) {
      state.payments.push({
        id: state.payments.length + 1,
        name: "",
        sum: 0,
      });
    },
  },
});

export const { addRow, editName, editSum, removeRow } = moneySlice.actions;
export default moneySlice.reducer;
