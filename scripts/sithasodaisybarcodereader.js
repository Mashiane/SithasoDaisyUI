
/* sithasodaisybarcodereader */
function banano_sithasodaisybarcodereader_sduibarcodereader() {var _B=this;_B.__1={};_B.__2="";_B.__3="";_B.__4={};_B.__5=null;_B.__6=null;_B.__7={};_B.__8="";_B.__9={};_B.__a=false;_B.__b="";_B.__c="";_B.__d="";_B.__e="";_B.__f="";_B.__10="";_B.__11=0;_B.__12=0;_B.__13=0;_B.__14=false;_B.__15=false;_B.__16="";_B.__17=null;_B.__18="";_B.__19="";_B.__1a="";_B.__1b= new banano_sithasodaisy_sduidiv();_B.__1c="";_B.initialize=function(__a21,_name,__149) {_B.__2=_name.toLowerCase();_B.__3=__149.toLowerCase();_B.__4=__a21;_B.__2=_B.__2.split("#").join("");_B.__3=_B.__3.split("#").join("");_B.__9={};};_B.frontcamera=function() {_B.__10="user";_B.restart(_B);};_B.rearcamera=function() {_B.__10="environment";_B.restart(_B);};_B.restart=function() {_B.__1a="";};_B.onscansuccess=function(__a22,__a23) {_B.__17["clear"]();(function() {if (typeof _B.__4[(_B.__18).toLowerCase()]==="function") {var CSr = _B.__4[(_B.__18).toLowerCase()](__a22,__a23,_B);if(CSr!=null) {return CSr}}})();};_B.onscanfailure=function(__a24) {if (_B.__1a!=__a24) {_B.__1a=__a24;(function() {if (typeof _B.__4[(_B.__19).toLowerCase()]==="function") {var CSr = _B.__4[(_B.__19).toLowerCase()](__a24,_B);if(CSr!=null) {return CSr}}})();}};_B.scanwait=async function() {var _opt,__a25,__a26,__a27;_opt={};_opt["width"]=_B.__13;_opt["height"]=_B.__12;_B.__9["fps"]=_B.__11;_B.__9["qrbox"]=_opt;_B.__9["rememberLastUsedCamera"]=_B.__14;__a25={};__a25["facingMode"]=_B.__10;__a26=null;__a26=_B;__a27=null;__a27=_B;_B.__17=new Html5Qrcode(_B.__2);await _B.__17["start"](__a25,_B.__9,__a26["onscansuccess"],__a27["onscanfailure"]);try {_B.__17["applyVideoConstraints"]({"torch":_B.__15});} catch(err) {}return true;};_B.torchon=function() {_B.__15=true;_B.restart(_B);};_B.torchoff=function() {_B.__15=false;_B.restart(_B);};_B.stopscanwait=async function() {try {await _B.__17["stop"]();_B.__17["clear"]();} catch(err) {}_B.restart(_B);return true;};_B.defaults=function() {_B.setcamera("environment",_B);_B.setfps(60,_B);_B.setw("full",_B);_B.setqrboxheight(350,_B);_B.setqrboxwidth(350,_B);_B.setrememberlastusedcamera(false,_B);_B.settorch(false,_B);_B.restart(_B);};_B.getid=function() {return _B.__2;};_B.gethere=function() {return "#" + _B.__2 + "";};_B.setcamera=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__10=_v;};_B.getcamera=function() {return _B.__10;};_B.setfps=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__11=_v;};_B.setqrboxheight=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__12=_v;};_B.setqrboxwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__13=_v;};_B.setrememberlastusedcamera=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__14=_v;_B.__9["rememberLastUsedCamera"]=_B.__14;};_B.settorch=function(_v) {_v=_banano_sithasodaisy_sduishared.parsebool(_v);_B.__15=_v;};_B.gettorch=function() {return _B.__15;};_B.setw=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__16=_v;_B.__1b.w(_v);};_B.seth=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__1c=_v;_B.__1b.h(_v);};_B.addbarcodereader=function(__a21,__a2b,_id) {var __a2c;_B.__2=_id.toLowerCase();_B.__3=_B.__2.toLowerCase();_B.__4=__a21;_B.__2=_B.__2.split("#").join("");_B.__3=_B.__3.split("#").join("");__a2c={};__a2c["ParentID"]=__a2b;_B.__5=u("#"+__a2b.toLowerCase());_B.designercreateview(_B.__5,__a2c,_B);return _B;};_B.pause=function(__a2d) {_B.__17["pause"](__a2d);_B.restart(_B);};_B.resume=function() {_B.__17["resume"]();_B.restart(_B);};_B.designercreateview=function(__a2e,__a2c) {_B.__1=__a2c;_B.__18="" + _B.__2 + "_ScanSuccess";_B.__19="" + _B.__2 + "_ScanFailure";_B.__5=__a2e;if (__a2c!=null) {_B.__8=__a2c["ParentID"]===undefined? "":__a2c["ParentID"];_B.__8=_banano_sithasodaisy_sduishared.cstr(_B.__8);_B.__a=__a2c["Hidden"]===undefined? false:__a2c["Hidden"];_B.__a=_banano_sithasodaisy_sduishared.parsebool(_B.__a);_B.__b=__a2c["RawClasses"]===undefined? "":__a2c["RawClasses"];_B.__c=__a2c["RawStyles"]===undefined? "":__a2c["RawStyles"];_B.__d=__a2c["RawAttributes"]===undefined? "":__a2c["RawAttributes"];_B.__e=__a2c["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__a2c["MarginAXYTBLR"];_B.__f=__a2c["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__a2c["PaddingAXYTBLR"];_B.__10=__a2c["Camera"]===undefined? "environment":__a2c["Camera"];_B.__10=_banano_sithasodaisy_sduishared.cstr(_B.__10);_B.__11=__a2c["Fps"]===undefined? 60:__a2c["Fps"];_B.__11=_banano_sithasodaisy_sduishared.cint(_B.__11);_B.__12=__a2c["QrboxHeight"]===undefined? 350:__a2c["QrboxHeight"];_B.__13=__a2c["QrboxWidth"]===undefined? 350:__a2c["QrboxWidth"];_B.__14=__a2c["RememberLastUsedCamera"]===undefined? true:__a2c["RememberLastUsedCamera"];_B.__14=_banano_sithasodaisy_sduishared.parsebool(_B.__14);_B.__15=__a2c["Torch"]===undefined? false:__a2c["Torch"];_B.__15=_banano_sithasodaisy_sduishared.parsebool(_B.__15);_B.__16=__a2c["Width"]===undefined? "full":__a2c["Width"];_B.__16=_banano_sithasodaisy_sduishared.cstr(_B.__16);_B.__1c=__a2c["Height"]===undefined? "":__a2c["Height"];_B.__1c=_banano_sithasodaisy_sduishared.cstr(_B.__1c);}if (_B.__8!="") {_B.__8=_B.__8.toLowerCase();_B.__5=u("#" + _B.__8 + "");}if (u("#" + _B.__2 + "").length>0) {_B.__6=u("#" + _B.__2 + "");} else {_B.__6=_B.__5.append("<div id=\"" + _B.__2 + "\" class=\"bg-base-100 shadow bordered-box\"></div>").find("#"+_B.__2).bananofirst();}_B.__1b.assignelement(_B.__4,_B.__2);_B.__1b.classes(_B.__b);_B.__1b.attributes(_B.__d);_B.__1b.styles(_B.__c);_B.__1b.paddingaxytblr(_B.__f);_B.__1b.marginaxytblr(_B.__e);_B.__1b.w(_B.__16);_B.__1b.h(_B.__1c);if ((typeof _B.__4[(_B.__18).toLowerCase()]==="function")==false) {throw "The '" + _B.__2 + "_ScanSuccess' callback has not been generated!";return;}if ((typeof _B.__4[(_B.__19).toLowerCase()]==="function")==false) {throw "The '" + _B.__2 + "_ScanFailure' callback has not been generated!";return;}};_B.addtoparent=function(__a32,__a2c) {__a32=_banano_sithasodaisy_sduishared.cleanid(__a32);_B.__5=u("#"+__a32);_B.designercreateview(_B.__5,__a2c,_B);};}