var txt1;
var final;
function btnclick(val){
    if (final != ""){
        final = ""
        document.getElementById("screen").value=""
    }else{
        if (val=='/'){
            if (document.getElementById("screen").value == '/'){

            }else{
                txt1 = document.getElementById("screen").value
                document.getElementById("screen").value='/'
            }
        }else if (val=='*'){
            if (document.getElementById("screen").value == '*'){

            }else{
                txt1 = document.getElementById("screen").value
                document.getElementById("screen").value='*'
            }
        }else if (val=='+'){
            if (document.getElementById("screen").value == '+'){

            }else{
                txt1 = document.getElementById("screen").value
                document.getElementById("screen").value='+'
            }
        
        }else if (val=='-'){
            if (document.getElementById("screen").value == '-'){

            }else{
                txt1 = document.getElementById("screen").value
                document.getElementById("screen").value='-'
            }
        }else{
        document.getElementById("screen").value=document.getElementById("screen").value+=val
        }
    }
}
function btnclear(){
    document.getElementById("screen").value=""
    txt1 = ""
}
function btnequal(){
    var result = txt1+document.getElementById("screen").value
    //document.getElementById("screen").value=result
    final = eval(result)
    document.getElementById("screen").value = final
    txt1 = ""
}