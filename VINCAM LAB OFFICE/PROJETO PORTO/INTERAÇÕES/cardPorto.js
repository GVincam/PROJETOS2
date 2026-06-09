 function ampliar(){
            
            document.body.style.overflow = "hidden"

            let caixaNova = document.createElement("section") 
            caixaNova.classList.add("painelFechado")
            // caixaNova.style.width= "1600px"
            // caixaNova.style.height= "770px"
            // caixaNova.style.position= "fixed"
            // caixaNova.style.top= "50%"
            // caixaNova.style.left= "50%"
            // caixaNova.style.transform = "translate(-50%, -50%)"
            // caixaNova.style.backgroundColor = "rgba(0, 84, 252, 0.4)"
            // caixaNova.style.backdropFilter = "blur(7px)"

            document.body.appendChild(caixaNova)

            setTimeout(() =>{
                caixaNova.classList.add("painelLigado")
            }, 10)



            let text1 = document.createElement("h2")
            text1.textContent = "ILHA DO PINGO"
            text1.classList.add("titleIntro")
            // text1.style.fontSize = "40px"
            // text1.style.textAlign = "center"
            // text1.style.position = "relative"
            // text1.style.top = "40px"
            // text1.style.fontFamily = "Concert One"
            // text1.style.fontFamily = "sans-serif"
            // text1.style.color = "rgb(255, 220, 0)"

            caixaNova.appendChild(text1)




            let botao = document.createElement("button")
            botao.classList.add("btnBack")
            // botao.style.position = "relative"
            // botao.style.left = "35px"
            // botao.style.top = "10px"
            // botao.style.width = "140px"
            // botao.style.cursor = "pointer"
            // botao.style.borderRadius = "10px"


            botao.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

                document.body.style.overflow = "auto"

            })

            caixaNova.appendChild(botao)


            
            let backArrow = document.createElement("i")
            backArrow.classList.add("fa-solid")
            backArrow.classList.add("fa-arrow-left")
            // backArrow.style.position="relative"
            // backArrow.style.left="-45px"
            // backArrow.style.top="13px"
            // backArrow.style.fontSize="25px"
            // backArrow.style.cursor = "pointer"
            // backArrow.style.color = "white"
            
            backArrow.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

            })

            botao.appendChild(backArrow)



            let voltar = document.createElement("h3")
            voltar.textContent = "VOLTAR"
            voltar.classList.add("voltar")
            // voltar.style.position = "relative"
            // voltar.style.bottom = "10px"
            // voltar.style.left = "20px"
            // voltar.style.fontSize = "20px"
            // voltar.style.cursor = "pointer"
            // voltar.style.color = "white"

            voltar.addEventListener("click", function(){
                caixaNova.classList.remove("painelLigado")

                setTimeout(() => {
                    caixaNova.remove()
                }, 500)


            })

            botao.appendChild(voltar)



            let guardImg = document.createElement("div")
            guardImg.classList.add("guardImg")
            // guardImg.style.width="900px"
            // guardImg.style.height="500px"
            // guardImg.style.position = "relative"
            // guardImg.style.top = "50px"
            // guardImg.style.left = "20px"

            caixaNova.appendChild(guardImg)

            

            let description = document.createElement("div")
            description.classList.add("description")
            // description.style.width = "500px"
            // description.style.height = "500px"
            // description.style.position = "relative"
            // description.style.left = "970px"
            // description.style.bottom = "450px"
            // description.style.alignContent = "center"
            // description.style.justifyContent = "center"

            caixaNova.appendChild(description)



            let text2 = document.createElement("h1")
            text2.classList.add("descriptionIntro")
            
            text2.textContent = 'A Ilha do Pingo é uma das ilhas fluviais que compõem a paisagem do Rio Paraná, próxima à região de Porto Rico e Porto Maringá. Conhecida por suas águas tranquilas e cenários naturais preservados, tornou-se um ponto procurado por turistas, pescadores e amantes da navegação. Sua formação está ligada ao próprio processo natural do rio, que ao longo dos anos moldou bancos de areia e áreas de vegetação. Quanto ao nome "Pingo", não existe um registro histórico oficial amplamente reconhecido, sendo sua origem atribuída principalmente à tradição popular dos moradores e frequentadores da região. Atualmente, a ilha é considerada um dos refúgios naturais mais conhecidos do noroeste paranaense.'
            
            // text2.style.fontSize = "21px"
            // text2.style.textAlign = "center"
            // text2.style.color = "white"
            // text2.style.fontFamily = "Nunito"
            // text2.style.fontFamily = "sans-serif"

            description.appendChild(text2)

            

            let imageGrande = document.createElement("img")
            imageGrande.classList.add("imageGrande")
            imageGrande.src = "images/ILHA.jpg"
            imageGrande.alt = "ilhaPorto"
            // imageGrande.style.borderRadius = "10px"
            // imageGrande.style.border = "solid 1px yellow"

            guardImg.appendChild(imageGrande)
            
        };



        function ampliar1(){

            document.body.style.overflow = "hidden"

            let caixaNova = document.createElement("section") 
            caixaNova.classList.add("painelFechado")
            // caixaNova.style.width= "1600px"
            // caixaNova.style.height= "770px"
            // caixaNova.style.position= "fixed"
            // caixaNova.style.top= "50%"
            // caixaNova.style.left= "50%"
            // caixaNova.style.transform = "translate(-50%, -50%)"
            // caixaNova.style.backgroundColor = "rgba(0, 84, 252, 0.4)"
            // caixaNova.style.backdropFilter = "blur(7px)"

            document.body.appendChild(caixaNova)

            setTimeout(() =>{
                caixaNova.classList.add("painelLigado")
            }, 10)



            let text1 = document.createElement("h2")
            text1.textContent = "NÁUTICA PORTO MARINGÁ"
            text1.classList.add("titleIntro")
            // text1.style.fontSize = "40px"
            // text1.style.textAlign = "center"
            // text1.style.position = "relative"
            // text1.style.top = "40px"
            // text1.style.fontFamily = "Concert One"
            // text1.style.fontFamily = "sans-serif"
            // text1.style.color = "rgb(255, 220, 0)"

            caixaNova.appendChild(text1)




           let botao = document.createElement("button")
            botao.classList.add("btnBack")
            // botao.style.position = "relative"
            // botao.style.left = "35px"
            // botao.style.top = "10px"
            // botao.style.width = "140px"
            // botao.style.cursor = "pointer"
            // botao.style.borderRadius = "10px"


            botao.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

                document.body.style.overflow = "auto"

            })

            caixaNova.appendChild(botao)


            
            let backArrow = document.createElement("i")
            backArrow.classList.add("fa-solid")
            backArrow.classList.add("fa-arrow-left")
            // backArrow.style.position="relative"
            // backArrow.style.left="-45px"
            // backArrow.style.top="13px"
            // backArrow.style.fontSize="25px"
            // backArrow.style.cursor = "pointer"
            // backArrow.style.color = "white"
            
            backArrow.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

            })

            botao.appendChild(backArrow)



            let voltar = document.createElement("h3")
            voltar.textContent = "VOLTAR"
            voltar.classList.add("voltar")
            // voltar.style.position = "relative"
            // voltar.style.bottom = "10px"
            // voltar.style.left = "20px"
            // voltar.style.fontSize = "20px"
            // voltar.style.cursor = "pointer"
            // voltar.style.color = "white"

            voltar.addEventListener("click", function(){
                caixaNova.classList.remove("painelLigado")

                setTimeout(() => {
                    caixaNova.remove()
                }, 500)


            })

            botao.appendChild(voltar)



            let guardImg = document.createElement("div")
            guardImg.classList.add("guardImg")
            // guardImg.style.width="900px"
            // guardImg.style.height="500px"
            // guardImg.style.position = "relative"
            // guardImg.style.top = "50px"
            // guardImg.style.left = "20px"

            caixaNova.appendChild(guardImg)

            

            let description = document.createElement("div")
            description.classList.add("description")
            // description.style.width = "500px"
            // description.style.height = "500px"
            // description.style.position = "relative"
            // description.style.left = "970px"
            // description.style.bottom = "450px"
            // description.style.alignContent = "center"
            // description.style.justifyContent = "center"

            caixaNova.appendChild(description)



            let text2 = document.createElement("h1")
            text2.classList.add("descriptionIntro")
            
            
            text2.textContent = 'O turismo náutico é uma das principais atrações de Porto Maringá, atraindo visitantes de diversas regiões em busca de lazer e aventura sobre as águas do Rio Paraná. A ampla extensão navegável do rio oferece condições ideais para passeios de lancha, jet ski e embarcações de recreio. A infraestrutura local conta com rampas de acesso, marinas e áreas de apoio para navegadores. Além da prática esportiva, os turistas podem explorar ilhas, bancos de areia e cenários naturais únicos da região. O contato direto com a natureza e a tranquilidade das águas tornam a experiência ainda mais especial. Atualmente, o turismo náutico é um dos grandes responsáveis pelo desenvolvimento turístico e econômico de Porto Maringá.'
            
            // text2.style.fontSize = "21px"
            // text2.style.textAlign = "center"
            // text2.style.color = "white"
            // text2.style.fontFamily = "Nunito"
            // text2.style.fontFamily = "sans-serif"

            description.appendChild(text2)

            

            let imageGrande = document.createElement("img")
            imageGrande.classList.add("imageGrande")
            imageGrande.src = "images/NÁUTICA.jpg"
            imageGrande.alt = "nautica"
            // imageGrande.style.borderRadius = "10px"

            
            guardImg.appendChild(imageGrande)
            
        }



        function ampliar2(){

           document.body.style.overflow = "hidden"

            let caixaNova = document.createElement("section") 
            caixaNova.classList.add("painelFechado")
            // caixaNova.style.width= "1600px"
            // caixaNova.style.height= "770px"
            // caixaNova.style.position= "fixed"
            // caixaNova.style.top= "50%"
            // caixaNova.style.left= "50%"
            // caixaNova.style.transform = "translate(-50%, -50%)"
            // caixaNova.style.backgroundColor = "rgba(0, 84, 252, 0.4)"
            // caixaNova.style.backdropFilter = "blur(7px)"

            document.body.appendChild(caixaNova)

            setTimeout(() =>{
                caixaNova.classList.add("painelLigado")
            }, 10)



            let text1 = document.createElement("h2")
            text1.classList.add("titleIntro")
            // text1.style.fontSize = "40px"
            // text1.textContent = "PRAINHAS PORTO MARINGÁ"
            // text1.style.textAlign = "center"
            // text1.style.position = "relative"
            // text1.style.top = "40px"
            // text1.style.fontFamily = "Concert One"
            // text1.style.fontFamily = "sans-serif"
            // text1.style.color = "rgb(255, 220, 0)"

            caixaNova.appendChild(text1)




           let botao = document.createElement("button")
            botao.classList.add("btnBack")
            // botao.style.position = "relative"
            // botao.style.left = "35px"
            // botao.style.top = "10px"
            // botao.style.width = "140px"
            // botao.style.cursor = "pointer"
            // botao.style.borderRadius = "10px"


            botao.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

                document.body.style.overflow = "auto"

            })

            caixaNova.appendChild(botao)


            
            let backArrow = document.createElement("i")
            backArrow.classList.add("fa-solid")
            backArrow.classList.add("fa-arrow-left")
            // backArrow.style.position="relative"
            // backArrow.style.left="-45px"
            // backArrow.style.top="13px"
            // backArrow.style.fontSize="25px"
            // backArrow.style.cursor = "pointer"
            // backArrow.style.color = "white"
            
            backArrow.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

            })

            botao.appendChild(backArrow)



            let voltar = document.createElement("h3")
            voltar.textContent = "VOLTAR"
            voltar.classList.add("voltar")
            // voltar.style.position = "relative"
            // voltar.style.bottom = "10px"
            // voltar.style.left = "20px"
            // voltar.style.fontSize = "20px"
            // voltar.style.cursor = "pointer"
            // voltar.style.color = "white"

            voltar.addEventListener("click", function(){
                caixaNova.classList.remove("painelLigado")

                setTimeout(() => {
                    caixaNova.remove()
                }, 500)


            })

            botao.appendChild(voltar)



            let guardImg = document.createElement("div")
            guardImg.classList.add("guardImg")
            // guardImg.style.width="900px"
            // guardImg.style.height="500px"
            // guardImg.style.position = "relative"
            // guardImg.style.top = "50px"
            // guardImg.style.left = "20px"

            caixaNova.appendChild(guardImg)

            

            let description = document.createElement("div")
            description.classList.add("guardImg")
            // description.style.width = "500px"
            // description.style.height = "500px"
            // description.style.position = "relative"
            // description.style.left = "970px"
            // description.style.bottom = "450px"
            // description.style.alignContent = "center"
            // description.style.justifyContent = "center"

            caixaNova.appendChild(description)



            let text2 = document.createElement("h1")
            text2.classList.add("descriptionIntro")
            
            text2.textContent = 'As prainhas de Porto Maringá estão entre os atrativos naturais mais procurados da região, especialmente durante os períodos de calor e de baixa do Rio Paraná. Formadas por extensos bancos de areia clara, elas criam cenários semelhantes a praias litorâneas em pleno interior do Paraná. Suas águas calmas e limpas oferecem um ambiente ideal para banho, lazer em família e passeios de barco. Durante a temporada, turistas e moradores aproveitam o local para relaxar, praticar esportes aquáticos e contemplar a paisagem natural. Além da beleza cênica, as prainhas se destacam pelo contato direto com a natureza e pela atmosfera tranquila que caracteriza Porto Maringá. Atualmente, elas representam um dos principais cartões-postais e símbolos turísticos da região.'
            
            // text2.style.fontSize = "21px"
            // text2.style.textAlign = "center"
            // text2.style.color = "white"
            // text2.style.fontFamily = "Nunito"
            // text2.style.fontFamily = "sans-serif"

            description.appendChild(text2)

            

            let imageGrande = document.createElement("img")
            imageGrande.classList.add("imageGrande")
            imageGrande.src = "images/PRAIA.jpg"
            imageGrande.alt = "praiaPorto"
            // imageGrande.style.borderRadius = "10px"

            
            guardImg.appendChild(imageGrande)
            
        }



        function ampliar3(){

            document.body.style.overflow = "hidden"

            let caixaNova = document.createElement("section") 
            caixaNova.classList.add("painelFechado")
            caixaNova.style.width= "1600px"
            caixaNova.style.height= "770px"
            caixaNova.style.position= "fixed"
            caixaNova.style.top= "50%"
            caixaNova.style.left= "50%"
            caixaNova.style.transform = "translate(-50%, -50%)"
            caixaNova.style.backgroundColor = "rgba(0, 84, 252, 0.4)"
            caixaNova.style.backdropFilter = "blur(7px)"

            document.body.appendChild(caixaNova)

            setTimeout(() =>{
                caixaNova.classList.add("painelLigado")
            }, 10)



            let text1 = document.createElement("h2")
            text1.style.fontSize = "40px"
            text1.textContent = "QUIOSQUE PORTO MARINGÁ"
            text1.classList.add("titleIntro")
            text1.style.textAlign = "center"
            text1.style.position = "relative"
            text1.style.top = "40px"
            text1.style.fontFamily = "Concert One"
            text1.style.fontFamily = "sans-serif"
            text1.style.color = "rgb(255, 220, 0)"

            caixaNova.appendChild(text1)




          let botao = document.createElement("button")
            botao.classList.add("btnBack")
            botao.style.position = "relative"
            botao.style.left = "35px"
            botao.style.top = "10px"
            botao.style.width = "140px"
            botao.style.cursor = "pointer"
            botao.style.borderRadius = "10px"


            botao.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

                document.body.style.overflow = "auto"

            })

            caixaNova.appendChild(botao)


            
            let backArrow = document.createElement("i")
            backArrow.classList.add("fa-solid")
            backArrow.classList.add("fa-arrow-left")
            backArrow.style.position="relative"
            backArrow.style.left="-45px"
            backArrow.style.top="13px"
            backArrow.style.fontSize="25px"
            backArrow.style.cursor = "pointer"
            backArrow.style.color = "white"
            
            backArrow.addEventListener("click", function(){

                caixaNova.classList.remove("painelLigado")
                
                setTimeout(() =>{
                    caixaNova.remove()
                }, 500)

            })

            botao.appendChild(backArrow)



            let voltar = document.createElement("h3")
            voltar.textContent = "VOLTAR"
            voltar.classList.add("voltar")
            voltar.style.position = "relative"
            voltar.style.bottom = "10px"
            voltar.style.left = "20px"
            voltar.style.fontSize = "20px"
            voltar.style.cursor = "pointer"
            voltar.style.color = "white"

            voltar.addEventListener("click", function(){
                caixaNova.classList.remove("painelLigado")

                setTimeout(() => {
                    caixaNova.remove()
                }, 500)


            })

            botao.appendChild(voltar)



            let guardImg = document.createElement("div")
            guardImg.style.width="900px"
            guardImg.style.height="500px"
            guardImg.style.position = "relative"
            guardImg.style.top = "50px"
            guardImg.style.left = "20px"

            caixaNova.appendChild(guardImg)

            

            let description = document.createElement("div")
            description.style.width = "500px"
            description.style.height = "500px"
            description.style.position = "relative"
            description.style.left = "970px"
            description.style.bottom = "450px"
            description.style.alignContent = "center"
            description.style.justifyContent = "center"

            caixaNova.appendChild(description)



            let text2 = document.createElement("h1")
            text2.style.fontSize = "21px"

            text2.textContent = 'Os quiosques de Porto Maringá complementam a experiência turística da região, oferecendo conforto e praticidade aos visitantes que frequentam as margens do Rio Paraná. Localizados próximos às áreas de lazer e às prainhas, esses espaços servem como ponto de encontro para famílias, amigos e turistas durante todo o ano. Além de proporcionarem sombra e descanso, os quiosques são frequentemente utilizados para confraternizações, refeições e momentos de contemplação da paisagem natural. Sua presença contribui para a infraestrutura turística do porto, tornando a permanência dos visitantes mais agradável e organizada. Com vista privilegiada para o rio e para os belos pôres do sol da região, os quiosques se tornaram parte importante da identidade turística de Porto Maringá.'

            text2.classList.add("descriptionIntro")
            text2.style.textAlign = "center"
            text2.style.color = "white"
            text2.style.fontFamily = "Nunito"
            text2.style.fontFamily = "sans-serif"

            description.appendChild(text2)

            

            let imageGrande = document.createElement("img")
            imageGrande.src = "images/QUIOSQUE.JPG"
            imageGrande.alt = "quiosquePorto"
            imageGrande.style.borderRadius = "10px"

            
            guardImg.appendChild(imageGrande)
            
        }