import { useState } from "react";
import PropTypes from "prop-types";

function EditButn({id, currentName, onEdit} ){
    const [isEditing, setIsEditing] =useState(false); 
    const [newName, setNewName] = useState(currentName);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(id, newName);
        setIsEditing(false);
    };


    return(
        <>
            {isEditing ? (
                <>
                    <input
                        type= "text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button type="button" className="btn btn-outline-warning" onClick ={handleSaveClick}>Save Changes</button>
                </>
            ):(
                <button type="button" className="btn btn-outline-info" onClick ={handleEditClick}>Edit</button>
            )}
        </>
        
    )
}

EditButn.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    currentName: PropTypes.string,
    onEdit: PropTypes.func.isRequired
}

export default EditButn;