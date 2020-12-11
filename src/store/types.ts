export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_WEATHER';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

//The details of this interface come from the openweather API call. The fields inside this are basically the 
//properties inside the response
/**{"coord": { "lon": 139,"lat": 35},
     "weather": [
       {
         "id": 800,
         "main": "Clear",
         "description": "clear sky",
         "icon": "01n"
       }
     ],
     "base": "stations",
     "main": {
       "temp": 281.52,
       "feels_like": 278.99,
       "temp_min": 280.15,
       "temp_max": 283.71,
       "pressure": 1016,
       "humidity": 93
     },
     "wind": {
       "speed": 0.47,
       "deg": 107.538
     },
     "clouds": {
       "all": 2
     },
     "dt": 1560350192,
     "sys": {
       "type": 3,
       "id": 2019346,
       "message": 0.0065,
       "country": "JP",
       "sunrise": 1560281377,
       "sunset": 1560333478
     },
     "timezone": 32400,
     "id": 1851632,
     "name": "Shuzenji",
     "cod": 200
     } */
export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface WeatherData{
    base: string;
    clouds:{
        all:number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;

    };
    dt: number;
    id: number;
    main:{
        feels_like:number;
        humidity:number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    name: string;
    sys:{
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type:number;
    };
    timezone:number;
    visibility:number;
    weather: Weather[];
    wind:{
        speed:number;
        deg: number;
    }
}

export interface WeatherError {
    cod: string;
    message:string;

}

export interface WeatherState{
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction{
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction{
    type:typeof SET_LOADING;
}

interface SetErrorAction{
    type: typeof SET_ERROR;
    payload: '';
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction{
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState{
    message: string;
}

