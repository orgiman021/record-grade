//دریافت اطلاعات دانش آموز 
var name = prompt("نام دانش آموز خود را وارد کنید");
var theoreticalGrade = prompt("نمره نظری دانش آموز خود را وارد کنید");
var practicalGrade = prompt("نمره عملی دانش آموز خود را وارد کنید");
//شرط برای نمره دهی درست
if (
  theoreticalGrade > 20 ||
  practicalGrade > 20 ||
  theoreticalGrade < 0 ||
  practicalGrade < 0
) {
  alert("نمره وارد شده نامعتبر است");
} //شرط قبولی
else if (theoreticalGrade >= 10 && practicalGrade >= 12) {
  alert("دانش آموز " + name + " نمره قبولی را کسب کرد و تمام ✅");
} 
// در غیر بر قرار نبودن شرط
else {
  alert("دانش آموز " + name + " نمره قبولی را کسب نکرد و تمام❌");
}
