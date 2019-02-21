import { callApi } from "../../../../../common/services/api/api";
import { RequestBuilder } from "../../../../../common/services/api/RequestBuilder";
import { Methods } from "../../../../../common/services/api/Request";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS
} from "../constants";
import {
  PUT_USERS_REQUEST,
  PUT_USERS_SUCCESS,
  PUT_USERS_FAIL
} from "../constants";

export const loadUsers = (limit, offset) => {
  return dispatch => {
    const request = new RequestBuilder()
      .addEndpoint("/users")
      .addMethod(Methods.GET)
      .addParams({ limit, offset })
      .addHeaders({ "Auth-Token": "asdasd" })
      .build();

    dispatch({ type: GET_USERS_REQUEST });

    callApi(request)
      .then(response => {
        dispatch({ type: GET_USERS_SUCCESS, response });
      })
      .catch(err => {
        dispatch({ type: GET_USERS_FAIL, error: err });
      });
  };
};

export const updateUser = (id, isBlocked, balance) => {
  return dispatch => {
    const request = new RequestBuilder()
      .addEndpoint(`/users/${id}`)
      .addMethod(Methods.PUT)
      .addBody({ isBlocked, balance: parseInt(balance) })
      .addHeaders({ "Auth-Token": "asdasd" })
      .build();

    dispatch({ type: PUT_USERS_REQUEST });

    callApi(request)
      .then(response => {
        dispatch({ type: PUT_USERS_SUCCESS, response });
      })
      .catch(err => {
        dispatch({ type: PUT_USERS_FAIL, error: err });
      });
  };
};

export const deleteUser = (id) => {
  return dispatch => {
    const request = new RequestBuilder()
      .addEndpoint(`/users/${id}`)
      .addMethod(Methods.DELETE)
      .addHeaders({ "Auth-Token": "asdasd" })
      .build();

    dispatch({ type: DELETE_USERS_REQUEST });

    callApi(request)
      .then(response => {
        dispatch({ type: DELETE_USERS_SUCCESS, response });
      })
      .catch(err => {
        dispatch({ type: DELETE_USERS_SUCCESS, error: err });
      });
  };
};
