
/* sithasodaisywebcam */
function banano_sithasodaisywebcam_sduiwebcam() {var _B=this;_B._custprops={};_B._mname="";_B._meventname="";_B._mcallback={};_B._mtarget=null;_B._melement=null;_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._sparentid="";_B._bhidden=false;_B._smarginaxytblr="";_B._spaddingaxytblr="";_B._webcam=null;_B._root=(typeof banano_sithasodaisy_sduidiv === 'function') ? new banano_sithasodaisy_sduidiv(): null;_B._swidth="";_B._sheight="";_B._simageformat="";_B._sjpeqquality="";_B._tag="";_B._opt={};_B.initialize=function(_callback,_name,_eventname) {_B._mname=_name.toLowerCase();_B._meventname=_eventname.toLowerCase();_B._mcallback=_callback;_B._mname=_B._mname.split("#").join("");_B._meventname=_B._meventname.split("#").join("");_B._opt={};};_B.getid=function() {return _B._mname;};_B.gethere=function() {return "#" + _B._mname + "";};_B.addwebcam=function(_callback,_parentid,_id) {var _props;_B._mname=_id.toLowerCase();_B._meventname=_B._mname.toLowerCase();_B._mcallback=_callback;_B._mname=_B._mname.split("#").join("");_B._meventname=_B._meventname.split("#").join("");_props={};_props["ParentID"]=_parentid;_props["Width"]="490px";_props["Height"]="390px";_props["ImageFormat"]="jpeg";_props["JPEQQuality"]="90";_B._mtarget=u("#"+_parentid.toLowerCase());_B.designercreateview(_B._mtarget,_props,_B);_B._opt={};return _B;};_B.designercreateview=function(_target,_props) {_B._custprops=_props;_B._mtarget=_target;if (_props!=null) {_B._swidth=_props["Width"]===undefined? "490px":_props["Width"];_B._sheight=_props["Height"]===undefined? "390px":_props["Height"];_B._simageformat=_props["ImageFormat"]===undefined? "jpeg":_props["ImageFormat"];_B._sjpeqquality=_props["JPEQQuality"]===undefined? "90":_props["JPEQQuality"];_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._sparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._sparentid=_banano_sithasodaisy_sduishared.cstr(_B._sparentid);_B._bhidden=_props["Hidden"]===undefined? false:_props["Hidden"];_B._bhidden=_banano_sithasodaisy_sduishared.parsebool(_B._bhidden);_B._smarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._spaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];}if (_B._sparentid!="") {_B._sparentid=_B._sparentid.toLowerCase();_B._mtarget=u("#" + _B._sparentid + "");}if (u("#" + _B._mname + "").length>0) {_B._melement=u("#" + _B._mname + "");} else {_B._melement=_B._mtarget.append("<div id=\"" + _B._mname + "\" class=\"flex justify-center items-center p-4 bg-base-100 rounded-box shadow w-[" + _B._swidth + "] h-[" + _B._sheight + "]\"><img id=\"" + _B._mname + "_image\" class=\"w-[" + _B._swidth + "] h-[" + _B._sheight + "] rounded-box\" src=\"./assets/placeholderimg.jpg\" alt=\"\"></img><div id=\"" + _B._mname + "_attach\" class=\"w-[" + _B._swidth + "] h-[" + _B._sheight + "] rounded-box hidden\"></div></div>").find("#"+_B._mname).bananofirst();}_B._root.assignelement(_B._mcallback,_B._mname);_B._root.classes(_B._mclasses);_B._root.styles(_B._mstyles);_B._root.attributes(_B._mattributes);if (_B._bhidden) {_B._root.hide();}_B._root.paddingaxytblr(_B._spaddingaxytblr);_B._root.marginaxytblr(_B._smarginaxytblr);_B._root.on("click",_B._mcallback,"" + _B._mname + "_click");};_B.startwebcam=function() {u("#" + _B._mname + "_image").addClass("hidden");u("#" + _B._mname + "_attach").removeClass("hidden");_B._swidth=_banano_sithasodaisy_sduishared.val(_B._swidth);_B._sheight=_banano_sithasodaisy_sduishared.val(_B._sheight);_B._webcam=Webcam;_B._opt={};_B._opt["width"]=_B._swidth;_B._opt["height"]=_B._sheight;_B._opt["image_format"]=_B._simageformat;_B._opt["jpeg_quality"]=_B._sjpeqquality;_banano_sithasodaisy_sduishared.putrecursive(_B._opt,"constraints.facingMode","environment");_banano_sithasodaisy_sduishared.putrecursive(_B._opt,"constraints.frameRate",60);_B._webcam["set"](_B._opt);_B._webcam["attach"]("#" + _B._mname + "_attach");};_B.stopwebcam=function() {_B._webcam["reset"]();u("#" + _B._mname + "_image").removeClass("hidden");u("#" + _B._mname + "_attach").addClass("hidden");};_B.freeze=async function() {await _banano_sithasodaisy_sduishared.playsound("./assets/shutter.mp3");_B._webcam["freeze"]();};_B.unfreeze=function() {_B._webcam["unfreeze"]();};_B.takepicture=async function() {var _snapcb;await _banano_sithasodaisy_sduishared.playsound("./assets/shutter.mp3");_snapcb=null;_snapcb=_B;_B._webcam["snap"](_snapcb["onsnapsuccess"]);};_B.onsnapsuccess=function(_data_uri) {u("#" + _B._mname + "_result").attr("src",_data_uri);_B._tag=_data_uri;if ((typeof _B._mcallback[("" + _B._mname + "_SnapSuccess").toLowerCase()]==="function")) {(function() {if (typeof _B._mcallback[("" + _B._mname + "_SnapSuccess").toLowerCase()]==="function") {var CSr = _B._mcallback[("" + _B._mname + "_SnapSuccess").toLowerCase()](_data_uri,_B);if(CSr!=null) {return CSr}}})();}};_B.setw=function(_varwidth) {_B._swidth=_varwidth;};_B.getw=function() {return _B._swidth;};_B.seth=function(_varheight) {_B._sheight=_varheight;};_B.geth=function() {return _B._sheight;};_B.setimageformat=function(_varimageformat) {_B._simageformat=_varimageformat;};_B.getimageformat=function() {return _B._simageformat;};_B.setjpeqquality=function(_varjpeqquality) {_B._sjpeqquality=_varjpeqquality;};_B.getjpeqquality=function() {return _B._sjpeqquality;};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mtarget=u("#"+_targetid);_B.designercreateview(_B._mtarget,_props,_B);};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};}