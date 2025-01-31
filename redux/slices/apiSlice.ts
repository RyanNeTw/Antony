// src/slices/apiSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface ApiState {
  data: []
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: ApiState = {
  data: [],
  status: "idle",
  error: null,
}

// Exemple d'appel API
export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get("https://api.example.com/data")
  return response.data
})

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || null
      })
  },
})

export default apiSlice.reducer
