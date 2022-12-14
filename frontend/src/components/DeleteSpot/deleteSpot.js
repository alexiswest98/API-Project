import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOneSpotThunk } from "../../store/spots";
import { getAllSpotThunk } from "../../store/spots";
import "./deleteSpot.css";

function DeleteASpotForm({ spot, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [verif, setVerif] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const sampleVerif = `I ${sessionUser.firstName} ${sessionUser.lastName} wish to delete this spot.`;

    useEffect(() => {
        const errors = [];
        if (verif !== sampleVerif) errors.push("Inputs must match to delete");
        setErrors(errors);
    }, [dispatch, verif, sampleVerif]);

    const deleteFunc = async (e) => {
        // console.log("delete spot button clicked", "this is spotId:", spot.id)
        e.preventDefault();

        setHasSubmitted(true);
        if (errors.length) return alert(`Cannot Delete Spot`);

        const deleteSent = await dispatch(deleteOneSpotThunk(spot.id)).then(() => setShowModal(false))
        // console.log("after thunk dispatched this is sent", deleteSent)

        dispatch(getAllSpotThunk())
        history.push('/spots/current')


    }

    return (
        <form onSubmit={deleteFunc} className="wholeDeleteModal">
            <div className="deleteInput">
                {setHasSubmitted && errors.length > 0 && <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>}
                <h2 className="verif-delete-title">Please copy and paste to delete</h2>
                <label htmlFor="verif">{`I ${sessionUser.firstName} ${sessionUser.lastName} wish to delete this spot.`}</label>
                <input className="delete-input-text"
                    id="verif"
                    type="text"
                    onChange={(e) => setVerif(e.target.value)}
                    value={verif}
                />
                <button class="delete-button">
                    <span>Delete</span>
                </button>
            </div>
        </form>
    )
}


export default DeleteASpotForm;
