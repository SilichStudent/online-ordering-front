import { callApi } from '../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../common/services/api/RequestBuilder';
import { Methods } from '../../../../../../../../common/services/api/Request';
import { GET_USER_CART_REQUEST, GET_USER_CART_SUCCESS, GET_USER_CART_FAIL } from '../constants';
import { CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAIL } from '../constants';

export const loadCart = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/cart')
            .addMethod(Methods.GET)
            .build();


        dispatch({ type: GET_USER_CART_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: GET_USER_CART_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: GET_USER_CART_FAIL, error: err })
        })
    }
}

export const checkout = (cart) => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/orders')
            .addMethod(Methods.POST)
            .addBody(cart)
            .build();


        dispatch({ type: CHECKOUT_REQUEST });

        callApi(request).then(response => {
            dispatch({ type: CHECKOUT_SUCCESS, response })
        }).catch(err => {
            dispatch({ type: CHECKOUT_FAIL, error: err })
        })
    }
}