var arrData = [
  {code: 'gph', name: 'ГПХ'},
  {code: 'outside_person', name: 'Внешний сотрудник'},
  {code: 'wiki_access_denied', name: 'Запрет на WiKi'}
]

for (oElem in arrData) {
  sListPathParam = 'categorys';
  sPrimaryKeyParam = oElem.code;
  oListElemParam = '<category SPXML-FORM="x-local://wtv/wtv_categorys.xmd" SPXML-FORM-ELEM="categorys.category"><id>' + oElem.code + '</id><name>' + oElem.name + '</name></category>';

  ms_tools.obtain_shared_list_elem(sListPathParam, sPrimaryKeyParam, oListElemParam);
}
