import { createSlice } from "@reduxjs/toolkit";
import { initialChannelState } from "../Types";


const initialState: initialChannelState = {
  channelId: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannelInfo: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions
export default channelSlice.reducer;
