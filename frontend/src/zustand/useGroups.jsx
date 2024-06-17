import {create} from 'zustand'
const useGroups=create(set=>({
    Groups:[],
    selectedGroup:"",
    messages:[],
    SetGroups:(Groups)=>set({Groups}),
    SetMessages:(messages)=>set({messages}),
    SetselectedGroup:(selectedGroup)=>set({selectedGroup}),
}))

export default useGroups