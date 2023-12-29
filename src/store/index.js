import { configureStore} from "@reduxjs/toolkit";
import projectSlice from './Project'



const Portfolio = configureStore({
    reducer:{
        project:projectSlice.reducer,
    }
})

export default Portfolio;