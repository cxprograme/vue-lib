/*
* @Author: cx
* @Date:   2018-08-24 21:41:39
* @Last Modified by:   cx
* @Last Modified time: 2018-08-24 22:16:05
*/
// 这个函数 网上  随处可见，我也是应用了别人的。
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
export function addDate(date,days){
	 var d=new Date(date); 
     d.setDate(d.getDate()+days); 
     return d;
};
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
