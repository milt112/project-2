import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  term: 'ADD',
  currentData: JSON.parse(localStorage.getItem("data")) || [],
  defaultData: JSON.parse(localStorage.getItem("data")) || [],
  itemView: {}
};

export const taskReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.openForm = action.payload.openForm;
      state.term = action.payload.term;
    },

    addData: (state, action) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newData = action.payload;
      state.currentData = [...currentState.defaultData, newData];
      state.defaultData = state.currentData;
      // state.openForm = false;
      localStorage.setItem("data", JSON.stringify(state.defaultData));
      console.log(action.payload);
    },

    getData: (state, action) => {
      const item = action.payload
      state.itemView = item
    },

    updateItem: (state, action) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const currentUpdateItem = action.payload
      const index = state.defaultData.findIndex((e) => e.id === currentUpdateItem.id);
      currentState.defaultData[index] = currentUpdateItem
      currentState.currentData = currentState.defaultData
      state.defaultData = currentState.defaultData
      state.currentData = currentState.currentData
      localStorage.setItem('data', JSON.stringify(currentState.currentData));
    },

    deleteData: (state, action) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newData = [];
      currentState.currentData.forEach(element => {
        if (element.id !== action.payload) {
          newData.push(element);
        }
      });

      state.defaultData = newData;
      state.currentData = state.defaultData;
      localStorage.setItem("data", JSON.stringify(state.defaultData));
    },

    sortAZ: (state, action) => {
      const newList = state.defaultData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        } return 0
      })
      state.currentData = newList
    },

    sortZA: (state, action) => {
      const newList = state.defaultData.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1
        } return 0
      })
      state.currentData = newList
    },

    sortIncrease: (state, action) => {
      const newList = state.defaultData.sort((a, b) => {
        if (a.price > b.price) {
          return -1
        } return 0
      })
      state.currentData = newList
    },

    sortDecrease: (state, action) => {
      const newList = state.defaultData.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        } return 0
      })
      state.currentData = newList
    },

    findData: (state, action) => {
      const e = action.payload
      const newList = state.defaultData.filter((item) => item.name.includes(e))
      state.currentData = [...newList]
    }
  }
});

// Action creators are generated for each case reducer function
export const { setForm, addData, getData, viewItem, updateItem, findData, sortAZ, sortZA, sortIncrease, sortDecrease, deleteData } = taskReducer.actions;

export default taskReducer.reducer;
