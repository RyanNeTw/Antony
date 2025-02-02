import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { reportsAi } from "./reportsAi"
import { auth } from "./Auth"

export const store = configureStore({
  reducer: {
    [reportsAi.reducerPath]: reportsAi.reducer,
    [auth.reducerPath]: auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reportsAi.middleware).concat(auth.middleware),
})

setupListeners(store.dispatch)
