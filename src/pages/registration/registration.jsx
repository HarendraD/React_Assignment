import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../../component/textFields/txtField";
import CommonBtn from "../../component/button/index";
import CommonTable from "../../component/table/table";
import Box from "@mui/material/Box";
import "../registration/registration.css";
import Service from "../../services/service";

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: "",
                username: "",
                password: "",
                name: {
                    firstname: "", lastname: ""
                },
                address: {
                    city: "", street: "", number: "", zipcode: "",
                    geolocation: {
                        lat: "", long: ""
                    }
                },
                phone: ""
            },
        }
    }

    saveUser = async () => {
        let data = this.state.userData;
        console.log(data);
        let response = await Service.postUser(data);
        console.log(response);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: response.data.message,
                severity: 'success'
            });
        } else {
            this.setState({
                alert: true,
                message: response.response.data.message,
                severity: 'error'
            });
        }
    }

    render() {
        return (<>
            <Box className="boxContainerInRegistration">
                <Grid
                    container spacing={0}
                    sx={{ height: '100%', width: "100%", margin: "10px" }}
                >
                    <Grid item xs={12} sx={{
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        position: "relative"
                    }}>
                        <h1
                            style={{ paddingLeft: "2%" }}
                        >New User Registration</h1>
                    </Grid>
                    <Grid
                        item xs={12}
                        sx={{
                            position: "relative",
                            height: "50%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Grid
                            container
                            item
                            xs={11}
                            spacing={0.5}
                            sx={{ height: "100%", marginBottom: "10px" }}
                        >
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='First Name'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.name.firstname}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.name.firstname = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Last Name'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.name.lastname}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.name.lastname = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Email'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.email}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.email = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='User Name'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.username}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.username = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Password'
                                    style={{ width: "100%" }}
                                    type='password'
                                    size="small"
                                    value={this.state.userData.password}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.password = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='City'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.address.city}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.city = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Street'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.address.street}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.street = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Street No'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.address.number}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.number = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Zip Code'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.zipcode}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.zipcode = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Lat Value'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.address.geolocation.lat}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.geolocation.lat = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Long Value'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.address.geolocation.long}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.address.geolocation.long = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <TxtField
                                    variant="outlined"
                                    label='Mobile Number'
                                    style={{ width: "100%" }}
                                    size="small"
                                    value={this.state.userData.phone}
                                    onChange={(e) => {
                                        let formData = this.state.userData
                                        formData.phone = e.target.value
                                        this.setState({ formData })
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Grid
                                    container
                                    spacing={2}
                                    item
                                    xs={12}
                                >
                                    <Grid item xs={8}
                                        sx={{
                                            display: 'flex', alignItems: "center", justifyContent: "end"
                                        }}></Grid>
                                    <Grid item xs={2}
                                        sx={{ display: 'flex', alignItems: "center", justifyContent: "end" }}>
                                        <CommonBtn
                                            variant="contained"
                                            label='Clear'
                                            size="medium"
                                            color="error"
                                            style={{ width: "80%", display: "flex" }}
                                        />
                                    </Grid>
                                    <Grid item xs={2}
                                        sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <CommonBtn
                                            variant="contained"
                                            label='Save'
                                            size="medium"
                                            style={{ width: "80%", display: 'flex', borderradius: "20px" }}
                                            color='success'
                                            onClick={this.saveUser}
                                            type='submit'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            position: "relative",
                            height: "40%",
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CommonTable id="tbl"
                            width='100%'
                            height='100%'
                            tblRows={['First Name', 'Last Name', 'Email', 'User Name', "Password", "Action"]}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>)
    }
}

export default RegistrationPage;