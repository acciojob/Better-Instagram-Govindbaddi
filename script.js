 const wholeimages=document.querySelectorAll(".image")
        //console.log(wholeimages)
        wholeimages.forEach((item)=>{
            //dragstart event adding
            //console.log(item)
            item.addEventListener("dragstart",(e)=>{
               const drageddElement=getComputedStyle(item).backgroundImage
               e.dataTransfer.setData("text",item.id)
             //  e.dataTransfer.setData("text",drageddElement)

               
                //console.log("drag started",e,e.target,item,drageddElement)
            })
            item.addEventListener("dragover",(e)=>{
                e.preventDefault()
               
            })
            item.addEventListener("drop",(e)=>{
                e.preventDefault()
                const targettedElementurl=getComputedStyle(e.target).backgroundImage
               // console.log(targettedElementurl)
              
                const droppedElement=e.dataTransfer.getData("text")
                //draggin element---
                const drag=document.getElementById(droppedElement)
                const draggingtext=drag.innerText
                const droppedElementurl=getComputedStyle(drag).backgroundImage
                //console.log(droppedElementurl)
                const targettedElement=e.target
                 const targettext=targettedElement.innerText
                console.log(droppedElement,targettedElement)
                targettedElement.style.backgroundImage=droppedElementurl
                drag.style.backgroundImage=targettedElementurl
                targettedElement.innerText=draggingtext
                drag.innerText=targettext
               
            })
        })