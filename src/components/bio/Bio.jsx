import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core'
import BioCarousel from './BioCarousel'
import { about } from './about'

const useStylesBio = makeStyles(theme => ({
  root: {
    ... theme.content,
  }
}))

const Bio = () => {
  const classes = useStylesBio()

  return (
    <Grid
      className={ classes.root }
      container
      direction='column'
    >
      <Grid item>
        <Typography variant='h3' component='h3' gutterBottom>
          A FEW WORDS ABOUT ME
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body2'>
          { about }
        </Typography>
      </Grid>
      <Grid item>
        <BioCarousel />
      </Grid>
      <Grid 
        item
        container
        direction='row'
      >
        <Grid item xs={6}>
          <Typography variant='h3'>
            DESIGN SERVICES
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h3'>
            TOOLS I USE
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bio
