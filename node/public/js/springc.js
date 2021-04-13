
var osc = {
    v: "springClient: v0.0.43",
    d: null,
    f1: function(){ 
        if(!this.d){
            this.d = blo0.blMD("id_4_md_springClientUI","ui_4_"+this.v,350,50,500,500,"lightblue");
            var tb = blo0.blDiv(this.d,this.d.id+"tb","tb","grey");
            var v4url = blo0.blDiv(this.d,this.d.id+"v4url","v4url","lightgrey");
            var v = blo0.blDiv(this.d,this.d.id+"v","v","lightgreen");
            tb.bs = [];
            for(var i = 0; i<10; i++){
                var sn = i+1;
                var b = blo0.blBtn(tb,tb.id+"b"+i,"video"+sn+".json",blGrey[0]);
                b.onclick = function(_this,_i,_v4url,_v){
                    return function(){
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
                }(b,i,v4url,v);
                tb.bs.push(b);
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