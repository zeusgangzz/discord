const _0x5018=['set','3Fkqdsd','400000UZQOvl','channel','.yml','1240833TUSuiR','exports','Enabled','2311hlahYa','InvalidArgs','basename','aliases','../modules/utils','ebay','alieepress','Embed','../modules/CustomConfig.js','discord.js','allows\x20you\x20to\x20search\x20eBay','replace','https://www.ebay.co.uk/sch/i.html?_nkw=','allows\x20you\x20to\x20search\x20amazon','1337JwFzvU','Amazon','You\x20can\x20change\x20co.uk\x20to\x20.com\x20or\x20.ca\x20etc','eBay','Usage:\x20`{prefix}{command}\x20<query>`','https://www.amazon.co.uk/s?k=','1474864jeaKno','setupEmbed','join','category','179tqZOpH','amazon','Search\x20on\x20Amazon\x20for\x20`{query}`\x0a[Click\x20to\x20go]({output})','687484ZpwUDl','description','request-promise','Search','send','🔎\x20eBay\x20Search','AlieEpress','./addon_configs/','Messages','better-sqlite3','name','Command','other','Domain','path','479iQyJQb','🔎\x20AlieEpress\x20Search','amazonie','1487415jhzZzb','🔎\x20Amazon\x20Search'];const _0x4de8=function(_0x40d0b9,_0x2d8d2f){_0x40d0b9=_0x40d0b9-0x86;let _0x501862=_0x5018[_0x40d0b9];return _0x501862;};const _0x9d64ab=_0x4de8;(function(_0x204d45,_0x5225c5){const _0x3a909e=_0x4de8;while(!![]){try{const _0x3f93cf=parseInt(_0x3a909e(0xa7))+parseInt(_0x3a909e(0x91))+-parseInt(_0x3a909e(0xa3))+-parseInt(_0x3a909e(0x8a))+-parseInt(_0x3a909e(0x8e))*-parseInt(_0x3a909e(0xbb))+-parseInt(_0x3a909e(0xa0))*parseInt(_0x3a909e(0xad))+-parseInt(_0x3a909e(0xa6))*-parseInt(_0x3a909e(0xaa));if(_0x3f93cf===_0x5225c5)break;else _0x204d45['push'](_0x204d45['shift']());}catch(_0xc2b63e){_0x204d45['push'](_0x204d45['shift']());}}}(_0x5018,0xef45a));const Discord=require(_0x9d64ab(0xb6)),CommandHandler=require('../modules/handlers/CommandHandler'),Utils=require(_0x9d64ab(0xb1)),Embed=Utils[_0x9d64ab(0xb4)],request=require(_0x9d64ab(0x93)),path=require(_0x9d64ab(0x9f));let db=require(_0x9d64ab(0x9a))(path['basename'](__filename)[_0x9d64ab(0xb8)](/.js/,'')+'.sqlite');module[_0x9d64ab(0xab)]=async _0x59bbb3=>{const _0x897d64=_0x9d64ab,_0x3135fc=require(_0x897d64(0xb5)),_0x56959c=new _0x3135fc(_0x897d64(0x98)+path[_0x897d64(0xaf)](__filename)[_0x897d64(0xb8)](/.js/,'')+_0x897d64(0xa9),{'Enabled':{'amazon':!![],'ebay':!![],'aliexpress':!![]},'Amazon':{'Domain':_0x897d64(0x89),'¬3':_0x897d64(0x86),'Command':{'name':_0x897d64(0x8f),'description':_0x897d64(0xba),'category':_0x897d64(0x9d),'aliases':[_0x897d64(0xa2)]},'Messages':{'InvalidArgs':{'Title':'🔎\x20Amazon\x20Search','Description':_0x897d64(0x88)},'Search':{'Title':_0x897d64(0xa4),'Description':_0x897d64(0x90)}}},'eBay':{'Domain':_0x897d64(0xb9),'¬3':_0x897d64(0x86),'Command':{'name':_0x897d64(0xb2),'description':_0x897d64(0xb7),'category':_0x897d64(0x9d),'aliases':['ebayy']},'Messages':{'InvalidArgs':{'Title':_0x897d64(0x96),'Description':'Usage:\x20`{prefix}{command}\x20<query>`'},'Search':{'Title':'🔎\x20eBay\x20Search','Description':'Search\x20on\x20Amazon\x20for\x20`{query}`\x0a[Click\x20to\x20go]({output})'}}},'AlieEpress':{'Domain':'https://www.aliexpress.com/wholesale?SearchText=','¬3':'You\x20can\x20change\x20co.uk\x20to\x20.com\x20or\x20.ca\x20etc','Command':{'name':_0x897d64(0xb3),'description':_0x897d64(0xb7),'category':_0x897d64(0x9d),'aliases':['AlieEpressy']},'Messages':{'InvalidArgs':{'Title':_0x897d64(0xa1),'Description':'Usage:\x20`{prefix}{command}\x20<query>`'},'Search':{'Title':_0x897d64(0xa1),'Description':_0x897d64(0x90)}}}},!![]);_0x56959c[_0x897d64(0xac)][_0x897d64(0x8f)]&&CommandHandler[_0x897d64(0xa5)]({'name':_0x56959c[_0x897d64(0xbc)]['Command'][_0x897d64(0x9b)],'run':async(_0x34bd1f,_0x1b6a23,_0x127a28,{prefixUsed:_0x11ffcb,commandUsed:_0x52105f})=>{const _0x36a061=_0x897d64;if(!_0x127a28[0x0])return _0x1b6a23[_0x36a061(0xa8)]['send'](Utils[_0x36a061(0x8b)]({'configPath':_0x56959c[_0x36a061(0xbc)][_0x36a061(0x99)][_0x36a061(0xae)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x52105f},{'searchFor':/{prefix}/g,'replaceWith':_0x11ffcb}]}));return _0x1b6a23['channel'][_0x36a061(0x95)](Utils[_0x36a061(0x8b)]({'configPath':_0x56959c[_0x36a061(0xbc)]['Messages'][_0x36a061(0x94)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x52105f},{'searchFor':/{prefix}/g,'replaceWith':_0x11ffcb},{'searchFor':/{output}/g,'replaceWith':_0x56959c[_0x36a061(0xbc)][_0x36a061(0x9e)]+encodeURIComponent(_0x127a28[_0x36a061(0x8c)]('\x20'))},{'searchFor':/{query}/g,'replaceWith':_0x127a28[_0x36a061(0x8c)]('\x20')}]}));},'description':_0x56959c[_0x897d64(0xbc)][_0x897d64(0x9c)][_0x897d64(0x92)],'usage':_0x56959c[_0x897d64(0xbc)][_0x897d64(0x9c)]['name'],'aliases':_0x56959c[_0x897d64(0xbc)][_0x897d64(0x9c)][_0x897d64(0xb0)],'type':_0x56959c[_0x897d64(0xbc)][_0x897d64(0x9c)]['category']}),_0x56959c['Enabled'][_0x897d64(0xb2)]&&CommandHandler['set']({'name':_0x56959c['eBay'][_0x897d64(0x9c)]['name'],'run':async(_0x39d426,_0x17df4a,_0x398e62,{prefixUsed:_0x3a07ec,commandUsed:_0x18e2c0})=>{const _0x5b7f9c=_0x897d64;if(!_0x398e62[0x0])return _0x17df4a['channel'][_0x5b7f9c(0x95)](Utils[_0x5b7f9c(0x8b)]({'configPath':_0x56959c[_0x5b7f9c(0x87)][_0x5b7f9c(0x99)][_0x5b7f9c(0xae)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x18e2c0},{'searchFor':/{prefix}/g,'replaceWith':_0x3a07ec}]}));return _0x17df4a[_0x5b7f9c(0xa8)][_0x5b7f9c(0x95)](Utils['setupEmbed']({'configPath':_0x56959c[_0x5b7f9c(0x87)][_0x5b7f9c(0x99)][_0x5b7f9c(0x94)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x18e2c0},{'searchFor':/{prefix}/g,'replaceWith':_0x3a07ec},{'searchFor':/{output}/g,'replaceWith':_0x56959c['eBay'][_0x5b7f9c(0x9e)]+encodeURIComponent(_0x398e62[_0x5b7f9c(0x8c)]('\x20'))},{'searchFor':/{query}/g,'replaceWith':_0x398e62[_0x5b7f9c(0x8c)]('\x20')}]}));},'description':_0x56959c[_0x897d64(0x87)][_0x897d64(0x9c)]['description'],'usage':_0x56959c[_0x897d64(0x87)]['Command'][_0x897d64(0x9b)],'aliases':_0x56959c['eBay'][_0x897d64(0x9c)]['aliases'],'type':_0x56959c['eBay']['Command'][_0x897d64(0x8d)]}),_0x56959c[_0x897d64(0xac)]['aliexpress']&&CommandHandler[_0x897d64(0xa5)]({'name':_0x56959c[_0x897d64(0x97)][_0x897d64(0x9c)][_0x897d64(0x9b)],'run':async(_0x21ad5a,_0x530fe5,_0xff58e4,{prefixUsed:_0x428006,commandUsed:_0x26146f})=>{const _0x37ee72=_0x897d64;if(!_0xff58e4[0x0])return _0x530fe5[_0x37ee72(0xa8)]['send'](Utils[_0x37ee72(0x8b)]({'configPath':_0x56959c[_0x37ee72(0x97)][_0x37ee72(0x99)][_0x37ee72(0xae)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x26146f},{'searchFor':/{prefix}/g,'replaceWith':_0x428006}]}));return _0x530fe5['channel'][_0x37ee72(0x95)](Utils[_0x37ee72(0x8b)]({'configPath':_0x56959c[_0x37ee72(0x97)][_0x37ee72(0x99)][_0x37ee72(0x94)],'variables':[{'searchFor':/{command}/g,'replaceWith':_0x26146f},{'searchFor':/{prefix}/g,'replaceWith':_0x428006},{'searchFor':/{output}/g,'replaceWith':_0x56959c[_0x37ee72(0x97)]['Domain']+encodeURIComponent(_0xff58e4[_0x37ee72(0x8c)]('\x20'))},{'searchFor':/{query}/g,'replaceWith':_0xff58e4['join']('\x20')}]}));},'description':_0x56959c[_0x897d64(0x97)][_0x897d64(0x9c)][_0x897d64(0x92)],'usage':_0x56959c[_0x897d64(0x97)][_0x897d64(0x9c)][_0x897d64(0x9b)],'aliases':_0x56959c[_0x897d64(0x97)][_0x897d64(0x9c)][_0x897d64(0xb0)],'type':_0x56959c['AlieEpress'][_0x897d64(0x9c)][_0x897d64(0x8d)]});};