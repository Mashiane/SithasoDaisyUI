
/* sithasodaisykanban */
function banano_sithasodaisykanban_sduikanban() {var _B=this;_B._custprops={};_B._mback={};_B._melement=null;_B._mparent=null;_B._mname="";_B._root= new banano_sithasodaisy_sduidiv();_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._smarginaxytblr="";_B._spaddingaxytblr="";_B._mparentid="";_B._bvisible=false;_B._bdragboards=false;_B._bdragitems=false;_B._sgutter="";_B._bitemaddoptionsenabled=false;_B._bitemhandleoptionsenabled=false;_B._swidthboard="";_B._options={};_B._kanban=null;_B._boards=[];_B._boardsm={};_B._sitemaddoptionsclass="";_B._sitemaddoptionscontent="";_B._bitemaddoptionsfooter=false;_B._sitemhandleoptionscustomcssiconhandler="";_B._sitemhandleoptionscustomhandler="";_B._sitemhandleoptionscustomcsshandler="";_B._sitemhandleoptionshandleclass="";_B._bresponsivepercentage=false;_B.designercreateview=function(_target,_props) {_B._custprops=_props;_B._mparent=_target;if (_props!=null) {_B._mparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._mparentid=_banano_sithasodaisy_sduishared.cstr(_B._mparentid);_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._smarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._spaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];_B._bvisible=_props["Visible"]===undefined? true:_props["Visible"];_B._bvisible=_banano_sithasodaisy_sduishared.parsebool(_B._bvisible);_B._bdragboards=_props["DragBoards"]===undefined? true:_props["DragBoards"];_B._bdragboards=_banano_sithasodaisy_sduishared.parsebool(_B._bdragboards);_B._bdragitems=_props["DragItems"]===undefined? true:_props["DragItems"];_B._bdragitems=_banano_sithasodaisy_sduishared.parsebool(_B._bdragitems);_B._sgutter=_props["Gutter"]===undefined? "15px":_props["Gutter"];_B._sgutter=_banano_sithasodaisy_sduishared.cstr(_B._sgutter);_B._bitemaddoptionsenabled=_props["ItemAddOptionsEnabled"]===undefined? false:_props["ItemAddOptionsEnabled"];_B._bitemaddoptionsenabled=_banano_sithasodaisy_sduishared.parsebool(_B._bitemaddoptionsenabled);_B._bitemhandleoptionsenabled=_props["ItemHandleOptionsEnabled"]===undefined? false:_props["ItemHandleOptionsEnabled"];_B._bitemhandleoptionsenabled=_banano_sithasodaisy_sduishared.parsebool(_B._bitemhandleoptionsenabled);_B._swidthboard=_props["WidthBoard"]===undefined? "250px":_props["WidthBoard"];_B._swidthboard=_banano_sithasodaisy_sduishared.cstr(_B._swidthboard);_B._sitemaddoptionsclass=_props["ItemAddOptionsClass"]===undefined? "":_props["ItemAddOptionsClass"];_B._sitemaddoptionsclass=_banano_sithasodaisy_sduishared.cstr(_B._sitemaddoptionsclass);_B._sitemaddoptionscontent=_props["ItemAddOptionsContent"]===undefined? "":_props["ItemAddOptionsContent"];_B._sitemaddoptionscontent=_banano_sithasodaisy_sduishared.cstr(_B._sitemaddoptionscontent);_B._bitemaddoptionsfooter=_props["ItemAddOptionsFooter"]===undefined? false:_props["ItemAddOptionsFooter"];_B._bitemaddoptionsfooter=_banano_sithasodaisy_sduishared.parsebool(_B._bitemaddoptionsfooter);_B._sitemhandleoptionscustomcssiconhandler=_props["ItemHandleOptionsCustomCssIconHandler"]===undefined? "":_props["ItemHandleOptionsCustomCssIconHandler"];_B._sitemhandleoptionscustomcssiconhandler=_banano_sithasodaisy_sduishared.cstr(_B._sitemhandleoptionscustomcssiconhandler);_B._sitemhandleoptionscustomhandler=_props["ItemHandleOptionsCustomHandler"]===undefined? "":_props["ItemHandleOptionsCustomHandler"];_B._sitemhandleoptionscustomhandler=_banano_sithasodaisy_sduishared.cstr(_B._sitemhandleoptionscustomhandler);_B._sitemhandleoptionscustomcsshandler=_props["ItemHandleOptionsCustomCssHandler"]===undefined? "":_props["ItemHandleOptionsCustomCssHandler"];_B._sitemhandleoptionscustomcsshandler=_banano_sithasodaisy_sduishared.cstr(_B._sitemhandleoptionscustomcsshandler);_B._sitemhandleoptionshandleclass=_props["ItemHandleOptionsHandleClass"]===undefined? "":_props["ItemHandleOptionsHandleClass"];_B._sitemhandleoptionshandleclass=_banano_sithasodaisy_sduishared.cstr(_B._sitemhandleoptionshandleclass);_B._bresponsivepercentage=_props["ResponsivePercentage"]===undefined? true:_props["ResponsivePercentage"];_B._bresponsivepercentage=_banano_sithasodaisy_sduishared.parsebool(_B._bresponsivepercentage);}if (_B._mparentid=="") {_B._mparentid=_B._mparent.attr('id');}_B.addkanban(_B._mback,_B._mparentid,_B._mname,_B);_B._root.classes(_B._mclasses);_B._root.attributes(_B._mattributes);_B._root.styles(_B._mstyles);_B._root.paddingaxytblr(_B._spaddingaxytblr);_B._root.marginaxytblr(_B._smarginaxytblr);if (_B._bvisible==false) {_B.hide(_B);}_B.setdragboards(_B._bdragboards,_B);_B.setdragitems(_B._bdragitems,_B);_B.setgutter(_B._sgutter,_B);_B.setitemaddoptionsenabled(_B._bitemaddoptionsenabled,_B);_B.setitemhandleoptionsenabled(_B._bitemhandleoptionsenabled,_B);_B.setwidthboard(_B._swidthboard,_B);_B.setitemaddoptionsclass(_B._sitemaddoptionsclass,_B);_B.setitemaddoptionscontent(_B._sitemaddoptionscontent,_B);_B.setitemaddoptionsfooter(_B._bitemaddoptionsfooter,_B);_B.setitemhandleoptionscustomcssiconhandler(_B._sitemhandleoptionscustomcssiconhandler,_B);_B.setitemhandleoptionscustomhandler(_B._sitemhandleoptionscustomhandler,_B);_B.setitemhandleoptionscustomcsshandler(_B._sitemhandleoptionscustomcsshandler,_B);_B.setitemhandleoptionshandleclass(_B._sitemhandleoptionshandleclass,_B);_B.setresponsivepercentage(_B._bresponsivepercentage,_B);};_B.initialize=function(_callback,_cname,_eventname) {_B._mname=_banano_sithasodaisy_sduishared.cleanid(_cname);_B._mback=_callback;_B._options={};_B._boards.length=0;_B._boardsm={};};_B.addkanban=function(_mcallback,_parentid,_id) {var _mstyle,_style;_parentid=_banano_sithasodaisy_sduishared.cleanid(_parentid);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B._mname=_id;_B._mback=_mcallback;if (u("#" + _parentid + "").length>0==false) {throw "SDUIKanban.Initialize: '" + _parentid + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B._melement=u("#" + _id + "");} else {_B._mparent=u("#" + _parentid + "");_mstyle={};_mstyle["overflow-x"]="auto";_mstyle["padding"]="20px 0";_style=_banano_sithasodaisy_sduishared.map2style(_mstyle);_B._melement=_B._mparent.append("<div id=\"" + _id + "\" style=\"" + _style + "\"></div>").find("#" + _id + "").bananofirst();}_B.assignelement(_mcallback,_B._mname,_B);_B._options={};_B._boards.length=0;_B._boardsm={};};_B.setitemaddoptionsclass=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemaddoptionsclass=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemAddOptions.class",_s);};_B.setitemaddoptionscontent=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemaddoptionscontent=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemAddOptions.content",_s);};_B.setitemaddoptionsfooter=function(_b) {_B._bitemaddoptionsfooter=_b;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemAddOptions.footer",_b);return;};_B.setitemhandleoptionscustomcssiconhandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemhandleoptionscustomcssiconhandler=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemHandleOptions.customCssIconHandler",_s);};_B.setitemhandleoptionscustomhandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemhandleoptionscustomhandler=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemHandleOptions.customHandler",_s);};_B.setitemhandleoptionscustomcsshandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemhandleoptionscustomcsshandler=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemHandleOptions.customCssHandler",_s);};_B.setitemhandleoptionshandleclass=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sitemhandleoptionshandleclass=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemHandleOptions.handleClass",_s);};_B.setresponsivepercentage=function(_b) {_B._bresponsivepercentage=_b;_B._options["responsivePercentage"]=_b;return;};_B.clear=function() {_B._boards.length=0;_B._boardsm={};};_B.addboard=function(_id,_title,_classname,_props) {var _items,_nb,_k,_v;_id=_banano_sithasodaisy_sduishared.cleanid(_id);_items=[];_items.length=0;_nb={};_nb["id"]=_id;_nb["title"]=_title;_nb["item"]=_items;_nb["class"]=_classname;if (is.null(_props)==false) {var _kKeys = Object.keys(_props);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_props[_k];_nb[_k]=_v;}}_B._boardsm[_id]=_nb;};_B.addboarditem=function(_boardid,_id,_title,_classname,_props) {var _bm,_items,_nb,_k,_v,_a,_b,_dragcb,_dragendcb,_dropcb,_clickcb,_contextcb;_id=_banano_sithasodaisy_sduishared.cleanid(_id);_boardid=_banano_sithasodaisy_sduishared.cleanid(_boardid);if ((_boardid in _B._boardsm)) {_bm=_B._boardsm[_boardid];_items=_bm["item"];_nb={};_nb["id"]=_id;_nb["title"]=_title;_nb["item"]=_items;_nb["class"]=_classname;if (is.null(_props)==false) {var _kKeys = Object.keys(_props);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_props[_k];_nb[_k]=_v;}}_a={};_b={};_dragcb=function(_a,_b) {if (typeof _B._mback[("" + _B._mname + "_DragItem").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_DragItem").toLowerCase()](_a,_b,_B)};};_nb["drag"]=_dragcb;_dragendcb=function(_a) {if (typeof _B._mback[("" + _B._mname + "_DragItemEnd").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_DragItemEnd").toLowerCase()](_a,_B)};};_nb["dragend"]=_dragendcb;_dropcb=function(_a) {if (typeof _B._mback[("" + _B._mname + "_DropItem").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_DropItem").toLowerCase()](_a,_B)};};_nb["drop"]=_dropcb;_clickcb=function(_a) {if (typeof _B._mback[("" + _B._mname + "_ClickItem").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_ClickItem").toLowerCase()](_a,_B)};};_nb["drop"]=_clickcb;_contextcb=function(_a,_b) {if (typeof _B._mback[("" + _B._mname + "_ContextItem").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_ContextItem").toLowerCase()](_a,_b,_B)};};_nb["context"]=_contextcb;_items.push(_nb);_bm["item"]=_items;_B._boardsm[_boardid]=_bm;}};_B.refresh=function() {var _board;_B._boards.length=0;for (_boardKEY in _B._boardsm) {var _board=_B._boardsm[_boardKEY];_B._boards.push(_board);}_B._options["element"]="#" + _B._mname + "";_B._options["boards"]=_B._boards;_B._kanban=new jKanban(_B._options);};_B.shadow=function(_s) {_B._root.shadow(_s);};_B.roundedbox=function() {_B._root.roundedbox();};_B.setdragboards=function(_b) {_B._bdragboards=_b;_B._options["dragBoards"]=_b;return;};_B.setdragitems=function(_b) {_B._bdragitems=_b;_B._options["dragItems"]=_b;return;};_B.setgutter=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._sgutter=_s;_B._options["gutter"]=_s;};_B.setitemaddoptionsenabled=function(_b) {_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemAddOptions.enabled",_b);return;};_B.setitemhandleoptionsenabled=function(_b) {_banano_sithasodaisy_sduishared.putrecursive(_B._options,"itemHandleOptions.enabled",_b);return;};_B.setwidthboard=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B._swidthboard=_s;_B._options["widthBoard"]=_s;};_B.assignelement=function(_mcallback,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B._mname=_id;_B._mback=_mcallback;_B._melement=u("#" + _id + "");_B._root.assignelement(_B._mback,_B._mname);};_B.enable=function() {_B._root.disabled(false);};_B.disable=function() {_B._root.disabled(true);};_B.getname=function() {return "" + _B._mname + "";};_B.gethere=function() {return "#" + _B._mname + "";};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mparent=u("#"+_targetid);_B.designercreateview(_B._mparent,_props,_B);};}