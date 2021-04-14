function callSpring2MakeVideo(_this,_i,_v4url,_v){
    var sn = _i+1; 
    var w = {};
    w._2do = function(txt){
        _v.innerHTML = txt;
    }
    var fJSON = "video"+sn+".json";
    var url = "http://localhost:8080/image/video?script="+fJSON;
    var jsonURL = "http://localhost:8080/"+fJSON;
    _v4url.innerHTML = "<a href='"+jsonURL+"' target='_blank'>"+fJSON+"</a>";
    _v.innerHTML = "to do ...";
    blo0.blAjx(w,url); 
}
var osc = {
    v: "springClient: v0.0.54",
    d: null,
    f1: function(){ 
        if(!this.d){
            this.d = blo0.blMD("id_4_md_springClientUI","ui_4_"+this.v,350,50,500,500,"lightblue");
            var dToolbar = blo0.blDiv(this.d,this.d.id+"dToolbar","dToolbar",blGrey[0]);
            var btn1 = blo0.blBtn(dToolbar,dToolbar.id+"btn1","btn1","lightblue");
            var dBlScripts = blo0.blDiv(this.d,this.d.id+"dBlScripts","dBlScripts","grey");
            var v4url = blo0.blDiv(this.d,this.d.id+"v4url","v4url","lightgrey");
            var v = blo0.blDiv(this.d,this.d.id+"v","v","lightgreen"); 

            var d4TA = blo0.blDiv(this.d,this.d.id+"d4TA","d4TA","lightblue");
            d4TA.ta = blo0.blTextarea (d4TA,d4TA.id+"ta","txt",blGrey[0]);
            d4TA.ta.style.width = "98%";
            d4TA.ta.style.height = "50px";
            
            dBlScripts.bs = [];
            for(var i = 0; i<10; i++){
                var sn = i+1;
                var b = blo0.blBtn(dBlScripts,dBlScripts.id+"b"+i,"video"+sn+".json",blGrey[0]);
                b.onclick = function(_this,_i,_v4url,_v){
                    return function(){
                        callSpring2MakeVideo(_this,_i,_v4url,_v);
                        
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