import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../service/homeService'

const initialState = {
  status: 'init',
  totalFertilityRate: 0,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getTotalFertilityRate: (state, action) => {
      state.totalFertilityRate = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'successed'
        state.totalFertilityRate = action.payload
      })
      .addCase(getData.rejected, (state, action) => {})
  },
})

export const { getTotalFertilityRate } = homeSlice.actions

export default homeSlice.reducer
