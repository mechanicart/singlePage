import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PortfolioSection from './PortfolioSection'
import { 
  Box,
  Grid,
  Typography
} from '@material-ui/core'

const useStylesPortfolio = makeStyles(theme => ({
  root: {
    ... theme.content,
    flexGrow: 1,
  },
  portFolioSection: {
  }
}))

const Portfolio = () => {
  const classes = useStylesPortfolio()
  const projects = [{
    name: 'Alert manager',
    description: 'Save the world'
  }, {
    name: 'New manager',
    description: 'Update the world'
  },
]

  return(
    <div className={ classes.root }>
      <Typography variant='h1' component='h1' gutterBottom>
          Pf
      </Typography>
      <Grid 
        container
        direction='column'
        justify='center'
      >
        {
          projects.map( (project, i) => (
          <Grid container item  direction='row' justify={(i % 2 == 0) ? 'flex-end' : 'flex-start'}>
            <Grid item lg={8} md={5} sm={3} >
              <PortfolioSection />
            </Grid>
          </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Portfolio
