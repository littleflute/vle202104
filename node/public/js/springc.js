var osc = {
    v: "springClient: v0.0.134",
    d: null,
    f1: function(){ 
        if(!this.d){
            this.d = _ui(this.v);          
        }
        _on_off_div(btnSpringClient,this.d);
        var b = btnSpringClient;  
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }
};
osc.uiSwitch = function(){
    this.f1();
}
osc.uiSwitch();
btnSpringClient.o = osc;
btnSpringClient.b = true;


function _ui(_v){
    var d = blo0.blMD("id_4_md_springClientUI","ui_4_"+_v,350,50,500,500,"lightblue");     
    _toolbar(d);
    _blScriptsUI(d);  
    return d;
}

function _toolbar(_d){ 
    var dToolbar = blo0.blDiv(_d,_d.id+"dToolbar","dToolbar",blGrey[0]);
    var btnCreateVideo = blo0.blBtn(dToolbar,dToolbar.id+"btnCreateVideo","btnCreateVideo","lightblue");
    btnCreateVideo.onclick = function(){
        var vURL = bl$("id_v4url");
        var vR = bl$("id_vR");
        vR.innerHTML = vURL.fJSON;
        _callSpring2MakeVideo(vURL,vR);
    }
}
function _blScriptsUI(_d){   
    var dBlScripts = blo0.blDiv(_d,"id_dBlScripts","dBlScripts","grey");
    var v4url = blo0.blDiv(_d,"id_v4url","v4url","lightgrey");
    

    var d4TA = blo0.blDiv(_d,_d.id+"d4TA","d4TA","lightblue");
    d4TA.ta = blo0.blTextarea (d4TA,d4TA.id+"ta","txt",blGrey[0]);
    d4TA.ta.style.width = "98%";
    d4TA.ta.style.height = "50px";
    
    var v = blo0.blDiv(_d,"id_vR","v","lightgreen"); 

    dBlScripts.bs = [];
    for(var i = 0; i<10; i++){
        var sn = i+1;
        var b = blo0.blBtn(dBlScripts,dBlScripts.id+"b"+i,"video"+sn+".json",blGrey[0]);
        b.oldBGColor = blGrey[0];
        b.n = i + 1;
        b.onclick = function(_this,_i,_v4url,_v){
            return function(){
                //_callSpring2MakeVideo(_this,_i,_v4url,_v);     
                _loop("id_dBlScripts",_i,_v4url,_v);                   
            }
        }(b,i,v4url,v);
        dBlScripts.bs.push(b);
    } 

    var btnEditNow = blo0.blBtn(dBlScripts,dBlScripts.id+"btnEditNow","editNow","lightblue");
    btnEditNow.onclick = function(){
        v4url.innerHTML = "now.json";
        v.innerHTML = "edit .json...";
        var btnReflesh = blo0.blBtn(v4url,v4url.id+"btnReflesh","Reflesh",blGrey[0]);
        btnReflesh.onclick = function(){
            var data = {
                edit_at: new Date(),
                b: 2
            };
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function() {
                if(this.readyState === 4) {
                    var s = new Date();         
                    s = s.toLocaleTimeString();
                    var fJSON = "now.json"; 
                    var jsonURL = "http://localhost:8080/"+fJSON;
                    v.innerHTML =s + " <a href='"+jsonURL+"' target='_blank'>"+fJSON+"</a>";
                }	
            });
            xhr.open("POST", "http://localhost:8080/json?fileName=now.json");
            xhr.setRequestHeader("Content-Type", "text/plain");
            var txt = JSON.stringify(data);
            xhr.send(txt);
        }
    }
}

function _loop(id,_i,_v4url,_v){
    var d = bl$(id);
    var l = d.bs; 

    var fJSON = "video" + l[_i].n  + ".json"; 
    var jsonURL = "http://localhost:8080/"+fJSON;
    _v4url.innerHTML = "<a href='"+jsonURL+"' target='_blank'>"+fJSON+"</a>";
    _v4url.fJSON = fJSON;

    for(i in l){
        if((_i+1)==l[i].n){
            l[i].style.backgroundColor = "white";
        }
        else{
            l[i].style.backgroundColor = l[i].oldBGColor;
        }
    }
}

function _callSpring2MakeVideo(_v4url,_v){ 

    var w = {};
    w._2do = function(txt){
        _v.innerHTML = txt;
    } 
    var fJSON = _v4url.fJSON;
    var url = "http://localhost:8080/image/video?script="+fJSON;
    var jsonURL = "http://localhost:8080/"+fJSON;
    _v4url.innerHTML = "<a href='"+jsonURL+"' target='_blank'>"+fJSON+"</a>";
    _v.innerHTML = "to do ... fJSON=" + fJSON;
    blo0.blAjx(w,url); 
}