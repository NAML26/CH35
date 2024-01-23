import "./Main.css"
import GenLogo from  "../assets/gen-img.jpg"

const Main = () => {
    return(
        <>
        <div className="main--container">
            <div className="main--head">
                <a href="https://mexico.generation.org/" target="_blank">
                    <img src={GenLogo} className="main--logo" alt="Logo Gen Mex"/>
                </a>
            </div>
            <h1>React + Vite</h1>
            <h2>Astros API</h2>
        </div>
        
        </>
    )
}

export default Main;