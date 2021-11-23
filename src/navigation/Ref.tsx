import * as React from 'react';
import { StackActions } from '@react-navigation/native';
import _ from 'lodash';

export const navigationRef = React.createRef();

export function navigate(name: string, params = {}) {
    navigationRef.current?.navigate(name, params);
}

export function push(name: string, params = {}) {
    const currentRoute = navigationRef.current?.getCurrentRoute();

    if ((name == currentRoute?.name && _.isEqual(params, currentRoute?.params)) || (params == undefined && currentRoute == {}))
        return;

    navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function pop(popNumber = 1) {
    navigationRef.current?.dispatch(StackActions.pop(popNumber));
}