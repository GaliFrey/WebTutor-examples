/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6751743571151579674}
 */
Screen = {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477059}
 */
Screen.Doc = XmlDoc;

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477064}
 */
Screen.EditMode = '';

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477066}
 */
Screen.FocusItem = ScreenItem;

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477058}
 */
Screen.FrameName = '';

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477062}
 */
Screen.HolderElem = {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477060}
 */
Screen.LinkedDocs = [XmlDoc];

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477063}
 */
Screen.OptHolderElem = {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477057}
 */
Screen.Ps = {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477082}
 */
Screen.ExposeItemBySource = function(ScrIt) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477098}
 */
Screen.AskFileSave = function(name, exp) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477087}
 */
Screen.AddExternalEditor = function(arg1) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477072}
 */
Screen.AddLinkedDoc = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477102}
 */
Screen.AskColor = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477100}
 */
Screen.AskDirectory = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477101}
 */
Screen.AskDirectoryPath = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477096}
 */
Screen.AskFileOpen = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477097}
 */
Screen.AskFilesOpen = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477103}
 */
Screen.AskFont = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477092}
 */
Screen.BringWindowToFront = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477108}
 */
Screen.CheckSpelling = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477075}
 */
Screen.Close = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477079}
 */
Screen.FindItemByType = function(str) {return ScreenItem;};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477078}
 */
Screen.FindItemRec = function(name) {return ScreenItem;};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477077}
 */
Screen.FindOptItem = function(name) {return ScreenItem;};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477080}
 */
Screen.FindOptItemByType = function(type) {return ScreenItem;};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477090}
 */
Screen.FlashWindow = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477095}
 */
Screen.ModalDlg = function(doc) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477093}
 */
Screen.MsgBox = function(txt1, txt2, type, titles) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477070}
 */
Screen.Navigate = function(url, frame, mode) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477104}
 */
Screen.Print = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477073}
 */
Screen.RemoveLinkedDocByUrl = function(url) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477088}
 */
Screen.RunCommand = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477089}
 */
Screen.RunCommandAsync = function(comm) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477074}
 */
Screen.SaveDoc = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477071}
 */
Screen.SetDoc = function(doc, url) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477107}
 */
Screen.SetInitSearch = function(str) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477086}
 */
Screen.SetTimer = function(str, time) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477091}
 */
Screen.SetWindowTopmost = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477094}
 */
Screen.ShowErrorMsg = function(object) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477083}
 */
Screen.Update = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477084}
 */
Screen.UpdateAsync = function() {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477085}
 */
Screen.UpdateExcpt = function(str) {};

/**
 * [Документация]{@link http://docs.datex.ru/article.htm?id=5665465792879477068}
 */
Screen.WindowClientWidth = function() {};
