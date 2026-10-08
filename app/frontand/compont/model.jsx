'use client'
import { Heart } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function ProductCard({ item }) {
  const [getlove, setlove] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

  // البحث عما إذا كان المنتج موجوداً مسبقاً عبر id
  const existingProductIndex = existingCart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingProductIndex > -1) {
    // إذا كان موجوداً، نزيد الكمية فقط
    existingCart[existingProductIndex].quantity =
      (existingCart[existingProductIndex].quantity || 1) + 1;
  } else {
    // إذا كان جديداً، نلصق به خاصية quantity = 1
    existingCart.push({ ...item, quantity: 1 });
  }

  // حفظ التعديلات والانتقال للسلة
  localStorage.setItem("cart", JSON.stringify(existingCart));

};

  return (
    <div
      dir="rtl"
      style={{
        border: "2px solid blue",
        borderRadius: "10px",
        width: "18%",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div 
        style={{ width: "100%", marginRight: "5px", cursor: "pointer" }} 
        onClick={() => setlove(!getlove)}
      >
        <Heart fill={getlove ? "#ef4444" : "none"} color={getlove ? "#ef4444" : "#000000"} />
      </div>

      <img
        style={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
        src={item.img}
        alt={item.teble}
      />

      <h1>{item.teble}</h1>
      <h2 style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        ${item.sud}
      </h2>

      <button
        style={{
          backgroundColor: "blue",
          borderRadius: "10px",
          padding: "10px",
          width: "100%",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={handleAddToCart}
      >
        {item.bt}
      </button>
    </div>
  );
}

export default function Model() {
  const model = [
    {
      id: 1,
      teble: "قطرات",
      sud: 100,
      bt: "اضافه الى السله",
      img: "https://tse2.mm.bing.net/th/id/OIP.ZVem7KyhdpxJ4HuHhj_GnwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      teble: "عطر ناو",
      sud: 20,
      bt: "اضافه الى السله",
      img: "https://tse2.mm.bing.net/th/id/OIP.4aiMS_aBTW193n-UoWnLDQAAAA?r=0&pid=ImgDet&w=178&h=283&c=7&dpr=1%D9%AB5&o=7&rm=3",
    },
    {
      id: 3,
      teble: "ساعه رولكس",
      sud: 30,
      bt: "اضافه الى السله",
      img: "https://th.bing.com/th/id/OIP.9WeFkfCc3LQez4cnAS1LyQHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    },
  ];

  return (
    <div style={{ width: "100%", padding: "0 100px", display: "flex" }}>
      <div style={{ width: "100%", display: "flex" }}>
        {model.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}