
/* sithasodaisygijgo */
function banano_sithasodaisygijgo_sduieditor() {var _B=this;_B._custprops={};_B._mback={};_B._melement=null;_B._mparent=null;_B._mname="";_B._root= new banano_sithasodaisy_sduidiv();_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._smarginaxytblr="";_B._spaddingaxytblr="";_B._mparentid="";_B._bvisible=false;_B._sheight="";_B._siconslibrary="";_B._slocale="";_B._suilibrary="";_B._swidth="";_B._options={};_B._ed=null;_B.designercreateview=function(_target,_props) {_B._custprops=_props;_B._mparent=_target;if (_props!=null) {_B._mparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._mparentid=_banano_sithasodaisy_sduishared.cstr(_B._mparentid);_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._smarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._spaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];_B._bvisible=_props["Visible"]===undefined? true:_props["Visible"];_B._bvisible=_banano_sithasodaisy_sduishared.parsebool(_B._bvisible);_B._sheight=_props["Height"]===undefined? "400":_props["Height"];_B._sheight=_banano_sithasodaisy_sduishared.cstr(_B._sheight);_B._siconslibrary=_props["IconsLibrary"]===undefined? "fontawesome":_props["IconsLibrary"];_B._siconslibrary=_banano_sithasodaisy_sduishared.cstr(_B._siconslibrary);_B._slocale=_props["Locale"]===undefined? "en-us":_props["Locale"];_B._slocale=_banano_sithasodaisy_sduishared.cstr(_B._slocale);_B._suilibrary=_props["UiLibrary"]===undefined? "materialdesign":_props["UiLibrary"];_B._suilibrary=_banano_sithasodaisy_sduishared.cstr(_B._suilibrary);_B._swidth=_props["Width"]===undefined? "900":_props["Width"];_B._swidth=_banano_sithasodaisy_sduishared.cstr(_B._swidth);}if (_B._mparentid=="") {_B._mparentid=_B._mparent.attr('id');}_B.addeditor(_B._mback,_B._mparentid,_B._mname,_B);_B._root.classes(_B._mclasses);_B._root.attributes(_B._mattributes);_B._root.styles(_B._mstyles);_B._root.paddingaxytblr(_B._spaddingaxytblr);_B._root.marginaxytblr(_B._smarginaxytblr);if (_B._bvisible==false) {_B.hide(_B);}_B.setheight(_B._sheight,_B);_B.seticonslibrary(_B._siconslibrary,_B);_B.setlocale(_B._slocale,_B);_B.setuilibrary(_B._suilibrary,_B);_B.setwidth(_B._swidth,_B);_B.refresh(_B);};_B.initialize=function(_callback,_cname,_eventname) {_B._mname=_banano_sithasodaisy_sduishared.cleanid(_cname);_B._mback=_callback;};_B.shadow=function(_s) {_B._root.shadow(_s);};_B.roundedbox=function() {_B._root.roundedbox();};_B.setheight=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._sheight=_s;_B._options["height"]=_s;};_B.seticonslibrary=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._siconslibrary=_s;_B._options["iconsLibrary"]=_s;};_B.setlocale=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._slocale=_s;_B._options["locale"]=_s;};_B.setuilibrary=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._suilibrary=_s;_B._options["uiLibrary"]=_s;};_B.setwidth=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._swidth=_s;_B._options["width"]=_s;};_B.assignelement=function(_mcallback,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B._mname=_id;_B._mback=_mcallback;_B._melement=u("#" + _id + "");_B._root.assignelement(_B._mback,_B._mname);_B._options={};};_B.enable=function() {_B._root.disabled(false);};_B.disable=function() {_B._root.disabled(true);};_B.getname=function() {return "" + _B._mname + "";};_B.gethere=function() {return "#" + _B._mname + "";};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mparent=u("#"+_targetid);_B.designercreateview(_B._mparent,_props,_B);};_B.addeditor=function(_mcallback,_parentid,_id) {_parentid=_banano_sithasodaisy_sduishared.cleanid(_parentid);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B._mname=_id;_B._mback=_mcallback;if (u("#" + _parentid + "").length>0==false) {throw "SDUIEditor.Initialize: '" + _parentid + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B._melement=u("#" + _id + "");} else {_B._mparent=u("#" + _parentid + "");_B._melement=_B._mparent.append("<textarea id=\"" + _id + "\"></textarea>").find("#" + _id + "").bananofirst();}_B.assignelement(_mcallback,_B._mname,_B);};_B.refresh=function() {var _e,_cbchanged,_cbchanging,_jq;_e={};_cbchanged=function(_e) {if (typeof _B._mback[("" + _B._mname + "_changed").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_changed").toLowerCase()](_e,_B)};};_cbchanging=function(_e) {if (typeof _B._mback[("" + _B._mname + "_changing").toLowerCase()]==="function") {return _B._mback[("" + _B._mname + "_changing").toLowerCase()](_e,_B)};};_B._options["changed"]=_cbchanged;_B._options["changing"]=_cbchanging;_jq=null;_jq=$;_B._ed=_jq("#" + _B._mname + "")["editor"](_B._options);};_B.setcontent=function(_text) {_B._ed["content"](_text);};_B.getcontent=function() {var _text;_text=_B._ed["content"]();return _text;};}function banano_sithasodaisygijgo_sduitreeview() {var _B=this;_B._custprops={};_B._mback={};_B._melement=null;_B._mparent=null;_B._mname="";_B._root= new banano_sithasodaisy_sduidiv();_B._mclasses="";_B._mstyles="";_B._mattributes="";_B._smarginaxytblr="";_B._spaddingaxytblr="";_B._mparentid="";_B._bvisible=false;_B._bborder=false;_B._bcascadecheck=false;_B._bcascadeselection=false;_B._bcheckboxes=false;_B._sdatasource="";_B._bdraganddrop=false;_B._siconslibrary="";_B._siconscollapse="";_B._siconsexpand="";_B._simagecssclassfield="";_B._simageurlfield="";_B._blazyloading=false;_B._sselectiontype="";_B._suilibrary="";_B._swidth="";_B._options={};_B._tv=null;_B._items=[];_B.designercreateview=function(_target,_props) {_B._custprops=_props;_B._mparent=_target;if (_props!=null) {_B._mparentid=_props["ParentID"]===undefined? "":_props["ParentID"];_B._mparentid=_banano_sithasodaisy_sduishared.cstr(_B._mparentid);_B._mclasses=_props["RawClasses"]===undefined? "":_props["RawClasses"];_B._mstyles=_props["RawStyles"]===undefined? "":_props["RawStyles"];_B._mattributes=_props["RawAttributes"]===undefined? "":_props["RawAttributes"];_B._smarginaxytblr=_props["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["MarginAXYTBLR"];_B._spaddingaxytblr=_props["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":_props["PaddingAXYTBLR"];_B._bvisible=_props["Visible"]===undefined? true:_props["Visible"];_B._bvisible=_banano_sithasodaisy_sduishared.parsebool(_B._bvisible);_B._bborder=_props["Border"]===undefined? false:_props["Border"];_B._bborder=_banano_sithasodaisy_sduishared.parsebool(_B._bborder);_B._bcascadecheck=_props["CascadeCheck"]===undefined? true:_props["CascadeCheck"];_B._bcascadecheck=_banano_sithasodaisy_sduishared.parsebool(_B._bcascadecheck);_B._bcascadeselection=_props["CascadeSelection"]===undefined? false:_props["CascadeSelection"];_B._bcascadeselection=_banano_sithasodaisy_sduishared.parsebool(_B._bcascadeselection);_B._bcheckboxes=_props["Checkboxes"]===undefined? false:_props["Checkboxes"];_B._bcheckboxes=_banano_sithasodaisy_sduishared.parsebool(_B._bcheckboxes);_B._sdatasource=_props["DataSource"]===undefined? "":_props["DataSource"];_B._sdatasource=_banano_sithasodaisy_sduishared.cstr(_B._sdatasource);_B._bdraganddrop=_props["DragAndDrop"]===undefined? false:_props["DragAndDrop"];_B._bdraganddrop=_banano_sithasodaisy_sduishared.parsebool(_B._bdraganddrop);_B._siconslibrary=_props["IconsLibrary"]===undefined? "fontawesome":_props["IconsLibrary"];_B._siconslibrary=_banano_sithasodaisy_sduishared.cstr(_B._siconslibrary);_B._siconscollapse=_props["IconsCollapse"]===undefined? "fa-solid fa-chevron-left":_props["IconsCollapse"];_B._siconscollapse=_banano_sithasodaisy_sduishared.cstr(_B._siconscollapse);_B._siconsexpand=_props["IconsExpand"]===undefined? "fa-solid fa-chevron-right":_props["IconsExpand"];_B._siconsexpand=_banano_sithasodaisy_sduishared.cstr(_B._siconsexpand);_B._simagecssclassfield=_props["ImageCssClassField"]===undefined? "":_props["ImageCssClassField"];_B._simagecssclassfield=_banano_sithasodaisy_sduishared.cstr(_B._simagecssclassfield);_B._simageurlfield=_props["ImageUrlField"]===undefined? "":_props["ImageUrlField"];_B._simageurlfield=_banano_sithasodaisy_sduishared.cstr(_B._simageurlfield);_B._blazyloading=_props["LazyLoading"]===undefined? false:_props["LazyLoading"];_B._blazyloading=_banano_sithasodaisy_sduishared.parsebool(_B._blazyloading);_B._sselectiontype=_props["SelectionType"]===undefined? "single":_props["SelectionType"];_B._sselectiontype=_banano_sithasodaisy_sduishared.cstr(_B._sselectiontype);_B._suilibrary=_props["UiLibrary"]===undefined? "":_props["UiLibrary"];_B._suilibrary=_banano_sithasodaisy_sduishared.cstr(_B._suilibrary);_B._swidth=_props["Width"]===undefined? "":_props["Width"];_B._swidth=_banano_sithasodaisy_sduishared.cstr(_B._swidth);}if (_B._mparentid=="") {_B._mparentid=_B._mparent.attr('id');}_B.addtreeview(_B._mback,_B._mparentid,_B._mname,_B);_B._root.classes(_B._mclasses);_B._root.attributes(_B._mattributes);_B._root.styles(_B._mstyles);_B._root.paddingaxytblr(_B._spaddingaxytblr);_B._root.marginaxytblr(_B._smarginaxytblr);if (_B._bvisible==false) {_B.hide(_B);}};_B.addtreeview=function(_mcallback,_parentid,_id) {_parentid=_banano_sithasodaisy_sduishared.cleanid(_parentid);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B._mname=_id;_B._mback=_mcallback;if (u("#" + _parentid + "").length>0==false) {throw "SDUITreeView.Initialize: '" + _parentid + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B._melement=u("#" + _id + "");} else {_B._mparent=u("#" + _parentid + "");_B._melement=_B._mparent.append("<div id=\"" + _id + "\"></div>").find("#" + _id + "").bananofirst();}_B.assignelement(_mcallback,_B._mname,_B);_B._items.length=0;_B.setborder(_B._bborder,_B);_B.setcascadecheck(_B._bcascadecheck,_B);_B.setcascadeselection(_B._bcascadeselection,_B);_B.setcheckboxes(_B._bcheckboxes,_B);_B.setdraganddrop(_B._bdraganddrop,_B);_B.seticonslibrary(_B._siconslibrary,_B);_B.seticonscollapse(_B._siconscollapse,_B);_B.seticonsexpand(_B._siconsexpand,_B);_B.setimagecssclassfield(_B._simagecssclassfield,_B);_B.setimageurlfield(_B._simageurlfield,_B);_B.setlazyloading(_B._blazyloading,_B);_B.setselectiontype(_B._sselectiontype,_B);_B.setuilibrary(_B._suilibrary,_B);_B.setwidth(_B._swidth,_B);};_B.refresh=function() {var _unflat,_jq,_e,_n,_i,_parentid,_ordernumber,_cbs,_cbus,_cbnd;_B.destroy(_B);_unflat=_banano_sithasodaisy_sduishared.unflatten(_B._items,"children");_B._options["primaryKey"]="id";_B._options["imageHtmlField"]="icon";_B._options["dataSource"]=_unflat;_B._options["autoLoad"]=false;_jq=null;_jq=$;_B._tv=_jq("#" + _B._mname + "")["tree"](_B._options);_e={};_n={};_i={};_parentid="";_ordernumber="";_cbs=function(_e,_n,_i) {if (typeof _B[("selectNodeInternal").toLowerCase()]==="function") {return _B[("selectNodeInternal").toLowerCase()](_e,_n,_i,_B)};};_cbus=function(_e,_n,_i) {if (typeof _B[("UnSelectNodeInternal").toLowerCase()]==="function") {return _B[("UnSelectNodeInternal").toLowerCase()](_e,_n,_i,_B)};};_cbnd=function(_e,_i,_parentid,_ordernumber) {if (typeof _B[("nodeDropInternal").toLowerCase()]==="function") {return _B[("nodeDropInternal").toLowerCase()](_e,_i,_parentid,_ordernumber,_B)};};_B._tv["on"]("select",_cbs);_B._tv["on"]("unselect",_cbus);_B._tv["on"]("nodeDrop",_cbnd);_B.reload(_B);};_B.nodedropinternal=function(_e,_i,_p,_o) {if ((typeof _B._mback[("" + _B._mname + "_NodeDrop").toLowerCase()]==="function")) {(function() {if (typeof _B._mback[("" + _B._mname + "_NodeDrop").toLowerCase()]==="function") {var CSr = _B._mback[("" + _B._mname + "_NodeDrop").toLowerCase()](_i,_p,_o,_B);if(CSr!=null) {return CSr}}})();}};_B.selectnodeinternal=function(_e,_n,_i) {if ((typeof _B._mback[("" + _B._mname + "_SelectNode").toLowerCase()]==="function")) {(function() {if (typeof _B._mback[("" + _B._mname + "_SelectNode").toLowerCase()]==="function") {var CSr = _B._mback[("" + _B._mname + "_SelectNode").toLowerCase()](_i,_B);if(CSr!=null) {return CSr}}})();}};_B.unselectnodeinternal=function(_e,_n,_i) {if ((typeof _B._mback[("" + _B._mname + "_UnSelectNode").toLowerCase()]==="function")) {(function() {if (typeof _B._mback[("" + _B._mname + "_UnSelectNode").toLowerCase()]==="function") {var CSr = _B._mback[("" + _B._mname + "_UnSelectNode").toLowerCase()](_i,_B);if(CSr!=null) {return CSr}}})();}};_B.addnode=function(_parentid,_key,_text,_mhref,_micon,_mdisabled) {var _opt,_pnode;_parentid=_parentid.toLowerCase();_key=_key.toLowerCase();if (_key=="") { return ;}_opt={};_opt["text"]=_text;_opt["id"]=_key;if (_mhref!="") {_opt["href"]=_mhref;}if (_micon!="") {_opt["icon"]="<i class=\"" + _micon + "\"></i>";}_opt["disabled"]=_mdisabled;_opt["parentid"]=_parentid;if (_parentid!="") {_pnode=_B.getnodebyid(_parentid,_B);if (is.null(_pnode)) { return ;}_B._tv["addNode"](_opt,_pnode);return;}_B._tv["addNode"](_opt);};_B.getnodebyid=function(_id) {var _p;_p=_B._tv["getNodeById"](_id);return _p;};_B.additem=function(_parentid,_key,_text,_mhref,_micon,_mdisabled) {var _mitem;_parentid=_parentid.toLowerCase();_key=_key.toLowerCase();if (_key=="") { return ;}_mitem={};_mitem["id"]=_key;_mitem["text"]=_text;if (_mhref!="") {_mitem["href"]=_mhref;}if (_micon!="") {_mitem["icon"]="<i class=\"" + _micon + "\"></i>";}_mitem["disabled"]=_mdisabled;_mitem["parentid"]=_parentid;_B._items.push(_mitem);};_B.additems=function(_parentid,_lkeys) {var _k;for (var _kindex=0;_kindex<_lkeys.length;_kindex++) {_k=_lkeys[_kindex];_B.additem(_parentid,_k,_k,"","",false,_B);}};_B.clear=function() {_B._items.length=0;};_B.getnodebytext=function(_text) {var _p;_p=_B._tv["getNodeByText"](_text);return _p;};_B.expandall=function() {_B._tv["expandAll"]();};_B.expandnode=function(_node) {_B._tv["expand"](_node);};_B.expandnodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["expand"](_node);};_B.collapsenode=function(_node) {_B._tv["collapse"](_node);};_B.collapsenodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["collapse"](_node);};_B.enablenode=function(_node) {_B._tv["enable"](_node);};_B.removenode=function(_node) {_B._tv["removeNode"](_node);};_B.removenodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["removeNode"](_node);};_B.selectnode=function(_node) {_B._tv["select"](_node);};_B.selectnodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["select"](_node);};_B.unselectnode=function(_node) {_B._tv["unselect"](_node);};_B.unselectnodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["unselect"](_node);};_B.disablenodebyid=function(_id) {var _node;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return ;}_B._tv["disable"](_node);};_B.getchildrenbyid=function(_id,_bcascade) {var _lst,_node;_lst=[];_lst.length=0;_node=_B.getnodebyid(_id,_B);if (is.null(_node)) { return _lst;}_lst=_B._tv["getChildren"](_node,_bcascade);return _lst;};_B.disablenode=function(_node) {_B._tv["disable"](_node);};_B.checknode=function(_node) {_B._tv["check"](_node);};_B.unchecknode=function(_node) {_B._tv["uncheck"](_node);};_B.updatenode=function(_id,_data) {_B._tv["updateNode"](_id,_data);};_B.reload=function() {try {_B._tv["reload"]();} catch(err) {}};_B.checkall=function() {_B._tv["checkAll"]();};_B.selectall=function() {_B._tv["selectAll"]();};_B.unselectall=function() {_B._tv["unselectAll"]();};_B.uncheckall=function() {_B._tv["uncheckAll"]();};_B.destroy=function() {try {_B._tv["destroy"]();} catch(err) {}};_B.enableall=function() {_B._tv["enableAll"]();};_B.disableall=function() {_B._tv["disableAll"]();};_B.getall=function() {var _lst;_lst=_B._tv["getAll"]();return _lst;};_B.getdatabyid=function(_id) {var _obj;_obj=_B._tv["getDataById"](_id);return _obj;};_B.getdatabytext=function(_text) {var _obj;_obj=_B._tv["getDataByText"](_text);return _obj;};_B.getcheckednodes=function() {var _lst;_lst=_B._tv["getCheckedNodes"]();return _lst;};_B.getselections=function() {var _lst;_lst=_B._tv["getSelections"]();return _lst;};_B.getchildren=function(_node,_bcascade) {var _lst;_lst=_B._tv["getChildren"](_node,_bcascade);return _lst;};_B.initialize=function(_callback,_cname,_eventname) {_B._mname=_banano_sithasodaisy_sduishared.cleanid(_cname);_B._mback=_callback;_B._options={};};_B.shadow=function(_s) {_B._root.shadow(_s);};_B.roundedbox=function() {_B._root.roundedbox();};_B.setborder=function(_b) {_B._bborder=_b;_B._options["border"]=_b;return;};_B.setcascadecheck=function(_b) {_B._bcascadecheck=_b;_B._options["cascadeCheck"]=_b;return;};_B.setcascadeselection=function(_b) {_B._bcascadeselection=_b;_B._options["cascadeSelection"]=_b;return;};_B.setcheckboxes=function(_b) {_B._bcheckboxes=_b;_B._options["checkboxes"]=_b;return;};_B.setdraganddrop=function(_b) {_B._bdraganddrop=_b;_B._options["dragAndDrop"]=_b;return;};_B.seticonslibrary=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._siconslibrary=_s;_B._options["iconsLibrary"]=_s;};_B.seticonscollapse=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._siconscollapse=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"icons.collapse","<i class=\"" + _s + "\"></i>");};_B.seticonsexpand=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._siconsexpand=_s;_banano_sithasodaisy_sduishared.putrecursive(_B._options,"icons.expand","<i class=\"" + _s + "\"></i>");};_B.setimagecssclassfield=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._simagecssclassfield=_s;_B._options["imageCssClassField "]=_s;};_B.setimageurlfield=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._simageurlfield=_s;_B._options["imageUrlField "]=_s;};_B.setlazyloading=function(_b) {_B._blazyloading=_b;_B._options["lazyLoading"]=_b;return;};_B.setselectiontype=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._sselectiontype=_s;_B._options["selectionType "]=_s;};_B.setuilibrary=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._suilibrary=_s;_B._options["uiLibrary "]=_s;};_B.setwidth=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);if (_s=="") { return ;}_B._swidth=_s;_B._options["width "]=_s;};_B.assignelement=function(_mcallback,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B._mname=_id;_B._mback=_mcallback;_B._melement=u("#" + _id + "");_B._root.assignelement(_B._mback,_B._mname);_B._options={};};_B.enable=function() {_B._root.disabled(false);};_B.disable=function() {_B._root.disabled(true);};_B.getname=function() {return "" + _B._mname + "";};_B.gethere=function() {return "#" + _B._mname + "";};_B.show=function() {_B._root.hidden(false);};_B.hide=function() {_B._root.hidden(true);};_B.addtoparent=function(_targetid,_props) {_targetid=_banano_sithasodaisy_sduishared.cleanid(_targetid);_B._mparent=u("#"+_targetid);_B.designercreateview(_B._mparent,_props,_B);};}