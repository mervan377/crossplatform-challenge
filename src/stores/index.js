import { configureStore } from '@reduxjs/toolkit'

import auth from "./auth"
import alltasks from "./alltasks"
import createTask from "./createTask"


const store = configureStore({
    reducer: {
        auth,
        alltasks,
        createTask,
    }
})

export default store