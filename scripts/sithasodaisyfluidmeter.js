
/* sithasodaisyfluidmeter */
function banano_sithasodaisyfluidmeter_sduifluidmeter() {var _B=this;_B.__1f1=false;_B.__1e1=false;_B.__2="";_B.__3="";_B.__4={};_B.__5=null;_B.__6=null;_B.__7={};_B.__8="";_B.__1b=(typeof banano_sithasodaisy_sduidiv === 'function') ? new banano_sithasodaisy_sduidiv(): null;_B.__b="";_B.__c="";_B.__d="";_B.__e="";_B.__f="";_B.__1f2={};_B.__1f3=0;_B.__1f4="";_B.__1f5=0;_B.__1f6=0;_B.__1f7=0;_B.__1f8=0;_B.__1f9=false;_B.__1fa=false;_B.__1fb=0;_B.__1fc={};_B.__1fd=0;_B.__1fe=0;_B.__1ff=0;_B.__200=0;_B.__201="";_B.__202={};_B.__1c="";_B.__203=0;_B.__16="";_B.__136=false;_B.__9={};_B.__f6={};_B.__204="";_B.__205="";_B._fm=null;_B.__1={};_B.initialize=function(__c2c,_name,__149) {_B.__2=_name.toLowerCase();_B.__3=__149.toLowerCase();_B.__4=__c2c;_B.__2=_B.__2.split("#").join("");_B.__3=_B.__3.split("#").join("");_B.__9={};_B.__f6={};};_B.assignelement=function(__c79,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B.__2=_id;_B.__4=__c79;_B.__6=u("#" + _id + "");_B.__1b.assignelement(_B.__4,_B.__2);};_B.enable=function() {_B.__1b.disabled(false);};_B.disable=function() {_B.__1b.disabled(true);};_B.getname=function() {return "" + _B.__2 + "";};_B.gethere=function() {return "#" + _B.__2 + "";};_B.show=function() {_B.__1b.hidden(false);};_B.hide=function() {_B.__1b.hidden(true);};_B.addtoparent=function(__c3d,__c37) {__c3d=_banano_sithasodaisy_sduishared.cleanid(__c3d);_B.__5=u("#"+__c3d);_B.designercreateview(_B.__5,__c37,_B);};_B.remove=function() {_B.__6.empty();_B=null;};_B.setbackgroundcolor=function(_v) {_B.__1f2=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundColor",_B.__1f2);};_B.setbflangularspeed=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1f3=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.angularSpeed",_B.__1f3);};_B.setbflfillstyle=function(_v) {_B.__1f4=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.fillStyle",_B.__1f4);};_B.setbflfrequency=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1f5=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.frequency",_B.__1f5);};_B.setbflhorizontalspeed=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1f6=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.horizontalSpeed",_B.__1f6);};_B.setbflmaxamplitude=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1f7=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.maxAmplitude",_B.__1f7);};_B.setborderwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1f8=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"borderWidth",_B.__1f8);};_B.setdrawbubbles=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__1f9=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawBubbles",_B.__1f9);};_B.setdrawpercentagesign=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__1fa=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawPercentageSign",_B.__1fa);};_B.setfflangularspeed=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1fb=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.angularSpeed",_B.__1fb);};_B.setfflfillstyle=function(_v) {_B.__1fc=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.fillStyle",_B.__1fc);};_B.setfflfrequency=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1fd=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.frequency",_B.__1fd);};_B.setfflhorizontalspeed=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1fe=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.horizontalSpeed",_B.__1fe);};_B.setfflmaxamplitude=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__1ff=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.maxAmplitude",_B.__1ff);};_B.setfillpercentage=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__200=_v;_B.__f6["fillPercentage"]=_B.__200;};_B.setfontfillstyle=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__205=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontFillStyle",_B.__205);};_B.setfontfamily=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__201=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontFamily",_B.__201);};_B.setdrawshadow=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__1e1=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawShadow",_B.__1e1);};_B.setdrawtext=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__1f1=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawText",_B.__1f1);};_B.setfontsize=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__204=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontSize",_B.__204);};_B.setforegroundcolor=function(_v) {_B.__202=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundColor",_B.__202);};_B.setsize=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__203=_v;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"size",_B.__203);};_B.refresh=function() {var _te;u("#" + _B.__2 + "").empty();_te=u("#" + _B.__2 + "").nodes[0];_B.__f6["options"]=_B.__9;_B.__f6["targetContainer"]=_te;_B._fm=new FluidMeter();_B._fm["init"](_B.__f6);};_B.setpercentage=function(_perc) {_B._fm["setPercentage"](parseInt(_perc));};_B.designercreateview=function(__c39,__c37) {_B.__1=__c37;_B.__5=__c39;if (__c37!=null) {_B.__1f1=__c37["DrawText"]===undefined? true:__c37["DrawText"];_B.__1f1=_banano_sithasodaisy_sduishared.parsebool(_B.__1f1);_B.__1e1=__c37["DrawShadow"]===undefined? true:__c37["DrawShadow"];_B.__1e1=_banano_sithasodaisy_sduishared.parsebool(_B.__1e1);_B.__136=__c37["Visible"]===undefined? false:__c37["Visible"];_B.__136=_banano_sithasodaisy_sduishared.parsebool(_B.__136);_B.__8=__c37["ParentID"]===undefined? "":__c37["ParentID"];_B.__8=_banano_sithasodaisy_sduishared.cstr(_B.__8);_B.__b=__c37["Classes"]===undefined? "":__c37["Classes"];_B.__c=__c37["Styles"]===undefined? "":__c37["Styles"];_B.__d=__c37["Attributes"]===undefined? "":__c37["Attributes"];_B.__204=__c37["FontSize"]===undefined? "70px":__c37["FontSize"];_B.__204=_banano_sithasodaisy_sduishared.cstr(_B.__204);_B.__205=__c37["FontFillStyle"]===undefined? "white":__c37["FontFillStyle"];_B.__205=_banano_sithasodaisy_sduishared.cstr(_B.__205);_B.__e=__c37["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__c37["MarginAXYTBLR"];_B.__f=__c37["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__c37["PaddingAXYTBLR"];_B.__1f2=__c37["BackgroundColor"]===undefined? "#e2e2e2":__c37["BackgroundColor"];_B.__1f3=__c37["BflAngularSpeed"]===undefined? 140:__c37["BflAngularSpeed"];_B.__1f3=_banano_sithasodaisy_sduishared.cint(_B.__1f3);_B.__1f4=__c37["BflFillStyle"]===undefined? "pink":__c37["BflFillStyle"];_B.__1f5=__c37["BflFrequency"]===undefined? 40:__c37["BflFrequency"];_B.__1f5=_banano_sithasodaisy_sduishared.cint(_B.__1f5);_B.__1f6=__c37["BflHorizontalSpeed"]===undefined? 150:__c37["BflHorizontalSpeed"];_B.__1f6=_banano_sithasodaisy_sduishared.cint(_B.__1f6);_B.__1f7=__c37["BflMaxAmplitude"]===undefined? 12:__c37["BflMaxAmplitude"];_B.__1f7=_banano_sithasodaisy_sduishared.cint(_B.__1f7);_B.__1f8=__c37["BorderWidth"]===undefined? 25:__c37["BorderWidth"];_B.__1f8=_banano_sithasodaisy_sduishared.cint(_B.__1f8);_B.__1f9=__c37["DrawBubbles"]===undefined? true:__c37["DrawBubbles"];_B.__1f9=_banano_sithasodaisy_sduishared.parsebool(_B.__1f9);_B.__1fa=__c37["DrawPercentageSign"]===undefined? false:__c37["DrawPercentageSign"];_B.__1fa=_banano_sithasodaisy_sduishared.parsebool(_B.__1fa);_B.__1fb=__c37["FflAngularSpeed"]===undefined? 0:__c37["FflAngularSpeed"];_B.__1fb=_banano_sithasodaisy_sduishared.cint(_B.__1fb);_B.__1fc=__c37["FflFillStyle"]===undefined? "purple":__c37["FflFillStyle"];_B.__1fd=__c37["FflFrequency"]===undefined? 30:__c37["FflFrequency"];_B.__1fd=_banano_sithasodaisy_sduishared.cint(_B.__1fd);_B.__1fe=__c37["FflHorizontalSpeed"]===undefined? -150:__c37["FflHorizontalSpeed"];_B.__1fe=_banano_sithasodaisy_sduishared.cint(_B.__1fe);_B.__1ff=__c37["FflMaxAmplitude"]===undefined? 9:__c37["FflMaxAmplitude"];_B.__1ff=_banano_sithasodaisy_sduishared.cint(_B.__1ff);_B.__200=__c37["FillPercentage"]===undefined? 20:__c37["FillPercentage"];_B.__200=_banano_sithasodaisy_sduishared.cint(_B.__200);_B.__201=__c37["FontFamily"]===undefined? "":__c37["FontFamily"];_B.__201=_banano_sithasodaisy_sduishared.cstr(_B.__201);_B.__202=__c37["ForegroundColor"]===undefined? "#fafafa":__c37["ForegroundColor"];_B.__1c=__c37["Height"]===undefined? "300px":__c37["Height"];_B.__203=__c37["Size"]===undefined? 300:__c37["Size"];_B.__203=_banano_sithasodaisy_sduishared.cint(_B.__203);_B.__16=__c37["Width"]===undefined? "300px":__c37["Width"];}if (_B.__8=="") {_B.__8=_B.__5.attr('id');}_B.addfluidmeter(_B.__5,_B.__8,_B.__2,_B);if (_B.__136==false) {_B.hide(_B);}_B.__1b.classes(_B.__b);_B.__1b.attributes(_B.__d);_B.__1b.styles(_B.__c);_B.__1b.paddingaxytblr(_B.__f);_B.__1b.marginaxytblr(_B.__e);};_B.setwidth=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B.__1b.w(_s);};_B.setheight=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B.__1b.h(_s);};_B.addfluidmeter=function(__c79,__c36,_id) {__c36=_banano_sithasodaisy_sduishared.cleanid(__c36);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B.__2=_id;_B.__4=__c79;if (u("#" + __c36 + "").length>0==false) {throw "SDUIFluidMeter.Initialize: '" + __c36 + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B.__6=u("#" + _id + "");} else {_B.__5=u("#" + __c36 + "");_B.__6=_B.__5.append("<div id=\"" + _id + "\"></div>").find("#" + _id + "").bananofirst();}_B.assignelement(_B.__4,_B.__2,_B);_B.__9={};_B.setwidth(_B.__16,_B);_B.setheight(_B.__1c,_B);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawShadow",_B.__1e1);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawText",_B.__1f1);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontSize",_B.__204);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontFamily",_B.__201);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"fontFillStyle",_B.__205);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawPercentageSign",_B.__1fa);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"drawBubbles",_B.__1f9);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"size",_B.__203);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"borderWidth",_B.__1f8);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundColor",_B.__1f2);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundColor",_B.__202);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.fillStyle",_B.__1fc);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.angularSpeed",_B.__1fb);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.maxAmplitude",_B.__1ff);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.frequency",_B.__1fd);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"foregroundFluidLayer.horizontalSpeed",_B.__1fe);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.fillStyle",_B.__1f4);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.angularSpeed",_B.__1f3);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.maxAmplitude",_B.__1f7);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.frequency",_B.__1f5);_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"backgroundFluidLayer.horizontalSpeed",_B.__1f6);_B.__f6["fillPercentage"]=_B.__200;_B.__f6["options"]=_B.__9;};}