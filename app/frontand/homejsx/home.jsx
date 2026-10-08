'use client';
import HeroBannerA from "../compont/HeroBanner"
import ModelA from "../compont/model";
import "../style/home.css"
import React from "react";
import AppbarA from "../compont/appbar";
import Link from "next/link";

import { useState } from "react";
export default function Home() {

    const colorr = {color:"blue"}

    const [allgt,allst] = useState("الرئيسي")
  return (
    <div >
      {/*   هنا بدايه الصفحه  الاب بار */}  
<AppbarA/>
 {/* هنا نهايه الصفحه  الاب بار الاب بار */} 


{/* هذا  ازرار التنقل  */}
<div dir="rtl" style={{
    
    margin:"30px auto 0 auto",
    width:"50%",
    
}}>
     <ul style={{
        display:"flex",
        justifyContent:"space-around",
        cursor:"pointer",
     }}>

    
  <li style={allgt === "الرئيسي" ? colorr  : null           }>
            
الرئسية
        </li>
      
    
        <li>
              <Link style={allgt === "المنتجات" ? colorr  : null           } onClick={()=>{
allst("المنتجات")
      }} href="/frontand/Pages/montgat/">
        المنتجات
          
          </Link>  
        </li>
      
       
           <li style={allgt === "الاقسام" ? colorr  : null           }>
            الاقسام
        </li>
           <li style={allgt === "من نحن" ? colorr  : null           }>
            من نحن
        </li>
         
     </ul>
</div>

{/* هذي نهايه ازرار التنقل */}


{/* هذا صور المنتجات المتحركه  */}
<HeroBannerA/>
{/* هذي نهايه صور المنتجات المتحركه */}



<h1 dir="rtl" style={{
    marginRight:"100px",
    fontWeight:"bold"
}}>
    احدث المنتجات
</h1>

<div dir="rtl" style={{
    display:"flex",
    
}}>

<ModelA/>

</div>





    </div>
  );
}
