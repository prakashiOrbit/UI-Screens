import { TextField } from '@mui/material';
import React, { Component } from 'react'

export default class TextFieldClass extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.inputDetails, "text field input");
    }   
    render() {
        return (
            <>
                {

                    <TextField
                    
                        id="outlined-read-only-input"
                        required
                        label={this.props.formDetails.label}
                        fullWidth
                        // size='small'
                        variant='outlined'
                      
                        onChange={this.props.onChange}
                        name={this.props.formDetails.id}
                        value={this.props.inputDetails[this.props.formDetails.id]}
                        InputProps={{
                            readOnly: this.props.editFlag == 'edit' ? this.props.formDetails.disabled : this.props.editFlag == 'view' ? true : false
                        }}

                    />

                }
            </>

        )
    }
}
