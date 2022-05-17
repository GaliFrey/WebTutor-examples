sExcelFileUrl = Screen.AskFileOpen('', 'Excel\t*.xls;*.xlsx;');
try {
  docExcel = OpenDoc(sExcelFileUrl, 'format=excel');
  aExcelLines = ArrayFirstElem(docExcel.TopElem);
} catch (err) {
  log('Невозможно получить доступ к файлу ' + sExcelFileUrl + '.');
  throw 'Невозможно получить доступ к файлу ' + sExcelFileUrl + '.';
}
