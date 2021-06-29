function play(){
    let text = document.getElementById('text').value;
    let arr=text.split("");
    let check=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=arr.length;j>=0;j--){
            if(arr[i]===arr[j]){
                check=1;
            }
            else {  check=0;}
        }
    }
    if(check==1)
    {
    document.write("Chuỗi đối xứng !"+"<br>");
    }
    else if(check==0)
    {
    document.write("Chuỗi không đối xứng !"+"<br>");
    }
    document.write('<button><a href="' + document.referrer + '">Back</a></button>');
}