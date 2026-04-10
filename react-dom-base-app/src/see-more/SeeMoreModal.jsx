import './SeeMoreModal.css';

function SeeMoreModal({state}) {
    const [isSeeMoreModalVisible, setSeeMoreModalVisibility] = state;

    function closeModal() {
        setSeeMoreModalVisibility(false);
    }

    function save() {
        setSeeMoreModalVisibility(false);
    }

    return (<div className="modal-background" data-isvisible={isSeeMoreModalVisible}>
        <div className="modal">
            <div className="header">Create a Listing <span onClick={closeModal}>X</span></div>
            <div className="body">

            </div>
            <div className="footer">
                <button onClick={closeModal}>Close</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
        </div>);
}

export default SeeMoreModal;