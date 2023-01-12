import { TextField } from "@mui/material";

export const validation = (comp, type) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phone = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    let alphanumeric = /^[a-z0-9\s,'-]*$/;
    let price = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/; 
    let time = /^(?:0?\d|1[012]):[0-5]\d$/;
   
    if (type == 'time') {
        if (comp.match(time))
            return true;
        else
            return false;
    } else if (type == 'email') {
        if (comp.match(regex))
            return true;
        else
            return false;
    } else if (type == 'phone') {
        if (comp.match(phone))
            return true;
        else
            return false;
    }
    else if (type == 'alphanumeric') {
        if (comp.match(alphanumeric))
            return true;
        else
            return false;
    }
    else if (type == 'price') {
        if (comp.match(price))
            return true;
        else
            return false;
    }
  
   
   
}

