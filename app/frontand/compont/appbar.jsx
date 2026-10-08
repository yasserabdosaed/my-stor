import { ShoppingCart, Plus } from "lucide-react";
import Link from "next/link";
export default function Appbar() {
  return (
    <div style={{
      width: "100vw",          /* عرض الشاشة بالكامل */
      marginLeft: "calc(-50vw + 50%)", /* خدعة برمجية لإلغاء أي حواضن أب تفرض توسيطاً */
      marginRight: "calc(-50vw + 50%)",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      padding: "12px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxSizing: "border-box",
    }}>
      <h3 style={{ color: "#2160c0", fontSize: "20px", fontWeight: "bold", margin: 0 }}>
        ياسر
      </h3>

      <input
        dir="rtl"
        placeholder="ابحث عن المنتج"
        style={{
          width: "40%",
          padding: "8px 15px",
          border: "2px solid #2160c0",
          borderRadius: "10px",
          outline: "none",
        }}
      />

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
       
     <Link href={"/frontand/Pages/almoshtrat"}> <ShoppingCart color="#2160c0" style={{ cursor: "pointer" }} /></Link>  
        <Link href={"/frontand/Pages/add"}> <Plus color="#2160c0" style={{ cursor: "pointer" }} /></Link>
       
      </div>
    </div>
  );
}