const apiReq = (url,headers) => {
    let res = fetch(url,headers).then((response)=>{
        return response.json
    })    
};

