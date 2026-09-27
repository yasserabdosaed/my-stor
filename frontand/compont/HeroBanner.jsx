"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../style/home.css";

// 1. تأكد أن مصفوفة البيانات موجودة هنا ومعبأة بشكل صحيح
const slides = [
  {
    id: 1,
    title: "أفضل المنتجات بأسعار مميزة",
    description: "تسوق الآن واستمتع بتجربة تسوق رائعة",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "عروض الحواسيب والأجهزة الذكية",
    description: "احصل على أحدث الأجهزة بأقوى الضمانات",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60",
  }
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // الانتقال التلقائي كل 4 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 2. تأكد أن هذا السطر موجود ويأخذ العنصر الحالي من المصفوفة
  const currentSlide = slides[currentIndex];

  // حماية إضافية: إذا لم تكن البيانات قد تحميلت بعد
  if (!currentSlide) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="hero-container" dir="rtl">
      {/* طبقة الخلفية */}
      <div 
        className="hero-bg-image" 
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      ></div>

      <div className="hero-overlay"></div>

      <button className="nav-arrow left-arrow" onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}>
        <ChevronLeft size={20} />
      </button>

      <div className="hero-content">
        <div className="hero-text">
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.description}</p>
          <button className="shop-btn">تسوق الآن</button>
        </div>

        <div className="hero-image">
          <img src={currentSlide.image} alt="Product" />
        </div>
      </div>

      <button className="nav-arrow right-arrow" onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}>
        <ChevronRight size={20} />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}