
/* sithasodaisysupabase */
function banano_sithasodaisysupabase_sduisupabase() {var _B=this;_B.__62="BOOL";_B.__63="INT";_B.__64="STRING";_B.__65="REAL";_B.__66="BLOB";_B.__67="FLOAT";_B.__68="INTEGER";_B.__69="TEXT";_B.__6a="DOUBLE";_B.__4={};_B.__53={};_B._ops=[];_B.__55={};_B._flds=[];_B.__5c=0;_B.__5d=0;_B.__5a={};_B.__57=[];_B.__3cb=false;_B.__3cc=null;_B.__1b4="";_B.__6d="";_B.__7={};_B.__6c={};_B.__1c2="";_B.__5e="";_B.__5f="";_B.__60="";_B.__61="";_B.__3e5=null;_B.__3e6="";_B.__3e7={};_B.initialize=function(__a6e,__149,_url,__237) {_B.__4=__a6e;_B.__53={};_B._ops.length=0;_B.__55={};_B._flds.length=0;_B.__5a={};_B.__5d=-1;_B.__57.length=0;_B.__1b4=__149;_B.__1c2="id";_B.__6c={};_B.schemaaddtext1("id",_B);_B.__3e5=supabase;_B.__3cc=_B.__3e5["createClient"](_url,__237);return _B;};_B.settablename=function(_s) {_B.__6d=_s;};_B.schemaaddblob=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__66;}return _B;};_B.schemaaddblob1=function(_b) {_B.__6c[_b]=_B.__66;return _B;};_B.schemaaddboolean=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__62;}return _B;};_B.schemaaddboolean1=function(_b) {_B.__6c[_b]=_B.__62;return _B;};_B.schemaadddouble1=function(_b) {_B.__6c[_b]=_B.__6a;return _B;};_B.schemaadddouble=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__6a;}return _B;};_B.schemaaddfloat1=function(_b) {_B.__6c[_b]=_B.__67;return _B;};_B.schemaaddfloat=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__67;}return _B;};_B.schemaaddtext1=function(_b) {_B.__6c[_b]=_B.__64;return _B;};_B.schemaaddtext=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__64;}return _B;};_B.schemaaddint1=function(_b) {_B.__6c[_b]=_B.__63;return _B;};_B.schemaaddint=function(__a9f) {var _b;for (var _bindex=0;_bindex<__a9f.length;_bindex++) {_b=__a9f[_bindex];_B.__6c[_b]=_B.__63;}return _B;};_B.setfield=function(__aa1,__aa7) {_B.__5a[__aa1]=__aa7;return _B;};_B.recordfrommap=function(_sm) {var _k,_v;_B.__5a={};var _kKeys = Object.keys(_sm);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_sm[_k];_B.__5a[_k]=_v;}};_B.firstrecord=function() {var _rec;_rec=_B.__57[0];return _rec;};_B.clear_where=function() {_B.__53={};_B._ops.length=0;_B.__55={};_B._flds.length=0;return _B;};_B.add_field=function(_fld) {_B._flds.push(_fld);return _B;};_B.add_fields=function(__2d6) {var _fld;for (var _fldindex=0;_fldindex<__2d6.length;_fldindex++) {_fld=__2d6[_fldindex];_B.add_field(_fld,_B);}return _B;};_B.add_where=function(_fld,__a7b,__164) {switch ("" + __a7b) {case "" + "=":__a7b="eq";break;case "" + "<>":__a7b="neq";break;case "" + ">":__a7b="gt";break;case "" + ">=":__a7b="gte";break;case "" + "<":__a7b="lt";break;case "" + "<=":__a7b="lte";break;}_B.__53[_fld]=__164;_B._ops.push(__a7b);return _B;};_B.add_where_string=function(_fld,__a7b,__164) {_B.add_where(_fld,__a7b,"'" + __164 + "'",_B);return _B;};_B.add_order_by=function(_fld,__d6a) {_B.__55[_fld]=__d6a;return _B;};_B.nextrow=function() {var __aa9;_B.__5d=_B.__5d+1;__aa9=_B.__5c-1;if (_B.__5d>__aa9) {return false;} else {_B.setposition(_B.__5d,_B);return true;}};_B.setrecord=function(_rec) {var _k,__aaa,_v,_dt;_B.__5a={};var _kKeys = Object.keys(_rec);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];__aaa=(_k in _B.__6c);if (__aaa==false) {delete _rec[_k];}}var _kKeys = Object.keys(_rec);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_rec[_k]===undefined? "":_rec[_k];_dt=_B.__6c[_k];switch ("" + _dt) {case "" + _B.__62:_v=_banano_sithasodaisy_sduishared.cbool(_v);break;case "" + _B.__63:_v=_banano_sithasodaisy_sduishared.cint(_v);break;case "" + _B.__64:_v=_banano_sithasodaisy_sduishared.cstr(_v);break;case "" + _B.__65:_v=_banano_sithasodaisy_sduishared.cdbl(_v);break;case "" + _B.__66:break;case "" + _B.__67:_v=_banano_sithasodaisy_sduishared.cdbl(_v);break;case "" + _B.__68:_v=_banano_sithasodaisy_sduishared.cint(_v);break;case "" + _B.__69:_v=_banano_sithasodaisy_sduishared.cstr(_v);break;case "" + _B.__6a:_v=_banano_sithasodaisy_sduishared.cdbl(_v);break;}_B.__5a[_k]=_v;}_B.__61=_B.__5a[_B.__5e]===undefined? "":_B.__5a[_B.__5e];};_B.preparerecord=function() {_B.__5a={};};_B.setposition=function(_pos) {if (_B.__57.length>_pos) {_B.__5a=_B.__57[_pos];_B.__5d=_pos;} else {_B.__5d=-1;_B.__5a={};}};_B.getposition=function() {return _B.__5d;};_B.getint=function(_fld) {var _obj;_fld=_fld.toLowerCase();if (is.undefined(_B.__5a)) { return 0;}if ((_fld in _B.__5a)) {_obj=_B.__5a[_fld]===undefined? 0:_B.__5a[_fld];_obj=_banano_sithasodaisy_sduishared.cint(_obj);return _obj;} else {return 0;}};_B.getlong=function(_fld) {return _B.getint(_fld,_B);};_B.getstring=function(_fld) {var _obj;_fld=_fld.toLowerCase();if (is.undefined(_B.__5a)) { return "";}if ((_fld in _B.__5a)) {_obj=_B.__5a[_fld]===undefined? "":_B.__5a[_fld];_obj=_banano_sithasodaisy_sduishared.cstr(_obj);return _obj;} else {return "";}};_B.getimage=function(_fld) {var __4e4;__4e4=_B.getstring(_fld,_B);if (__4e4=="") { return "./assets/placeholderimg.jpg";}return __4e4;};_B.getboolean=function(_fld) {var _obj;_fld=_fld.toLowerCase();if (is.undefined(_B.__5a)) { return false;}if ((_fld in _B.__5a)) {_obj=_B.__5a[_fld]===undefined? false:_B.__5a[_fld];_obj=_banano_sithasodaisy_sduishared.parsebool(_obj);return _obj;} else {return false;}};_B.getdouble=function(_fld) {var _obj;_fld=_fld.toLowerCase();if ((_fld in _B.__5a)) {_obj=_B.__5a[_fld]===undefined? 0:_B.__5a[_fld];_obj=_banano_sithasodaisy_sduishared.cdbl(_obj);return _obj;} else {return 0;}};_B.getrecord=function(_pos) {var _rec;_rec=_B.__57[_pos];return _rec;};_B.movefirst=function() {_B.setposition(0,_B);};_B.movelast=function() {_B.setposition(_B.__5c-1,_B);};_B.moveprevious=function() {_B.__5d=_B.__5d-1;if (_B.__5d<0) {_B.__5d=0;}_B.setposition(_B.__5d,_B);};_B.movenext=function() {_B.__5d=_B.__5d+1;if (_B.__5d>_B.__5c) {_B.__5d=_B.__5c-1;}_B.setposition(_B.__5d,_B);};_B.assignrealrecord=function(__d13) {var _k,_v;_B.__5a={};var _kKeys = Object.keys(_B.__6c);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=__d13[_k];_B.__5a[_k]=_v;}_B.__61=_B.__5a[_B.__5e]===undefined? "":_B.__5a[_B.__5e];};_B.select_all=async function() {var __b76,__d6b,_out,_k,_v,_sopt;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.SELECT_ALL. Please execute SchemaAdd?? first to define your table schema!";return null;}_B.__5d=-1;_B.__57.length=0;try {__b76=_banano_sithasodaisy_sduishared.join(",",_B._flds);if (__b76=="") {__b76="*";}__d6b=_B.__3cc["from"](_B.__6d);if (Object.keys(_B.__55).length==0) {_out=await __d6b["select"](__b76);_B.__57=_out["data"];} else {__d6b=__d6b["select"](__b76);var _kKeys = Object.keys(_B.__55);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_B.__55[_k];_sopt={};_sopt["ascending"]=_v;__d6b=__d6b["order"](_k,_sopt);}_out=await __d6b;_B.__57=_out["data"];}} catch(err) {}_B.__5c=_B.__57.length;return _B.__57;};_B.select_where=async function() {var _res,__b76,__d6b,_i,__a81,_col,_val,_opr,_k,_v,_sopt,_out;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.SELECT_ALL. Please execute SchemaAdd?? first to define your table schema!";return null;}_res=[];_res.length=0;__b76=_banano_sithasodaisy_sduishared.join(",",_B._flds);if (__b76=="") {__b76="*";}__d6b=_B.__3cc["from"](_B.__6d);__d6b=__d6b["select"](__b76);if (Object.keys(_B.__53).length>0) {_i=0;__a81=Object.keys(_B.__53).length-1;for (_i=0;_i<=__a81;_i++) {_col=banano_getB4JKeyAt(_B.__53,_i);_val=banano_getB4JValueAt(_B.__53,_i);_opr=_B._ops[_i];__d6b=__d6b[_opr](_col,_val);}}if (Object.keys(_B.__55).length>0) {var _kKeys = Object.keys(_B.__55);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_B.__55[_k];_sopt={};_sopt["ascending"]=_v;__d6b=__d6b["order"](_k,_sopt);}}_out=await __d6b;_res=_out["data"];return _res;};_B.create=async function() {var __d6b,_out,__3c4;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.CREATE. Please execute SchemaAdd?? first to define your table schema!";return false;}try {__d6b=_B.__3cc["from"](_B.__6d);_out=await __d6b["insert"](_B.__5a);__3c4=_out["status"];__3c4=_banano_sithasodaisy_sduishared.cstr(__3c4);if (__3c4=="201") {return true;} else {return false;}} catch(err) {return false;}};_B.update=async function() {var _id,__d6b,_out,__3c4;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.UPDATE. Please execute SchemaAdd?? first to define your table schema!";return null;}try {_id=_B.__5a["id"];__d6b=_B.__3cc["from"](_B.__6d);delete _B.__5a["id"];__d6b=__d6b["update"](_B.__5a);_out=await __d6b["eq"](_B.__1c2,_id);__3c4=_out["status"];__3c4=_banano_sithasodaisy_sduishared.cstr(__3c4);if (__3c4=="204") {return true;} else {return false;}} catch(err) {return false;}};_B.unsubscribeall=function() {_B.__3cc["removeAllChannels"]();};_B.subscribe=function() {var _opt,__d6d,__b8a,_cb;if (_B.__6d=="") {throw "SDUISupaBase.Subscribe. The tablename has not been specified!";return;}_opt={};_opt["event"]="*";_opt["schema"]="public";_opt["table"]=_B.__6d;__d6d=_B.__3cc["channel"]("*");__b8a={};_cb=function(__b8a) {if (typeof _B[("Changes").toLowerCase()]==="function") {return _B[("Changes").toLowerCase()](__b8a,_B)};};__d6d["on"]("postgres_changes",_opt,_cb);__d6d["subscribe"]();};_B.changes=function(__b8a) {var __d6e,_mnew,_mold,__d71;__d6e=__b8a["eventType"];_mnew=__b8a["new"];_mold=__b8a["old"];__d71=__b8a["table"];(function() {if (typeof _B.__4[("" + _B.__1b4 + "_changes").toLowerCase()]==="function") {var CSr = _B.__4[("" + _B.__1b4 + "_changes").toLowerCase()](__d6e,_mnew,_mold,__d71,_B);if(CSr!=null) {return CSr}}})();};_B.delete=async function(_id) {var __d6b,_out,__3c4;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.DELETE. Please execute SchemaAdd?? first to define your table schema!";return null;}try {__d6b=_B.__3cc["from"](_B.__6d);__d6b=__d6b["delete"]();_out=await __d6b["eq"](_B.__1c2,_id);__3c4=_out["status"];__3c4=_banano_sithasodaisy_sduishared.cstr(__3c4);if (__3c4=="204") {return true;} else {return false;}} catch(err) {return false;}};_B.read=async function(_id) {var _m,_lst;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.READ. Please execute SchemaAdd?? first to define your table schema!";return null;}_m={};_B.clear_where(_B);_B.add_where("id","=",_id,_B);_lst=await _B.select_where(_B);if (_lst.length>0) {_m=_lst[0];}_B.setrecord(_m,_B);return _m;};_B.containskey=async function(_id) {var _res;if (Object.keys(_B.__6c).length==0) {throw "SDUIPocketBase.ContainsKey. Please execute SchemaAdd?? first to define your table schema!";return "";}_B.clear_where(_B);_B.add_where("id","=","'" + _id + "'",_B);_res=await _B.select_where(_B);if (_res.length==0) {return false;} else {return true;}};_B.read_by_string=async function(__aa1,__aa7) {var _res,_m;_B.clear_where(_B);_B.add_where_string(__aa1,"=",__aa7,_B);_res=await _B.select_where(_B);_m={};if (_res.length==0) {return _m;} else {_m=_res[0];return _m;}};_B.read_by=async function(__aa1,__aa7) {var _res,_m;_B.clear_where(_B);_B.add_where(__aa1,"=",__aa7,_B);_res=await _B.select_where(_B);_m={};if (_res.length==0) {return _m;} else {_m=_res[0];return _m;}};_B.existsbystring=async function(__aa1,__aa7) {var _res;_B.clear_where(_B);_B.add_where_string(__aa1,"=",__aa7,_B);_res=await _B.select_where(_B);console.log(_res);if (_res.length==0) {return false;} else {return true;}};_B.exists=async function(__aa1,__aa7) {var _res;_B.clear_where(_B);_B.add_where(__aa1,"=",__aa7,_B);_res=await _B.select_where(_B);if (_res.length==0) {return false;} else {return true;}};_B.listkeys=async function() {var _res,_rec,_k;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.ListKeys. Please execute SchemaAdd?? first to define your table schema!";return null;}_B.clear_where(_B);_B.__57=await _B.select_where(_B);_res=[];_res.length=0;for (var _recindex=0;_recindex<_B.__57.length;_recindex++) {_rec=_B.__57[_recindex];_k=_rec["id"]===undefined? "":_rec["id"];_k=_banano_sithasodaisy_sduishared.cstr(_k);_res.push(_k);}return _res;};_B.delete_all=async function() {var _keys,_k,__d6b;_keys=await _B.listkeys(_B);if (_keys.length==0) { return ;}for (var _kindex=0;_kindex<_keys.length;_kindex++) {_k=_keys[_kindex];__d6b=_B.__3cc["from"](_B.__6d);__d6b=__d6b["delete"]();await __d6b["eq"](_B.__1c2,_k);}};_B.getkeyvalues=async function(__aa2,_k,_v) {var _mx,_row,_f1,_f2;_mx={};if (__aa2) {_mx[""]="-- Nothing Selected --";}_B.clear_where(_B);_B.add_field(_k,_B);_B.add_field(_v,_B);_B.add_order_by(_v,true,_B);_B.__57=await _B.select_where(_B);for (var _rowindex=0;_rowindex<_B.__57.length;_rowindex++) {_row=_B.__57[_rowindex];_f1=_row[_k];_f2=_row[_v];_mx[_f1]=_f2;}return _mx;};_B.getkeyvaluesfromlist=function(__aa6,__aa2,_k,_v) {var _mx,_row,_f1,_f2;_mx={};if (__aa2) {_mx[""]="-- Nothing Selected --";}for (var _rowindex=0;_rowindex<__aa6.length;_rowindex++) {_row=__aa6[_rowindex];_f1=_row[_k];_f2=_row[_v];_mx[_f1]=_f2;}return _mx;};_B.findwhereorderby=async function(__a7c,__a7d,__a7e) {var _s,_nl;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.findWhereOrderBy. Please execute SchemaAdd?? first to define your table schema!";return null;}_B.clear_where(_B);_B.__53=__a7c;_B._ops=__a7d;if (is.null(__a7e)==false) {for (var _sindex=0;_sindex<__a7e.length;_sindex++) {_s=__a7e[_sindex];_B.add_order_by(_s,true,_B);}}_nl=await _B.select_where(_B);return _nl;};_B.findwhere=async function(__a7c,__a7d) {var _res;_res=await _B.findwhereorderby(__a7c,__a7d,null,_B);return _res;};_B.deletewhere=async function(__aad,__a7c,__a7d) {var _recs,_rec,__aaf;if (Object.keys(_B.__6c).length==0) {throw "SDUISupaBase.deleteWhere. Please execute SchemaAdd?? first to define your table schema!";return null;}_recs=await _B.findwhere(__a7c,__a7d,_B);for (var _recindex=0;_recindex<_recs.length;_recindex++) {_rec=_recs[_recindex];__aaf=_rec[__aad];await _B.delete(__aaf,_B);}return true;};_B.nextid=function() {var _ni;_ni=_banano_sithasodaisy_sduishared.guidalpha(15);return _ni;};_B.delete_where=function() {_B.deletewhere("id",_B.__53,_B._ops,_B);};_B.delete_by=function(__aa1,__aa7) {_B.clear_where(_B);_B.add_where(__aa1,"=",__aa7,_B);_B.deletewhere("id",_B.__53,_B._ops,_B);};_B.delete_by_string=function(__aa1,__aa7) {_B.clear_where(_B);_B.add_where(__aa1,"=","'" + __aa7 + "'",_B);_B.deletewhere("id",_B.__53,_B._ops,_B);};_B.user_signup=async function(__1bb,__2b3) {var _opt,__d72,_out,__58;_opt={};_opt["email"]=__1bb;_opt["password"]=__2b3;__d72=_B.__3cc["auth"];_out=await __d72["signUp"](_opt);__58=_out["error"];if (is.null(__58)==false) {_B.__3e6=__58["message"]===undefined? "":__58["message"];return false;} else {_B.__3e7=_out["data"];return true;}};_B.user_signinwithpassword=async function(__1bb,__2b3) {var _opt,__d72,_out,__58;_opt={};_opt["email"]=__1bb;_opt["password"]=__2b3;__d72=_B.__3cc["auth"];_out=await __d72["signInWithPassword"](_opt);__58=_out["error"];if (is.null(__58)==false) {_B.__3e6=__58["message"]===undefined? "":__58["message"];return false;} else {_B.__3e7=_out["data"];return true;}};_B.user_resetpasswordforemail=async function(__1bb,__d73) {var _opt,__d72,_out,__58;_opt={};_opt["redirectTo"]=__d73;__d72=_B.__3cc["auth"];_out=await __d72["resetPasswordForEmail"](__1bb,_opt);__58=_out["error"];if (is.null(__58)==false) {_B.__3e6=__58["message"]===undefined? "":__58["message"];return false;} else {return true;}};_B.user_signout=async function() {var __d72;__d72=_B.__3cc["auth"];await __d72["signOut"]();return true;};_B.user_getprofile=async function() {var __d72,_out,__58;__d72=_B.__3cc["auth"];_out=await __d72["getUser"]();__58=_out["error"];if (is.null(__58)==false) {_B.__3e6=__58["message"]===undefined? "":__58["message"];return false;} else {_B.__3e7=_out["data"]["user"];return true;}};_B.user_updateuser=async function(__1bb,__2b3) {var _opt,__d72,_out,__58;_opt={};_opt["email"]=__1bb;_opt["password"]=__2b3;_opt["data"]=_B.__5a;__d72=_B.__3cc["auth"];_out=await __d72["updateUser"](_opt);__58=_out["error"];if (is.null(__58)==false) {_B.__3e6=__58["message"]===undefined? "":__58["message"];return false;} else {return true;}};_B.read_id_by_string=async function(__aa1,__aa7) {var _rec,_sid;_rec=await _B.read_by_string(__aa1,__aa7,_B);_sid=_rec["id"]===undefined? "":_rec["id"];return _sid;};_B.update_by_string=async function(__aa1,__aa7) {var _rec,_sid,_nid;_rec=await _B.read_by_string(__aa1,__aa7,_B);_sid=_rec["id"]===undefined? "":_rec["id"];_B.__5a["id"]=_sid;_nid=await _B.update(_B);return _nid;};_B.update_by=async function(__aa1,__aa7) {var _rec,_sid,_nid;_rec=await _B.read_by(__aa1,__aa7,_B);_sid=_rec["id"]===undefined? "":_rec["id"];_B.__5a["id"]=_sid;_nid=await _B.update(_B);return _nid;};}