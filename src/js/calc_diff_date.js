//w3resource님의 JavaScript - Difference between two dates in days-date-ex- 8 펜(https://codepen.io/w3resource/pen/jKYQvM) > MIT

let today = new Date();   

let year = today.getFullYear(); // 년
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 일
let day = today.getDay();  // 요일

var date_diff_indays = function(date1, date2) {
dt1 = new Date(date1);
dt2 = new Date(date2);
return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}