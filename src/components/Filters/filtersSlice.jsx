// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//       case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//       case "filter/prioritiesFilterChange":
//         return {
//           ...state,
//           priorities: action.payload,
//         };

//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation || IMMER
      state.search = action.payload;
    }, // => {type: "filters/searchFilterChange"}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export default filtersSlice;


/**
 * 1. filtersSlice:
 * --- tạo ra reducer và các action creator
 * --- Các reducers được khai báo ở trên tạo ra action (action creator)
 * 
 * 2. action: có dạng là 1 object {type: "filters/searchFilterChange", payload: "abc"}
 * 
 * 3. action creator: là 1 function: () =>{
 *      return {
 *        type: "filters/searchFilterChange",
 *        payload: "abc"
 *     }  
 */