import loadGifImage from "./img/load.gif"


const LoaderContent: React.FC = () => {
    return(
        <div>
            <h1>Carregando ...</h1>
            <img src={loadGifImage} alt="Dog Loader" width="400px" height="auto"/>
            <h1>ME CONTRATA, POR FAVOR!</h1>

        </div>
    )
}

export default LoaderContent