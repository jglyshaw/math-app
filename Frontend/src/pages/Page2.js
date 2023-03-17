
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

function Page1({ width }) {




    return (
        <>
            <div style={{ marginLeft: width }}>

                <Grid container style={{ height: "600px", padding: "20px" }} >



                    <Grid item xs={2} style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }}  >
                        <p style={{ marginLeft: "10px" }}>Filters</p>
                        <Divider />
                    </Grid>


                    <Grid item xs={8} style={{ padding: "20px" }}>
                        
                        <p style={{ textAlign: "center" }}>Results</p>
                        <table >
                            <tr>
                                <th>Label</th>
                                <th>Domain</th>
                                <th>Degree</th>
                                <th>Polynomials</th>
                                <th>Field</th>
                            </tr>
                            <tr style={{ textAlign: 'center' }}>
                                <td>1.2.f4075c4e.1</td>
                                <td>P -> P</td>
                                <td>2</td>
                                <td>[x^2 : y^2] </td>
                                <td>QQ</td>
                            </tr>
                            <tr style={{ textAlign: 'center' }}>
                                <td>1.2.f4075c4e.1</td>
                                <td>P -> P</td>
                                <td>2</td>
                                <td>[x^2 : y^2] </td>
                                <td>QQ</td>
                            </tr>
                        </table>
                    </Grid>


                    <Grid item xs={2} style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }} >
                        <p style={{ marginLeft: "10px" }}> Result Statistics  </p>
                        <Divider />
                    </Grid>


                </Grid>




            </div>





        </>
    )
}

export default Page1;
