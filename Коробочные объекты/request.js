/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751754944370642451}
 */
Request = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753066940245158862}
 */
Request.AllSessions = [Session];

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
Request.AddRespHeader = function(fieldName, fieldValue, replaceExisting) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071118275782024}
 */
Request.CheckLdsAuth = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071303595350627}
 */
Request.Execute = function(path, allowSubCancel) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071497759886978}
 */
Request.HandleNotFound = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071665097030657}
 */
Request.PermanentRedirect = function(redirectUrl) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071835282421861}
 */
Request.Redirect = function(redirectUrl) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753071989806356272}
 */
Request.SetRespStatus = function(statusCode, statusDesc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6753072209613124307}
 */
Request.SetWrongAuth = function(options) {};
