export const VALIDATION = {
    /*eslint max-len: 0, no-useless-escape: 0*/
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    TOKEN: /^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/,
    FILE_STORAGE_ITEM_NAME: /([\/:*?"<>|'%$#@!()+=;`])|(^[\s]+$)/,
    TICK_INPUT_DATE: /^(|[0-9]|1[0-2]|0[1-9])(|\/|\/((|[0-9]|[01][1-9]|2[0-9]|3[01]))(|\/|\/(2|20|20[0-9]{0,2})))$/,
    TICK_INPUT_FULL_DATE: /^(1[0-2]|[1-9]|0[1-9])\/((0[1-9]|[1-2][0-9]|3[01]|[1-9])\/)20[0-9]{2}$/,
    TICK_INPUT_TIME: /^(|([0-9]|[10][0-9]|2[0-3])(|:(|[0-9]|[0-5][0-9]|6[0]{0,2}))|2[0-4](|:[0]{0,2}))$/,
    TICK_INPUT_IS_ERROR_TIME: /^(|:|[0-9]+:|:[0-9]+|0{1,4}|0{1,2}:0{1,2})$/,
};

export const HEADER_CONSTANTS = {
    LOCAL_TIME: 'local-time',
};

export const API_PREFIX = '/api/v1/';