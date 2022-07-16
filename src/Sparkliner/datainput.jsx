import "./dataInput.css";
import React from "react";

function DataInput() {
    return ( 
        <React.Fragment>
            <label>Data</label>
            <textarea  name="Data" id="Data" cols="30" rows="10"></textarea>
        </ React.Fragment>
     );
}

export default DataInput;