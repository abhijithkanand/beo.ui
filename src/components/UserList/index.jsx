import * as React from 'react';
import List from '@mui/material/List';
import { Card, CardContent, Typography } from '@mui/material';
import UserListItem from './UserListItem';
import { PropTypes } from 'prop-types';

const style = {
    width: '100%',
    bgcolor: 'background.paper',
};


export default function UserList(props) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Users List</Typography>
                <List sx={style} >
                    {props.users.map((user, count) => (
                        <UserListItem key={user.id} name={user.name} hideDivider={props.users.length - 1 == count} email={user.email} />
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
};