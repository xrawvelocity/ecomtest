import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  Stepper,
  CircularProgress,
  Step,
  StepLabel,
  Paper,
  Divider,
} from '@material-ui/core'

const steps = ['Shipping address', 'Payment details']

export const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Container style={{ marginTop: '4rem' }}>
      <Paper style={{ padding: '4rem' }}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={0}>
          {steps.map((each) => {
            return (
              <Step key={each}>
                <StepLabel>{each}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </Paper>
    </Container>
  )
}
