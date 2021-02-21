function send(){
    var arr = document.getElementsByTagName('input')
    console.log(arr);
    var name = arr[0].value;
    var n = name.charAt(0)
    var m = name.charAt(1)
    
    if( name  ==""){
        alert(" trong ô chưa được nhập giá trị");
        return;
    }
    if(isNaN(name)){
        alert(" age must be a number");
        return;
    }
    if( n =="0")
    {
        document.getElementById('result').innerHTML="canh"
    }
    if( n =="1")
    {
        document.getElementById('result').innerHTML="tân"
    }
    if( n =="2")
    {
        document.getElementById('result').innerHTML="nhâm"
    }
    if( n =="3")
    {
        document.getElementById('result').innerHTML="quí"
    }
    if( n =="4")
    {
        document.getElementById('result').innerHTML="giáp"
    }
    if( n =="5")
    {
        document.getElementById('result').innerHTML="ất"
    }
    if( n =="6")
    {
        document.getElementById('result').innerHTML="bính"
    }
    if( n =="7")
    {
        document.getElementById('result').innerHTML="đinh"
    }
    if( n =="8")
    {
        document.getElementById('result').innerHTML="mậu"
    }
    if( n =="9")
    {
        document.getElementById('result').innerHTML="kỷ"
    }
    if( m =="0")
    {
        document.getElementById('result1').innerHTML="thân"
    }
    if( m =="1")
    {
        document.getElementById('result1').innerHTML="dậu"
    }
    if( m =="2")
    {
        document.getElementById('result1').innerHTML= "tuất"
    }
    if( m =="3")
    {
        document.getElementById('result1').innerHTML="hơi"
    }
    if( m =="4")
    {
        document.getElementById('result1').innerHTML="tý"
    }
    if( m =="5")
    {
        document.getElementById('result1').innerHTML="sửu"
    }
    if( m =="6")
    {
        document.getElementById('result1').innerHTML="dần"
    }
    if( m =="7")
    {
        document.getElementById('result1').innerHTML="mão"
    }
    if( m =="8")
    {
        document.getElementById('result1').innerHTML="thìn"
    }
    if( m =="9")
    {
        document.getElementById('result1').innerHTML="tỵ"
    }
    // if(name =="10")
    // {
    //     document.getElementById('result').style.color = 'white'
    //     document.getElementById('result1').innerHTML="canh ngọ"
    // }
    // if( name =="11")
    // {
    //     document.getElementById('result').style.color = 'white'
    //     document.getElementById('result1').innerHTML="mùi"
    // }
    if(name =="10")
    {
        document.getElementById('result1').innerHTML="ngọ"
    }
    if( name =="11")
    {
        document.getElementById('result1').innerHTML="mùi"
    }

}
