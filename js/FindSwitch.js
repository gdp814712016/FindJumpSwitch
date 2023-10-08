var array = [
    {"id": 1, "imgName": "P6-1"},
    {"id": 2, "imgName": "P6-2"},
    {"id": 3, "imgName": "P6-3"},
    {"id": 4, "imgName": "SPCU"},
    {"id": 5, "imgName": "P6-11"},
    {"id": 6, "imgName": "P6-12"},
    {"id": 7, "imgName": "P18-1"},
    {"id": 8, "imgName": "P18-2"},
    {"id": 9, "imgName": "P18-3"}


];
var imgId;
var clock;
function Sel(name){
    var objectIndex = array.findIndex(object => object.id == name);
    id=array[objectIndex].imgName;
    //调用setInterval()函数,每隔0.5秒隐藏显示
    clock =  setInterval("getImg(id)",500);
}

function getImg(id) {
    imgId = document.getElementById(id);
    if(imgId.style.display=="none"){//图片隐藏
        imgId.style.display="block";//图片显示
    }else{
        imgId.style.display="none";//图片隐藏
    }
}

$("#btnSel").click(function (){
    if(imgId!=null) {
        imgId.style.display = "block";//图片显示
    }
    clearInterval(clock);
    Sel($("#name").val());
});

$("#btnClear").click(function (){
    if(imgId!=null) {
        imgId.style.display = "block";//图片显示
        imgId=null;
    }
    clearInterval(clock);
    $("#name").val("");
});

