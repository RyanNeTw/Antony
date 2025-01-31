import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { reportsAi } from "./reportsAi"

export const store = configureStore({
  reducer: {
    [reportsAi.reducerPath]: reportsAi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reportsAi.middleware),
})

setupListeners(store.dispatch)
