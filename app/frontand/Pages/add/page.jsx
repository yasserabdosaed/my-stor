'use client'

import "../add/gl.css"
import { useState } from "react";

export default function AddPage() {
    // 1. تعريف حالة الحقول
    const [allget, allset] = useState({
        name: "",
        sub: "",
        img: "",
        category: "computers", // قيمة افتراضية أولى
      
    });
    const [btgt,btset] = useState(false);

    // 2. دالة إرسال البيانات للباك إند (تم جعلها داخل المكون وتصحيح fetch)
    const handleSend = async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة تلقائياً

        try {
            const response = await fetch("http://localhost:5000/frontand/Pages/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(allget)
            });
            
            const data = await response.json();
            console.log("رد السيرفر:", data);

            // تحديث حالة الزر عند النجاح
            btset(true);

            // alert("تم إضافة المنتج بنجاح!");

        } catch (err) {
            console.log("خطأ في الاتصال:", err);
            // alert("فشل الاتصال بالسيرفر، تأكد أنه يعمل!");
        }
  
    };

    // 3. واجهة الصفحة (JSX)
    return (
        <>
            <div style={{
                width: "100%",
                textAlign: "center",
                marginTop: "30px",
                fontSize: "20px",
                fontWeight: "bold",
            }}> 
                <h1 dir="rtl">اضافه منتج</h1>
            </div>
           
            <div className="main" dir="rtl" style={{
                border: "2px solid blue",
                margin: "40px auto",
                textAlign: "center",
                width: "60%",
                height: "auto",
                padding: "20px",
                borderRadius: "8px"
            }}>
                <form onSubmit={handleSend}>
                    <label className="la">اسم المنتج</label>
                    <br/>
                    <input 
                        onChange={(e) => allset({...allget, name: e.target.value})} 
                        name="name"  
                        type="text" 
                        value={allget.name}
                        placeholder="اسم المنتج" 
                    />
                    <br/><br/>

                    <label className="la">سعر المنتج</label>
                    <br/>
                    <input 
                        onChange={(e) => allset({...allget, sub: e.target.value})} 
                        name="sub" 
                        type="number" 
                        value={allget.sub}
                        placeholder="سعر المنتج" 
                    />
                    <br/><br/>

                    <label className="la">رابط صوره المنتج</label>
                    <br/>
                    <input 
                        onChange={(e) => allset({...allget, img: e.target.value})} 
                        name="img" 
                        type="text" 
                        value={allget.img}
                        placeholder="رابط الصورة" 
                    />
                    <br/><br/>

                    <label className="la">قسم المنتج</label>
                    <br/>
                    <select 
                        onChange={(e) => allset({...allget, category: e.target.value})} 
                        name="category" 
                        value={allget.category}
                        id="category"
                    >
                        <option value="computers">الحواسيب والأجهزة الذكية</option>
                        <option value="perfumes">العطور</option>
                        <option value="watches">الساعات</option>
                    </select>
                    <br/><br/>

                    <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                        اضافه منتج
                    </button>
                </form> 
            </div>
        </>
    );
}