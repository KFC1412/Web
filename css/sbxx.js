//设备信息
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.write("你的操作系统是：移动端")
} else {
    document.write("你的操作系统是：PC端")
}