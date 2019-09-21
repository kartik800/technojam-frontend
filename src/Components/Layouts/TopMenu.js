import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo_small.png'
import ResponsiveDrawer from './ResponsiveDrawer';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { AppBar, Toolbar, Button, Badge, IconButton, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



const style = {
    marginleft: 200,
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: -12
    }
};




export default function TopMenu() {
    const [open, setOpen] = React.useState(false);
    const [on, setOn] = React.useState(false);




    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };






    return (
        <div style={{ color: '#fff' }}>
            <AppBar position="static">

                <Toolbar style={{ backgroundColor: "#4285f4" }}>
                    <Hidden mdUp>
                        <ResponsiveDrawer />
                    </Hidden>
                    <Grid alignItems="flex-start" justify="flex-start" >
                        <Button color="inherit" component={Link} to={'/'}>
                            <img src={Logo} alt="TechnoJam.tech" height="50px" align="center" />

                            <Hidden smDown> <Typography style={{ fontFamily: "Aileron",letterSpacing:"1px" }}>TechnoJam</Typography></Hidden>
                        </Button>
                    </Grid>
                    <div style={{ marginLeft: 'auto' }}>
                        <Tooltip title="Night Mode">
                            <IconButton color="inherit" aria-label="Night Mode" style={{ style }} component={Link} to={'/'}>
                                <WbIncandescentIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Our Projects">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/technojam" target="_blank">
                                <i className="fab fa-github fa-lg" style={{ color: '#fcfcfc' }}></i></a>
                        </Tooltip>


                        <Tooltip title="Log-in">
                            <IconButton color="inherit" onClick={handleOpen} aria-label="Login" style={{ style }}>
                                <PersonIcon />
                            </IconButton>
                        </Tooltip>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <div style={{
                                width: "100%", height: "100%",
                                backgroundColor: "black", opacity: "0.98",
                                position: "absolute", top: "0", display: "flex",
                                alignItems: "center", justifyContent: "center"
                            }}>


                                <div style={{
                                    width: "500px", height: "290px", backgroundColor: "#fafafa",
                                    borderRadius: "7px", textAlign: "center"
                                }}>


                                    <img src={Logo} alt="TechnoJam.tech" height="50px" align="center"
                                    />
                                    <br></br>


                                    <FormControl component="fieldset">
                                        <Grid container alignItems="flex-start">

                                            <Grid item xs={12} sm={12} md={12}>

                                                <TextField
                                                    id="outlined-email-input"
                                                    label="Email"
                                                    type="email"
                                                    name="email"
                                                    autoComplete="email"
                                                    margin="normal"
                                                    variant="outlined"
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>

                                                <TextField
                                                    id="outlined-password-input"
                                                    label="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <br></br>

                                        <Grid container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"

                                        >
                                            <Button variant="contained" color="primary" onClick={handleClose} component={Link} to={'/login'} >
                                                Login
                                            </Button>
                                        </Grid>


                                    </FormControl>

                                </div>
                            </div>
                        </Modal>
                    </div>


                </Toolbar>

                <Hidden smDown>
                    <Toolbar style={{ backgroundColor: '#faf9f8', minHeight: '40px' }}>
                        <div style={{ marginLeft: 'auto', marginRight: 'auto',padding:"5px"}}>
                            
                            <Grid alignItems="flex-end" justify="flex-end" spacing={800}>
                                <Button style={{ style }} component={Link} to={'/aboutus'}>
                                <Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>About Us</Typography></Button>
                                <Button style={{ style }} component={Link} to={'/events'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>
                                  Events</Typography></Button>
                                <Badge style={{ marginBottom: '30px', marginRight: '5px' }} badgeContent={'New'} color="secondary"></Badge>
                                <Button style={{ style }} component={Link} to={'/achievements'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none'}}>Achievements
                                </Typography></Button>
                                <Button style={{ style }} component={Link} to={'/team'}> <Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>
                                    Team</Typography></Button>
                                <Button style={{ style }} component={Link} to={'/alumni'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>Alumni</Typography></Button>
                               
                                <Button style={{ style }} component={Link} to={'/mentorship'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>Mentorship</Typography></Button>
                                <Button style={{ style }} component={Link} to={'/groups'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>Groups</Typography></Button>
                                <Button style={{ style }} component={Link} to={'/contactus'}><Typography style={{ fontFamily: "DyeLine",letterSpacing:"0.9px", textTransform: 'none' }}>Contact Us</Typography></Button>
                            
                            </Grid>
                           
                        </div>
                    </Toolbar>
                </Hidden>

            </AppBar>
        </div>
    )
}

//<Button style={{ style }} component={Link} to={'/resources'}>Resources</Button>