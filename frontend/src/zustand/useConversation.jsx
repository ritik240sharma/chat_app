import {create} from 'zustand'
const useConversation=create((set)=>({
    selectedConversation:{},
    messages:[],
    SetMessages:(messages)=>set({messages}),
    SetselectedConversation:(selectedConversation)=>set({selectedConversation}),
}))

export default useConversation