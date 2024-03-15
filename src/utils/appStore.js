import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChatSlice from "./ChatSlice";

const appStore = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        livechat:ChatSlice,
    },
});

export default appStore;