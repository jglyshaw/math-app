
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Page1({ width }) {




    return (
        <>


            <Box component="main" style={{ marginLeft: width }} sx={{ flexGrow: 1, p: 5 }}>

                <Grid container style={{ height: "600px" }} spacing={2}>

                    <Grid style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }} item xs={3}>
                        <p>Filters</p>

                    </Grid>
                    <Grid item xs={6}>

                    </Grid>


                    <Grid style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }} item xs={3}>
                        <p> Result Statistics  </p>
                    </Grid>


                </Grid>




            </Box>





        </>
    )
}

export default Page1;
