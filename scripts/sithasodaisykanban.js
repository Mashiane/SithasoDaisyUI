
/* sithasodaisykanban */
function banano_sithasodaisykanban_sduikanban() {var _B=this;_B.__1={};_B.__15d={};_B.__6=null;_B.__15e=null;_B.__2="";_B.__1b=(typeof banano_sithasodaisy_sduidiv === 'function') ? new banano_sithasodaisy_sduidiv(): null;_B.__b="";_B.__c="";_B.__d="";_B.__e="";_B.__f="";_B.__15f="";_B.__136=false;_B.__291=false;_B.__292=false;_B.__293="";_B.__294=false;_B.__295=false;_B.__296="";_B.__9={};_B.__297=null;_B.__298=[];_B.__299={};_B.__29a="";_B.__29b="";_B.__29c=false;_B.__29d="";_B.__29e="";_B.__29f="";_B.__2a0="";_B.__2a1=false;_B.designercreateview=function(__c39,__c37) {_B.__1=__c37;_B.__15e=__c39;if (__c37!=null) {_B.__15f=__c37["ParentID"]===undefined? "":__c37["ParentID"];_B.__15f=_banano_sithasodaisy_sduishared.cstr(_B.__15f);_B.__b=__c37["RawClasses"]===undefined? "":__c37["RawClasses"];_B.__c=__c37["RawStyles"]===undefined? "":__c37["RawStyles"];_B.__d=__c37["RawAttributes"]===undefined? "":__c37["RawAttributes"];_B.__e=__c37["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__c37["MarginAXYTBLR"];_B.__f=__c37["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__c37["PaddingAXYTBLR"];_B.__136=__c37["Visible"]===undefined? true:__c37["Visible"];_B.__136=_banano_sithasodaisy_sduishared.parsebool(_B.__136);_B.__291=__c37["DragBoards"]===undefined? true:__c37["DragBoards"];_B.__291=_banano_sithasodaisy_sduishared.parsebool(_B.__291);_B.__292=__c37["DragItems"]===undefined? true:__c37["DragItems"];_B.__292=_banano_sithasodaisy_sduishared.parsebool(_B.__292);_B.__293=__c37["Gutter"]===undefined? "15px":__c37["Gutter"];_B.__293=_banano_sithasodaisy_sduishared.cstr(_B.__293);_B.__294=__c37["ItemAddOptionsEnabled"]===undefined? false:__c37["ItemAddOptionsEnabled"];_B.__294=_banano_sithasodaisy_sduishared.parsebool(_B.__294);_B.__295=__c37["ItemHandleOptionsEnabled"]===undefined? false:__c37["ItemHandleOptionsEnabled"];_B.__295=_banano_sithasodaisy_sduishared.parsebool(_B.__295);_B.__296=__c37["WidthBoard"]===undefined? "250px":__c37["WidthBoard"];_B.__296=_banano_sithasodaisy_sduishared.cstr(_B.__296);_B.__29a=__c37["ItemAddOptionsClass"]===undefined? "":__c37["ItemAddOptionsClass"];_B.__29a=_banano_sithasodaisy_sduishared.cstr(_B.__29a);_B.__29b=__c37["ItemAddOptionsContent"]===undefined? "":__c37["ItemAddOptionsContent"];_B.__29b=_banano_sithasodaisy_sduishared.cstr(_B.__29b);_B.__29c=__c37["ItemAddOptionsFooter"]===undefined? false:__c37["ItemAddOptionsFooter"];_B.__29c=_banano_sithasodaisy_sduishared.parsebool(_B.__29c);_B.__29d=__c37["ItemHandleOptionsCustomCssIconHandler"]===undefined? "":__c37["ItemHandleOptionsCustomCssIconHandler"];_B.__29d=_banano_sithasodaisy_sduishared.cstr(_B.__29d);_B.__29e=__c37["ItemHandleOptionsCustomHandler"]===undefined? "":__c37["ItemHandleOptionsCustomHandler"];_B.__29e=_banano_sithasodaisy_sduishared.cstr(_B.__29e);_B.__29f=__c37["ItemHandleOptionsCustomCssHandler"]===undefined? "":__c37["ItemHandleOptionsCustomCssHandler"];_B.__29f=_banano_sithasodaisy_sduishared.cstr(_B.__29f);_B.__2a0=__c37["ItemHandleOptionsHandleClass"]===undefined? "":__c37["ItemHandleOptionsHandleClass"];_B.__2a0=_banano_sithasodaisy_sduishared.cstr(_B.__2a0);_B.__2a1=__c37["ResponsivePercentage"]===undefined? true:__c37["ResponsivePercentage"];_B.__2a1=_banano_sithasodaisy_sduishared.parsebool(_B.__2a1);}if (_B.__15f=="") {_B.__15f=_B.__15e.attr('id');}_B.addkanban(_B.__15d,_B.__15f,_B.__2,_B);_B.__1b.classes(_B.__b);_B.__1b.attributes(_B.__d);_B.__1b.styles(_B.__c);_B.__1b.paddingaxytblr(_B.__f);_B.__1b.marginaxytblr(_B.__e);if (_B.__136==false) {_B.hide(_B);}_B.setdragboards(_B.__291,_B);_B.setdragitems(_B.__292,_B);_B.setgutter(_B.__293,_B);_B.setitemaddoptionsenabled(_B.__294,_B);_B.setitemhandleoptionsenabled(_B.__295,_B);_B.setwidthboard(_B.__296,_B);_B.setitemaddoptionsclass(_B.__29a,_B);_B.setitemaddoptionscontent(_B.__29b,_B);_B.setitemaddoptionsfooter(_B.__29c,_B);_B.setitemhandleoptionscustomcssiconhandler(_B.__29d,_B);_B.setitemhandleoptionscustomhandler(_B.__29e,_B);_B.setitemhandleoptionscustomcsshandler(_B.__29f,_B);_B.setitemhandleoptionshandleclass(_B.__2a0,_B);_B.setresponsivepercentage(_B.__2a1,_B);};_B.initialize=function(__c2c,__d2e,__149) {_B.__2=_banano_sithasodaisy_sduishared.cleanid(__d2e);_B.__15d=__c2c;_B.__9={};_B.__298.length=0;_B.__299={};};_B.addkanban=function(__4,__c36,_id) {var __e54,_style;__c36=_banano_sithasodaisy_sduishared.cleanid(__c36);_id=_banano_sithasodaisy_sduishared.cleanid(_id);_B.__2=_id;_B.__15d=__4;if (u("#" + __c36 + "").length>0==false) {throw "SDUIKanban.Initialize: '" + __c36 + "' parent does not exist!";return;}if (u("#" + _id + "").length>0) {_B.__6=u("#" + _id + "");} else {_B.__15e=u("#" + __c36 + "");__e54={};__e54["overflow-x"]="auto";__e54["padding"]="20px 0";_style=_banano_sithasodaisy_sduishared.map2style(__e54);_B.__6=_B.__15e.append("<div id=\"" + _id + "\" style=\"" + _style + "\"></div>").find("#" + _id + "").bananofirst();}_B.assignelement(__4,_B.__2,_B);_B.__9={};_B.__298.length=0;_B.__299={};};_B.setitemaddoptionsclass=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__29a=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemAddOptions.class",_s);};_B.setitemaddoptionscontent=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__29b=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemAddOptions.content",_s);};_B.setitemaddoptionsfooter=function(_b) {_B.__29c=_b;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemAddOptions.footer",_b);return;};_B.setitemhandleoptionscustomcssiconhandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__29d=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemHandleOptions.customCssIconHandler",_s);};_B.setitemhandleoptionscustomhandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__29e=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemHandleOptions.customHandler",_s);};_B.setitemhandleoptionscustomcsshandler=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__29f=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemHandleOptions.customCssHandler",_s);};_B.setitemhandleoptionshandleclass=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__2a0=_s;_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemHandleOptions.handleClass",_s);};_B.setresponsivepercentage=function(_b) {_B.__2a1=_b;_B.__9["responsivePercentage"]=_b;return;};_B.clear=function() {_B.__298.length=0;_B.__299={};};_B.addboard=function(_id,_title,__db4,__c37) {var _items,_nb,_k,_v;_id=_banano_sithasodaisy_sduishared.cleanid(_id);_items=[];_items.length=0;_nb={};_nb["id"]=_id;_nb["title"]=_title;_nb["item"]=_items;_nb["class"]=__db4;if (is.null(__c37)==false) {var _kKeys = Object.keys(__c37);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=__c37[_k];_nb[_k]=_v;}}_B.__299[_id]=_nb;};_B.addboarditem=function(__e56,_id,_title,__db4,__c37) {var _bm,_items,_nb,_k,_v,_a,_b,__e58,__e59,__e5a,__e5b,__e5c;_id=_banano_sithasodaisy_sduishared.cleanid(_id);__e56=_banano_sithasodaisy_sduishared.cleanid(__e56);if ((__e56 in _B.__299)) {_bm=_B.__299[__e56];_items=_bm["item"];_nb={};_nb["id"]=_id;_nb["title"]=_title;_nb["item"]=_items;_nb["class"]=__db4;if (is.null(__c37)==false) {var _kKeys = Object.keys(__c37);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=__c37[_k];_nb[_k]=_v;}}_a={};_b={};__e58=function(_a,_b) {if (typeof _B.__15d[("" + _B.__2 + "_DragItem").toLowerCase()]==="function") {return _B.__15d[("" + _B.__2 + "_DragItem").toLowerCase()](_a,_b,_B)};};_nb["drag"]=__e58;__e59=function(_a) {if (typeof _B.__15d[("" + _B.__2 + "_DragItemEnd").toLowerCase()]==="function") {return _B.__15d[("" + _B.__2 + "_DragItemEnd").toLowerCase()](_a,_B)};};_nb["dragend"]=__e59;__e5a=function(_a) {if (typeof _B.__15d[("" + _B.__2 + "_DropItem").toLowerCase()]==="function") {return _B.__15d[("" + _B.__2 + "_DropItem").toLowerCase()](_a,_B)};};_nb["drop"]=__e5a;__e5b=function(_a) {if (typeof _B.__15d[("" + _B.__2 + "_ClickItem").toLowerCase()]==="function") {return _B.__15d[("" + _B.__2 + "_ClickItem").toLowerCase()](_a,_B)};};_nb["drop"]=__e5b;__e5c=function(_a,_b) {if (typeof _B.__15d[("" + _B.__2 + "_ContextItem").toLowerCase()]==="function") {return _B.__15d[("" + _B.__2 + "_ContextItem").toLowerCase()](_a,_b,_B)};};_nb["context"]=__e5c;_items.push(_nb);_bm["item"]=_items;_B.__299[__e56]=_bm;}};_B.refresh=function() {var _board;_B.__298.length=0;for (_boardKEY in _B.__299) {var _board=_B.__299[_boardKEY];_B.__298.push(_board);}_B.__9["element"]="#" + _B.__2 + "";_B.__9["boards"]=_B.__298;_B.__297=new jKanban(_B.__9);};_B.shadow=function(_s) {_B.__1b.shadow(_s);};_B.roundedbox=function() {_B.__1b.roundedbox();};_B.setdragboards=function(_b) {_B.__291=_b;_B.__9["dragBoards"]=_b;return;};_B.setdragitems=function(_b) {_B.__292=_b;_B.__9["dragItems"]=_b;return;};_B.setgutter=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__293=_s;_B.__9["gutter"]=_s;};_B.setitemaddoptionsenabled=function(_b) {_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemAddOptions.enabled",_b);return;};_B.setitemhandleoptionsenabled=function(_b) {_banano_sithasodaisy_sduishared.putrecursive(_B.__9,"itemHandleOptions.enabled",_b);return;};_B.setwidthboard=function(_s) {_s=_banano_sithasodaisy_sduishared.cstr(_s);_B.__296=_s;_B.__9["widthBoard"]=_s;};_B.assignelement=function(__4,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B.__2=_id;_B.__15d=__4;_B.__6=u("#" + _id + "");_B.__1b.assignelement(_B.__15d,_B.__2);};_B.enable=function() {_B.__1b.disabled(false);};_B.disable=function() {_B.__1b.disabled(true);};_B.getname=function() {return "" + _B.__2 + "";};_B.gethere=function() {return "#" + _B.__2 + "";};_B.show=function() {_B.__1b.hidden(false);};_B.hide=function() {_B.__1b.hidden(true);};_B.addtoparent=function(__c3d,__c37) {__c3d=_banano_sithasodaisy_sduishared.cleanid(__c3d);_B.__15e=u("#"+__c3d);_B.designercreateview(_B.__15e,__c37,_B);};}