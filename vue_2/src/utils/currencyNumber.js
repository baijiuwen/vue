const MoneyTest = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;

// 金额添加千分位
export function comdify(n) {
  if (!n) return n;
  let str = n.split('.');
  let re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = str[0].replace(re, "$&,");
  return str.length > 1 && str[1] ? `${n1}.${str[1]}` : `${n1}.00`;
};
//去除千分位中的‘，’
export function delcommafy(num) {
  if (!num) return num;
  num = num.toString();
  num = num.replace(/,/gi, '');
  return num;
};
export function valdateFn(rule, val, cb) {
  setTimeout(() => {
    if (val) {
      let inputVal = delcommafy(val);
      if (rule.test(inputVal)) {
        cb()
      } else {
        cb('只能是数字金额,最多两位小数')
      }
    }
    cb()
  })
}
// 验证金额数字可以为负数
export function moneyValid(rule, val, cb) {
  valdateFn(/((^-?[1-9]\d*)|^-?0)(\.\d{0,2}){0,1}$/, val, cb);
};
// 验证金额数字不可以为负数
export function moneyNValid(rule, val, cb) {
  valdateFn(MoneyTest, val, cb);
};

// 获取输入框的值
export function getInputValue(el) {
  let inputVal = el.target.value || '';
  return comdify(delcommafy(inputVal));
};
