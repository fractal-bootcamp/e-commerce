import { useAuth0 } from "@auth0/auth0-react";
import { AUTH_REDIRECT_URI } from "@/utils/globals";

export const useAuth = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, getAccessTokenSilently, isLoading } =
    useAuth0();

  const getToken = async () => {
    try {
      return await getAccessTokenSilently();
    } catch (error) {
      console.error("Error getting token: ", error);
      return null;
    }
  };

  return {
    isAuthenticated,
    login: loginWithRedirect,
    logout: () => logout({ logoutParams: { returnTo: AUTH_REDIRECT_URI } }),
    user,
    getToken,
    isLoading,
  };
};
