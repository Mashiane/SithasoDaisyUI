
/* sithasodaisyphp */
function banano_sithasodaisyphp_sduiphp() {var _B=this;_B._send_email="SendEmail";_B._get_file="GetFile";_B._directory_list="DirectoryList";_B._rolling_copyright="RollingCopyright";_B._validate_cc="ValidateCC";_B._file_exists="FileExists";_B._directory_exists="DirectoryExists";_B._file_write="WriteFile";_B._file_log="LogFile";_B._file_append="FileAppend";_B._file_copy="FileCopy";_B._file_rename="FileRename";_B._file_delete="FileDelete";_B._directory_make="DirectoryMake";_B._file_gethtml="FileGetHTML";_B._file_getjson="FileGetJSON";_B._directory_zip="DirectoryZip";_B._file_details="FileDetails";_B._folder_zip="FolderZip";_B._directory_delete="DirectoryDelete";_B._directory_listrecursive="DirectoryListRecursive";_B._file_unzip="FileUnzip";_B._directory_copy="DirectoryCopy";_B._path_info="GetPathInfo";_B._excel_test="ExcelTest";_B._logfilename="";_B._suspendlogs=false;_B._includeresponses=false;_B.initialize=function(_slogfile,_bincluderesponses) {_B._logfilename=_slogfile;_B._includeresponses=_bincluderesponses;_B._suspendlogs=false;return _B;};_B.cstr=function(_o) {if (is.null(_o) || is.undefined(_o)) {_o="";}if (_o=="null") { return "";}if (_o=="undefined") { return "";}return ""+_o;};_B.padright=function(_value,_maxlen,_padchar) {var _intordnolen,_i;_value=_B.cstr(_value,_B);_intordnolen=_B.len(_value,_B);_i=0;for (_i=1;_i<=(_maxlen-_intordnolen);_i+=1) {_value=_padchar+_value;}return _value;};_B.filegetinfo=function(_fileobj) {var _ff,_sname,_lmd,_ssize,_stype,_slastmodifieddate,_yyyy,_dd,_mm,_hh,_minutes,_fd;_ff= new banano_sithasodaisyphp_fileinfo();_ff.initialize();if (is.null(_fileobj) || is.undefined(_fileobj)) { return _ff;}_sname=_fileobj["name"];_lmd=_fileobj["lastModified"];_ssize=_fileobj["size"];_stype=_fileobj["type"];_slastmodifieddate=null;_slastmodifieddate=new Date(_lmd);_yyyy=_slastmodifieddate["getFullYear"]();_dd=_slastmodifieddate["getDate"]();_mm=_slastmodifieddate["getMonth"]();_hh=_slastmodifieddate["getHours"]();_minutes=_slastmodifieddate["getMinutes"]();_dd=_B.padright(_dd,2,"0",_B);_mm=_B.padright(_mm,2,"0",_B);_hh=_B.padright(_hh,2,"0",_B);_minutes=_B.padright(_minutes,2,"0",_B);_fd="" + _yyyy + "-" + _mm + "-" + _dd + " " + _hh + ":" + _minutes + "";_ff._filename=_sname;_ff._filedate=_fd;_ff._filedateonly="" + _yyyy + "-" + _mm + "-" + _dd + "";_ff._filesize=_ssize;_ff._filetype=_stype;_ff._fileerror="";return _ff;};_B.len=function(_text) {return _text.length;};_B.fileuploadwait=async function(_fileo,_limit,_targetdir) {var _filedet,_fn,_fs,_fd,_res,_result,_sstatus,_starget;_filedet=_B.filegetinfo(_fileo,_B);_fn=_filedet._filename;_fs=_filedet._filesize;if (_fs>_limit) {_filedet._fullpath="";_filedet._fileerror="The file size is larger than the specified limits.";return _filedet;}_fd=null;_fd=new FormData();_fd["append"]("upload",_fileo);_fd["append"]("target",_targetdir);_res=await callAjaxWait("./assets/upload.php","POST","", _fd,true,null);_result=JSON.parse(_res);_sstatus=_result["status"];_starget=_result["target"];_filedet._status=_sstatus;_filedet._fullpath="./assets/" + _fn + "";return _filedet;};_B.deletelogfilewait=async function() {var _res;_res=await _B.filedeletewait(_B._logfilename,_B);return _res;};_B.updatelogwait=async function(_content) {var _res;if (_B._logfilename=="" && _B._suspendlogs==false) {throw "The LogFileName has not been set!";return false;}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_log, "params": _B.buildwritefile(_B._logfilename,_content,_B)}),false,null);return _res;};_B.filecreatewait=async function(_filename,_content) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Creating a new text file '" + _filename + "' with content '" + _content + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_write, "params": _B.buildwritefile(_filename,_content,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.directorylistwait=async function(_directorypath) {var _assetslist,_soutm;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Directory listing '" + _directorypath + "'",_B);}_assetslist=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_list, "params": _B.builddirectorylist(_directorypath,_B)}),false,null);_soutm=JSON.parse(_assetslist);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(JSON.stringify(_soutm),_B);}return _soutm;};_B.fileexistswait=async function(_fn) {var _sfc;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Check File Existstance '" + _fn + "'",_B);}_sfc=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_exists, "params": _B.buildfileexists(_fn,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _sfc + "",_B);}return _sfc;};_B.directoryrenamewait=async function(_oldname,_newname) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Rename directory from '" + _oldname + "' to '" + _newname + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_rename, "params": _B.buildfilerename(_oldname,_newname,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.directoryexistswait=async function(_fn) {var _sfc;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Check Directory Existence '" + _fn + "'",_B);}_sfc=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_exists, "params": _B.buildfileexists(_fn,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _sfc + "",_B);}return _sfc;};_B.filereadwait=async function(_fn) {var _strfc;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Read file '" + _fn + "'",_B);}_strfc=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._get_file, "params": _B.buildgetfile(_fn,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_strfc,_B);}return _strfc;};_B.fileappendwait=async function(_fn,_content) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Append file '" + _fn + "' with '" + _content + "'",_B);await _B.updatelogwait(_content,_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_append, "params": _B.buildwritefile(_fn,_content,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.fileappendnewlinewait=async function(_fn) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Append a new line to file '" + _fn + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_append, "params": _B.buildwritefile(_fn,"\n",_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.filerenamewait=async function(_oldname,_newname) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Rename file from '" + _oldname + "' to '" + _newname + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_rename, "params": _B.buildfilerename(_oldname,_newname,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.filecopywait=async function(_fn,_newlocation) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Copy file from '" + _fn + "' to '" + _newlocation + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_copy, "params": _B.buildfilecopy(_fn,_newlocation,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.filedeletewait=async function(_fn) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Delete file '" + _fn + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_delete, "params": _B.buildfiledelete(_fn,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.directorycreatewait=async function(_dirname) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Create directory '" + _dirname + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_make, "params": _B.builddirectorymake(_dirname,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.websitegethtmlwait=async function(_siteurl) {var _html;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get HTML from URL '" + _siteurl + "'",_B);}_html=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_gethtml, "params": _B.buildfilegethtml(_siteurl,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_html,_B);}return _html;};_B.filedetailswait=async function(_siteurl) {var _json,_fdd,_jsonm;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get FileDetails from File '" + _siteurl + "'",_B);}_json=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_details, "params": {"url":_siteurl}}),false,null);_fdd= new banano_sithasodaisy_fileobject();_fdd.initialize();if (_json!="") {_jsonm=JSON.parse(_json);_fdd._filename=_banano_sithasodaisy_sduishared.mvfield(_siteurl,-1,"/");_fdd._fullpath=_siteurl;_fdd._filedate=_jsonm["date"]===undefined? "":_jsonm["date"];_fdd._filetype=_jsonm["type"]===undefined? "":_jsonm["type"];_fdd._filesize=_jsonm["size"]===undefined? "":_jsonm["size"];_fdd._fileok=true;}if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_fdd,_B);}return _fdd;};_B.filerealpathwait=async function(_siteurl) {var _json;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get FileRealPath from File '" + _siteurl + "'",_B);}_json=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": "FileRealPath", "params": {"url":_siteurl}}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_json,_B);}return _json;};_B.filedirnamewait=async function(_siteurl) {var _json;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get FileDirName from File '" + _siteurl + "'",_B);}_json=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": "FileDirName", "params": {"url":_siteurl}}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_json,_B);}return _json;};_B.filebasenamewait=async function(_siteurl) {var _json;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get FileBaseName from File '" + _siteurl + "'",_B);}_json=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": "FileBaseName", "params": {"url":_siteurl}}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_json,_B);}return _json;};_B.getjsonwait=async function(_siteurl) {var _json;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Get JSON from URL '" + _siteurl + "'",_B);}_json=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_getjson, "params": _B.buildfilegetjson(_siteurl,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(_json,_B);}return _json;};_B.getipaddresswait=async function() {var _res;_res=_B.getjsonwait("http://jsonip.com",_B);return _res;};_B.directorydeletewait=async function(_dirname) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Delete directory '" + _dirname + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_delete, "params": _B.builddirectorydelele(_dirname,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.directorylistrecursivewait=async function(_dirname) {var _rl,_lst;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Directory listing recursive '" + _dirname + "'",_B);}_rl=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_listrecursive, "params": _B.builddirectorylistrecursive(_dirname,_B)}),false,null);_lst=JSON.parse(_rl);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response:",_B);await _B.updatelogwait(JSON.stringify(_lst),_B);}return _lst;};_B.zipdirectorywait=async function(_dirname,_zipfilename) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Zip directory from '" + _dirname + "' to '" + _zipfilename + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_zip, "params": _B.builddirectoryzip(_dirname,_zipfilename,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.zipfolderwait=async function(_dirname,_zipfilename) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Zip directory from '" + _dirname + "' to '" + _zipfilename + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._folder_zip, "params": _B.builddirectoryzip(_dirname,_zipfilename,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.unzipwait=async function(_zipfilename,_targetfolder) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Un-Zip file from '" + _zipfilename + "' to '" + _targetfolder + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._file_unzip, "params": _B.buildfileunzip(_zipfilename,_targetfolder,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.directorycopywait=async function(_dirname,_targetlocation) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Copy directory from '" + _dirname + "' to '" + _targetlocation + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._directory_copy, "params": _B.builddirectorycopy(_dirname,_targetlocation,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.pathinfowait=async function(_dirname) {var _res;if (_B._logfilename!="" && _B._suspendlogs==false) {await _B.updatelogwait("Path Info '" + _dirname + "'",_B);}_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": _B._path_info, "params": _B.buildpathinfo(_dirname,_B)}),false,null);if (_B._logfilename!="" && _B._suspendlogs==false && _B._includeresponses) {await _B.updatelogwait("Response: " + _res + "",_B);}return _res;};_B.sendemailwait=async function(_fromemail,_toemail,_ccemail,_subject,_message) {var _res,_result,_sstatus;_res=await callAjaxWait('https://localhost/sithasodaisydemo/sithasodaisydemo.php','POST','json', JSON.stringify({"request": "SendEmail", "params": _B.buildsendemail(_fromemail,_toemail,_ccemail,_subject,_message,_B)}),false,null);_result=JSON.parse(_res);_sstatus=_result["status"];if (_sstatus=="success") {return true;} else {return false;}};_B.buildrollingcopyright=function(_message,_year) {var _se;_se={};_se["message"]=_message;_se["year"]=_year;return _se;};_B.buildpathinfo=function(_path) {var _se;_se={};_se["fileName"]=_path;return _se;};_B.buildfileexists=function(_path) {var _se;_se={};_se["path"]=_path;return _se;};_B.buildvalidatecc=function(_number,_expiry) {var _se;_se={};_se["number"]=_number;_se["expiry"]=_expiry;return _se;};_B.buildsendemail=function(_fromemail,_toemail,_ccemail,_subject,_message) {var _se;_se={};_se["from"]=_fromemail;_se["to"]=_toemail;_se["cc"]=_ccemail;_se["subject"]=_subject;_se["msg"]=_message;return _se;};_B.buildgetfile=function(_filename) {var _se;_se={};_se["fileName"]=_filename;return _se;};_B.buildfilegethtml=function(_url) {var _se;_se={};_se["url"]=_url;return _se;};_B.buildfilegetjson=function(_url) {var _se;_se={};_se["url"]=_url;return _se;};_B.buildwritefile=function(_filename,_filecontents) {var _se;_se={};_se["fileName"]=_filename;_se["fileContents"]=_filecontents;return _se;};_B.buildfilecopy=function(_source,_target) {var _se;_se={};_se["source"]=_source;_se["target"]=_target;return _se;};_B.buildfilerename=function(_source,_target) {var _se;_se={};_se["source"]=_source;_se["target"]=_target;return _se;};_B.builddirectorylist=function(_path) {var _se;_se={};_se["path"]=_path;return _se;};_B.buildfileunzip=function(_zipfile,_extractto) {var _se;_se={};_se["zipfile"]=_zipfile;_se["extractTo"]=_extractto;return _se;};_B.builddirectoryzip=function(_path,_zipname) {var _se;_se={};_se["path"]=_path;_se["zipname"]=_zipname;return _se;};_B.buildfiledelete=function(_filex) {var _se;_se={};_se["filex"]=_filex;return _se;};_B.builddirectorymake=function(_dirpath) {var _se;_se={};_se["dirpath"]=_dirpath;return _se;};_B.builddirectorydelele=function(_dirpath) {var _se;_se={};_se["dir"]=_dirpath;return _se;};_B.builddirectorylistrecursive=function(_dirpath) {var _se;_se={};_se["path"]=_dirpath;return _se;};_B.builddirectorycopy=function(_src,_dst) {var _se;_se={};_se["src"]=_src;_se["dst"]=_dst;return _se;};}