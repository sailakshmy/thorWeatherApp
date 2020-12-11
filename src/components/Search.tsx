import React, {FC, useState, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {setAlert} from '../store/actions/alertActions';
import {getWeather, setLoading} from '../store/actions/weatherActions';


interface SearchProps{
    title: string;
}

const Search:FC<SearchProps>=({title})=>{
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const changeCity = (e: FormEvent<HTMLInputElement>)=>{
        setCity(e.currentTarget.value);

    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(city.trim()===''){
            return dispatch(setAlert('Please enter a city name.'));
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    return (
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <form action="" className="py-5" onSubmit={handleSubmit}>
                        
                        <input role="input" type="text" className="input has-text-centered mb-2" 
                                placeholder="Enter City Name" style={{maxWidth:300}} name="SearchField"
                                value={city} onChange={changeCity} data-testid='input'/>
                        <button className="button is-primary is-fullwidth" data-testid="SearchButton"
                                style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;