import { useState } from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import { Box, Button, Collapse, Grid, Stack } from '@mui/material'


const usersRaw = [
  {
    id: 1,
    name: 'Ram',
    email: 'ram@example.com'
  },
  {
    id: 2,
    name: 'Jose',
    email: 'jose@example.com'
  },
  {
    id: 3,
    name: 'Akhil',
    email: 'akhil@example.com'
  }

]
function App() {
  const [users, setUsers] = useState(usersRaw)
  const [showForm, setShowForm] = useState(false)

  const addUser = (newUser) => {
    let id = Math.floor(Math.random());
    setUsers([...users, { id, ...newUser }])
    tongleView()
  };

  const tongleView = () => {
    setShowForm(!showForm)
  };

  return (

    <Grid direction="row" justifyContent="center" alignItems="center" container>
      <Grid item xs={12} sm={12} md={8}>
        <Box sx={{ m: 2 }}>
          <UserList users={users} />
          {!showForm &&
            <Stack m={1} spacing={2} direction="row" justifyContent="center" alignItems="flex-end">
              <Button variant="contained" onClick={tongleView}>Add User</Button>
            </Stack>
          }
        </Box>
        <Collapse sx={{ m: 2 }} in={showForm}>
          <UserForm cancelAddUser={tongleView} addUser={addUser} />
        </Collapse>
      </Grid>
    </Grid>
  )
}

export default App
