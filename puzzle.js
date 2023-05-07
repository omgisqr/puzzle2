alert("欢迎!!");
var num1 = parseInt(Math.random()*100+1);
var num2;
var clickNum=0;  //统计猜测的次数
while(true){
    num2= prompt("根据要求输入数字");
    clickNum++;
    if(num1==num2){
        alert("恭喜您,猜到了正确的数字:"+num1+"\n您一共猜测了"+clickNum+"次!");
        break;
    }else if(num1>num2){
        alert("您猜的数字太小了,请重新猜测!");
    }else{
        alert("您猜的数字太大了,请重新猜测!");
    }
}

