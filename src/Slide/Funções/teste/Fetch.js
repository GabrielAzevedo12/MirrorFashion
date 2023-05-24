var Fetch = async (url,method,content,setData,setImg,setNamePreço)  => {
    let [url1,method1,content1,sD,sI,sNP] = [url,method,content,setData,setImg,setNamePreço];
    if(method1 === "GET") {
        /*fetch(url1,{ 
            method: method1,
            headers: {
                "Content-type": "application/json",
            }
            } )
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))*/
        const rsp = await fetch(url1, {
            method : method1,
            headers : {
                'Content-type' : 'application/json'
            }
        })

        if(rsp.ok) {
            console.log("Busca com sucesso")
         } else {
            console.log("Busca com falha")
         }

         const data = await rsp.json()

         if (sD !== null) {
            sD(data)    
         } else {
            console.log("setData não está definido !!")  
         }

         if (sI !== null) {
            sI(data[0].src)    
         } else {
            console.log("setImg não está definido !!")  
         }

         if (sNP !== null) {
            const np = data[0].namePreço
            sNP(np);    
         } else {
            console.log("setNamePreço não está definido !!")  
         }

    } else if (method1 === "PUT" || method1 === "POST") {
        fetch(url1,{ 
    method: method1,
    headers: {
        "Content-type": "application/json",
    },
    body : JSON.stringify(content1)
    } )
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    } else if (method1 === "DELETE") {
        fetch(url1,{ 
    method: method1,
    headers: {
        "Content-type": "application/json",
    }
    } )
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
} 
}

export { Fetch }






