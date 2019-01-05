import React from 'react';
import axios from 'axios';

const ParentUri = 'http://10.0.2.2:3000/customer/';

// export default function getCustomerList(){
//
//     fetch(url)
//         .then((res)=>console.log(res._bodyInit))
//         .then((resJson)=>{
//
//         })
//         .catch(error=> console.log(error()))
// }


export function getCustomer() {
    const url = ParentUri + 'list';
    return axios.get(url)
}

export function postCustomer(data) {
    const url = ParentUri ;
    return axios.post(url, data)
}

// export function PostCustomer(){
//
//     const  Url = ParentUri ;
//     const  customer = {
//             firstName : "dewa",
//             lastName : "gede",
//             birthDate : "1997-1-10",
//             username : "admin",
//             password : "admin",
//             phoneType : "android",
//             phoneNumber : "088"
//     }
//     axios({
//         method : 'post',
//         url : Url,
//         data : customer
//
//     })
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))
// }

