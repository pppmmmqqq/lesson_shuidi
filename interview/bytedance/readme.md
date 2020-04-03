- position: 
    absolute：父级第一个 非 static 定位的元素，如果找 视窗
    relative：相对自己
    fixed:  视窗
    static:  默认，不加 position 默认就是 static
    stick:  粘性
- 基本数据类型（原始）
  复杂数据类型（对象)
- '==' '===' 区别
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/   Equality_comparisons_and_sameness

- ## this
es5 普通函数

- 默认指向全局 window
- 对象.foo 谁调用foo指向哪里
- call/apply/bind 第一个参数
- new 


## bind
```js
function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
// cat 
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}
```
