// Unifi controller.ts
// import { HttpCookieAgent, HttpsCookieAgent } from 'http-cookie-agent/http';
// import axios from 'axios';
const { CookieJar } =require('tough-cookie');
const logger = require('../utils/logger');

const jar = new CookieJar();

// export const createAxiosInstance = () => {

//     const instance = axios.create({
//       baseURL: process.env.UNIFI_CONTROLLER_URL,
//       httpAgent: new HttpCookieAgent({ cookies: { jar } }),
//       httpsAgent: new HttpsCookieAgent({
//         cookies: { jar },
//         rejectUnauthorized: false,
//       }),
//     });
// };

const unifiController = {
    // Private
    login: async (unifiApiClient) => {

        logger.debug(`try log user ${process.env.UNIFI_USER}`);

        const loginResponse = await unifiApiClient.post('/api/auth/login', {
            username: process.env.UNIFI_USER,
            password: process.env.UNIFI_PASSWORD,
        });
        console.log(loginResponse.headers)
        if (loginResponse.data.deviceToken) {
            logger.debug('Unifi Login Successful');
            return loginResponse;
        } else {
            throw new Error('Unifi Login Failed: Incorrect Response');
        }


    },
    logout: async (unifiApiClient) => {
        const logoutResponse = await unifiApiClient.post('/api/logout');
        return logoutResponse;
    },
    // Public
    authorize: async (
        unifiApiClient,
        req,
    ) => {
        console.log("REQUEST BODY", req.body);
        const authorizeResponse = await unifiApiClient.post(
            `/proxy/network/api/s/${process.env.SITE_DEFAULT}/cmd/stamgr`,
            JSON.stringify({
                cmd: 'authorize-guest',
                mac: req.body.mac,
                ap_mac: req.body.ap,
            }),
        );
        if (authorizeResponse.data.meta.rc === 'ok') {
            logger.debug('Unifi Device Authorisation Successful');
            return authorizeResponse;
        } else {
            throw new Error('Unifi Device Authorisation Failed: Incorrect Response');
        }
    },

};
module.exports = unifiController;

