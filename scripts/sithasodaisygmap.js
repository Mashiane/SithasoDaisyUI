
/* sithasodaisygmap */
function banano_sithasodaisygmap_sduigmap() {var _B=this;_B._custprops={};_B._mback={};_B._melement=null;_B._mparent=null;_B._mname="";_B._root= new banano_sithasodaisy_sduidiv();_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._smarginaxytblr="";_B._spaddingaxytblr="";_B._mparentid="";_B._bvisible=false;_B._sapikey="";_B._sheight="";_B._slat="";_B._slon="";_B._brotatecontrol=false;_B._bmaptypecontrol=false;_B._smaptype="";_B._boverviewmapcontrol=false;_B._bpancontrol=false;_B._bstreetviewcontrol=false;_B._swidth="";_B._izoom=0;_B._bzoomcontrol=false;_B._options={};_B._markers={};_B._polylines={};_B._polygons={};_B._ipolylines={};_B._ipolygons={};_B._circles={};_B._rectangles={};_B._overlays={};_B._gmap=null;_B._bstatic=false;_B.designercreateview=function(_target,_props) {_B._custprops=_props;_B._mparent=_target;if (_props!=null) {_B._mparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._mparentid=_banano_sithasodaisy_sduishared.cstr(_B._mparentid);_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._smarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._spaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];_B._bvisible=_props["Visible"]===undefined? true:_props["Visible"];_B._bvisible=_banano_sithasodaisy_sduishared.parsebool(_B._bvisible);_B._sapikey=_props["ApiKey"]===undefined? "":_props["ApiKey"];_B._sapikey=_banano_sithasodaisy_sduishared.cstr(_B._sapikey);_B._sheight=_props["Height"]===undefined? "500px":_props["Height"];_B._sheight=_banano_sithasodaisy_sduishared.cstr(_B._sheight);_B._slat=_props["Lat"]===undefined? "0.0":_props["Lat"];_B._slat=_banano_sithasodaisy_sduishared.cstr(_B._slat);_B._slon=_props["Lon"]===undefined? "0.00":_props["Lon"];_B._slon=_banano_sithasodaisy_sduishared.cstr(_B._slon);_B._bmaptypecontrol=_props["MapTypeControl"]===undefined? true:_props["MapTypeControl"];_B._bmaptypecontrol=_banano_sithasodaisy_sduishared.parsebool(_B._bmaptypecontrol);_B._smaptype=_props["MapType"]===undefined? "roadmap":_props["MapType"];_B._smaptype=_banano_sithasodaisy_sduishared.cstr(_B._smaptype);_B._boverviewmapcontrol=_props["OverviewMapControl"]===undefined? true:_props["OverviewMapControl"];_B._boverviewmapcontrol=_banano_sithasodaisy_sduishared.parsebool(_B._boverviewmapcontrol);_B._bpancontrol=_props["PanControl"]===undefined? true:_props["PanControl"];_B._bpancontrol=_banano_sithasodaisy_sduishared.parsebool(_B._bpancontrol);_B._bstreetviewcontrol=_props["StreetViewControl"]===undefined? true:_props["StreetViewControl"];_B._bstreetviewcontrol=_banano_sithasodaisy_sduishared.parsebool(_B._bstreetviewcontrol);_B._swidth=_props["Width"]===undefined? "100%":_props["Width"];_B._swidth=_banano_sithasodaisy_sduishared.cstr(_B._swidth);_B._izoom=_props["Zoom"]===undefined? 15:_props["Zoom"];_B._izoom=_banano_sithasodaisy_sduishared.cint(_B._izoom);_B._bzoomcontrol=_props["ZoomControl"]===undefined? true:_props["ZoomControl"];_B._bzoomcontrol=_banano_sithasodaisy_sduishared.parsebool(_B._bzoomcontrol);_B._brotatecontrol=_props["RotateControl"]===undefined? false:_props["RotateControl"];_B._brotatecontrol=_banano_sithasodaisy_sduishared.parsebool(_B._brotatecontrol);_B._bstatic=_props["Static"]===undefined? false:_props["Static"];_B._bstatic=_banano_sithasodaisy_sduishared.parsebool(_B._bstatic);}if (_B._mparentid=="") {_B._mparentid=_B._mparent.attr('id');}_B.addgmap(_B._mback,_B._mparentid,_B._mname,_B);_B._root.classes(_B._mclasses);_B._root.attributes(_B._mattributes);_B._root.styles(_B._mstyles);_B._root.paddingaxytblr(_B._spaddingaxytblr);_B._root.marginaxytblr(_B._smarginaxytblr);if (_B._bvisible==false) {_B.hide(_B);}_B.setapikey(_B._sapikey,_B);_B.setheight(_B._sheight,_B);_B.setlat(_B._slat,_B);_B.setlng(_B._slon,_B);_B.setmaptypecontrol(_B._bmaptypecontrol,_B);_B.setmaptype(_B._smaptype,_B);_B.setoverviewmapcontrol(_B._boverviewmapcontrol,_B);_B.setpancontrol(_B._bpancontrol,_B);_B.setstreetviewcontrol(_B._bstreetviewcontrol,_B);_B.setwidth(_B._swidth,_B);_B.setzoom(_B._izoom,_B);_B.setzoomcontrol(_B._bzoomcontrol,_B);_B.setrotatecontrol(_B._brotatecontrol,_B);_B.setstatic(_B._bstatic,_B);_B.build(_B);};_B.initialize=function(_callback,_cname,_eventname) {_B._mname=_banano_sithasodaisy_sduishared.cleanid(_cname);_B._mback=_callback;_B._options={};_B._markers={};_B._polylines={};_B._polygons={};_B._circles={};_B._rectangles={};_B._ipolylines={};_B._ipolygons={};_B._overlays={};_B._options["div"]="#" + _B._mname + "";};_B.clear=function() {_B._markers={};_B._polylines={};_B._polygons={};_B._circles={};_B._rectangles={};_B._ipolylines={};_B._ipolygons={};_B._overlays={};_B.removemarkers(_B);_B.removepolylines(_B);_B.removepolygons(_B);_B.removeoverlays(_B);};_B.addgmap=function(_mcallback,_parentid,_id) {var _e,_cbclick,_cbdblclick,_cbdragend,_cbdrag,_cbdragstart,_cbmousemove,_cbmouseout,_cbmouseover,_cbcontextmenu,_cbzoomchanged;_parentid=_banano_sithasodaisy_sduishared.cleanid(_parentid);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B._mname=_id;_B._mback=_mcallback;if (u("#" + _parentid + "").length>0==false) {throw "SDUIGMap.Initialize: '" + _parentid + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B._melement=u("#" + _id + "");} else {_B._mparent=u("#" + _parentid + "");_B._melement=_B._mparent.append("<div id=\"" + _B._mname + "\"><img id=\"" + _B._mname + "img\" alt=\"\" class=\"hidden\"></img></div>").find("#" + _id + "").bananofirst();}_B.assignelement(_mcallback,_B._mname,_B);_e=null;if ((typeof _B._mback[("" + _B._mname + "_click").toLowerCase()]==="function")) {_cbclick=function(_e) {if (typeof _B._mback[("" + _B._mname + "_click").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_click").toLowerCase()](_e,_B)};};_B._options["click"]=_cbclick;}if ((typeof _B._mback[("" + _B._mname + "_dblclick").toLowerCase()]==="function")) {_cbdblclick=function(_e) {if (typeof _B._mback[("" + _B._mname + "_dblclick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_dblclick").toLowerCase()](_e,_B)};};_B._options["dblclick"]=_cbdblclick;}if ((typeof _B._mback[("" + _B._mname + "_dragend").toLowerCase()]==="function")) {_cbdragend=function(_e) {if (typeof _B._mback[("" + _B._mname + "_dragend").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_dragend").toLowerCase()](_e,_B)};};_B._options["dragend"]=_cbdragend;}if ((typeof _B._mback[("" + _B._mname + "_drag").toLowerCase()]==="function")) {_cbdrag=function(_e) {if (typeof _B._mback[("" + _B._mname + "_drag").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_drag").toLowerCase()](_e,_B)};};_B._options["drag"]=_cbdrag;}if ((typeof _B._mback[("" + _B._mname + "_dragstart").toLowerCase()]==="function")) {_cbdragstart=function(_e) {if (typeof _B._mback[("" + _B._mname + "_dragstart").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_dragstart").toLowerCase()](_e,_B)};};_B._options["dragstart"]=_cbdragstart;}if ((typeof _B._mback[("" + _B._mname + "_mousemove").toLowerCase()]==="function")) {_cbmousemove=function(_e) {if (typeof _B._mback[("" + _B._mname + "_mousemove").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_mousemove").toLowerCase()](_e,_B)};};_B._options["mousemove"]=_cbmousemove;}if ((typeof _B._mback[("" + _B._mname + "_mouseout").toLowerCase()]==="function")) {_cbmouseout=function(_e) {if (typeof _B._mback[("" + _B._mname + "_mouseout").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_mouseout").toLowerCase()](_e,_B)};};_B._options["mouseout"]=_cbmouseout;}if ((typeof _B._mback[("" + _B._mname + "_mouseover").toLowerCase()]==="function")) {_cbmouseover=function(_e) {if (typeof _B._mback[("" + _B._mname + "_mouseover").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_mouseover").toLowerCase()](_e,_B)};};_B._options["mouseover"]=_cbmouseover;}if ((typeof _B._mback[("" + _B._mname + "_contextmenu").toLowerCase()]==="function")) {_cbcontextmenu=function(_e) {if (typeof _B._mback[("" + _B._mname + "_contextmenu").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_contextmenu").toLowerCase()](_e,_B)};};_B._options["contextmenu"]=_cbcontextmenu;}if ((typeof _B._mback[("" + _B._mname + "_zoomchanged").toLowerCase()]==="function")) {_cbzoomchanged=function(_e) {if (typeof _B._mback[("" + _B._mname + "_zoomchanged").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_zoomchanged").toLowerCase()](_e,_B)};};_B._options["zoom_changed"]=_cbzoomchanged;}};_B.build=function() {var _url,_maptypeids,_maptypecontroloptions;if (_B._bstatic) {_url=_B.staticmapurl(_B._swidth,_B._sheight,_B._slat,_B._slon,_B._izoom,_B);u("#" + _B._mname + "img").attr("src",_url);return;}_maptypeids=[];_maptypeids.length=0;_maptypeids.push(...["hybrid","roadmap","satellite","terrain"]);_maptypecontroloptions={};_maptypecontroloptions={};_maptypecontroloptions["mapTypeIds"]=_maptypeids;_B._options["mapTypeControlOptions"]=_maptypecontroloptions;_B._gmap=new GMaps(_B._options);};_B.shadow=function(_s) {_B._root.shadow(_s);};_B.roundedbox=function() {_B._root.roundedbox();};_B.setapikey=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sapikey=_s;_B._options["apiKey"]=_s;};_B.setheight=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._options["height"]=_s;_B._root.addstyle("height",_s);};_B.setstatic=function(_b) {if (_b) {u("#" + _B._mname + "img").removeClass("hidden");u("#" + _B._mname + "img").attr("width",_B._swidth);u("#" + _B._mname + "img").attr("height",_B._sheight);} else {u("#" + _B._mname + "img").addClass("hidden");}};_B.setlat=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_s=_banano_sithasodaisy_sduishared.cdbl(_s);_B._options["lat"]=parseFloat(_s);};_B.setlng=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_s=_banano_sithasodaisy_sduishared.cdbl(_s);_B._options["lng"]=parseFloat(_s);};_B.setmaptypecontrol=function(_b) {_B._options["mapTypeControl"]=_b;return;};_B.setrotatecontrol=function(_b) {_B._options["rotateControl"]=_b;return;};_B.setmaptype=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._options["mapType"]=_s;};_B.setoverviewmapcontrol=function(_b) {_B._options["overviewMapControl"]=_b;return;};_B.setpancontrol=function(_b) {_B._options["panControl"]=_b;return;};_B.setstreetviewcontrol=function(_b) {_B._options["streetViewControl"]=_b;return;};_B.setwidth=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._options["width"]=_s;_B._root.addstyle("width",_s);};_B.setzoom=function(_i) {_i=_banano_sithasodaisy_sduishared.cstr(_i);_i=_banano_sithasodaisy_sduishared.cint(_i);_B._options["zoom"]=parseInt(_i);};_B.setzoomcontrol=function(_b) {_B._options["zoomControl"]=_b;return;};_B.assignelement=function(_mcallback,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B._mname=_id;_B._mback=_mcallback;_B._melement=u("#" + _id + "");_B._root.assignelement(_B._mback,_B._mname);_B._root.addstyle("display","block");};_B.enable=function() {_B._root.disabled(false);};_B.disable=function() {_B._root.disabled(true);};_B.getname=function() {return "" + _B._mname + "";};_B.gethere=function() {return "#" + _B._mname + "";};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mparent=u("#"+_targetid);_B.designercreateview(_B._mparent,_props,_B);};_B.addmarker=function(_cid,_lat,_lng,_title,_info,_color) {var _cm,_url,_e,_cbmc,_cbmo,_m;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_cm={};_cm["id"]=_cid;_cm["lat"]=_lat;_cm["lng"]=_lng;_cm["draggable"]=true;if (_color!="") {_url="http://maps.google.com/mapfiles/ms/icons/" + _color + "-dot.png";_url=_url.toLowerCase();_banano_sithasodaisy_sduishared.putrecursive(_cm,"icon.url",_url);}if (_title!="") {_cm["title"]=_title;}if (_info!="") {_banano_sithasodaisy_sduishared.putrecursive(_cm,"infoWindow.content",_info);}if ((typeof _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}if ((typeof _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()]==="function")) {_e=null;_cbmo=function(_e) {if (typeof _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()](_e,_B)};};_cm["mouseover"]=_cbmo;}_m=_B._gmap["addMarker"](_cm);_B._markers[_cid]=_m;};_B.addmarker1=function(_cid,_lat,_lng,_title,_info,_infomaxwidth,_icon,_iconwidth,_iconheight) {var _cm,_sz,_ip,_ac,_icn,_e,_cbmc,_cbmo,_m;_infomaxwidth=_banano_sithasodaisy_sduishared.cint(_infomaxwidth);_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_iconwidth=_banano_sithasodaisy_sduishared.cdbl(_iconwidth);_iconheight=_banano_sithasodaisy_sduishared.cdbl(_iconheight);_cm={};_cm["id"]=_cid;_cm["lat"]=_lat;_cm["lng"]=_lng;_cm["draggable"]=true;if (_title!="") {_cm["title"]=_title;}if (_icon!="") {_sz=null;_sz=new google.maps.Size(_iconwidth,_iconheight);_ip=null;_ip=new google.maps.Point(0,0);_ac=null;_ac=new google.maps.Point(0,_iconheight);_icn={};_icn["url"]=_icon;_icn["scaledSize"]=_sz;_icn["origin"]=_ip;_icn["anchor"]=_ac;_cm["icon"]=_icn;}if (_info!="") {_banano_sithasodaisy_sduishared.putrecursive(_cm,"infoWindow.content",_info);_banano_sithasodaisy_sduishared.putrecursive(_cm,"infoWindow.maxWidth",_infomaxwidth);}if ((typeof _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_MarkerClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}if ((typeof _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()]==="function")) {_e=null;_cbmo=function(_e) {if (typeof _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_MarkerMouseOver").toLowerCase()](_e,_B)};};_cm["mouseover"]=_cbmo;}_m=_B._gmap["addMarker"](_cm);_B._markers[_cid]=_m;};_B.removecircle=function(_cid) {var _m;if ((_cid in _B._circles)) {_m=_B._circles[_cid];_B._gmap["removeCircle"](_m);delete _B._circles[_cid];}};_B.removerectangle=function(_cid) {var _m;if ((_cid in _B._rectangles)) {_m=_B._rectangles[_cid];_B._gmap["removeRectangle"](_m);delete _B._rectangles[_cid];}};_B.removemarker=function(_cid) {var _m;if ((_cid in _B._markers)) {_m=_B._markers[_cid];_B._gmap["removeMarker"](_m);delete _B._markers[_cid];}};_B.removepolyline=function(_cid) {var _m;if ((_cid in _B._polylines)) {_m=_B._polylines[_cid];_B._gmap["removePolyline"](_m);delete _B._polylines[_cid];delete _B._ipolylines[_cid];}};_B.removepolygon=function(_cid) {var _m;if ((_cid in _B._polygons)) {_m=_B._polygons[_cid];_B._gmap["removePolygon"](_m);delete _B._polygons[_cid];delete _B._ipolygons[_cid];}};_B.drawcircle=function(_cid,_lat,_lng,_radius,_strokecolor,_strokeopacity,_strokeweight,_fillcolor,_fillopacity,_draggable,_editable) {var _cm,_e,_cbmc,_m;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_radius=_banano_sithasodaisy_sduishared.cint(_radius);_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_fillopacity=_banano_sithasodaisy_sduishared.cdbl(_fillopacity);_cm={};_cm["id"]=_cid;_cm["lat"]=_lat;_cm["lng"]=_lng;_cm["radius"]=_radius;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["fillColor"]=_fillcolor;_cm["fillOpacity"]=_fillopacity;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_CircleClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_CircleClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_CircleClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_m=_B._gmap["drawCircle"](_cm);_B._circles[_cid]=_m;};_B.drawrectangle=function(_cid,_lat,_lng,_lat1,_lng1,_strokecolor,_strokeopacity,_strokeweight,_fillcolor,_fillopacity,_draggable,_editable) {var _p1,_p2,_bounds,_cm,_e,_cbmc,_m;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_lat1=_banano_sithasodaisy_sduishared.cdbl(_lat1);_lng1=_banano_sithasodaisy_sduishared.cdbl(_lng1);_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_fillopacity=_banano_sithasodaisy_sduishared.cdbl(_fillopacity);_p1=[];_p1.length=0;_p1.push(_lat);_p1.push(_lng);_p2=[];_p2.length=0;_p2.push(_lat1);_p2.push(_lng1);_bounds=[];_bounds.length=0;_bounds.push(_p1);_bounds.push(_p2);_cm={};_cm["id"]=_cid;_cm["bounds"]=_bounds;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["fillColor"]=_fillcolor;_cm["fillOpacity"]=_fillopacity;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_RectangleClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_RectangleClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_RectangleClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_m=_B._gmap["drawRectangle"](_cm);_B._rectangles[_cid]=_m;};_B.addpolygonlatlng=function(_cid,_lat,_lng) {var _cm,_paths,_path;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_cm={};if ((_cid in _B._ipolygons)) {_cm=_B._ipolygons[_cid];_paths=_cm["paths"];_path=[];_path.length=0;_path.push(_lat);_path.push(_lng);_paths.push(_path);_cm["paths"]=_paths;_B._ipolygons[_cid]=_cm;} else {window.console.warn("Polygon " + _cid + " does not exist!");}return _B;};_B.addpolylinelatlng=function(_cid,_lat,_lng) {var _cm,_paths,_path;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_cm={};if ((_cid in _B._ipolylines)) {_cm=_B._ipolylines[_cid];_paths=_cm["path"];_path=[];_path.length=0;_path.push(_lat);_path.push(_lng);_paths.push(_path);_cm["path"]=_paths;_B._ipolylines[_cid]=_cm;} else {window.console.warn("PolyLine " + _cid + " does not exist!");}return _B;};_B.redraw=function() {var _pk,_poly,_pm,_pk1,_polyl,_plm;var _pkKeys = Object.keys(_B._ipolygons);for (var _pkindex=0;_pkindex<_pkKeys.length;_pkindex++) {_pk=_pkKeys[_pkindex];_poly=_B._ipolygons[_pk];_pm=_B._gmap["drawPolygon"](_poly);_B._polygons[_pk]=_pm;}var _pk1Keys = Object.keys(_B._ipolylines);for (var _pk1index=0;_pk1index<_pk1Keys.length;_pk1index++) {_pk1=_pk1Keys[_pk1index];_polyl=_B._ipolylines[_pk1];_plm=_B._gmap["drawPolyline"](_polyl);_B._polylines[_pk1]=_plm;}};_B.drawpolyline=function(_cid,_path,_strokecolor,_strokeopacity,_strokeweight,_draggable,_editable) {var _cm,_e,_cbmc,_plm;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_cm={};_cm["id"]=_cid;_cm["path"]=_path;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_B._ipolylines[_cid]=_cm;_plm=_B._gmap["drawPolyline"](_cm);_B._polylines[_cid]=_plm;};_B.drawpolygon=function(_cid,_paths,_strokecolor,_strokeopacity,_strokeweight,_fillcolor,_fillopacity,_draggable,_editable) {var _cm,_e,_cbmc,_plm;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_fillopacity=_banano_sithasodaisy_sduishared.cdbl(_fillopacity);_cm={};_cm["id"]=_cid;_cm["paths"]=_paths;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["fillColor"]=_fillcolor;_cm["fillOpacity"]=_fillopacity;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_B._ipolygons[_cid]=_cm;_plm=_B._gmap["drawPolygon"](_cm);_B._polygons[_cid]=_plm;};_B.addpolygon=function(_cid,_strokecolor,_strokeopacity,_strokeweight,_fillcolor,_fillopacity,_draggable,_editable) {var _paths,_cm,_e,_cbmc;_paths=[];_paths.length=0;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_fillopacity=_banano_sithasodaisy_sduishared.cdbl(_fillopacity);_cm={};_cm["id"]=_cid;_cm["paths"]=_paths;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["fillColor"]=_fillcolor;_cm["fillOpacity"]=_fillopacity;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_PolygonClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_B._ipolygons[_cid]=_cm;};_B.addpolyline=function(_cid,_strokecolor,_strokeopacity,_strokeweight,_draggable,_editable) {var _path,_cm,_e,_cbmc;_path=[];_path.length=0;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_cm={};_cm["id"]=_cid;_cm["path"]=_path;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_cm["draggable"]=_draggable;_cm["editable"]=_editable;if ((typeof _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_PolyLineClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_B._ipolylines[_cid]=_cm;};_B.addroute=function(_route,_strokecolor,_strokeopacity,_strokeweight) {var _cm,_x;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_cm={};_cm["map"]=_B._gmap;_cm["route"]=_route;_cm["strokeColor"]=_strokecolor;_cm["strokeOpacity"]=_strokeopacity;_cm["strokeWeight"]=_strokeweight;_x=null;_x=new GMaps.Route(_cm);return _x;};_B.removemarkers=function() {_B._gmap["removeMarkers"]();_B._markers={};};_B.removepolylines=function() {_B._gmap["removePolylines"]();_B._ipolylines={};_B._polylines={};};_B.removepolygons=function() {_B._gmap["removePolygons"]();_B._polygons={};_B._ipolygons={};};_B.removeoverlays=function() {_B._gmap["removeOverlays"]();_B._overlays={};};_B.setcenter=function(_lat,_lng) {_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_B._gmap["setCenter"](_lat,_lng);};_B.fitlatlngbounds=function(_points) {_B._gmap["fitLatLngBounds"](_points);};_B.fitzoom=function() {_B._gmap["fitZoom"]();};_B.refresh=function() {_B._gmap["refresh"]();};_B.setzoomrt=function(_czoom) {_czoom=_banano_sithasodaisy_sduishared.cint(_czoom);_B._gmap["setZoom"](_czoom);};_B.drawoverlay=function(_cid,_lat,_lng,_content,_verticalalign,_horizontalalgin,_verticaloffset,_horizontaloffset) {var _cm,_e,_cbmc,_m;_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_verticaloffset=_banano_sithasodaisy_sduishared.cint(_verticaloffset);_horizontaloffset=_banano_sithasodaisy_sduishared.cint(_horizontaloffset);_cm={};_cm["id"]=_cid;_cm["lat"]=_lat;_cm["lng"]=_lng;_cm["content"]=_content;_cm["verticalAlign"]=_verticalalign;_cm["horizontalAlgin"]=_horizontalalgin;_cm["verticalOffset"]=_verticaloffset;_cm["horizontalOffset"]=_horizontaloffset;if ((typeof _B._mback[("" + _B._mname + "_OverlayClick").toLowerCase()]==="function")) {_e=null;_cbmc=function(_e) {if (typeof _B._mback[("" + _B._mname + "_OverlayClick").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_OverlayClick").toLowerCase()](_e,_B)};};_cm["click"]=_cbmc;}_m=_B._gmap["drawOverlay"](_cm);_B._overlays[_cid]=_m;};_B.removeoverlay=function(_cid) {var _m;if ((_cid in _B._overlays)) {_m=_B._overlays[_cid];_B._gmap["removeOverlay"](_m);delete _B._overlays[_cid];}};_B.geocode=function(_address) {var _r,_s,_cb,_m,_gmaps;if (_address=="") { return ;}if ((typeof _B._mback[("" + _B._mname + "_geocode").toLowerCase()]==="function")) {_r={};_s={};_cb=function(_r,_s) {if (typeof _B._mback[("" + _B._mname + "_geocode").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_geocode").toLowerCase()](_r,_s,_B)};};_m={};_m["address"]=_address;_m["callback"]=_cb;_gmaps=null;_gmaps=GMaps;_gmaps["geocode"](_m);} else {window.console.warn("" + _B._mname + "_geocode event does not exist!");}};_B.staticmapurl=function(_iwidth,_iheight,_lat,_lng,_intzoom) {var _size,_m,_p,_m1,_gmaps,_link;_iwidth=_banano_sithasodaisy_sduishared.cint(_iwidth);_iheight=_banano_sithasodaisy_sduishared.cint(_iheight);_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_size=[];_size.length=0;_size.push(_iwidth);_size.push(_iheight);_m={};_m["size"]=_size;_m["lat"]=_lat;_m["lng"]=_lng;_m["zoom"]=_intzoom;_m["key"]=_B._sapikey;_p={};_p["lat"]=_lat;_p["lng"]=_lng;_m1=[];_m1.length=0;_m1.push(_p);_m["markers"]=_m1;_gmaps=null;_gmaps=GMaps;_link=_gmaps["staticMapURL"](_m);return _link;};_B.geolocate=function() {var _p,_e,_cbs,_cbe,_cbns,_cba,_m,_gmaps;_p={};_e={};_cbs=function(_p) {if (typeof _B._mback[("" + _B._mname + "_GeoLocateSuccess").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_GeoLocateSuccess").toLowerCase()](_p,_B)};};_cbe=function(_e) {if (typeof _B._mback[("" + _B._mname + "_GeoLocateError").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_GeoLocateError").toLowerCase()](_e,_B)};};_cbns=function() {if (typeof _B._mback[("" + _B._mname + "_GeoLocateNotSupported").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_GeoLocateNotSupported").toLowerCase()](_B)};};_cba=function() {if (typeof _B._mback[("" + _B._mname + "_GeoLocateAlways").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_GeoLocateAlways").toLowerCase()](_B)};};_m={};if ((typeof _B._mback[("" + _B._mname + "_GeoLocateSuccess").toLowerCase()]==="function")) {_m["success"]=_cbs;}if ((typeof _B._mback[("" + _B._mname + "_GeoLocateError").toLowerCase()]==="function")) {_m["error"]=_cbe;}if ((typeof _B._mback[("" + _B._mname + "_GeoLocateNotSupported").toLowerCase()]==="function")) {_m["not_supported"]=_cbns;}if ((typeof _B._mback[("" + _B._mname + "_GeoLocateAlways").toLowerCase()]==="function")) {_m["always"]=_cba;}_gmaps=null;_gmaps=GMaps;_gmaps["geolocate"](_m);};_B.getgeocodelatlng=function(_r,_p) {var _gll,_latlng,_lat,_lng;_gll= new banano_sithasodaisygmap_gmaplatlng();_gll.initialize();_gll._lat=0;_gll._lng=0;try {_latlng=_r[_p]["geometry"]["location"];_lat=_latlng["lat"]();_lng=_latlng["lng"]();_gll._lat=_lat;_gll._lng=_lng;return _gll;} catch(err) {return _gll;}};_B.getgeolocatelatlng=function(_p) {var _gll,_lat,_lng;_gll= new banano_sithasodaisygmap_gmaplatlng();_gll.initialize();_gll._lat=0;_gll._lng=0;try {_lat=_banano_sithasodaisy_sduishared.getrecursive(_p,"coords.latitude");_lng=_banano_sithasodaisy_sduishared.getrecursive(_p,"coords.longitude");_lat=_banano_sithasodaisy_sduishared.cdbl(_lat);_lng=_banano_sithasodaisy_sduishared.cdbl(_lng);_gll._lat=_lat;_gll._lng=_lng;return _gll;} catch(err) {return _gll;}};_B.getroutes=function(_olat,_olng,_dlat,_dlng) {var _p,_o,_d,_r,_cbr;if ((typeof _B._mback[("" + _B._mname + "_Routes").toLowerCase()]==="function")==false) {window.console.warn("" + _B._mname + "_routes does not exist!");}_olat=_banano_sithasodaisy_sduishared.cdbl(_olat);_olng=_banano_sithasodaisy_sduishared.cdbl(_olng);_dlat=_banano_sithasodaisy_sduishared.cdbl(_dlat);_dlng=_banano_sithasodaisy_sduishared.cdbl(_dlng);_p={};_o=[];_o.length=0;_o.push(_olat);_o.push(_olng);_d=[];_d.length=0;_d.push(_dlat);_d.push(_dlng);_p["origin"]=_o;_p["destination"]=_d;_r={};_cbr=function(_r) {if (typeof _B._mback[("" + _B._mname + "_Routes").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_Routes").toLowerCase()](_r,_B)};};_p["callback"]=_cbr;_B._gmap["getRoutes"](_p);};_B.travelroute=function(_olat,_olng,_dlat,_dlng,_travelmode) {var _p,_o,_d,_r,_cbr;if ((typeof _B._mback[("" + _B._mname + "_TravelStep").toLowerCase()]==="function")==false) {window.console.warn("" + _B._mname + "_TravelStep does not exist!");}_olat=_banano_sithasodaisy_sduishared.cdbl(_olat);_olng=_banano_sithasodaisy_sduishared.cdbl(_olng);_dlat=_banano_sithasodaisy_sduishared.cdbl(_dlat);_dlng=_banano_sithasodaisy_sduishared.cdbl(_dlng);_p={};_o=[];_o.length=0;_o.push(_olat);_o.push(_olng);_d=[];_d.length=0;_d.push(_dlat);_d.push(_dlng);_p["origin"]=_o;_p["destination"]=_d;_p["travelMode"]=_travelmode;_r={};_cbr=function(_r) {if (typeof _B._mback[("" + _B._mname + "_TravelStep").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_TravelStep").toLowerCase()](_r,_B)};};_p["step"]=_cbr;_B._gmap["travelRoute"](_p);};_B.drawroute=function(_olat,_olng,_dlat,_dlng,_travelmode,_strokecolor,_strokeopacity,_strokeweight) {var _p,_o,_d;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_olat=_banano_sithasodaisy_sduishared.cdbl(_olat);_olng=_banano_sithasodaisy_sduishared.cdbl(_olng);_dlat=_banano_sithasodaisy_sduishared.cdbl(_dlat);_dlng=_banano_sithasodaisy_sduishared.cdbl(_dlng);_p={};_o=[];_o.length=0;_o.push(_olat);_o.push(_olng);_d=[];_d.length=0;_d.push(_dlat);_d.push(_dlng);_p["origin"]=_o;_p["destination"]=_d;_p["travelMode"]=_travelmode;_p["strokeColor"]=_strokecolor;_p["strokeOpacity"]=_strokeopacity;_p["strokeWeight"]=_strokeweight;_B._gmap["drawRoute"](_p);};_B.renderroute=function(_panelid,_olat,_olng,_dlat,_dlng,_travelmode,_strokecolor,_strokeopacity,_strokeweight) {var _p,_o,_d,_p1;_strokeopacity=_banano_sithasodaisy_sduishared.cdbl(_strokeopacity);_strokeweight=_banano_sithasodaisy_sduishared.cint(_strokeweight);_olat=_banano_sithasodaisy_sduishared.cdbl(_olat);_olng=_banano_sithasodaisy_sduishared.cdbl(_olng);_dlat=_banano_sithasodaisy_sduishared.cdbl(_dlat);_dlng=_banano_sithasodaisy_sduishared.cdbl(_dlng);_panelid=_banano_sithasodaisy_sduishared.cleanid(_panelid);u("#" + _panelid + "").empty();_p={};_o=[];_o.length=0;_o.push(_olat);_o.push(_olng);_d=[];_d.length=0;_d.push(_dlat);_d.push(_dlng);_p["origin"]=_o;_p["destination"]=_d;_p["travelMode"]=_travelmode;_p["strokeColor"]=_strokecolor;_p["strokeOpacity"]=_strokeopacity;_p["strokeWeight"]=_strokeweight;_p1={};_p1["draggable"]=true;_p1["panel"]="#" + _panelid + "";_B._gmap["renderRoute"](_p,_p1);};_B.addlayer=function(_l,_bclickable) {var _m;_m={};_m["clickable"]=_bclickable;_B._gmap["addLayer"](_l,_m);};_B.removelayer=function(_l) {_B._gmap["removeLayer"](_l);};}