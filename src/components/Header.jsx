import logo from '../logo.svg';

function Header(props) {
    //const city = "Seoul";

    console.log(props);
    const city = props.cityName
    const region = props.region
    //props로 받아온 인자들 줒 cityName 사용

    return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    국가는 : {region}
                    <br></br>
                    도시는 : {city}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
    );
}

export default Header;
//Header function 을 export 시킨다는 의미