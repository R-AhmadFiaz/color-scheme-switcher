
      const buttons = document.querySelectorAll(".button")
      const body = document.querySelector("body")   
      
      buttons.forEach((button)=>{
        button.addEventListener("click",function (e){
            
            const color = e.target.id  // to track the id of individual 'e' and store to new variable
            body.style.backgroundColor = color

        })
        

      })
         
