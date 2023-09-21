import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    DriverNumber: null ,
     
     
}

export const DriverDetailsSlice = createSlice({
    name :"DriverDetails",
    initialState,
    reducers:{
        setDriverNumber : (state,action)=>{
            state.DriverNumber = action.payload ;
        },
        
        
    }

});

export const {setDriverNumber} = DriverDetailsSlice.actions;

// selectors - to gfet data from the store-> navSlice 
// this would give the current value 

export const SelectDriverNumber = (state)=> state.DriverDetails.DriverNumber;
export default DriverDetailsSlice.reducer;

