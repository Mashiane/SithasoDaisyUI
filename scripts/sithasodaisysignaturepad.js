
/* sithasodaisysignaturepad */
function banano_sithasodaisysignaturepad_sduisignaturepad() {var _B=this;_B.__2="";_B.__3="";_B.__4={};_B.__5=null;_B.__6=null;_B.__7={};_B.__8="";_B.__9={};_B.__136=false;_B.__b="";_B.__c="";_B.__d="";_B.__e="";_B.__f="";_B.__3e8="";_B.__3e9=0;_B.__1c="200";_B.__3ea="";_B.__3eb=0;_B.__3ec=0;_B.__3ed=0;_B.__3ee="";_B.__3ef=0;_B.__3f0=0;_B.__16="400";_B.__3f1=null;_B.__3f2="";_B.__28f="";_B.__3f3="";_B.__3f4="";_B.__1f="";_B.__1={};_B.__1b= new banano_sithasodaisy_sduidiv();_B.__3f5= new banano_sithasodaisy_sduidiv();_B.initialize=function(__a21,_name,__149) {_B.__2=_banano_sithasodaisy_sduishared.cleanid(_name);_B.__4=__a21;_B.__3=_banano_sithasodaisy_sduishared.cleanid(__149);_B.__9={};};_B.enable=function() {_B.__3f5.disabled(false);};_B.disable=function() {_B.__3f5.disabled(true);};_B.show=function() {_B.__3f5.hidden(false);};_B.hide=function() {_B.__3f5.hidden(true);};_B.defaults=function() {_B.setdotsize(0,_B);_B.setheight("200",_B);_B.setimagetype("jpeg",_B);_B.setmaxwidth(2.5,_B);_B.setmindistance(5,_B);_B.setminwidth(0.5,_B);_B.setthrottle(16,_B);_B.setvelocityfilterweight(0.7,_B);_B.setwidth("400",_B);};_B.getid=function() {return _B.__2;};_B.gethere=function() {return "#" + _B.__2 + "";};_B.setbackgroundcolor=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__3e8=_v;_B.__9["backgroundColor"]=_v;};_B.setdotsize=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__3e9=_v;_B.__9["dotSize"]=_v;};_B.setheight=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__1c=_v;_B.__1b.addattr("height",_v);_B.__1b.addstyle("height","" + _v + "px");_B.__3f5.addstyle("height","" + _v + "px");};_B.setimagetype=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__3ea=_v;_B.__9["imageType"]=_v;};_B.setmaxwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__3eb=_v;_B.__9["maxWidth"]=_v;};_B.setmindistance=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__3ec=_v;_B.__9["minDistance"]=_v;};_B.setminwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__3ed=_v;_B.__9["minWidth"]=_v;};_B.setpencolor=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__3ee=_v;_B.__9["penColor"]=_v;};_B.setthrottle=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__3ef=_v;_B.__9["throttle"]=_v;};_B.setvelocityfilterweight=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__3f0=_v;_B.__9["velocityFilterWeight"]=_v;};_B.setwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__16=_v;_B.__1b.addattr("height",_v);_B.__1b.addstyle("width","" + _v + "px");_B.__3f5.addstyle("width","" + _v + "px");};_B.refresh=function() {var __d74;__d74=u("#" + _B.__2 + "").nodes[0];_B.__3f1=new SignaturePad(__d74,_B.__9);BANanoExec("resizeCanvas", window, __d74,_B.__3f1);};_B.clear=function() {_B.__3f1["clear"]();};_B.download=function() {var __d37,__d75,_blob;__d37=_B.todataurl(_B);__d75="" + _B.__2 + "." + _B.__3ea + "";_blob=_banano_sithasodaisy_sduishared.dataurltoblob(__d37);BANanoExec("saveAs", window, _blob,__d75);};_B.fromdata=function(__3d) {_B.__3f1["fromData"](__3d);};_B.fromdataurl=function(__d37) {_B.__3f1["fromDataURL"](__d37);};_B.draw=function() {var __d74,_ctx;__d74=u("#" + _B.__2 + "").nodes[0];_ctx=__d74["getContext"]("2d");_ctx["globalCompositeOperation"]="source-over";};_B.erase=function() {var __d74,_ctx;__d74=u("#" + _B.__2 + "").nodes[0];_ctx=__d74["getContext"]("2d");_ctx["globalCompositeOperation"]="destination-out";};_B.todata=function() {var __3d;__3d=_B.__3f1["toData"]();return __3d;};_B.undo=function() {var __3d;__3d=_B.__3f1["toData"]();if (is.null(__3d)==false) {__3d["pop"]();_B.__3f1["fromData"](__3d);}};_B.todataurl=function() {var _res;_res="";switch ("" + _B.__3ea) {case "" + "jpeg":_res=_B.__3f1["toDataURL"]("image/jpeg");break;case "" + "png":_res=_B.__3f1["toDataURL"]("image/png");break;case "" + "svg":_res=_B.__3f1["toDataURL"]("image/svg+xml");break;}return _res;};_B.isempty=function() {var _res;_res=_B.__3f1["isEmpty"]();return _res;};_B.off=function() {_B.__3f1["off"]();};_B.on=function() {_B.__3f1["on"]();};_B.designercreateview=function(__a2e,__a2c) {_B.__1=__a2c;_B.__5=__a2e;if (__a2c!=null) {_B.__8=__a2c["ParentID"]===undefined? "":__a2c["ParentID"];_B.__8=_banano_sithasodaisy_sduishared.cstr(_B.__8);_B.__136=__a2c["Visible"]===undefined? true:__a2c["Visible"];_B.__136=_banano_sithasodaisy_sduishared.parsebool(_B.__136);_B.__b=__a2c["RawClasses"]===undefined? "":__a2c["RawClasses"];_B.__c=__a2c["RawStyles"]===undefined? "":__a2c["RawStyles"];_B.__d=__a2c["RawAttributes"]===undefined? "":__a2c["RawAttributes"];_B.__e=__a2c["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__a2c["MarginAXYTBLR"];_B.__f=__a2c["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__a2c["PaddingAXYTBLR"];_B.__3e8=__a2c["BackgroundColor"]===undefined? "white":__a2c["BackgroundColor"];_B.__3e8=_banano_sithasodaisy_sduishared.cstr(_B.__3e8);_B.__3e9=__a2c["DotSize"]===undefined? "0":__a2c["DotSize"];_B.__3e9=_banano_sithasodaisy_sduishared.cdbl(_B.__3e9);_B.__1c=__a2c["Height"]===undefined? "200":__a2c["Height"];_B.__1c=_banano_sithasodaisy_sduishared.cstr(_B.__1c);_B.__3ea=__a2c["ImageType"]===undefined? "jpeg":__a2c["ImageType"];_B.__3ea=_banano_sithasodaisy_sduishared.cstr(_B.__3ea);_B.__3eb=__a2c["MaxWidth"]===undefined? "2.5":__a2c["MaxWidth"];_B.__3eb=_banano_sithasodaisy_sduishared.cdbl(_B.__3eb);_B.__3ec=__a2c["MinDistance"]===undefined? 5:__a2c["MinDistance"];_B.__3ec=_banano_sithasodaisy_sduishared.cint(_B.__3ec);_B.__3ed=__a2c["MinWidth"]===undefined? "0.5":__a2c["MinWidth"];_B.__3ed=_banano_sithasodaisy_sduishared.cdbl(_B.__3ed);_B.__3ee=__a2c["PenColor"]===undefined? "black":__a2c["PenColor"];_B.__3ee=_banano_sithasodaisy_sduishared.cstr(_B.__3ee);_B.__3ef=__a2c["Throttle"]===undefined? 16:__a2c["Throttle"];_B.__3ef=_banano_sithasodaisy_sduishared.cint(_B.__3ef);_B.__3f0=__a2c["VelocityFilterWeight"]===undefined? "0.7":__a2c["VelocityFilterWeight"];_B.__3f0=_banano_sithasodaisy_sduishared.cdbl(_B.__3f0);_B.__16=__a2c["Width"]===undefined? "400":__a2c["Width"];_B.__16=_banano_sithasodaisy_sduishared.cstr(_B.__16);_B.__28f=__a2c["BorderColor"]===undefined? "black":__a2c["BorderColor"];_B.__28f=_banano_sithasodaisy_sduishared.cstr(_B.__28f);_B.__3f3=__a2c["BorderRadius"]===undefined? "5px":__a2c["BorderRadius"];_B.__3f3=_banano_sithasodaisy_sduishared.cstr(_B.__3f3);_B.__3f4=__a2c["BorderStyle"]===undefined? "solid":__a2c["BorderStyle"];_B.__3f4=_banano_sithasodaisy_sduishared.cstr(_B.__3f4);_B.__1f=__a2c["BorderWidth"]===undefined? "1px":__a2c["BorderWidth"];_B.__1f=_banano_sithasodaisy_sduishared.cstr(_B.__1f);_B.__3f2=__a2c["BorderPosition"]===undefined? "all":__a2c["BorderPosition"];_B.__3f2=_banano_sithasodaisy_sduishared.cstr(_B.__3f2);}if (_B.__8!="") {_B.__8=_B.__8.toLowerCase();_B.__5=u("#" + _B.__8 + "");}if (u("#" + _B.__2 + "").length>0) {_B.__6=u("#" + _B.__2 + "");} else {_B.__6=_B.__5.append("<div id=\"" + _B.__2 + "wrapper\"><canvas id=\"" + _B.__2 + "\"></canvas></div>").find("#"+_B.__2).bananofirst();}_B.assignelement(_B.__4,_B.__2,_B);_B.__1b.classes(_B.__b);_B.__1b.attributes(_B.__d);_B.__1b.styles(_B.__c);_B.__1b.paddingaxytblr(_B.__f);_B.__1b.marginaxytblr(_B.__e);if (_B.__136==false) {_B.hide(_B);}_B.__9["backgroundColor"]=_banano_sithasodaisy_sduishared.getcolorhex(_B.__3e8);_B.__9["dotSize"]=_B.__3e9;_B.__9["maxWidth"]=_B.__3eb;_B.__9["minDistance"]=_B.__3ec;_B.__9["minWidth"]=_B.__3ed;_B.__9["penColor"]=_banano_sithasodaisy_sduishared.getcolorhex(_B.__3ee);_B.__9["throttle"]=_B.__3ef;_B.__9["velocityFilterWeight"]=_B.__3f0;_B.__1b.setborder(_B.__3f2,_B.__3f4,_B.__1f,_B.__28f,_B.__3f3);_B.setheight(_B.__1c,_B);_B.setwidth(_B.__16,_B);_B.__3f5.addstyle("position","relative");_B.__3f5.addstyle("-moz-user-select","none");_B.__3f5.addstyle("-webkit-user-select","none");_B.__3f5.addstyle("-ms-user-select","none");_B.__3f5.addstyle("user-select","none");_B.__1b.addstyle("position","absolute");_B.__1b.addstyle("left","0");_B.__1b.addstyle("top","0");_B.refresh(_B);};_B.assignelement=function(__a6e,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B.__2=_id;_B.__4=__a6e;_B.__6=u("#" + _id + "");_B.__1b.assignelement(_B.__4,_B.__2);_B.__3f5.assignelement(_B.__4,"" + _B.__2 + "wrapper");_B.__1b.addevent("afterUpdateStroke",null);_B.__1b.addevent("beforeUpdateStroke",null);_B.__1b.addevent("beginStroke",null);_B.__1b.addevent("endStroke",null);};_B.shadow=function(_s) {_B.__1b.shadow(_s);};_B.roundedbox=function() {_B.__1b.roundedbox();};_B.addtoparent=function(__a32,__a2c) {__a32=_banano_sithasodaisy_sduishared.cleanid(__a32);_B.__5=u("#"+__a32);_B.designercreateview(_B.__5,__a2c,_B);};}