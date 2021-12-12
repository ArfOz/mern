import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {DetailAll, Details, DetailHeader} from './Detail/index';

export const Detail = (props) => {

    let city = useSelector(props =>props.city)
        
    const [detail, setDetail] = useState({});

    useEffect(()=>{
        axios.post("api/detail", 
            { City : city}
        )
          .then(res => {
            setDetail(res.data.data)
           
    
          })
        }, [city])

    return (
        <DetailAll>
            <DetailHeader>{detail?.description}</DetailHeader>
            <Details>General Condition is: {detail?.main}</Details>
            <Details>Temperature: {detail?.temp}°C</Details>
            <Details>Minimum Temperature: {detail?.temp_min}°C</Details>
            <Details>Humidity: %{detail?.humidity}</Details>
            <Details>Visibility: {detail?.visibility} meters</Details>
            <Details>Wind speed: {detail?.wind?.speed} km/h</Details>
            <Details>Wind degree: {detail?.wind?.deg}</Details>
        </DetailAll>
    )
}
