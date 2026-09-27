export default function Model() {
    return(
        <>
        <div dir="ltr" style={{
            border:"2px solid blue",
            borderRadius:"10px",
            width:"15%",
            margin:"10px",
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
        
          
        }}>

            
             <img src={"data:image/webp;base64,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"}
            alt="err" width={"70%"}/>
            
              <h1>نظارات</h1>
              <h2 style={{
                color:"blue"
              }}> $100</h2>
            
            </div>


          
           
       
        
        </>
    );
}