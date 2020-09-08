import React from 'react'
import Carddata from './Carddata'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles =makeStyles({
    milauda:{
        margin:20,
        
    },
})

function Content() {
    const classes =useStyles()
    return (
        <Grid container className={classes.milauda} >
            <Carddata/>
        </Grid>
    )
}

export default Content
