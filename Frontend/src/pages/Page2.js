
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';

function Page1({ width }) {

    const toggleTree = (event) => {
        let el = event.target;
        el.parentElement.querySelector(".nested").classList.toggle("active");
        el.classList.toggle("caret-down");
        console.log(el)
    }

    const checkBoxStyle = {
        paddingTop: 0,
        paddingBottom: 0
    }

    const textBoxStyle = {
        width: "80px",
        marginRight: "12px"
    }



    return (
        <>
            <div style={{ marginLeft: width }}>

                <Grid container style={{ height: "600px", padding: "20px" }} >



                    <Grid item xs={3} style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }}  >

                        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <p>Filters</p>
                            <Divider />


                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Dimension</span>
                                    <ul className="nested">
                                        <input type="checkbox" />
                                        <label>P<sup>1</sup> {String.fromCharCode(8594)} P<sup>1</sup></label>
                                        <br />
                                        <input type="checkbox" />
                                        <label>P<sup>2</sup> {String.fromCharCode(8594)} P<sup>2</sup></label>
                                        <br />
                                        <input type="text" style={textBoxStyle} />
                                        <label>Custom</label>
                                    </ul>
                                </li>
                            </ul>

                            <br />

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Degree</span>
                                    <ul className="nested">
                                        <input type="checkbox" />
                                        <label>2</label>
                                        <br />
                                        <input type="checkbox" />
                                        <label>3</label>
                                        <br />
                                        <input type="checkbox" />
                                        <label>4</label>
                                        <br />
                                        <input type="text" style={textBoxStyle} />
                                        <label>Custom</label>
                                    </ul>
                                </li>
                            </ul>

                            <br />

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Class</span>
                                    <ul className="nested">
                                        <input type="checkbox" />
                                        <label>Function</label>
                                        <br />
                                        <input type="checkbox" />
                                        <label>Family</label>
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Type</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Field of Definition</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Rational Periodic Points</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Rational Preperiodic Points</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Automorphism Group</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Postcritically Finite</span>
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Indeterminacy Locus</span>
                                    <ul className="nested">


                                    </ul>
                                </li>
                            </ul>
                            <br />

                        </div>
                    </Grid>


                    <Grid item xs={6} style={{ padding: "20px" }}>
                        <span style={{ float: "right", color: "red" }}>Download</span>
                        <p style={{ textAlign: "center", marginTop: 0 }}>Results</p>

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
                                <td>P<sup>1</sup> {String.fromCharCode(8594)} P<sup>1</sup></td>
                                <td>2</td>
                                <td>[x^2 : y^2] </td>
                                <td>QQ</td>
                            </tr>
                            <tr style={{ textAlign: 'center' }}>
                                <td>1.2.3cf16159.1</td>
                                <td>P<sup>1</sup> {String.fromCharCode(8594)} P<sup>1</sup></td>
                                <td>2</td>
                                <td>[x^2 + y^2 : y^2]  </td>
                                <td>QQ</td>
                            </tr>
                        </table>
                    </Grid>




                    <Grid item xs={3} style={{ backgroundColor: '#B6D1EE', borderRadius: "25px" }} >
                        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <p>Result Statistics</p>
                            <Divider />

                            <br />

                            <label>Number of Maps</label>
                            <input type="text" style={{ float: "right", ...textBoxStyle }} />


                            <br />
                            <br />

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Number PCF</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">

                                    </ul>
                                </li>
                            </ul>

                            <br />

                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average #Periodic</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">

                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average #Preperiodic</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average #Aut</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average Height</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average smallest <br/>
                                    canonical height</span>
                                    <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>
                            <br />
                            <ul id="myUL">
                                <li><span className="caret" onClick={toggleTree}>Average Resultant</span>
                                <input type="text" style={{ float: "right", ...textBoxStyle }} />
                                    <ul className="nested">
                                    </ul>
                                </li>
                            </ul>

                            <br />

                        </div>
                    </Grid>


                </Grid>




            </div>





        </>
    )
}

export default Page1;
