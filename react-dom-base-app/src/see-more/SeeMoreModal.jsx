import './SeeMoreModal.css';

function SeeMoreModal({state}) {
    // seeMoreOfItem type is {title: string, description: string, price: double}
    const [seeMoreOfItem, isSeeMoreModalVisible, setSeeMoreModalVisibility] = state;

    function closeModal() {
        setSeeMoreModalVisibility(false);
    }

    function save() {
        setSeeMoreModalVisibility(false);
    }

    return (<div className="modal-background" data-isvisible={isSeeMoreModalVisible}>
        <div className="modal">
            <div className="header">See More Modal <span onClick={closeModal}>X</span></div>
            <div className="body">
                <p>{seeMoreOfItem.title}</p>
                <p>{seeMoreOfItem.description}</p>
                <p>{seeMoreOfItem.price}</p>
            </div>
            <div className="footer">
                <button onClick={closeModal}>Close</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
        </div>);
}

export default SeeMoreModal;