
/* sithasodaisystories */
function banano_sithasodaisystories_sduistories() {var _B=this;_B._custprops={};_B._mcallback={};_B._meventname="";_B._melement=null;_B._mtarget=null;_B._mname="";_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._mmarginaxytblr="";_B._mpaddingaxytblr="";_B._mparentid="";_B._mvisible=true;_B._tag={};_B._options={};_B._bautofullscreen=false;_B._bavatars=true;_B._bbackbutton=true;_B._bbacknative=false;_B._bcubeeffect=true;_B._bhasmodal=false;_B._blistof=false;_B._blocalstorage=true;_B._bopeneffect=true;_B._bpaginationarrows=false;_B._bprevioustap=true;_B._breactive=false;_B._brtl=false;_B._sskin="snapgram";_B._stories=[];_B._skin_facesnap="facesnap";_B._skin_snapgram="snapgram";_B._skin_snapssenger="snapssenger";_B._skin_vemdezap="vemdezap";_B._root= new banano_sithasodaisy_sduidiv();_B._zuck=null;_B._sheight="";_B._swidth="";_B._storymap={};_B.initialize=function(_callback,_name,_eventname) {_B._meventname=_banano_sithasodaisy_sduishared.cleanid(_eventname);_B._mname=_banano_sithasodaisy_sduishared.cleanid(_name);_B._mcallback=_callback;_B._custprops={};_B._options={};_B._stories.length=0;_B._storymap={};};_B.getelement=function() {return _B._melement;};_B.getid=function() {return _B._mname;};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mtarget=u("#"+_targetid);_B.designercreateview(_B._mtarget,_props,_B);};_B.remove=function() {_B._melement.remove();_B=null;};_B.setelement=function(_e) {_B._melement=_e;};_B.clear=function() {if (_B._melement!=null) {_B._melement.empty();}_B._stories.length=0;_B._storymap={};};_B.append=function(_tmp) {if (_B._melement!=null) {_B._melement.append(_tmp);}};_B.sethtml=function(_shtml) {if (_B._melement!=null) {_B._melement.html(_shtml);}};_B.linkexisting=function() {_B._melement=u("#" + _B._mname + "");};_B.triggerevent=function(_event,_params) {if (_B._melement!=null) {_B._melement.trigger(_event, _params);}};_B.gethere=function() {return "#" + _B._mname + "";};_B.addattr=function(_attr,_text) {if (_B._melement!=null) {_B._melement.attr(_attr,_text);}};_B.adddataattr=function(_attr,_text) {if (_B._melement!=null) {_B._melement.data(_attr,_text);}};_B.getdataattr=function(_attr) {var _text;if (_B._melement!=null) {_text=_B._melement.data(_attr);return _text;} else {return "";}};_B.getattr=function(_attr) {var _text;if (_B._melement!=null) {_text=_B._melement.attr(_attr);return _text;} else {return "";}};_B.addclass=function(_text) {var _lst,_c;if (_B._melement!=null) {_lst=_banano_sithasodaisy_sduishared.strparse(" ",_text);for (var _cindex=0;_cindex<_lst.length;_cindex++) {_c=_lst[_cindex];_B._melement.addClass(_c);}}};_B.removeclass=function(_text) {var _lst,_c;if (_B._melement!=null) {_lst=_banano_sithasodaisy_sduishared.strparse(" ",_text);for (var _cindex=0;_cindex<_lst.length;_cindex++) {_c=_lst[_cindex];_B._melement.removeClass(_c);}}};_B.addattrmap=function(_ms) {var _k,_v;if (Object.keys(_ms).length==0) { return ;}var _kKeys = Object.keys(_ms);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_ms[_k];_B.addattr(_k,_v,_B);}};_B.removeattr=function(_attr) {if (_B._melement!=null) {_B._melement.nodes[0].removeAttribute(_attr);}};_B.addstylecomputed=function(_attr,_text) {if (_B._melement!=null) {_B._melement.nodes[0]["style"]["setProperty"](_attr,_text);}};_B.addstylemap=function(_ms) {if (Object.keys(_ms).length==0) { return ;}if (_B._melement!=null) {_B._melement.css(JSON.parse(JSON.stringify(_ms)));}};_B.addstyle=function(_k,_v) {var _m;_m={};_m[_k]=_v;_B.addstylemap(_m,_B);};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};_B.oneventmethod=function(_event,_module,_methodname,_args) {var _cb;_cb=function(..._args) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](..._args,_B)};};if (_B._melement!=null) {_B._melement.nodes[0]["on"](_event,_cb);}};_B.getthis=function() {var _this;_this=null;_this=this;return _this;};_B.on=function(_event,_args) {_B.onevent(_event,_B._mcallback,"" + _B._meventname + "_" + _event + "",_args,_B);};_B.onevent=function(_event,_module,_methodname,_args) {var _cb;_event=_event.split(":").join("");_event=_event.split(".").join("");_event=_event.split("-").join("");if ((typeof _module[(_methodname).toLowerCase()]==="function")==false) { return ;}_cb=null;_cb=function(..._args) {if (typeof _module[(_methodname).toLowerCase()]==="function") {return _module[(_methodname).toLowerCase()](..._args,_B)};};_B._melement.nodes[0].removeEventListener(_event, _cb, true);_B._melement.nodes[0].addEventListener(_event, _cb, true);};_B.designercreateview=function(_target,_props) {var _se;_B._mtarget=_target;if (_props!=null) {_B._custprops=_props;_B._mparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._mparentid=_banano_sithasodaisy_sduishared.cstr(_B._mparentid);_B._mparentid=_banano_sithasodaisy_sduishared.cleanid(_B._mparentid);_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mclasses=_banano_sithasodaisy_sduishared.cstr(_B._mclasses);_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mstyles=_banano_sithasodaisy_sduishared.cstr(_B._mstyles);_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._mattributes=_banano_sithasodaisy_sduishared.cstr(_B._mattributes);_B._mmarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._mmarginaxytblr=_banano_sithasodaisy_sduishared.cstr(_B._mmarginaxytblr);_B._mpaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];_B._mpaddingaxytblr=_banano_sithasodaisy_sduishared.cstr(_B._mpaddingaxytblr);_B._mvisible=_props["Visible"]===undefined? true:_props["Visible"];_B._mvisible=_banano_sithasodaisy_sduishared.cbool(_B._mvisible);_B._bautofullscreen=_props["AutoFullScreen"]===undefined? false:_props["AutoFullScreen"];_B._bautofullscreen=_banano_sithasodaisy_sduishared.cbool(_B._bautofullscreen);_B._bavatars=_props["Avatars"]===undefined? true:_props["Avatars"];_B._bavatars=_banano_sithasodaisy_sduishared.cbool(_B._bavatars);_B._bbackbutton=_props["BackButton"]===undefined? true:_props["BackButton"];_B._bbackbutton=_banano_sithasodaisy_sduishared.cbool(_B._bbackbutton);_B._bbacknative=_props["BackNative"]===undefined? false:_props["BackNative"];_B._bbacknative=_banano_sithasodaisy_sduishared.cbool(_B._bbacknative);_B._bcubeeffect=_props["CubeEffect"]===undefined? false:_props["CubeEffect"];_B._bcubeeffect=_banano_sithasodaisy_sduishared.cbool(_B._bcubeeffect);_B._bhasmodal=_props["HasModal"]===undefined? false:_props["HasModal"];_B._bhasmodal=_banano_sithasodaisy_sduishared.cbool(_B._bhasmodal);_B._blistof=_props["ListOf"]===undefined? false:_props["ListOf"];_B._blistof=_banano_sithasodaisy_sduishared.cbool(_B._blistof);_B._blocalstorage=_props["LocalStorage"]===undefined? true:_props["LocalStorage"];_B._blocalstorage=_banano_sithasodaisy_sduishared.cbool(_B._blocalstorage);_B._bopeneffect=_props["OpenEffect"]===undefined? true:_props["OpenEffect"];_B._bopeneffect=_banano_sithasodaisy_sduishared.cbool(_B._bopeneffect);_B._bpaginationarrows=_props["PaginationArrows"]===undefined? false:_props["PaginationArrows"];_B._bpaginationarrows=_banano_sithasodaisy_sduishared.cbool(_B._bpaginationarrows);_B._bprevioustap=_props["PreviousTap"]===undefined? true:_props["PreviousTap"];_B._bprevioustap=_banano_sithasodaisy_sduishared.cbool(_B._bprevioustap);_B._breactive=_props["Reactive"]===undefined? false:_props["Reactive"];_B._breactive=_banano_sithasodaisy_sduishared.cbool(_B._breactive);_B._brtl=_props["Rtl"]===undefined? false:_props["Rtl"];_B._brtl=_banano_sithasodaisy_sduishared.cbool(_B._brtl);_B._sskin=_props["Skin"]===undefined? "snapgram":_props["Skin"];_B._sskin=_banano_sithasodaisy_sduishared.cstr(_B._sskin);_B._sheight=_props["Height"]===undefined? "full":_props["Height"];_B._sheight=_banano_sithasodaisy_sduishared.cstr(_B._sheight);_B._swidth=_props["Width"]===undefined? "full":_props["Width"];_B._swidth=_banano_sithasodaisy_sduishared.cstr(_B._swidth);}if (_B._mparentid!="") {if (u("#" + _B._mparentid + "").length>0==false) {throw "" + _B._mname + ".DesignerCreateView: '" + _B._mparentid + "' parent does not exist!";return;}_B._mtarget=u("#" + _B._mparentid + "");}_se= new banano_sithasodaisy_sithasoelement();_se.initialize();_se._mclasses=_B._mclasses;_se._mstyles=_B._mstyles;_se._mpaddingaxytblr=_B._mpaddingaxytblr;_se._mmarginaxytblr=_B._mmarginaxytblr;_se._mattributes=_B._mattributes;switch ("" + _B._sskin) {case "" + "facesnap":_B._bavatars=true;_B._blistof=false;_B._bautofullscreen=true;_B._bcubeeffect=false;_B._bpaginationarrows=true;break;case "" + "snapgram":_B._bavatars=true;_B._blistof=false;_B._bautofullscreen=false;_B._bcubeeffect=true;_B._bpaginationarrows=false;break;case "" + "snapssenger":_B._bavatars=false;_B._blistof=false;_B._bautofullscreen=false;_B._bcubeeffect=false;_B._bpaginationarrows=false;break;case "" + "vemdezap":_B._bavatars=false;_B._blistof=true;_B._bautofullscreen=false;_B._bcubeeffect=false;_B._bpaginationarrows=true;break;}_B._options["autoFullScreen"]=_B._bautofullscreen;_B._options["avatars"]=_B._bavatars;_B._options["backButton"]=_B._bbackbutton;_B._options["backNative"]=_B._bbacknative;_B._options["cubeEffect"]=_B._bcubeeffect;_B._options["hasModal"]=_B._bhasmodal;_B._options["list"]=_B._blistof;_B._options["localStorage"]=_B._blocalstorage;_B._options["openEffect"]=_B._bopeneffect;_B._options["paginationArrows"]=_B._bpaginationarrows;_B._options["previousTap"]=_B._bprevioustap;_B._options["reactive"]=_B._breactive;_B._options["rtl"]=_B._brtl;_B._options["skin"]=_B._sskin;_se.buildattr();_B._melement=_B._mtarget.append("<div id=\"" + _B._mname + "\" " + _se._exattrs + " " + _se._exattrs1 + "></div>").find("#"+_B._mname).bananofirst();if (_B._mvisible==false) {_B.hide(_B);}_B.setheight(_B._sheight,_B);_B.setwidth(_B._swidth,_B);_B.refresh(_B);};_B.setheight=function(_s) {_B._sheight=_s;_B._custprops["Height"]=_s;_B._root.h(_s);};_B.setwidth=function(_s) {_B._swidth=_s;_B._custprops["Width"]=_s;_B._root.w(_s);};_B.setautofullscreen=function(_b) {_B._bautofullscreen=_b;_B._custprops["AutoFullScreen"]=_b;_B._options["autoFullScreen"]=_b;};_B.setavatars=function(_b) {_B._bavatars=_b;_B._custprops["Avatars"]=_b;_B._options["avatars"]=_b;};_B.setbackbutton=function(_b) {_B._bbackbutton=_b;_B._custprops["BackButton"]=_b;_B._options["backButton"]=_b;};_B.setbacknative=function(_b) {_B._bbacknative=_b;_B._custprops["BackNative"]=_b;_B._options["backNative"]=_b;};_B.setcubeeffect=function(_b) {_B._bcubeeffect=_b;_B._custprops["CubeEffect"]=_b;_B._options["cubeEffect"]=_b;};_B.sethasmodal=function(_b) {_B._bhasmodal=_b;_B._custprops["HasModal"]=_b;_B._options["hasModal"]=_b;};_B.setlistof=function(_b) {_B._blistof=_b;_B._custprops["ListOf"]=_b;_B._options["listOf"]=_b;};_B.setlocalstorage=function(_b) {_B._blocalstorage=_b;_B._custprops["LocalStorage"]=_b;_B._options["localStorage"]=_b;};_B.setopeneffect=function(_b) {_B._bopeneffect=_b;_B._custprops["OpenEffect"]=_b;_B._options["openEffect"]=_b;};_B.setpaginationarrows=function(_b) {_B._bpaginationarrows=_b;_B._custprops["PaginationArrows"]=_b;_B._options["paginationArrows"]=_b;};_B.setprevioustap=function(_b) {_B._bprevioustap=_b;_B._custprops["PreviousTap"]=_b;_B._options["previousTap"]=_b;};_B.setreactive=function(_b) {_B._breactive=_b;_B._custprops["Reactive"]=_b;_B._options["reactive"]=_b;};_B.setrtl=function(_b) {_B._brtl=_b;_B._custprops["Rtl"]=_b;_B._options["rtl"]=_b;};_B.setskin=function(_s) {_B._sskin=_s;_B._custprops["Skin"]=_s;_B._options["skin"]=_s;};_B.setstories=function(_s) {_B._stories=_s;_B._options["stories"]=_s;};_B.getautofullscreen=function() {return _B._bautofullscreen;};_B.getavatars=function() {return _B._bavatars;};_B.getbackbutton=function() {return _B._bbackbutton;};_B.getbacknative=function() {return _B._bbacknative;};_B.getcubeeffect=function() {return _B._bcubeeffect;};_B.gethasmodal=function() {return _B._bhasmodal;};_B.getlistof=function() {return _B._blistof;};_B.getlocalstorage=function() {return _B._blocalstorage;};_B.getopeneffect=function() {return _B._bopeneffect;};_B.getpaginationarrows=function() {return _B._bpaginationarrows;};_B.getprevioustap=function() {return _B._bprevioustap;};_B.getreactive=function() {return _B._breactive;};_B.getrtl=function() {return _B._brtl;};_B.getskin=function() {return _B._sskin;};_B.getstories=function() {return _B._stories;};_B.refresh=function() {var _storymap;_B._stories.length=0;for (_storymapKEY in _B._storymap) {var _storymap=_B._storymap[_storymapKEY];_B._stories.push(_storymap);}_B._options["stories"]=_B._stories;_B._zuck=Zuck(_B._melement.nodes[0],_B._options);};_B.hideonsmall=function() {_B._melement.addClass("max-md:hidden");};_B.hideonmedium=function() {_B._melement.addClass("max-lg:hidden");};_B.hideonlarge=function() {_B._melement.addClass("max-xl:hidden");};_B.parsedate=function(_s) {var _bodate,_valueof,_timeindex;_bodate=null;_bodate=new Date(_s);_valueof=_bodate["valueOf"]();_valueof=_banano_sithasodaisy_sduishared.cint(_valueof);_timeindex=_valueof/1000;return _timeindex;};_B.addstory=function(_sid,_sname,_sphoto,_stime) {var _story,_items;_story={};_items=[];_items.length=0;_story["id"]=_sid;_story["name"]=_sname;_story["photo"]=_sphoto;_story["time"]=_B.parsedate(_stime,_B);_story["items"]=_items;_B._storymap[_sid]=_story;};_B.addphoto=function(_storyid,_itemid,_itemlength,_itemsrc,_itempreview,_itemlink,_itemlinktext,_itemtime) {var _story,_items,_item;if ((_storyid in _B._storymap)) {_story=_B._storymap[_storyid];_items=_story["items"];_item={};_item["id"]=_itemid;_item["type"]="photo";_item["length"]=_itemlength;_item["src"]=_itemsrc;_item["preview"]=_itempreview;_item["link"]=_itemlink;if (_itemlink=="") {_item["linkText"]=false;} else {_item["linkText"]=_itemlinktext;}_item["time"]=_B.parsedate(_itemtime,_B);_items.push(_item);_story["items"]=_items;_B._storymap[_storyid]=_story;}};_B.addvideo=function(_storyid,_itemid,_itemlength,_itemsrc,_itempreview,_itemlink,_itemlinktext,_itemtime) {var _story,_items,_item;if ((_storyid in _B._storymap)) {_story=_B._storymap[_storyid];_items=_story["items"];_item={};_item["id"]=_itemid;_item["type"]="video";_item["length"]=_itemlength;_item["src"]=_itemsrc;_item["preview"]=_itempreview;_item["link"]=_itemlink;if (_itemlink=="") {_item["linkText"]=false;} else {_item["linkText"]=_itemlinktext;}_item["time"]=_B.parsedate(_itemtime,_B);_items.push(_item);_story["items"]=_items;_B._storymap[_storyid]=_story;}};}