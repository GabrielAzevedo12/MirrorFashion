const DheaderPr = {
    class: "Dheader",
    id: "Dheader",
    filhos: {
      f1: {
        class: "PesquisaD",
        id: "PesquisaD",
        filhos : {
          n1 : {
            class: "FormPesquisa",
            id: "FormPesquisa",
            filhos : {
              b1 : {
                class: "Pesquisa",
                id: "Pesquisa",
                name: "Pesquisa",
                type: "search",
                placeHolder: " Busque Produtos ",
                style: {display: "none"},
                filhos : {
                  
                  }
              }
            },
          }
        }
        },
      f2: {
        class: "",
        id: "",
        filhos: {
          n1 : {
              class: "header",
              id: "header",
              filhos: {
                b1: {
                      tag: "div",
                      class: "Lheader",
                      id: "Lheader",
                      filhos : {
                        t1 : {
                          tag: "img",
                          class: "Lheader",
                          id: "Lheader",
                          src: "./images/logo-rodape.png",
                        }
                      }
                },
                b2: {
                      class: "Listahd",
                      id: "Listahd",
                      filhos : {
                      t1 : {
                          tag: "ReactComponentJSX",
                          class: "Listah",
                          id: "Listah",
                        }
                      }
                },                
                b3: {
                      tag: "div",
                      class: "HiOutlineViewList",
                      id: "HiOutlineViewList",
                      filhos : {
                        t1 : {
                          tag: "ReactComponentJSX",
                          class: "HiOutlineViewList",
                          id: "HiOutlineViewList",
                        }
                      }
                },            
            }
          }
        }, 
      },
    }
  }

  export { DheaderPr }