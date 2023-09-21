import { configureStore } from '@reduxjs/toolkit';
// import restaurantReducer from './features/restaurantSlice';
import DriverDetailsSlice from './Redux/Drivers Redux/DriverDetailsSlice';

export const Store = configureStore({
  reducer: {
    DriverDetails: DriverDetailsSlice,
    // basket: basketReducer,
  },
})