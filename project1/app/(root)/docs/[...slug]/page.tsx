import React from 'react'

const Docs = async({params} : {
    params : {slug? : string[]}
}) => {

    const {slug} = await  params || [];
    if(slug?.length === 2){
        return (
            <h1>
                viewing docs for feature {slug[0] } and concept {slug[1]}.
            </h1>
        );
    } 
    
    if( slug?.length ===1){
        return (
            <h1>
                viewing docs for feature {slug[0]}.
            </h1>
        )
    }
    if(slug?.length === 0) {
         return (
    <div>Docs home page</div>
  )
    }

  return (
    <div>Docs home page</div>
  )
}

export default Docs