import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {City, CitiesAll, CityHeader} from "./City/index"

const apiUrl = "http://localhost:5000/api/cities"

export const Cities = () => {
    const dispatch = useDispatch();
    const [cities, setCities] = useState([])



    function selectedCity (city){
        dispatch({ type: "City", 
        payload:{
            city:city.currentTarget.value
        }
    })
    }

    useEffect(()=>{
    axios.get("api/cities")
      .then(res => {
        setCities(res.data.data)

      })
    }, [])


    return (
        <>
            <CityHeader>Select a City</CityHeader>
            <CitiesAll>
                {
                    cities?.map(
                        (city, index) =>(
                            <City onClick={selectedCity}  value={city}>
                               {city}
                            </City>   
                        )
                    )
                }
        </CitiesAll>
        </>
    )
}
