import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { fetchAllContacts, fetchAddContacts, fetchDelContact } from "./operations";

const initialContacts = {
    items:[],
    isLoading: false,
    error: null,
};

const contctsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    extraReducers: (buider) => {
        buider
        .addCase(fetchAllContacts.pending, (store) => {
           store.isLoading = true; 
        })
        .addCase(fetchAllContacts.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            store.items = action.payload;
        })
        .addCase(fetchAllContacts.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
        .addCase(fetchAddContacts.pending, (store) => {
            store.isLoading = true; 
        })
        .addCase(fetchAddContacts.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            store.items.push(action.payload);
        })
        .addCase(fetchAddContacts.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
        .addCase(fetchDelContact.pending, (store) => {
            store.isLoading = true; 
        })
        .addCase(fetchDelContact.fulfilled, (store, action) => {
            store.isLoading = false; 
            store.error = null;
            const delIndex = store.items.findIndex(item => item.id === action.payload);
            store.items.splice(delIndex, 1);
        })
        .addCase(fetchDelContact.rejected, (store, action) => {
            store.isLoading = false; 
            store.error = action.payload;
        }) 
    } 
    // {
       
    //     addContact: {
    //        reducer: (state, {payload}) =>  {
    //         state.push(payload);
    //        },
    //        prepare: data => {
    //         return {
    //             payload: {
    //                 id: nanoid(),
    //                 ...data,
    //             }
    //         }
    //     }
    // },
    //     delContact(state,action){return state.filter(el => el.id !== action.payload)},
    // }
});

// export const { addContact, delContact } = contctsSlice.actions;
export default contctsSlice.reducer;