# PhantomJs
安装PhantomJS
下载对应版本PhantomJS，解压缩即可

    1. PhantomJS官网下载地址： http://phantomjs.org/download.html
    
    2. PhantomJS下载：  wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
  
    3. 解压缩：   tar xvfj phantomjs-2.1.1-linux-x86_64.tar.bz2
    
    4. 查看帮助： /home/simejiglobal/phantomjs/bin/phantomjs --help
    
    5. 在examples文件中提供了很多demo代码可以直接使用，例：脚本代码hello.js

	
执行命令：  phantomjs hello.js
执行接口：命令行输出 Hello，world！
	


# phantomjs-click

phantomjs中，除了button元素之外的dom元素无法触发click事件
问题解决方案：自己创建Event：createEvent

var ev = document.createEvent('MouseEvents');
ev.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
document.getElementsByTagName('a')[0].dispatchEvent(ev); 
