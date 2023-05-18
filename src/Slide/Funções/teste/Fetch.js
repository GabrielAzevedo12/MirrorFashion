var Fetch = async (url,method,content,setData,setImg)  => {
    let [url1,method1,content1,sD,sI] = [url,method,content,setData,setImg];
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


/*let teste = () => {
    let [url,method,content,setData] = ["http://localhost:5000/Produtos/P1","PUT",  {
        src: "./images/Produtos/P1.jpg",
        class: "P1",
        style: "null",
      },null]; 
    Fetch(url,method,content,null,null)
}
teste() */

export {Fetch}



