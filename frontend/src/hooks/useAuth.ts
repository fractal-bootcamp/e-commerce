import { useAuth0 } from "@auth0/auth0-react";

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
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
    user,
    getToken,
    isLoading,
  };
};
