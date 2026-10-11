import expres from 'express';
import cors from 'cors';
import db from './mongoose/db.js';
import models from './mongoose/modelsDb.js';


const app = expres();

app.use(cors());
app.use(expres.json());

// 1. استدعاء وتفعيل دالة الاتصال بقاعدة البيانات هنا
db();

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post("frontand/Pages/add", async (req, res) => {
    try {
        console.log("البيانات المستلمة:", req.body);
        
        // حفظ المنتج في قاعدة البيانات
        const newItem = await models.create(req.body);
        
        // إرسال استجابة نجاح بصيغة JSON للفرونت إند
        res.status(200).json({
            success: true,
            message: "تم حفظ المنتج بنجاح في قاعدة البيانات!",
            data: newItem
        });
    } catch (err) {
        console.log("خطأ أثناء الحفظ:", err);
        res.status(500).json({
            success: false,
            message: "حدث خطأ في الخادم أثناء الحفظ"
        });
    }
});