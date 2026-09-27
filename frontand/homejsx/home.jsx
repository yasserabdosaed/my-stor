import { ShoppingCart, List } from "lucide-react";
import HeroBannerA from "../compont/HeroBanner"
import ModelA from "../compont/model";
import "../style/home.css"
import React from "react";
export default function Home() {
  return (
    <div dir="ltr">
      {/*   هنا بدايه الصفحه  الاب بار */}  
      <div className="appbar">
        <h3
          style={{
            display: "inline-block",
            marginLeft: "30px",
            color: "#2160c0",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          ياسر
        </h3>
        <input
        dir="rtl"
        placeholder="ابحث عن المنتج"
          style={{
            display: "inline-block",
            width:"40%",
            border: "2px solid #2160c0",
            borderRadius: "10px",
            
          }}
          
        />

        <div >
          <div
            style={{
              display: "inline-block",
            }}
          >
            {" "}
            <ShoppingCart color="#2160c0" />
          </div>

          <div
            style={{
              display: "inline-block",
              marginLeft: "20px",
              marginRight:"10px"
            }}
          >
            <List color="#2160c0" />
          </div>
        </div>
      </div>
 {/* هنا نهايه الصفحه  الاب بار الاب بار */} 


{/* هذا  ازرار التنقل  */}
<div dir="rtl" style={{
    
    margin:"30px auto 0 auto",
    width:"50%",
    
}}>
     <ul style={{
        display:"flex",
        justifyContent:"space-around"
     }}>
        <li style={{
            color:"blue"
        }}>
الرئسية
        </li>
            <li>
            المنتجات
        </li>
            <li>
            الاقسام
        </li>
            <li>
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

<div style={{
    display:"flex"
}}>

<ModelA/>
<ModelA/>
<ModelA/>
<ModelA/>
</div>





    </div>
  );
}
