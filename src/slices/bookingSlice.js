import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingInfo: [],
  bookingDate: null,
  bookingImages: [],
  birthdayData: [],
  checkDate_Data: []



};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addToBooking: (state, action) => {
      state.bookingInfo = [action.payload]
    },
    addBookingDate: (state, action) => {
      state.bookingDate = action.payload
    },
    addBookingImages: (state, action) => {
      state.bookingImages = action.payload
    },
    addBirthdayData: (state, action) => {

      state.birthdayData = action.payload
      console.log(state.birthdayData)
    },
    checkDate: (state, action) => {
      state.checkDate_Data = action.payload
    },
    removeFromBooking: (state, action) => {
      state.bookingDate = []
    },
  },
});

export const { addToBooking, removeFromBooking, addBookingDate, addBookingImages, addBirthdayData, checkDate } = bookingSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectBookings = (state) => state.booking.bookingInfo;
export const selectDate = (state) => state.booking.bookingDate;
export const selectImages = (state) => state.booking.bookingImages;
export const selectBirthdayData = (state) => state.booking.birthdayData;
export const selectCheckBirthdayData = (state) => state.booking.checkDate_Data;



export default bookingSlice.reducer;
