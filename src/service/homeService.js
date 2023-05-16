import { createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("get/data", async () => {
    const promise = new Promise((resolve, reject) => {
        resolve(0.78);
    });
    return promise;
});
