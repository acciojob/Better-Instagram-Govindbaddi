//your code here
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
                const drag=document.getElementById(droppedElement)
                //console.log(drag)
                const droppedElementurl=getComputedStyle(drag).backgroundImage
                //console.log(droppedElementurl)
                const targettedElement=e.target
                console.log(droppedElement,targettedElement)
                targettedElement.style.backgroundImage=droppedElementurl
                drag.style.backgroundImage=targettedElementurl
               
            })
        })