import { createSlice } from "@reduxjs/toolkit";
import Project_Details from "../data/Project_Details";
const projectSlice = createSlice({
    name:'project',
    initialState:Project_Details,
    reducers:{
        addInitialItems:(store,action)=>{
            return store;
        },
        githubFetch: (store, action) => {
            const projectId = action.payload; 
            const project = store.find(item => item.id === projectId);
            if (project) {
              window.open(project.githubLink, "_blank");
            }
        },
        githubProjectFetch: (store, action) => {
            const projectId = action.payload; 
            const project = store.find(item => item.id === projectId);
            if (project) {
              window.open(project.projectLink, "_blank");
            }
        },
    }
})

export const projectActions = projectSlice.actions;
export default projectSlice;

