const fs=require('fs');
let file_path='./jsonfiles/read.json';

// const readData=(success,failure)=>{
// //read content from the jsonfile
// fs.readFile(file_path,(error,data)=>{
//    console.log(error,data);
//     if(error){
//         return error;

//     }
//     success(JSON.parse(data));
// })

//}
const readData=()=>{
const promise=new Promise((resolve,reject)=>{
    fs.readFile(file_path,(error,data)=>{
            if(error){
                reject(error);
            }
            resolve(JSON.parse(data));
})
})
return promise;
}

//write to file

const writeData=(content)=>{
    const promise=new Promise((resolve,reject)=>{
        readData()
        .then((data)=>{
            const contents=data;
            contents.push(content);
            fs.writeFile(file_path,JSON.stringify(contents),(error)=>{
                if(error){
                    reject(error)
                 }

                 resolve({"message":"content Created succe"})
            });
        })
        .catch((error)=>{
            reject(error)
        })
    });
    return promise;
}



const crudeop={
    readData:readData,
    writeData:writeData
}
module.exports=crudeop;