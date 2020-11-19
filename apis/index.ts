import axios from "axios";

export const getMe = async () => {
    const { data } = await axios("/api/fb/me");    
};

export const getFriends = async (id: string) => {
    const { data } = await axios("/api/fb/friends", { params: { id } });  
};