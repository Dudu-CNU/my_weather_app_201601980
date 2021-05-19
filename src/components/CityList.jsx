import React, {render} from 'react';

function CityList(props) {
    const {cities} = props;
    const tempStyle = {
        display: "inline-block",
        liststyle: "none",
        width: "100px",
        height: "70px",
        boder: "1px solid black",
        margin: "auto",
        background: "skyblue",
        padding: "2px"
    }
    return (
        <div>
            <h1>CityList</h1>
            <ul>
                {cities.map((item, index) => {
                    const baseUrl = "https://search.naver.com/search.naver?where=nexearch&query=";
                    const url =  baseUrl.concat(item);
                    const info = <a href={url}>정보</a>;
                    return <li style={tempStyle}>{item}<br></br> {info} </li>;
                })}
            </ul>
        </div>
    );
}
export default CityList;

