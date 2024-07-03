import toast from "react-hot-toast"


        async function getAiText(props)
       {
           try
           {
               var result=await fetch("/api/prompt",
                   {
                       method:"POST",
                       headers:
                       {
                          "Content-Type": "application/json",
                       },
                       body:JSON.stringify(props)
                   }
               )
       
               result=await result.json();
               console.log("getai",result)
               if(result?.error)
               {
                 toast.error(result.error);
                 return null;
               }
               else
               {
                    return result
               }
           }
           catch(error)
           {
               console.log("Error in /frontend / hooks/ getAText.js /catch_block",error.message)
               toast.error(error.message);
               return null;
           }
       }
      
 

export default getAiText