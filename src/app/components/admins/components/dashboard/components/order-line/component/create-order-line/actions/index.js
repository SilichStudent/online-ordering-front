import { callApi } from '../../../../../../../../../../common/services/api/api';
import { RequestBuilder } from '../../../../../../../../../../common/services/api/RequestBuilder';
import { CREATE_ORDER_LINE_REQUEST, CREATE_ORDER_LINE_SUCCESS, CREATE_ORDER_LINE_FAIL } from '../constants';
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL } from '../constants';
import { CREATE_ORDER_LINE_GET_PRODUCTS_REQUEST, CREATE_ORDER_LINE_GET_PRODUCTS_SUCCESS, CREATE_ORDER_LINE_GET_PRODUCTS_FAIL } from '../constants';
import { Methods } from "../../../../../../../../../../common/services/api/Request";

export function createOrderLine(manager) {
    return (dispatch) => {

        const request = new RequestBuilder()
            .addEndpoint('/order-lines')
            .addMethod(Methods.POST)
            .addBody(manager)
            .build();

        dispatch({ type: CREATE_ORDER_LINE_REQUEST });

        return callApi(request).then(response =>
            dispatch({
                type: CREATE_ORDER_LINE_SUCCESS,
                response
            })
        ).catch(err => {
            dispatch({
                type: CREATE_ORDER_LINE_FAIL,
                error: err
            })
        });
    }
}

export const loadCategories = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint('/categories')
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: GET_CATEGORIES_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: GET_CATEGORIES_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: GET_CATEGORIES_FAIL, error: err })
        })
    }
};

export const loadProducts = () => {
    return (dispatch) => {
        const request = new RequestBuilder()
            .addEndpoint(`/products`)
            .addMethod(Methods.GET)
            .build();

        
        dispatch({ type: CREATE_ORDER_LINE_GET_PRODUCTS_REQUEST });

        callApi(request).then( response => {
            dispatch({ type: CREATE_ORDER_LINE_GET_PRODUCTS_SUCCESS, response })
        }).catch( err => {
            dispatch({ type: CREATE_ORDER_LINE_GET_PRODUCTS_FAIL, error: err })
        })
    }
};