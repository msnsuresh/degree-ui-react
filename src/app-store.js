import React from 'react';
import { createStore } from 'redux';
import { appReducer } from './reducers/app-reducer'

console.log("appReducer", appReducer);

export const appStore = createStore(appReducer);

console.log("appStore", appStore);