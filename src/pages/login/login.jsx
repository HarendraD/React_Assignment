import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TxtField from "../../component/textFields/txtField"
import CommonBtn from "../../component/button/index";
import "../login/login.css";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Box
                    className="boxContainerInLogin">
                    <Grid
                        container
                        spacing={0}
                        sx={{ position: "relative", display: 'flex', width: '100%', height: "100%" }}>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '20%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            <h1>LOGIN</h1>
                        </Grid>
                        <Grid item xs={12} sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: 'center',
                            height: '15%'
                        }}>
                            <TxtField
                                varient='outlined'
                                label="Enter Your User Name"
                                style={{ width: '80%', margin: '20px' }}
                                className='textField'
                                type='text'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: 'center',
                            height: '15%'
                        }}>
                            <TxtField
                                varient='outlined'
                                label="Enter Your Password"
                                style={{ width: '80%' }}
                                className='textField'
                                type='password'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '30%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center'
                        }}>
                            <Link to="#"
                                style={{ textDecoration: "none", width: "40%" }}

                            >
                                <CommonBtn
                                    variant='contained'
                                    label='Login'
                                    size='large'
                                    color='primary'
                                    style={{ width: "100%", margin: '10px' }}
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} sx={{
                            position: "relative",
                            textAlign: 'center',
                            height: '20%',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'start'
                        }}>
                            <p
                                style={{ paddingLeft: '65px' }}
                            >Create new user account ?
                                <span>
                                    <Link to="#"
                                        style={{ textDecoration: "none", paddingLeft: "10px" }}
                                    >
                                        click here
                                    </Link>
                                </span>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default Login;