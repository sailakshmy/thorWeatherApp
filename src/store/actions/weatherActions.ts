//import { type } from 'os';
import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR} from '../types';
//import env from 'dotenv';
import {API_KEY} from '../../Config';

export const getWeather = (city:String):ThunkAction<void, RootState, null,WeatherAction> => {
    return async dispatch=>{
        try{
            console.log(process.env.OPEN_WEATHER_API_KEY);
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            if(!res.ok){
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }
            const resData: WeatherData = await res.json();
            dispatch({
                type:GET_WEATHER,
                payload:resData
            })
        } catch(err){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const setLoading = ():WeatherAction =>{
    return{
        type: SET_LOADING
    }
};

export const setError = ():WeatherAction =>{
    return{
        type: SET_ERROR,
        payload: ''
    }
}