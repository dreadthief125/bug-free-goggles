AFRAME.registerComponent("camera-cursor",{
  schema: {
    selectedItemId:{default:"",type: "string"}
  },
  init:function(){
    
  },
  handlePlaces: function(){
    const id=this.el.getAttribute('id')
    const postersId=['superman', 'spiderman', 'captain-aero','outer-space']
    if (postersId.includes(id)){
      const posrerContainer = document.querySelector("#posters-container")
      posterContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      })
      this.el.setAttribute("material",{
        color:'#ab34cd',
        opacity:1
      })
    }
  },
  handleMouseEnter: function(){
    this.el.addEventListener("mouseenter", ()=>{
      this.handlePlaces()
    })
  },
  handleMouseLeave: function(){
    this.el.addEventListener("mouseleave",()=>){
      const {selectedItemId}=this.data
      if(selectedItemId){
        const el=document.querySelector(`#${selectedItemId}`)
        const id=el.getAttribute('id')
        if(id=selectedItemId){
          el.setAttribute('material',{
               color:"#007cfa"
               ,opacity:1
          })      
        }
      }
    }
  }
})