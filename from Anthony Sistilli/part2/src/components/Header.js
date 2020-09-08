import React from 'react'
import { AppBar, Toolbar,Typography } from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import {makeStyles} from '@material-ui/styles'

const useStyle =makeStyles(()=>({
    Typographystyle:{
        flex:1
    }
}))
export default function Header() {
    const classes=useStyle()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.Typographystyle} align="center">
                        <h1>The person list in react js using material UI</h1>
                    </Typography>
                    <AccountCircleRoundedIcon/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
