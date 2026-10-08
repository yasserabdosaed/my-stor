'use client'
import { useEffect, useState } from "react";

export default function Almoshtrat() {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  // دالة تحديث حالة السلة والتخزين المحلي معاً
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // زيادة الكمية (+1)
  const handleIncrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(updated);
  };

  // إنقاص الكمية (-1) أو الحذف التلقائي إذا أصبحت الكمية 0
  const handleDecrease = (id) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          const newQty = (item.quantity || 1) - 1;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean); // إزالة العناصر الممسوحة (null)

    updateCart(updated);
  };

  // تفريغ السلة بالكامل
  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  // حساب المجموع الكلي لكافة المنتجات في السلة
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.sud) || 0;
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  return (
    <div dir="rtl" style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>سلة المشتريات</h1>

      {cartItems.length === 0 ? (
        <p style={{ marginTop: "20px" }}>لا توجد منتجات في السلة حالياً.</p>
      ) : (
        <div>
          <button
            onClick={handleClearCart}
            style={{
              marginBottom: "20px",
              padding: "8px 16px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            تفريغ السلة
          </button>

          {/* قائمة عرض المنتجات */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {cartItems.map((item, index) => {
              const qty = item.quantity || 1;
              const price = Number(item.sud) || 0;

              return (
                <div
                  // استخدام تركيب فريد يجمع بين الـ id والـ index لإنهاء مشكلة Duplicate Keys
                  key={`${item.id}-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                    <img
                      src={item.img}
                      alt={item.teble}
                      style={{ width: "60px", height: "60px", objectFit: "contain" }}
                    />
                    <div>
                      <h3 style={{ margin: "0 0 5px 0" }}>{item.teble}</h3>
                      <p style={{ margin: 0, color: "blue", fontWeight: "bold" }}>
                        ${price} للقطعة
                      </p>
                    </div>
                  </div>

                  {/* أزرار زيادة ونقصان العدد */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      style={{
                        padding: "5px 12px",
                        backgroundColor: "#f3f4f6",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      -
                    </button>

                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>{qty}</span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                      style={{
                        padding: "5px 12px",
                        backgroundColor: "#f3f4f6",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* مجموع سعر المنتج الحالي حسب كميته */}
                  <div style={{ fontWeight: "bold", minWidth: "80px", textAlign: "left" }}>
                    ${price * qty}
                  </div>
                </div>
              );
            })}
          </div>

          {/* شريط الإجمالي العام */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f8fafc",
              border: "2px dashed blue",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>المجموع الكلي:</h2>
            <h2 style={{ color: "blue", margin: 0 }}>${totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
}