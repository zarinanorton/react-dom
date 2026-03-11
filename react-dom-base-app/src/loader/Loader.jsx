import './Loader.css';

function Loader({isVisible}) {
    return (<div className="loader" data-isvisible={isVisible}></div>);
}

export default Loader;