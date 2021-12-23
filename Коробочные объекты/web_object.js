/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751741852966527336}
 */
Stream = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751755402180045200}
 */
Session = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751754944370642451}
 */
Request = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753066940245158862}
 */
Request.AllSessions = [];

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753067153921293565}
 */
Request.AuthLogin = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753067343200001503}
 */
Request.AuthObject = XmlElem;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753067549329800053}
 */
Request.AuthPassword = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753067785219176721}
 */
Request.AuthUserID = 0;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753067997077653150}
 */
Request.Body = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753068198978197184}
 */
Request.Form = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753068358216144399}
 */
Request.Header = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753068850077832410}
 */
Request.Method = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753069040867946137}
 */
Request.Query = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753069255713625289}
 */
Request.QueryString = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753069513227049700}
 */
Request.RemoteIP = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753069693602968651}
 */
Request.RespContentType = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753069872750988128}
 */
Request.RespStream = Stream;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070048441564770}
 */
Request.Session = Session;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070221151204147}
 */
Request.Url = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070379078210907}
 */
Request.UrlHost = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070548542691372}
 */
Request.UrlParam = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070762682377971}
 */
Request.UrlPath = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753070942439081718}
 */
Request.AddRespHeader = function(fieldName, fieldValue, replaceExisting) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071118275782024}
 */
Request.CheckLdsAuth = function() {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071303595350627}
 */
Request.Execute = function(path, allowSubCancel) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071497759886978}
 */
Request.HandleNotFound = function() {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071665097030657}
 */
Request.PermanentRedirect = function(redirectUrl) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071835282421861}
 */
Request.Redirect = function(redirectUrl) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071989806356272}
 */
Request.SetRespStatus = function(statusCode, statusDesc) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753072209613124307}
 */
Request.SetWrongAuth = function(options) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751755122904030586}
 */
Response = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6752029403765670402}
 */
Response.ContentType = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755357253518296681}
 */
Response.OrigRequest = Request;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755357445698881486}
 */
Response.Stream = Stream;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755357673526528709}
 */
Response.WriteMode = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755357858746356266}
 */
Response.AddHeader = function(fieldName, fieldValue, replaceExisting) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755358046292347863}
 */
Response.CheckModified = function(date) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755358293120195430}
 */
Response.HandleStaticFile = function(filePath) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755358469122174971}
 */
Response.Redirect = function(redirectUrl) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755358678963806675}
 */
Response.SetRespStatus = function(statusCode, statusDesc) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755358859593722000}
 */
Response.SetWrongAuth = function(options) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755359042712263918}
 */
Response.Write = function(str, encode) {
};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6755359223412627725}
 */
Response.WriteBinary = function(data) {return XmlElem};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751741087301389860}
 */
HttpResponse = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761292387057280869}
 */
HttpResponse.BinaryBody = Binary;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761292584621984602}
 */
HttpResponse.Body = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761292777500713936}
 */
HttpResponse.ContentType = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761293008546126483}
 */
HttpResponse.Header = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761293194823871344}
 */
HttpResponse.RespCode = 0;

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761293386143641713}
 */
HttpResponse.Url = '';

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6761293567941233303}
 */
HttpResponse.SaveToFile = function(url) {};
