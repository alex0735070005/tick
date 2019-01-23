import {
  ICON_FILE_NEW,
  ICON_FILE_PPT,
  ICON_FILE_PSD,
} from '../constants/General';

const deepGet = (obj, props, defaultValue) => {
  if (obj === undefined || obj === null) {
    return defaultValue;
  }
  if (props.length === 0) {
    return obj;
  }
  const foundSoFar = obj[props[0]];
  const remainingProps = props.slice(1);
  return deepGet(foundSoFar, remainingProps, defaultValue);
};

const isPromise = (object) => {
  if (Promise && Promise.resolve) {
    return Promise.resolve(object) === object;
  }
  return false;
};

const isArray = (arr) => {
  return Array.isArray(arr);
};

const uniqList = (all, exist) => {
  if (Array.isArray(all) && Array.isArray(exist) && exist.length) {
    return all.filter(ae => !exist.find(ex => ae.id === ex.id));
  }
  return all;
};
const addTag = (all, exist, elem, dataIndex) => {
  if (Number.isInteger(elem)) {
    return exist.concat(all[elem - 1]);
  }
  return exist.concat([{
    id: null,
    [dataIndex]: elem,
  }]);
};
const removeTag = (all, exist, elem) => {
  if (Number.isInteger(elem)) {
    return exist.splice(elem - 1, 1);
  }
  return exist;
};

const previewSource = (docType, documentUrl) => {
  switch (docType) {
    case 1:
      return ICON_FILE_PPT;
    case 2:
      return ICON_FILE_PSD;
    case 3:
      return documentUrl;
    case 4:
      return documentUrl;
    default:
      return ICON_FILE_NEW;
  }
};


export const obj = {
  deepGet,
  isPromise,
};
export const str = {
  previewSource,
};
export const arr = {
  uniqList,
  isArray,
  addTag,
  removeTag,
};
