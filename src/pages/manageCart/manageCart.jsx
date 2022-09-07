import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import TxtField from "../../component/textFields/txtField";
import CommonComboBox from "../../component/comboBox/comboBox";
import CommonBtn from "../../component/button";
import Box from "@mui/joy/Box";

class ManageCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Box style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Grid container spacing={0} style={{ width: "100%", height: "100%" }}>
                        <Grid item xs={12} style={{ height: "10%", display: 'flex', alignItems: "center", justifyContent: "start" }}>
                            <h1 style={{ marginLeft: "3%", display: 'flex', height: "50%" }}>Manage Cart</h1>
                        </Grid>
                        <Grid container item xs={12} style={{
                            height: "90%",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <Grid container item xs={11} style={{ height: "90%" }}>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='User Name'
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label=''
                                        type="date"
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <CommonComboBox
                                        style={{ display: "flex", width: "80%" }}
                                        label="Product Title"
                                    />
                                </Grid>
                                <Grid item xs={6}
                                    style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <TxtField
                                        style={{ display: "flex", width: "80%" }}
                                        label='Qty'
                                        type="number"
                                    />
                                </Grid>
                                <Grid container item xs={12} style={{ height: "20%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Grid item xs={6}>
                                    </Grid>
                                    <Grid container item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <Grid item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "end" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Clear'
                                                size="medium"
                                                style={{ width: "60%", display: 'flex', marginRight: "3%" }}
                                                color='error'
                                            />
                                        </Grid>
                                        <Grid item xs={6} style={{ height: "100%", display: 'flex', alignItems: "center", justifyContent: "start" }}>
                                            <CommonBtn
                                                variant="contained"
                                                label='Save'
                                                size="medium"
                                                style={{ width: "60%", display: 'flex', marginLeft: "3%" }}
                                                color='primary'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}
export default ManageCart;