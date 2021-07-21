//No 1
function range(startNum=null, finishNum=null){
    if(startNum && finishNum){
        var result = [];
        if(startNum>finishNum){
            while(startNum>=finishNum){
                result.push(startNum);
                startNum--;
            }
        }else{
            while(startNum<=finishNum){
                result.push(startNum);
                startNum++;
            }
        }
        return result;
    }else{
        return -1;
    }
    }
    console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(1)) // -1
    console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
    console.log(range(54, 50)) // [54, 53, 52, 51, 50]
    console.log(range()) // -1 
    
    // No 2
    function rangeWithStep(startNum=null, finishNum=null, step=1){
        if(startNum && finishNum){
            var result = [];
            if(startNum>finishNum){
                while(startNum>=finishNum){
                    result.push(startNum);
                    startNum-= step;
                }
            }else{
                while(startNum<=finishNum){
                    result.push(startNum);
                    startNum+=step;
                }
            }
            return result;
        }else{
            return -1;
        }
    }
    console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
    console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
    console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
    console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]
    
    // No 3
    function sum(startNum=null, finishNum=startNum, step=1){
        var result = 0;
        if(startNum>finishNum){        
            while(startNum>=finishNum){
                result += startNum;
                startNum -= step;
            }
        }else{
            while(startNum<=finishNum){
                result += startNum;
                startNum +=step;
            }
        }
        return result;
    }
    console.log(sum(1,10)) // 55
    console.log(sum(5, 50, 2)) // 621
    console.log(sum(15,10)) // 75
    console.log(sum(20, 10, 2)) // 90
    console.log(sum(1)) // 1
    console.log(sum()) // 0 
    
    // No 4
    function dataHandling(data){
     var n = data.length;
        for(var i=0; i<n; i++){
            console.log(`Nomor ID: ${data[i][0]}\nNama Lengkap: ${data[i][1]}\nTTL: ${data[i][2]} ${data[i][3]}\nHobi: ${data[i][4]}\n`)
        }
    }
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
    dataHandling(input);
    
    // No 5
    function balikKata(kata){
        var hasil = "";
        for(var i=kata.length-1; i>=0; i--){
            hasil += kata[i];
        }
        return hasil;
    }
    console.log(balikKata("Kasur Rusak")) // kasuR rusaK
    console.log(balikKata("SanberCode")) // edoCrebnaS
    console.log(balikKata("Haji Ijah")) // hajI ijaH
    console.log(balikKata("racecar")) // racecar
    console.log(balikKata("I am Sanbers")) // srebnaS ma I
    
    // No 6
    function dataHandling2(data){
    data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(data);
    
    var tanggal = data[3].split("/");
    var month = "";
    switch(tanggal[1]){
        case '01': {month = "Januari"; break;}
        case '02': {month = "Februari"; break;}
        case '03': {month = "Maret"; break;}
        case '04': {month = "April"; break;}
        case '05': {month = "Mei"; break;}
        case '06': {month = "Juni"; break;}
        case '07': {month = "Juli"; break;}
        case '08': {month = "Agustus"; break;}
        case '09': {month = "September"; break;}
        case '10': {month = "Oktober"; break;}
        case '11': {month = "November"; break;}
        case '12': {month = "Desember"; break;}
        default: {console.log("Terjadi kesalahan pada tanggal, silakan cek lagi"); break;}
    }
    console.log(month);
    
    tanggal.sort(function(value1, value2){return value2 - value1});
    console.log(tanggal);
    
    console.log(data[3].split("/").join("-"));
    
    console.log(data[1].slice(0, 14));
    }
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    dataHandling2(input);
    