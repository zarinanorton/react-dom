import './CreateListing.css';
import { CanonicalStates } from '../constants/States.js';
import { ImageSelector } from './img-loader/ImageSelector';

function CreateListing({state}) {
    const [isCreateListingVisible, setCreateListingVisibility] = state;

    function closeModal() {
        setCreateListingVisibility(false);
    }

    function save() {
        setCreateListingVisibility(false);
    }

    return (<div className="modal-background" data-isvisible={isCreateListingVisible}>
        <div className="modal">
            <div className="header">Create a Listing <span onClick={closeModal}>X</span></div>
            <div className="body">
                <ImageSelector />
                <form className="form" onSubmit={save}>
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