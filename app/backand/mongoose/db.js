import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
mongoose.set('strictQuery', false);

const db = async () => {
    try {
        // تم إضافة اسم القاعدة mystore قبل علامة الاستفهام
        const conn = await mongoose.connect("mongodb+srv://Yasser7375:FXjpABJecZyOy6xD@cluster0.rmipisc.mongodb.net/mystore?retryWrites=true&w=majority");
        console.log("yes - تم الاتصال بقاعدة البيانات بنجاح");
    } catch (err) {
        console.log("خطأ في الاتصال بقاعدة البيانات:", err);
    }
};

export default db;