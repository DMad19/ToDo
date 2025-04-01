import { createContext, useContext } from "react";

const accessTokenContext = createContext({
	accessToken: null,
	refreshAccessToken: () => {},
});

export const AccessTokenProvider = accessTokenContext.Provider;
export const UseAccessTokenContext = () => useContext(accessTokenContext);
