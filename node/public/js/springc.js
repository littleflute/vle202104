
var osc = {
    v: "springClient: v0.0.15",
    d: null,
    f1: function(){ 
        if(!this.d){
            this.d = blo0.blMD("id_4_md_springClientUI","ui_4_"+this.v,350,50,500,500,"lightblue");
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