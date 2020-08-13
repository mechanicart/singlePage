import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PortfolioSection from './PortfolioSection'
import { projects, selfProjects } from './projects'
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

  return(
    <Grid
      container
      spacing={8}
      direction='column'
      className={ classes.root }
    >    
      <Grid
        item
        container
        spacing={2}
        direction='column'
      >
        <Grid item>
          <Typography
            variant='h6'
            component='h6'
            gutterBottom
            align='center'
            color='primary'
          >
            PROJECTS IN BIG COMPONIES
          </Typography>
        </Grid>
        <Grid 
          item
          container
          direction='column'
          justify='center'
          spacing={2}
        >
          {
            projects.map( (project, i) => (
            <Grid container item key={i} direction='row' justify={(i % 2 == 0) ? 'flex-end' : 'flex-start'}>
              <Grid item lg={8} md={7} sm={6} xs={12}>
                <PortfolioSection num={++i} name={project.name} descr={project.description} />
              </Grid>
            </Grid>
            ))
          }
        </Grid>
      </Grid>
      <Grid 
        item
        container
        spacing={2}
        direction='column'
      >
        <Grid item>
        <Typography
          variant='h6'
          component='h6'
          gutterBottom
          align='center'
          color='primary'
        >
          PERSONAL PROJECTS
        </Typography>
        </Grid>
        <Grid 
          item
          container
          direction='column'
          justify='center'
          spacing={2}
        >
          {
            selfProjects.map( (selfProject, i) => (
            <Grid container item key={i} direction='row' justify={(i % 2 == 0) ? 'flex-end' : 'flex-start'}>
              <Grid item lg={8} md={7} sm={6} xs={12}>
                <PortfolioSection num={++i} name={selfProject.name} descr={selfProject.description} />
              </Grid>
            </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
