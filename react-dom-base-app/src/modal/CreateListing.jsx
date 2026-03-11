import './CreateListing.css';

function CreateListing({state}) {
    const [isVisible, switchState] = state;
    function closeModal() {

    }

    return (<div className="modal-background" data-isvisible={isVisible}><div className="modal">
        <div className="header">Create a Listing <span>X</span></div>
        <div className="body"></div>
        <div className="footer"><button onClick={closeModal}>Save</button></div>
        </div></div>);
}

export default CreateListing;