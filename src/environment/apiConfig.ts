import env from './environment.json';

const isDev = true;
const isAuthDev = false;

const apiConfig = {
    baseUrl: isDev ? env.localBaseUrl : env.serverBaseUrl,
    authBaseUrl: isAuthDev ? env.localAuthUrl : env.serverAuthUrl
};
export default apiConfig;