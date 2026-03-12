import './CreateListing.css';

function CreateListing({state}) {
    const [isVisible, switchState] = state;

    function closeModal() {
    }

    function save() {
    }

    return (<div className="modal-background" data-isvisible={isVisible}>
        <div className="modal">
            <div className="header">Create a Listing <span onClick={closeModal}>X</span></div>
            <div className="body">
                <form onSubmit={save}>
                <div class="form-group"><label for="price">Price:&nbsp;</label><input id="price" name="price" type="number" /></div>
                <div class="form-group"><label for="title">Title:&nbsp;</label><input id="title" name="title" type="text" /></div>
                <div class="form-group"><label for="description">Description:&nbsp;</label><input id="description" name="description" type="text" /></div>
                </form>
            </div>
            <div className="footer">
                <button onClick={closeModal}>Close</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
        </div>);
}

export default CreateListing;