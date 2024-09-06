import { Apiservices } from "../middlewares/Apiservices";

const headers = {
  "content-type": "application/json",
};

const userQuery = Apiservices.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.mutation({
      query: (info) => ({
        url: "/send-message",
        method: "POST",
        body: info,
        headers,
        credentials: "include",
      }),
    }),
  }),
});

export const { useSendMessageMutation } = userQuery;
