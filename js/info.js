class info{

    constructor(name){
        this.name ="name -" + name
        this.atomicMass =""
        this.number = ""
        this.summary = ""
        //console.log(elementsData)
         for(var i=0;i<elementsData.length;i++){
           // yPos=yPos+ 15      
           // text(elementsData[i].name,30,yPos)
            
            if(name === elementsData[i].symbol){
                this.name = (elementsData[i].name)
               this.atomicMass = (elementsData[i].atomic_mass)
                this.number = (elementsData[i].number)
                this.summary = (elementsData[i].summary)
            
            }
           
 }
    }

}