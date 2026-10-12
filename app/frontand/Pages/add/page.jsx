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
    
    const [loading, setLoading] = useState(false);
    
    // حالة جديدة لتخزين رسالة التنبيه الاحترافية (النص والنوع: success أو error)
    const [statusMessage, setStatusMessage] = useState(null);

    // 2. دالة إرسال البيانات للباك إند
    const handleSend = async (e) => {
        e.preventDefault(); 
        setLoading(true); 
        setStatusMessage(null); // إخفاء أي رسالة قديمة قبل البدء

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

            if (response.ok) {
                // إظهار رسالة النجاح الاحترافية
                setStatusMessage({
                    type: "success",
                    text: "✨ تم إضافة المنتج بنجاح إلى قاعدة البيانات!"
                });

                // تفريغ الحقول بعد الإضافة الناجحة
                allset({
                    name: "",
                    sub: "",
                    img: "",
                    category: "computers",
                });
            } else {
                // إظهار رسالة الفشل
                setStatusMessage({
                    type: "error",
                    text: "❌ فشل في إضافة المنتج، يرجى المحاولة لاحقاً."
                });
            }

        } catch (err) {
            console.log("خطأ في الاتصال:", err);
            setStatusMessage({
                type: "error",
                text: "⚠️ فشل الاتصال بالسيرفر، تأكد أنه يعمل!"
            });
        } finally {
            setLoading(false); 
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
                
                {/* عرض رسالة التنبيه الاحترافية إذا كانت موجودة */}
                {statusMessage && (
                    <div style={{
                        padding: "12px",
                        marginBottom: "20px",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        backgroundColor: statusMessage.type === "success" ? "#d1e7dd" : "#f8d7da",
                        color: statusMessage.type === "success" ? "#0f5132" : "#842029",
                        border: `1px solid ${statusMessage.type === "success" ? "#badbcc" : "#f5c2c7"}`
                    }}>
                        {statusMessage.text}
                    </div>
                )}

                <form onSubmit={handleSend}>
                    <label className="la">اسم المنتج</label>
                    <br/>
                    <input 
                        onChange={(e) => allset({...allget, name: e.target.value})} 
                        name="name"  
                        type="text" 
                        value={allget.name}
                        placeholder="اسم المنتج" 
                        required
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
                        required
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
                        required
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

                    <button 
                        type="submit" 
                        disabled={loading} 
                        style={{ 
                            padding: "10px 20px", 
                            cursor: loading ? "not-allowed" : "pointer",
                            backgroundColor: loading ? "#ccc" : "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "5px"
                        }}
                    >
                        {loading ? "جاري الإضافة..." : "اضافه منتج"}
                    </button>
                </form> 
            </div>
        </>
    );
}