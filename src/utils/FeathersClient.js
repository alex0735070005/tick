import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import axios from 'axios';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import moment from 'moment';
import {
  API_PREFIX,
  HEADER_CONSTANTS,
} from '../Tick/constants/Tick';

const feathersClient = feathers();

feathersClient
.configure(hooks())
.configure(rest('http://localhost:9000')
.axios(axios))
.configure(auth({
  storage: window.localStorage,
}));

function authHook(hook) {
  let index = (`/${hook.path}`).indexOf(API_PREFIX);
  if (index !== -1) {
    feathersClient.passport.getJWT()
    .then((accessToken) => {
      hook.params.headers = Object.assign({}, {
        Authorization: accessToken,
      }, hook.params.headers);
    });
  }
}

const localTimeHook = (hook) => {
  hook.params.headers = Object.assign({}, {
    [HEADER_CONSTANTS.LOCAL_TIME]: moment().format('YYYY-MM-DD HH:mm'),
  }, hook.params.headers);
};

feathersClient.mixins.push((service) => {
  service.before(authHook);
  service.before(localTimeHook);
});

export const getToken = () => feathersClient.passport.getJWT();
export const addLocalTimeHeader = (headers) => {
  return {
    ...headers,
    [HEADER_CONSTANTS.LOCAL_TIME]: moment().format('YYYY-MM-DD HH:mm'),
  };
};
export default feathersClient;
