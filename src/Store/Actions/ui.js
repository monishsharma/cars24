import * as actionTypes from './actionTypes';

export const setLoader = () => {
    return {
        type: actionTypes.SET_LOADER,
    }
}


export const unSetLoader = () => {
    return {
        type: actionTypes.UNSET_LOADER,
    }
}
