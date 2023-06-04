
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { ListItemButton } from '@mui/material';


export default function UserListItem(props) {

    const listItemRef = useRef(null);

    const handleClick = () => {
        console.log(props)
    };

    return (
        <>
            <ListItemButton  ref={listItemRef} onClick={handleClick} >
                <ListItemText primary={props.name} secondary={props.email} />
            </ListItemButton>
           {!props.hideDivider ? <Divider /> : null} 
        </>
    );
}

UserListItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    hideDivider: PropTypes.bool
};
