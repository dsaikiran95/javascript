function windowOp(){
        var newWindow=window.open("http://www.mrec.ac.in","newWindow","height=300,width=200");
        newWindow.moveTo(200,150)
        newWindow.close();
        window.close();
    }    

function navigatorProp(){

    document,write("<br> appcodeName:" +navigator.appCodeName);
    document.write("<br> appName:"+navigator.appName);
    document,write("<br> platform:" +navigator.platform)
}

navigatorProp();
