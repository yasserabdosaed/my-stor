import "../add/gl.css"

export default function AddPage() {
    return(
        < >
        <div   style={{
            width:"100%",
            textAlign:"center",
            marginTop:"30px",
            fontSize:"20px",
            fontWeight:"bold",
        }}> <h1 dir="rtl">اضافه منتج</h1></div>
       
        <div className="main" dir="rtl" style={{
            border:"2px solid blue",
            margin:"40px auto",
            textAlign:"center",

            width:"60%",
            height:"auto",
        }}>
        ,<form>
<label style={{

}} className="la">اسم المنتج</label>
<br/>

<input  type="text" placeholder="اسم المنتج" />
<br/>

<label className="la">سعر المنتج</label>
<br/>

<input type="text" placeholder="Enter your email" />
<br/>
<label className="la">اضف صوره المنتج</label>
<br/>

<input type="text" placeholder="Enter your password" />
<br/>
<br/>

<select name="category" id="category">
  <option value="computers">الحواسيب والأجهزة الذكية</option>
  <option value="perfumes">العطور</option>
  <option value="watches">الساعات</option>
</select>
<br/>
<br/>

<button>اضاقه منتج</button>
</form> 
        </div>
        </>
    );
}