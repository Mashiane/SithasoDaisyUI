
/* sithasodaisypdf */
function banano_sithasodaisypdf_sduijspdf() {var _B=this;_B.__172="";_B.__2f8=null;_B.__4={};_B.__147="landscape";_B.__146="potrait";_B.__2f9="JPEG";_B.__2fa="PNG";_B.__2fb="WEBP";_B.__2fc="normal";_B.__2fd="italic";_B.__2fe="bold";_B.__2ff="bolditalic";_B.__300="left";_B.__301="center";_B.__302="right";_B.__303="justify";_B.__304="S";_B.__305="F";_B.__306="FD";_B.__307="ellipsize";_B.__308="visible";_B.__309="hidden";_B.__30a="linebreak";_B.__30b="auto";_B.__30c="wrap";_B.__30d="normal";_B.__30e="top";_B.__30f="middle";_B.__310="bottom";_B.__311="a0";_B.__312="a1";_B.__313="a2";_B.__314="a3";_B.__315="a4";_B.__316="a5";_B.__317="a6";_B.__318="a7";_B.__319="a8";_B.__31a="a9";_B.__31b="a10";_B.__31c="b0";_B.__31d="b1";_B.__31e="b2";_B.__31f="b3";_B.__320="b4";_B.__321="b5";_B.__322="b6";_B.__323="b7";_B.__324="b8";_B.__325="b9";_B.__326="b10";_B.__327="c0";_B.__328="c1";_B.__329="c2";_B.__32a="c3";_B.__32b="c4";_B.__32c="c5";_B.__32d="c6";_B.__32e="c7";_B.__32f="c8";_B.__330="c9";_B.__331="c10";_B.__332="dl";_B.__333="letter";_B.__334="government-letter";_B.__335="legal";_B.__336="junior-legal";_B.__337="ledger";_B.__338="tabloid";_B.__339="credit-card";_B.__33a="mm";_B.__33b="pt";_B.__33c="in";_B.__33d="cm";_B.__33e="m";_B.__33f="px";_B.__340="";_B.__341="";_B.__342={};_B.__343=[];_B.__344="";_B.__345={};_B.__346={};_B._margin=(typeof banano_sithasodaisypdf_marginobj === 'function') ? new banano_sithasodaisypdf_marginobj(): null;_B.__347=false;_B.__348=false;_B.__349=16;_B.__34a=1.0;_B.__34b=16;_B.__34c="";_B.__34d={};_B.__34e="alphabetic";_B.__34f="ideographic";_B.__350="bottom";_B.__351="top";_B.__352="middle";_B.__353="hanging";_B.__354="0";_B.__355="1";_B.__356="fill";_B.__357="stroke";_B.__358="fillThenStroke";_B.__359="invisible";_B.__35a="fillAndAddForClipping";_B.__35b="strokeAndAddPathForClipping";_B.__35c="fillThenStrokeAndAddToPathForClipping";_B.__35d="addToPathForClipping";_B.__369="arraybuffer";_B.__36a="blob";_B.__36b="bloburi";_B.__36c="bloburl";_B.__36d="datauristring";_B.__36e="dataurlstring";_B.__36f="datauri";_B.__370="dataurl";_B.__371="dataurlnewwindow";_B.__372="pdfobjectnewwindow";_B.__373="pdfjsnewwindow";_B.__ca=false;_B.__374="";_B.__375="";_B.newtextoptions=function() {var __e92,_nt;__e92={};__e92["noBOM"]=true;__e92["autoencode"]=true;_nt=(typeof banano_sithasodaisypdf_textoptions === 'function') ? new banano_sithasodaisypdf_textoptions(): null;_nt.initialize();_nt._align=_B.__300;_nt._baseline=_B.__34e;_nt._angle=0;_nt._rotationdirection=_B.__355;_nt._charspace=0;_nt._lineheightfactor=1.15;_nt._maxwidth=0;_nt._renderingmode=_B.__356;_nt._flags.initialize();_nt._flags._nobom=true;_nt._flags._autoencode=true;_nt._url="";_nt._pagenumber=0;return _nt;};_B.initialize=function(__e94,__149,_filename) {var _pdf;_B.__4=__e94;_B.__375=__149;_B.__172=_filename;_B.__342={};_B.__343.length=0;_B.__345={};_B.__341=_B.__33a;_B.__344=_B.__315;_B.__340=_B.__146;_B.__346={};_B._margin.initialize();_B._margin._top=0;_B._margin._left=0;_B._margin._width=0;_B._margin._bottom=0;_B._margin._right=0;_B.__34d={};_pdf=window["jspdf"]["jsPDF"];window["jsPDF"]=_pdf;return _B;};_B.setpagesize=function(_ps) {_B.__344=_ps;};_B.canprint=function() {_B.__343.push("print");return _B;};_B.canmodify=function() {_B.__343.push("modify");return _B;};_B.cancopy=function() {_B.__343.push("copy");return _B;};_B.canannotforms=function() {_B.__343.push("annot-forms");return _B;};_B.setuserpassword=function(_pwd) {if (_pwd=="") { return _B;}_B.__342["userPassword"]=_pwd;return _B;};_B.setownerpassword=function(_pwd) {if (_pwd=="") { return _B;}_B.__342["ownerPassword"]=_pwd;return _B;};_B.setunit=function(_u) {_B.__341=_u;};_B.setorientation=function(_o) {_B.__340=_o;};_B.moveto=function(_x,_y) {if (_B.__ca) {console.log("pdf.moveTo(" + _x + ", " + _y + ")");}try {_x=_x.trim();_y=_y.trim();if (_x=="" || _y=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_B.__2f8["moveTo"](_x,_y);} catch(err) {console.log(err);}return _B;};_B.lineto=function(_x,_y) {if (_B.__ca) {console.log("pdf.lineTo(" + _x + ", " + _y + ")");}try {_x=_x.trim();_y=_y.trim();if (_x=="" || _y=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_B.__2f8["lineTo"](_x,_y);} catch(err) {console.log(err);}return _B;};_B.addpage=function() {if (_B.__ca) {console.log("pdf.addPage");}_B.__2f8["addPage"]();return _B;};_B.addpage1=function(__164,__132) {if (_B.__ca) {console.log("pdf.addPage(\"" + __164 + "\", \"" + __132 + "\")");}_B.__2f8["addPage"](__164,__132);return _B;};_B.rect=function(_x,_y,_w,_h,_style) {if (_B.__ca) {console.log("pdf.rect(" + _x + ", " + _y + ", " + _w + ", " + _h + ", \"" + _style + "\")");}try {_x=_x.trim();_y=_y.trim();_w=_w.trim();_h=_h.trim();_style=_style.trim();if (_x=="" || _y=="" || _w=="" || _h=="" || _style=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_w=parseInt(_w);_h=parseInt(_h);_B.__2f8["rect"](_x,_y,_w,_h,_style);} catch(err) {console.log(err);}return _B;};_B.roundedrect=function(_x,_y,_w,_h,_rx,_ry,_style) {if (_B.__ca) {console.log("pdf.roundedRect(" + _x + ", " + _y + ", " + _w + ", " + _h + ", " + _rx + ", " + _ry + ", \"" + _style + "\")");}try {_x=_x.trim();_y=_y.trim();_w=_w.trim();_h=_h.trim();_rx=_rx.trim();_ry=_ry.trim();_style=_style.trim();if (_x=="" || _y=="" || _w=="" || _h=="" || _rx=="" || _ry=="" || _style=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_w=parseInt(_w);_h=parseInt(_h);_rx=parseInt(_rx);_ry=parseInt(_ry);_B.__2f8["roundedRect"](_x,_y,_w,_h,_rx,_ry,_style);} catch(err) {console.log(err);}return _B;};_B.setdisplaymode=function(_z,_l,_p) {if (_B.__ca) {console.log("pdf.setDisplayMode(\"" + _z + "\", \"" + _l + "\", \"" + _l + "\")");}try {_z=_z.trim();_l=_l.trim();_p=_p.trim();if (_z=="" || _l=="" || _p=="") { return ;}_B.__2f8["setDisplayMode"](_z,_l,_p);} catch(err) {console.log(err);}};_B.line=function(_x1,_y1,_x2,_y2,_style) {if (_B.__ca) {console.log("pdf.line(" + _x1 + ", " + _y1 + ", " + _x2 + ", " + _y2 + ", \"" + _style + "\")");}try {_x1=_x1.trim();_y1=_y1.trim();_x2=_x2.trim();_y2=_y2.trim();_style=_style.trim();if (_x1=="" || _x2=="" || _y1=="" || _y2=="" || _style=="") { return _B;}_x1=parseInt(_x1);_x2=parseInt(_x2);_y1=parseInt(_y1);_y2=parseInt(_y2);_B.__2f8["line"](_x1,_y1,_x2,_y2,_style);} catch(err) {console.log(err);}return _B;};_B.ellipse=function(_x,_y,_rx,_ry,_style) {if (_B.__ca) {console.log("pdf.ellipse(" + _x + ", " + _y + ", " + _rx + ", " + _ry + ", \"" + _style + "\")");}try {_x=_x.trim();_y=_y.trim();_rx=_rx.trim();_ry=_ry.trim();_style=_style.trim();if (_x=="" || _y=="" || _rx=="" || _ry=="" || _style=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_rx=parseInt(_rx);_ry=parseInt(_ry);_B.__2f8["ellipse"](_x,_y,_rx,_ry,_style);} catch(err) {console.log(err);}return _B;};_B.triangle=function(_x1,_y1,_x2,_y2,_x3,_y3,_style) {if (_B.__ca) {console.log("pdf.triangle(" + _x1 + ", " + _y1 + ", " + _x2 + ", " + _y2 + ", " + _x3 + ", " + _y3 + ", \"" + _style + "\")");}try {_x1=_x1.trim();_x2=_x2.trim();_x3=_x3.trim();_y1=_y1.trim();_y2=_y2.trim();_y3=_y3.trim();_style=_style.trim();if (_y1=="" || _y2=="" || _y3=="" || _x1=="" || _x2=="" || _x3=="" || _style=="") { return _B;}_x1=parseInt(_x1);_x2=parseInt(_x2);_x3=parseInt(_x3);_y1=parseInt(_y1);_y2=parseInt(_y2);_y3=parseInt(_y3);_B.__2f8["triangle"](_x1,_y1,_x2,_y2,_x3,_y3,_style);} catch(err) {console.log(err);}return _B;};_B.setlinewidth=function(_l) {if (_B.__ca) {console.log("pdf.setLineWidth(" + _l + ")");}try {_l=_l.trim();if (_l=="") { return _B;}_l=parseFloat(_l);_B.__2f8["setLineWidth"](_l);} catch(err) {console.log(err);}return _B;};_B.circle=function(_x,_y,_r,_style) {if (_B.__ca) {console.log("pdf.circle(" + _x + ", " + _y + ", " + _r + ", \"" + _style + "\")");}try {_x=_x.trim();_y=_y.trim();_r=_r.trim();_style=_style.trim();if (_x=="" || _y=="" || _r=="" || _style=="") { return _B;}_x=parseInt(_x);_y=parseInt(_y);_r=parseInt(_r);_B.__2f8["circle"](_x,_y,_r,_style);} catch(err) {console.log(err);}return _B;};_B.settext=function(_x,_y,_txt) {try {_x=parseInt(_x);_y=parseInt(_y);if (_B.__ca) {console.log("pdf.text(" + _x + ", " + _y + ", \"" + _txt + "\")");}_B.__2f8["text"](_x,_y,_txt);} catch(err) {console.log(err);}return _B;};_B.settext1=function(_txt,_x,_y) {try {_x=parseInt(_x);_y=parseInt(_y);if (_B.__ca) {console.log("pdf.text(\"" + _txt + "\", " + _x + ", " + _y + ")");}_B.__2f8["text"](_txt,_x,_y);} catch(err) {console.log(err);}return _B;};_B.buildtextoptions=function(_opt) {var __e92,_options;__e92={};__e92["noBOM"]=_opt._flags._nobom;__e92["autoencode"]=_opt._flags._autoencode;_opt._angle=parseInt(_opt._angle);_opt._rotationdirection=parseInt(_opt._rotationdirection);_opt._charspace=parseInt(_opt._charspace);_opt._lineheightfactor=parseFloat(_opt._lineheightfactor);_opt._maxwidth=parseInt(_opt._maxwidth);_opt._pagenumber=parseInt(_opt._pagenumber);_options={};_options["align"]=_opt._align;_options["baseline"]=_opt._baseline;_options["angle"]=_opt._angle;_options["rotationDirection"]=_opt._rotationdirection;_options["charSpace"]=_opt._charspace;_options["lineHeightFactor"]=_opt._lineheightfactor;_options["flags"]=__e92;_options["maxWidth"]=_opt._maxwidth;_options["renderingMode"]=_opt._renderingmode;if (_opt._url!="") {_options["url"]=_opt._url;}if (_opt._pagenumber!=0) {_options["pageNumber"]=_opt._pagenumber;}return _options;};_B.settext2=function(_txt,_x,_y,_opt,__ea4) {var _options;try {_options=_B.buildtextoptions(_opt,_B);__ea4=((__ea4=="") ? null : __ea4);_x=parseInt(_x);_y=parseInt(_y);if (_B.__ca) {console.log("pdf.text(\"" + _txt + "\", " + _x + ", " + _y + ", " + JSON.stringify(_options) + ")");}_B.__2f8["text"](_txt,_x,_y,_options,__ea4);} catch(err) {console.log(err);}return _B;};_B.settextwithlink1=function(_txt,_x,_y,_opt,__ea4) {var _options;try {_options=_B.buildtextoptions(_opt,_B);__ea4=((__ea4=="") ? null : __ea4);_x=parseInt(_x);_y=parseInt(_y);if (_B.__ca) {console.log("pdf.textWithLink(\"" + _txt + "\", " + _x + ", " + _y + ", " + JSON.stringify(_options) + ")");}_B.__2f8["textWithLink"](_txt,_x,_y,_options,__ea4);} catch(err) {console.log(err);}return _B;};_B.settextwithlink=function(_txt,_x,_y,__ea5,__ea6) {var _nto,_options;try {_nto=_B.newtextoptions(_B);_nto._url=__ea5;_nto._pagenumber=parseInt(__ea6);_options=_B.buildtextoptions(_nto,_B);_x=parseInt(_x);_y=parseInt(_y);if (_B.__ca) {console.log("pdf.textWithLink(\"" + _txt + "\", " + _x + ", " + _y + ", " + JSON.stringify(_options) + ")");}_B.__2f8["textWithLink"](_txt,_x,_y,_options);} catch(err) {console.log(err);}return _B;};_B.settextcolor=function(_rgba) {var __ea9,__eaa,__eab,__eac,_cols,__d4a;if (_rgba=="") { return _B;}try {__ea9="";__eaa="";__eab="";__eac="";_rgba=_rgba.split(",").join(";");_cols=_banano_sithasodaisy_sduishared.strparse(";",_rgba);_cols=_banano_sithasodaisy_sduishared.listitemstoint(_cols);__d4a=_cols.length;switch ("" + __d4a) {case "" + 1:__ea9=_cols[0];__ea9=parseInt(__ea9);if (_B.__ca) {console.log("pdf.setTextColor(" + __ea9 + ")");}_B.__2f8["setTextColor"](__ea9);break;case "" + 2:__ea9=_cols[0];__eaa=_cols[1];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);if (_B.__ca) {console.log("pdf.setTextColor(" + __ea9 + ", " + __eaa + ")");}_B.__2f8["setTextColor"](__ea9,__eaa);break;case "" + 3:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);if (_B.__ca) {console.log("pdf.setTextColor(" + __ea9 + ", " + __eaa + ", " + __eab + ")");}_B.__2f8["setTextColor"](__ea9,__eaa,__eab);break;case "" + 4:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__eac=_cols[3];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);__eac=parseInt(__eac);if (_B.__ca) {console.log("pdf.setTextColor(" + __ea9 + ", " + __eaa + ", " + __eab + ", " + __eac + ")");}_B.__2f8["setTextColor"](__ea9,__eaa,__eab,__eac);break;}} catch(err) {console.log(err);}return _B;};_B.setfillcolor=function(_rgba) {var __ea9,__eaa,__eab,__eac,_cols,__d4a;if (_rgba=="") { return _B;}try {__ea9="";__eaa="";__eab="";__eac="";_rgba=_rgba.split(",").join(";");_cols=_banano_sithasodaisy_sduishared.strparse(";",_rgba);_cols=_banano_sithasodaisy_sduishared.listitemstoint(_cols);__d4a=_cols.length;switch ("" + __d4a) {case "" + 1:__ea9=_cols[0];__ea9=parseInt(__ea9);if (_B.__ca) {console.log("pdf.setFillColor(" + __ea9 + ")");}_B.__2f8["setFillColor"](__ea9);break;case "" + 2:__ea9=_cols[0];__eaa=_cols[1];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);_B.__2f8["setFillColor"](__ea9,__eaa);if (_B.__ca) {console.log("pdf.setFillColor(" + __ea9 + ", " + __eaa + ")");}break;case "" + 3:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);_B.__2f8["setFillColor"](__ea9,__eaa,__eab);if (_B.__ca) {console.log("pdf.setFillColor(" + __ea9 + ", " + __eaa + ", " + __eab + ")");}break;case "" + 4:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__eac=_cols[3];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);__eac=parseInt(__eac);if (_B.__ca) {console.log("pdf.setFillColor(" + __ea9 + ", " + __eaa + ", " + __eab + ", " + __eac + ")");}_B.__2f8["setFillColor"](__ea9,__eaa,__eab,__eac);break;}} catch(err) {console.log(err);}return _B;};_B.setdrawcolor=function(_rgba) {var __ea9,__eaa,__eab,__eac,_cols,__d4a;if (_rgba=="") { return _B;}try {__ea9="";__eaa="";__eab="";__eac="";_rgba=_rgba.split(",").join(";");_cols=_banano_sithasodaisy_sduishared.strparse(";",_rgba);_cols=_banano_sithasodaisy_sduishared.listitemstoint(_cols);__d4a=_cols.length;switch ("" + __d4a) {case "" + 1:__ea9=_cols[0];__ea9=parseInt(__ea9);_B.__2f8["setDrawColor"](__ea9);if (_B.__ca) {console.log("pdf.setDrawColor(" + __ea9 + ")");}break;case "" + 2:__ea9=_cols[0];__eaa=_cols[1];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);if (_B.__ca) {console.log("pdf.setDrawColor(" + __ea9 + ", " + __eaa + ")");}_B.__2f8["setDrawColor"](__ea9,__eaa);break;case "" + 3:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);if (_B.__ca) {console.log("pdf.setDrawColor(" + __ea9 + ", " + __eaa + ", " + __eab + ")");}_B.__2f8["setDrawColor"](__ea9,__eaa,__eab);break;case "" + 4:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__eac=_cols[3];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);__eac=parseInt(__eac);if (_B.__ca) {console.log("pdf.setDrawColor(" + __ea9 + ", " + __eaa + ", " + __eab + ", " + __eac + ")");}_B.__2f8["setDrawColor"](__ea9,__eaa,__eab,__eac);break;}} catch(err) {console.log(err);}return _B;};_B.curveto=function(_x1,_y1,_x2,_y2,_x3,_y3) {try {_x1=_x1.trim();_x2=_x2.trim();_x3=_x3.trim();_y1=_y1.trim();_y2=_y2.trim();_y3=_y3.trim();if (_y1=="" || _y2=="" || _y3=="" || _x1=="" || _x2=="" || _x3=="") { return _B;}_x1=parseInt(_x1);_x2=parseInt(_x2);_x3=parseInt(_x3);_y1=parseInt(_y1);_y2=parseInt(_y2);_y3=parseInt(_y3);if (_B.__ca) {console.log("pdf.curveTo(" + _x1 + ", " + _y1 + ", " + _x2 + ", " + _y2 + ", " + _x3 + ", " + _y3 + ")");}_B.__2f8["curveTo"](_x1,_y1,_x2,_y2,_x3,_y3);} catch(err) {console.log(err);}return _B;};_B.setfontsize=function(_fs) {try {_fs=_fs+"";_fs=parseInt(_fs);if (_fs==0) { return _B;}_fs=parseInt(_fs);if (_B.__ca) {console.log("pdf.setFontSize(" + _fs + ")");}_B.__2f8["setFontSize"](_fs);} catch(err) {console.log(err);}return _B;};_B.setfont=function(_fs) {try {if (_fs=="") { return _B;}if (_B.__ca) {console.log("pdf.setFont(" + _fs + ")");}_B.__2f8["setFont"](_fs);} catch(err) {console.log(err);}return _B;};_B.setfontstyle=function(_fn,_fs) {try {if (_fn=="") { return _B;}if (_B.__ca) {console.log("pdf.setFont(\"" + _fn + "\", \"" + _fs + "\")");}_B.__2f8["setFont"](_fn,_fs);} catch(err) {console.log(err);}return _B;};_B.setfontstyleweight=function(_fn,_fs,_fw) {try {_fn=_fn.trim();_fs=_fs.trim();_fw=_fw.trim();if (_fn=="") { return _B;}if (_B.__ca) {console.log("pdf.setFont(\"" + _fn + "\", \"" + _fs + "\", \"" + _fw + "\")");}_B.__2f8["setFont"](_fn,_fs,_fw);} catch(err) {console.log(err);}return _B;};_B.copymargin=function(__cb1,__c39) {if (__cb1._top!=0) {__c39["top"]=__cb1._top;}if (__cb1._left!=0) {__c39["left"]=__cb1._left;}if (__cb1._right!=0) {__c39["right"]=__cb1._right;}if (__cb1._bottom!=0) {__c39["bottom"]=__cb1._bottom;}if (__cb1._width!=0) {__c39["width"]=__cb1._width;}};_B.start=function() {try {if (_B.__ca) {console.log("pdf.Start");}_B.__34a=parseFloat(_B.__34a);_B.__349=parseInt(_B.__349);_B.__345["putOnlyUsedFonts"]=_B.__347;_B.__345["compress"]=_B.__348;_B.__345["orientation"]=_B.__340;_B.__345["precision"]=_B.__349;_B.__345["userUnit"]=_B.__34a;_B.__345["format"]=_B.__344;_B.__345["unit"]=_B.__341;_B.__345["floatPrecision"]=_B.__34b;if (Object.keys(_B.__342).length>0) {if (_B.__343.length>0) {_B.__342["userPermissions"]=_B.__343;}_B.__345["encryption"]=_B.__342;}_B.copymargin(_B._margin,_B.__346,_B);if (Object.keys(_B.__346).length>0) {_B.__345["margin"]=_B.__346;}if (_B.__ca) {console.log("pdf.new jsPDF(" + JSON.stringify(_B.__345) + ")");}_B.__2f8=new jsPDF(_B.__345);_B.autotablesetdefaults(_B);} catch(err) {console.log(err);}return _B;};_B.autotablesetdefaults=function() {if (_B.__ca) {console.log("pdf.autoTableSetDefaults");}_B.__2f8["autoTableSetDefaults"]();};_B.autotable=function(_tbl) {try {_tbl.buildoptions();if (_B.__ca) {console.log("pdf.autoTable(" + JSON.stringify(_tbl.__9) + ")");}_B.__2f8["autoTable"](_tbl.__9);} catch(err) {console.log(err);}return _B;};_B.autotable1=function(__ead) {var _opt;try {__ead=__ead.toLowerCase();_opt={};_opt["html"]="#" + __ead + "";if (_B.__ca) {console.log("pdf.autoTable(" + JSON.stringify(_opt) + ")");}_B.__2f8["autoTable"](_opt);} catch(err) {console.log(err);}return _B;};_B.save=function() {try {if (_B.__ca) {console.log("pdf.save");}_B.__2f8["save"](_B.__172);} catch(err) {console.log(err);}};_B.getoutput=function(__eae) {var _opt,_res;_opt={};_opt["filename"]=_B.__172;if (_B.__ca) {console.log("res = pdf.output(\"" + __eae + "\", " + _opt + ")");}_res=_B.__2f8["output"](__eae,_opt);return _res;};_B.dataurl=function() {var _res;_res=_B.getoutput("dataurl",_B);return _res;};_B.blob=function() {var _res;_res=_B.getoutput("blob",_B);return _res;};_B.dataurlstring=function() {var _res;_res=_B.getoutput("dataurlstring",_B);return _res;};_B.arraybuffer=function() {var _res;_res=_B.getoutput("arraybuffer",_B);return _res;};_B.addimage=function(__eaf,__eb0,_x,_y,__1ee,__1e3) {try {if (_B.__ca) {console.log("pdf.addImage(\"" + __eaf + "\", \"" + __eb0 + "\", " + _x + ", " + _y + ", " + __1ee + ", " + __1e3 + ")");}_x=parseInt(_x);_y=parseInt(_y);__1e3=parseInt(__1e3);__1ee=parseInt(__1ee);_B.__2f8["addImage"](__eaf,__eb0,_x,_y,__1ee,__1e3);} catch(err) {console.log(err);}return _B;};_B.addimage1=function(__eaf,__eb0,_x,_y,__1ee,__1e3,__eb1,__eb2,__eb3) {try {if (_B.__ca) {console.log("pdf.addImage(\"" + __eaf + "\", \"" + __eb0 + "\", " + _x + ", " + _y + ", " + __1ee + ", " + __1e3 + ", \"" + __eb1 + "\", \"" + __eb2 + "\", " + __eb3 + ")");}_x=parseInt(_x);_y=parseInt(_y);__1e3=parseInt(__1e3);__1ee=parseInt(__1ee);_B.__2f8["addImage"](__eaf,__eb0,_x,_y,__1ee,__1e3,__eb1,__eb2,__eb3);} catch(err) {console.log(err);}return _B;};_B.tobase64=function() {var _out,_xout,_res;_out=_B.__2f8["output"]();_xout=BANanoExec("btoa", window, _out);_res="data:application/pdf;base64," + _xout + "";return _res;};_B.autoprint=function() {if (_B.__ca) {console.log("pdf.autoPrint");}_B.__2f8["autoPrint"]();};_B.addfont=function(_url,_fontname,__eb6) {if (_B.__ca) {console.log("pdf.addFont(\"" + _url + "\", \"" + _fontname + "\", \"" + __eb6 + "\")");}_B.__2f8["addFont"](_url,_fontname,__eb6);return _B;};_B.setpage=function(_pg) {if (_B.__ca) {console.log("pdf.setPage(" + _pg + ")");}_B.__2f8["setPage"](_pg);return _B;};_B.getnumberofpages=function() {var __eb8;if (_B.__ca) {console.log("noOfPages = pdf.internal.getNumberOfPages()");}__eb8=_B.__2f8["internal"]["getNumberOfPages"]();return __eb8;};_B.getpagewidth=function() {var _pw;if (_B.__ca) {console.log("pw = pdf.internal.pageSize.width()");}_pw=_B.__2f8["internal"]["pageSize"]["width"];return _pw;};_B.getpageheight=function() {var _pw;if (_B.__ca) {console.log("ph = pdf.internal.pageSize.height()");}_pw=_B.__2f8["internal"]["pageSize"]["height"];return _pw;};_B.getpreviousautotablefinaly=function() {var _res;if (_B.__ca) {console.log("fY = pdf.previousAutoTable.finalY");}_res=_B.__2f8["previousAutoTable"]["finalY"];return _res;};_B.setpagenumbers=function() {var __eba,_pgcnt,__ebc,__ebd,__ebe;if (_B.__ca) {console.log("pdf.SetPageNumbers");}__eba=_B.getnumberofpages(_B);_B.setfontsize(8,_B);__ebb=0;for (_pgcnt=1;_pgcnt<=__eba;_pgcnt++) {_B.setpage(_pgcnt,_B);__ebc=_B.getpagewidth(_B)/2;__ebd=_B.getpageheight(_B);__ebe=_B.newtextoptions(_B);__ebe._align=_B.__301;_B.settext2("Page " + _pgcnt + " of " + __eba + "",__ebc,__ebd-15,__ebe,null,_B);}return _B;};_B.deletepage=function(_pg) {if (_B.__ca) {console.log("pdf.deletePage(" + _pg + ")");}_B.__2f8["deletePage"](_pg);};_B.clip=function() {if (_B.__ca) {console.log("pdf.clip(\"evenodd\")");}_B.__2f8["clip"]("evenodd");};_B.clipevenodd=function() {if (_B.__ca) {console.log("pdf.clipEvenOdd()");}_B.__2f8["clipEvenOdd"]();};_B.close=function() {if (_B.__ca) {console.log("pdf.close()");}_B.__2f8["close"]();};_B.comment=function(_txt) {if (_B.__ca) {console.log("pdf.comment(\"" + _txt + "\")");}_B.__2f8["comment"](_txt);};_B.discardpath=function() {if (_B.__ca) {console.log("pdf.discardPath()");}_B.__2f8["discardPath"]();};_B.insertpage=function(_pg) {if (_B.__ca) {console.log("pdf.insertPage(" + _pg + ")");}_B.__2f8["insertPage"](_pg);};_B.movepage=function(__ebf,__ec0) {try {__ebf=__ebf.trim();__ec0=__ec0.trim();if (__ebf=="" || __ec0=="") { return ;}if (_B.__ca) {console.log("pdf.movePage(" + __ebf + ", " + __ec0 + ")");}_B.__2f8["movePage"](__ebf,__ec0);} catch(err) {console.log(err);}};_B.setlineheightfactor=function(_lf) {try {_lf=_lf.trim();if (_lf=="") { return ;}if (_B.__ca) {console.log("pdf.setLineHeightFactor(" + _lf + ")");}_B.__2f8["setLineHeightFactor"](_lf);} catch(err) {console.log(err);}};_B.setr2l=function(_b) {if (_B.__ca) {console.log("pdf.setR2L");}_B.__2f8["setR2L"](_b);};_B.stroke=function() {if (_B.__ca) {console.log("pdf.stroke");}_B.__2f8["stroke"]();};_B.link=function(_x,_y,_w,_h,_pagenumber,_url) {var _opt;try {_url=_url.trim();_x=parseInt(_x);_y=parseInt(_y);_h=parseInt(_h);_w=parseInt(_w);_opt={};if (_url!="") {_opt["url"]=_url;}if (_pagenumber!="") {_pagenumber=parseInt(_pagenumber);_opt["pageNumber"]=_pagenumber;}if (_B.__ca) {console.log("pdf.link(" + _x + ", " + _y + ", " + _h + ", " + _opt + ")");}_B.__2f8["link"](_x,_y,_w,_h,_opt);} catch(err) {console.log(err);}};_B.createannotation=function(__ec2,__ec3,__ec4,_x,_y,_w,_h,__5ae,__ec5) {var __e29,_opt;try {__ec4=__ec4.trim();__ec2=__ec2.trim();__ec5=__ec5.trim();__ec2=__ec2.trim();_x=parseInt(_x);_y=parseInt(_y);_w=parseInt(_w);_h=parseInt(_h);__e29={};__e29["x"]=_x;__e29["y"]=_y;__e29["w"]=_w;__e29["h"]=_h;_opt={};_opt["type"]=__ec4;if (__ec2!="") {_opt["title"]=__ec2;}_opt["contents"]=__ec3;_opt["open"]=__5ae;_opt["bounds"]=__e29;if (__ec5!="") {_opt["color"]=__ec5;}if (_B.__ca) {console.log("pdf.createAnnotation(" + JSON.stringify(_opt) + ")");}_B.__2f8["createAnnotation"](_opt);} catch(err) {console.log(err);}};_B.addsvgasimage=function() {};_B.getlastautotablefinaly=function() {var _res;if (_B.__ca) {console.log("fY = pdf.lastAutoTable.finalY");}_res=_B.__2f8["lastAutoTable"]["finalY"];return _res;};_B.getdatasettingsmarginleft=function(__3d) {var __ec6,__ec7,__ec8;__ec6=__3d["settings"];__ec7=__ec6["margin"];__ec8=__ec7["left"];__ec8=parseInt(__ec8);return __ec8;};_B.getdatarow=function(__3d) {var _xrow,_c;_xrow=__3d["row"];_c=(typeof banano_sithasodaisypdf_pdfrow === 'function') ? new banano_sithasodaisypdf_pdfrow(): null;_c.initialize();_c._spansmultiplepages=_xrow["spansMultiplePages"];_c._height=_xrow["height"];_c._index=_xrow["index"];_c._section=_xrow["section"];_c._raw=_xrow["raw"];return _c;};_B.getdatasettings=function(__3d) {var __eca,__ec7,_c;__eca=__3d["settings"];__ec7=__eca["margin"];_c=(typeof banano_sithasodaisypdf_pdfsettings === 'function') ? new banano_sithasodaisypdf_pdfsettings(): null;_c.initialize();_c._margin.initialize();_c._horizontalpagebreak=__eca["horizontalPageBreak"];_c._includehiddenhtml=__eca["includeHiddenHtml"];_c._pagebreak=__eca["pageBreak"];_c._rowpagebreak=__eca["rowPageBreak"];_c._showfoot=__eca["showFoot"];_c._showhead=__eca["showHead"];_c._starty=__eca["startY"];_c._tablelinecolor=__eca["tableLineColor"];_c._tablelinewidth=__eca["tableLineWidth"];_c._tablewidth=__eca["tableWidth"];_c._theme=__eca["theme"];_c._usecss=__eca["useCss"];_c._margin._bottom=__ec7["bottom"];_c._margin._right=__ec7["right"];_c._margin._left=__ec7["left"];_c._margin._top=__ec7["top"];return _c;};_B.getdatacursor=function(__3d) {var _c,__ecb;_c=(typeof banano_sithasodaisypdf_pdfcursor === 'function') ? new banano_sithasodaisypdf_pdfcursor(): null;_c.initialize();__ecb=__3d["cursor"];if (is.null(__ecb)==false) {_c._x=__ecb["x"];_c._y=__ecb["y"];}return _c;};_B.getdatacolumn=function(__3d) {var __ecc,_c;__ecc=__3d["column"];_c=(typeof banano_sithasodaisypdf_pdfcolumn === 'function') ? new banano_sithasodaisypdf_pdfcolumn(): null;_c.initialize();_c._datakey=__ecc["dataKey"];_c._index=__ecc["index"];_c._minreadablewidth=__ecc["minReadableWidth"];_c._minwidth=__ecc["minWidth"];_c._width=__ecc["width"];_c._wrappedwidth=__ecc["wrappedWidth"];return _c;};_B.getdatacell=function(__3d) {var __ecd,__ece,_c;__ecd=__3d["cell"];__ece=__ecd["styles"];_c=(typeof banano_sithasodaisypdf_pdfcell === 'function') ? new banano_sithasodaisypdf_pdfcell(): null;_c.initialize();_c._styles.initialize();_c._colspan=__ecd["colSpan"];_c._contentheight=__ecd["contentHeight"];_c._contentwidth=__ecd["contentWidth"];_c._height=__ecd["height"];_c._minreadablewidth=__ecd["minReadableWidth"];_c._minwidth=__ecd["minWidth"];_c._raw=__ecd["raw"];_c._rowspan=__ecd["rowSpan"];_c._section=__ecd["section"];_c._x=__ecd["x"];_c._y=__ecd["y"];_c._text=__ecd["text"];_c._styles._cellpadding=__ece["cellPadding"];_c._styles._cellwidth=__ece["cellWidth"];_c._styles._fillcolor=__ece["fillColor"];_c._styles._font=__ece["font"];_c._styles._fontsize=__ece["fontSize"];_c._styles._fontstyle=__ece["fontStyle"];_c._styles._halign=__ece["halign"];_c._styles._linecolor=__ece["lineColor"];_c._styles._linewidth=__ece["lineWidth"];_c._styles._mincellheight=__ece["minCellHeight"];_c._styles._mincellwidth=__ece["minCellWidth"];_c._styles._overflow=__ece["overflow"];_c._styles._textcolor=__ece["textColor"];_c._styles._valign=__ece["valign"];return _c;};_B.getdata=function(__3d) {var _c;_c=(typeof banano_sithasodaisypdf_pdfdata === 'function') ? new banano_sithasodaisypdf_pdfdata(): null;_c.initialize();_c._cell.initialize();_c._cell=_B.getdatacell(__3d,_B);_c._column.initialize();_c._column=_B.getdatacolumn(__3d,_B);_c._cursor.initialize();_c._cursor=_B.getdatacursor(__3d,_B);_c._row.initialize();_c._row=_B.getdatarow(__3d,_B);_c._settings.initialize();_c._settings=_B.getdatasettings(__3d,_B);return _c;};_B.exporttable=function(__d6b,__132,__87d,__87e,__204,__880,__87f,_flds,__ecf,__853) {var _tbla,__d4a,_colcnt,__6d7,__ed2,_ncs,_recs,__3d;_B.__374=__d6b;_B.setorientation(__132,_B);_B.setpagesize(__87d,_B);_B.setunit(__87e,_B);_B.start(_B);_B.setfont(__204,_B);_B.__348=true;_tbla=(typeof banano_sithasodaisypdf_sduijspdftable === 'function') ? new banano_sithasodaisypdf_sduijspdftable(): null;_tbla.initialize(_B);_tbla.setrowpagebreak(_tbla.__386);_tbla.__37f=_tbla.__385;_tbla.setmasterfontsize(__204);__d4a=_flds.length-1;__d49=0;for (_colcnt=0;_colcnt<=__d4a;_colcnt++) {__6d7=_flds[_colcnt];__ed2=__ecf[_colcnt];_tbla.addcolumn(__6d7.toLowerCase(),__ed2);_ncs=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_ncs.initialize();_ncs._cellwidth="wrap";_ncs._overflow="linebreak";_ncs._fontsize=parseInt(__204);_tbla.addcolumnstyle(__6d7.toLowerCase(),_ncs);}_recs=__853;_tbla.setrowsfromdatatable(_recs);_tbla.__37a=__880;_tbla.__37e=40;_tbla._margin._top=40;_tbla._margin._left=30;_tbla._margin._right=30;_tbla.__380="wrap";_tbla.__380="auto";_tbla.sethorizontalpagebreak(true);_tbla.sethorizontalpagebreakrepeat(__87f);_tbla._styles._overflow="linebreak";_tbla._styles._cellwidth="auto";__3d={};_tbla.beforepagecontent(_B,"beforePageContent",__3d);_B.autotable(_tbla,_B);_B.setpagenumbers(_B);_B.save(_B);if ((typeof _B.__4[("" + _B.__375 + "_pdfdownload").toLowerCase()]==="function")) {(function() {if (typeof _B.__4[("" + _B.__375 + "_pdfdownload").toLowerCase()]==="function") {var CSr = _B.__4[("" + _B.__375 + "_pdfdownload").toLowerCase()](_B);if(CSr!=null) {return CSr}}})();}};_B.beforepagecontent=function() {_B.settext(40,30,_B.__374,_B);};}function banano_sithasodaisypdf_sduijspdftable() {var _B=this;_B._rows=[];_B.__1c2=[];_B._head=[];_B.__377={};_B.__378={};_B.__379={};_B.__346={};_B.__37a="";_B.__37b={};_B.__37c={};_B.__37d={};_B.__37e={};_B.__37f="";_B.__380="";_B.__4={};_B.__9={};_B.__381="striped";_B.__382="grid";_B.__383="plain";_B.__384="css";_B.__385="auto";_B.__386="avoid";_B.__387="always";_B.__388=[];_B.__389=0;_B._styles=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_B._headerstyles=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_B._alternaterowstyles=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_B._bodystyles=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_B._margin=(typeof banano_sithasodaisypdf_marginobj === 'function') ? new banano_sithasodaisypdf_marginobj(): null;_B.__3a1={};_B.__3a2={};_B.__3a3={};_B._footerstyles=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;_B.__3a4={};_B.__ca=false;_B.__3a5=false;_B.initialize=function(__e94) {var __ed5;_B.__4=__e94;_B.__9={};_B.__378={};_B.__379={};_B._margin.initialize();_B._margin._top=0;_B._margin._left=0;_B._margin._width=0;_B._margin._bottom=0;_B._margin._right=0;_B.__37a="";_B.__37b={};_B.__37c={};_B.__37e=false;_B.__37f="auto";_B.__380="auto";_B.__388.length=0;_B.__37d={};_B._styles=_B.newstyledef(_B);_B._headerstyles=_B.newstyledef(_B);_B._alternaterowstyles=_B.newstyledef(_B);_B._bodystyles=_B.newstyledef(_B);_B._footerstyles=_B.newstyledef(_B);_B.__3a1={};_B.__3a2={};_B._head.length=0;_B.__3a3={};_B.__3a4={};_B._rows.length=0;_B.__1c2.length=0;_B.__3a5=false;_B.__380="wrap";_B._styles._overflow="linebreak";_B._styles._cellwidth="auto";_B.__ca=true;__ed5={};_B.didparsecell(_B,"didParseCellInternal",__ed5,_B);};_B.setmasterfontsize=function(_fs) {_B._styles._fontsize=_fs;_B._headerstyles._fontsize=_fs;_B._alternaterowstyles._fontsize=_fs;_B._bodystyles._fontsize=_fs;_B._footerstyles._fontsize=_fs;};_B.newstyledef=function() {var __ed6;__ed6=(typeof banano_sithasodaisypdf_styledef === 'function') ? new banano_sithasodaisypdf_styledef(): null;__ed6.initialize();__ed6._font="helvetica";__ed6._linewidth=0;__ed6._linecolor.length=0;__ed6._fillcolor.length=0;__ed6._fontsize=10;__ed6._cellpadding=10;__ed6._fontstyle="normal";__ed6._overflow="linebreak";__ed6._textcolor.length=0;__ed6._halign="left";__ed6._valign="top";__ed6._fillstyle="";__ed6._rowheight=0;__ed6._mincellwidth=10;__ed6._mincellheight=0;__ed6._cellwidth="wrap";return __ed6;};_B.didparsecellinternal=function(__ed5) {_B.alignheaders(__ed5,_B);};_B.addcolumnstyle=function(__cfb,_style) {var _cm,_tit;_cm={};_B.copystyles(_style,_cm,_B);_B.__379[__cfb]=_cm;if ((__cfb in _B.__3a1)) {_tit=_B.__3a1[__cfb];_B.__3a4[_tit]=_style;}};_B.alignheaders=function(__ed5) {var __ed8,__ed9,_raw,__c,__eda;__ed8=__ed5["section"];if (__ed8!="head") { return ;}__ed9=__ed5["cell"];_raw=__ed9["raw"];__c=__ed9["styles"];if ((_raw in _B.__3a4)) {__eda=_B.__3a4[_raw];__c["halign"]=__eda._halign;__c["valign"]=__eda._valign;}};_B.settextcolor=function(_s,_r,_g,_b) {_s._textcolor.push(_r);_s._textcolor.push(_g);_s._textcolor.push(_b);};_B.setlinecolor=function(_s,_r,_g,_b) {_s._linecolor.push(_r);_s._linecolor.push(_g);_s._linecolor.push(_b);};_B.setfillcolor=function(_s,_r,_g,_b) {_s._fillcolor.push(_r);_s._fillcolor.push(_g);_s._fillcolor.push(_b);};_B.sethtml=function(_s) {_s=_s.split("#").join("");_s=_s.toLowerCase();_B.__9["html"]="#" + _s + "";};_B.setusecss=function(_b) {if (_b) {_B.__9["useCss"]=_b;}};_B.settablelinewidth=function(_t) {_B.__389=_t;_B.__389=parseFloat(_B.__389);_B.__9["tableLineWidth"]=_B.__389;};_B.tablelinecolor=function(_r,_g,_b) {_B.__388.push(...[_r,_g,_b]);_B.__9["tableLineColor"]=_B.__388;};_B.tablelinecolor1=function(_rgb) {var __ea9,__eaa,__eab,_cols,__d4a,_colcnt,__edd,__ede;if (_rgb=="") { return ;}__ea9="";__eaa="";__eab="";_rgb=_rgb.split(";").join(",");_cols=_banano_sithasodaisy_sduishared.strparse(",",_rgb);__d4a=_cols.length-1;__d49=0;for (_colcnt=0;_colcnt<=__d4a;_colcnt++) {__edd=_cols[_colcnt];__edd=__edd.trim();_cols[_colcnt]=__edd;}__d4a=_cols.length;switch ("" + __d4a) {case "" + 1:__ea9=_cols[0];__ea9=parseInt(__ea9);_B.__9["tableLineColor"]=__ea9;break;case "" + 2:__ea9=_cols[0];__eaa=_cols[1];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__ede=[];__ede.length=0;__ede.push(__ea9);__ede.push(__eaa);_B.__9["tableLineColor"]=__ede;break;case "" + 3:__ea9=_cols[0];__eaa=_cols[1];__eab=_cols[2];__ea9=parseInt(__ea9);__eaa=parseInt(__eaa);__eab=parseInt(__eab);__ede=[];__ede.length=0;__ede.push(__ea9);__ede.push(__eaa);__ede.push(__eab);_B.__9["tableLineColor"]=__ede;break;}};_B.setrows=function(__ed4) {_B._rows=__ed4;};_B.setrowsfromdatatable=function(__ed4) {_B._rows=__ed4;};_B.setcolumns=function(__d50) {_B.__1c2=__d50;};_B.addcolumn=function(_fld,_title) {var _nc;_nc={};_nc["header"]=_title;_nc["dataKey"]=_fld;_B.__1c2.push(_nc);_B.__3a1[_fld]=_title;};_B.addrow=function(_row) {_B._rows.push(_row);};_B.diddrawpage=function(__c79,__2c3,__3d) {var _cb;if ((typeof __c79[(__2c3).toLowerCase()]==="function")) {_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["didDrawPage"]=_cb;}};_B.didparsecell=function(__c79,__2c3,__3d) {var _cb;if ((typeof __c79[(__2c3).toLowerCase()]==="function")) {_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["didParseCell"]=_cb;}};_B.willdrawcell=function(__c79,__2c3,__3d) {var _cb;if ((typeof __c79[(__2c3).toLowerCase()]==="function")) {_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["willDrawCell"]=_cb;}};_B.diddrawcell=function(__c79,__2c3,__3d) {var _cb;if ((typeof __c79[(__2c3).toLowerCase()]==="function")) {_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["didDrawCell"]=_cb;}};_B.beforepagecontent=function(__c79,__2c3,__3d) {var _cb;_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["beforePageContent"]=_cb;};_B.afterpagecontent=function(__c79,__2c3,__3d) {var _cb;_cb=function(__3d) {if (typeof __c79[(__2c3).toLowerCase()]==="function") {return __c79[(__2c3).toLowerCase()](__3d,_B)};};_B.__9["afterPageContent"]=_cb;};_B.copystyles=function(__cb1,__c39) {var _lc,_fc,_tc;if (__cb1._font!="") {__c39["font"]=__cb1._font;}if (__cb1._linewidth!=0) {__c39["lineWidth"]=__cb1._linewidth;}if (__cb1._linecolor.length>0) {if (__cb1._linecolor.length==1) {_lc=__cb1._linecolor[0];__c39["lineColor"]=_lc;} else {__c39["lineColor"]=__cb1._linecolor;}}if (__cb1._fontsize!=0) {__c39["fontSize"]=__cb1._fontsize;}if (__cb1._fillcolor.length>0) {if (__cb1._fillcolor.length==1) {_fc=__cb1._fillcolor[0];__c39["fillColor"]=_fc;} else {__c39["fillColor"]=__cb1._fillcolor;}}if (__cb1._cellpadding!=null) {__c39["cellPadding"]=__cb1._cellpadding;}if (__cb1._cellwidth!="") {__c39["cellWidth"]=__cb1._cellwidth;}if (__cb1._rowheight!=0) {__c39["rowHeight"]=__cb1._rowheight;}if (__cb1._fontstyle!="") {__c39["fontStyle"]=__cb1._fontstyle;}if (__cb1._overflow!="") {__c39["overflow"]=__cb1._overflow;}if (__cb1._halign!="") {__c39["halign"]=__cb1._halign;}if (__cb1._valign!="") {__c39["valign"]=__cb1._valign;}if (__cb1._fillstyle!="") {__c39["fillStyle"]=__cb1._fillstyle;}if (__cb1._textcolor.length>0) {if (__cb1._textcolor.length==1) {_tc=__cb1._textcolor[0];__c39["textColor"]=_tc;} else {__c39["textColor"]=__cb1._textcolor;}}__c39["minCellWidth"]=__cb1._mincellwidth;__c39["minCellHeight"]=__cb1._mincellheight;};_B.sethead=function(__ee2) {_B.__9["head"]=__ee2;};_B.setfoot=function(__ee3) {_B.__9["foot"]=__ee3;};_B.setbody=function(_body) {_B.__9["body"]=_body;};_B.setpadding=function(_p) {_B.__9["padding"]=_p;};_B.setfontsize=function(_fs) {_B.__9["fontSize"]=_fs;};_B.setlineheight=function(_lh) {_B.__9["lineHeight"]=_lh;};_B.setrowpagebreak=function(_rpb) {_B.__9["rowPageBreak"]=_rpb;};_B.setshowhead=function(_sh) {_B.__9["showHead"]=_sh;};_B.sethorizontalpagebreakrepeat=function(_v) {_B.__9["horizontalPageBreakRepeat"]=_v;};_B.sethorizontalpagebreak=function(_v) {_B.__9["horizontalPageBreak"]=_v;};_B.setshowfoot=function(_sf) {_B.__9["showFoot"]=_sf;};_B.buildoptions=function() {if (_B.__1c2.length==0 || _B._rows.length==0) { return ;}_B._head.push(_B.__3a1);_B.__9["includeHiddenHtml"]=_B.__3a5;_B.__9["head"]=_B._head;_B.__9["columns"]=_B.__1c2;_B.__9["body"]=_B._rows;if (_B.__37a!="") {_B.__9["theme"]=_B.__37a;}_B.copystyles(_B._styles,_B.__378,_B);if (Object.keys(_B.__378).length>0) {_B.__9["styles"]=_B.__378;}_B.copystyles(_B._headerstyles,_B.__37b,_B);if (Object.keys(_B.__37b).length>0) {_B.__9["headStyles"]=_B.__37b;}_B.copystyles(_B._alternaterowstyles,_B.__37d,_B);if (Object.keys(_B.__37d).length>0) {_B.__9["alternateRowStyles"]=_B.__37d;}_B.copystyles(_B._bodystyles,_B.__37c,_B);if (Object.keys(_B.__37c).length>0) {_B.__9["bodyStyles"]=_B.__37c;}if (Object.keys(_B.__379).length>0) {_B.__9["columnStyles"]=_B.__379;}_B.copystyles(_B._footerstyles,_B.__3a3,_B);if (Object.keys(_B.__3a3).length>0) {_B.__9["footStyles"]=_B.__3a3;}_B.copymargin(_B._margin,_B.__346,_B);if (Object.keys(_B.__346).length>0) {_B.__9["margin"]=_B.__346;}_B.__9["startY"]=_B.__37e;_B.__9["pageBreak"]=_B.__37f;_B.__9["tableWidth"]=_B.__380;};_B.copymargin=function(__cb1,__c39) {if (__cb1._top!=0) {__c39["top"]=__cb1._top;}if (__cb1._left!=0) {__c39["left"]=__cb1._left;}if (__cb1._right!=0) {__c39["right"]=__cb1._right;}if (__cb1._bottom!=0) {__c39["bottom"]=__cb1._bottom;}if (__cb1._width!=0) {__c39["width"]=__cb1._width;}};_B.setborders=function(_width,_r,_g,_b) {_B.settablelinewidth(_width,_B);_B.tablelinecolor(_r,_g,_b,_B);_B._styles._linecolor.push(_r);_B._styles._linecolor.push(_g);_B._styles._linecolor.push(_b);_B._styles._linewidth=_width;_B._bodystyles._linecolor.push(_r);_B._bodystyles._linecolor.push(_g);_B._bodystyles._linecolor.push(_b);_B._bodystyles._linewidth=_width;};}