export interface initialUserState {
  user: null | {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export interface initialChannelState {
  channelId: string | null;
  channelName: string | null;
}
