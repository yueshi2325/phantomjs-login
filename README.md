# phantomjs-click

phantomjs中，除了button元素之外的dom元素无法触发click事件
问题解决方案：自己创建Event：createEvent

var ev = document.createEvent('MouseEvents');
ev.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementsByTagName('a')[0].dispatchEvent(ev); 
