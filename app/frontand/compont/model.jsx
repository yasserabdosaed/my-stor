'use client'
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// كارت عرض المنتج المفرد
function ProductCard({ item }) {
  const [getlove, setlove] = useState(false);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // البحث عن المنتج باستخدام معرف MongoDB وهو _id
    const existingProductIndex = existingCart.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingProductIndex > -1) {
      existingCart[existingProductIndex].quantity =
        (existingCart[existingProductIndex].quantity || 1) + 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("تم إضافة المنتج إلى السلة!");
  };

  return (
    <div
      dir="rtl"
      style={{
        border: "2px solid blue",
        borderRadius: "10px",
        width: "22%",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff"
      }}
    >
      <div 
        style={{ width: "100%", textAlign: "left", cursor: "pointer" }} 
        onClick={() => setlove(!getlove)}
      >
        <Heart fill={getlove ? "#ef4444" : "none"} color={getlove ? "#ef4444" : "#000000"} />
      </div>

      <img
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
        src={item.img}
        alt={item.name}
      />

      <h3>{item.name}</h3>
      <h2 style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        ${item.sub}
      </h2>
      <p style={{ fontSize: "14px", color: "#666" }}>القسم: {item.category}</p>

      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          padding: "10px",
          width: "100%",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "10px"
        }}
        onClick={handleAddToCart}
      >
        اضافه الى السله
      </button>
    </div>
  );
}

// المكون الرئيسي الذي يجلب البيانات من الباك إند
export default function Model() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب المنتجات من سيرفر Node.js (البورت 5000)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/frontand/Pages/get");
        const result = await response.json();

        // التحقق من أن الاستجابة ناجحة وتحتوي على مصفوفة بيانات
        if (result.success) {
          setProducts(result.data);
        }
      } catch (error) {
        console.log("خطأ في جلب المنتجات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>جاري تحميل المنتجات...</div>;
  }

  return (
    <div style={{ width: "100%", padding: "0 50px", textAlign: "center" }}>
      <h2>منتجاتنا المتوفرة</h2>
      
      {products.length === 0 ? (
        <p style={{ marginTop: "20px" }}>لا توجد منتجات مضافة في قاعدة البيانات حالياً.</p>
      ) : (
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}