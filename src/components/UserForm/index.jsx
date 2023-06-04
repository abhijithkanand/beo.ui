import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
  Stack
} from '@mui/material';

const steps = ['Name & Email', 'Password'];

const UserForm = ({ addUser, cancelAddUser }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    setActiveStep(prevStep => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const handleSubmit = () => {
    const newUser = {
      name,
      email,
      password,
    };

    addUser(newUser);
    handleReset()
    setActiveStep(0)
  };

  const handleReset = () => {
    // Reset form values
    setName('');
    setEmail('');
    setPassword('');
    setActiveStep(0)
  };

  const handleCancel = () => {
    handleReset()
    cancelAddUser()
  };


  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Add User</Typography>
        {/* Stepper */}
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Form */}
        <div>
          {activeStep === 0 ? (
            // Step 1: Name & Email
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >

              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Box>
          ) : (
            // Step 2: Password
            <div>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  label="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Box>
            </div>
          )}
        </div>

        {/* Buttons */}
        <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="flex-end">
          {activeStep > 0 && (
            <Button variant="outlined" onClick={handleBack}>Back</Button>
          )}
          {activeStep < steps.length - 1 ? (
            <>
              <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
              <Button variant="contained" onClick={handleNext}>Next</Button>
            </>
          ) : (
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
  cancelAddUser: PropTypes.func.isRequired,
};

export default UserForm;