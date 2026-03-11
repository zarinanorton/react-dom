import './Loader.css';

function Loader({isVisible}) {
    return (<div className="loader" data-isVisible={isVisible}></div>);
}

export default Loader;