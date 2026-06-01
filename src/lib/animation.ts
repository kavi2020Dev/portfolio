// 1. Header Animation
export const headerContainerVariants:any = {
 hidden: { 
  opacity:0,
  y: -30
},
 visible : {
  opacity : 1,
   y: 0,
   transition: {
      duration: 0.4,
      ease: "easeOut",
    }  
 }       
}


// Parents
export const heroContainerVariants = {
 hidden : { opacity: 0},
 visible : {
  opacity : 1,
  transition : {
   staggerChildren: 0.3,
   delayChildren : 0.2  
  }   
 }    
}

export const heroImageContainerVariants:any = {
 hidden: { 
  opacity:0,
  x: -30
},
 visible : {
  opacity : 1,
   x: 0,
   transition: {
      duration: 0.6,
      ease: "easeOut",
    }  
 }       
}

// Children
export const heroItemVariants:any = {
 hidden : { opacity : 0, y:20},
 visible : {
  opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }  
 }    
}

