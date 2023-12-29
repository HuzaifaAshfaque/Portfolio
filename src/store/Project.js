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
            const { projectId, linkType } = action.payload;
            const project = store.find(item => item.id === projectId);
            if (project && project.links[linkType]) {
               window.open(project.links[linkType], "_blank");
            } else {
               console.error(`Link type ${linkType} not found for project with id ${projectId}.`);
            }
         },
         
    }
})

export const projectActions = projectSlice.actions;
export default projectSlice;

