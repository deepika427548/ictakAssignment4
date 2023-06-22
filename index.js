const crude=require('./repos/crudeop');
const express=require('express');
// const success=(data)=>{
//     console.log(data);
// }

// const fail=(error)=>{
//     console.log(error)
// }

const content={"HospitalName":"xyz medicity","Location":"Thrissur","patientCount":600}

//crude.readData(success,fail);
crude.readData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
crude.writeData(content)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})
