// No 1
console.log("LOOPING PERTAMA");
var i = 1;
while(i<=10){
    console.log(i*2 + " - I love coding");
    i++;
}

console.log("LOOPING KEDUA");
var j = 10;
while(j>0){
    console.log(j*2 + " - I will become a mobile developer");
    j--;
}
console.log();

// No 2
for(var a = 1; a<=20; a++){
    if(a%2==0){
        console.log(a + " - Berkualitas");        
    }else{
        if(a%3==0){
            console.log(a + " - I love coding");
        }else{
            console.log(a + " - Santai");
        }
    }
}
console.log();

// No 3
var output3 = "";
for(var c=1; c<=8; c++){output3 += "#";}
for(var b = 1; b<=4; b++){console.log(output3);}
console.log();

// No 4
var output4 = "";
for(var d=1; d<=7; d++){
    output4 += "#";    
    console.log(output4);
}
console.log();

// No 5
var count = 1, output5 = "";
for(var f=0; f<8; f++){
    output5 = "";
    if(count%2==1){
    for(var g=0; g<8; g++){
    if(g%2 == 1){
        output5 += "#";
    }else{
        output5 += " ";
    }    
}}else{
    for(var g=0; g<8; g++){
        if(g%2 == 1){
            output5 += " ";
        }else{
            output5 += "#";
        }    
    }
}
count++;
console.log(output5);
}
