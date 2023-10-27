import { configureStore} from "@reduxjs/toolkit";
import TaskReducer from "./reducers/taskSlice";
export default configureStore({
    reducer:{
        task: TaskReducer,
    },
})