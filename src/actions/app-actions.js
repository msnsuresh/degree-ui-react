import {appStore} from '../app-store';
import 'whatwg-fetch';

// var fetch;

export const getDegreeRequestAction = () => ({
  type: 'GET_DEGREE_REQUEST',
  response: []
});

export const getDegreeDoneAction = (response) => ({
  type: 'GET_DEGREE_DONE',
  response
});

export const getDegree = (searchData) => {
  appStore.dispatch(getDegreeRequestAction());
  fetch('https://calm-brook-18967.herokuapp.com/api/getDegree', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(searchData)
  })
    .then(res => res.json())
    .then(response => {
      appStore.dispatch(getDegreeDoneAction(response));
    });
}