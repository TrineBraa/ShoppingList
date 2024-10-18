import PropTypes from 'prop-types';
import '../CSSFiles/shoppingList.css'

function DeleteButn({id, onDelete}) {
    const HandleDelete = async () => {
        onDelete(id);
    }

return(
<button 
    type="button" 
    className="btn btn-outline-danger"
    onClick={HandleDelete}>
        X
</button>
);
}

DeleteButn.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string]).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButn;