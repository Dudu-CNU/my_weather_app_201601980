import React from "react";
import {useEffect, useState} from "react";
import CityList from "../components/CityList"

function Cities() {
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";

    const [cityState, setCityState] = useState([]);

    useEffect(() => {
        console.log('cities component mounted!')
        getCities();
    }, []); //once

    async function getCities() {
        const cities = await fetch(API_URL).then((res) => res.json());
        //이 부분에서 await이 핵심.말그대로 기다림을 의미(비동기 -> 동기) await이 없으면 fetch를 통해 promise객체가 그대로 들어옴
        //이때 await을 사용해서 promise 객체가 아닌 Json타입 데이터를 가져올 수 있음
        //동작 : API_URL(어떤 API를 통해 DB로부터 가공된 데이터를 전송)로 부터 fetch를 통해
        // promise객체가 넘어오게 되고 비동기하게 전달된 promise를
        // await을 이용해 동기적으로 작동한 데이터를 전달.
        console.log(cities);
        setCityState(cities);
    }

    return (
        <div>
            <h1>Cities</h1>
            <p>{API_URL}</p>
            {/*<div>{JSON.stringify(cityState)}</div> JSON 형식으로 출력부분*/}
            <CityList cities={cityState} />
            {/*CityList component를 이용하여 Json 형식의 데이터를 리스트로 정렬하여 출력*/}
        </div>
    );
}

export default Cities;
