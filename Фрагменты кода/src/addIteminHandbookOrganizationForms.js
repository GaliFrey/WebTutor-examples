var arrData = [
  {code: '001', name: 'Внешнее'},
  {code: '002', name: 'Внутреннее'},
  {code: '003', name: 'Индивидуальное'}
]

for (oElem in arrData) {
  sListPathParam = 'lists.organizational_forms';
  sPrimaryKeyParam = oElem.code;
  oListElemParam = '<organizational_form SPXML-FORM="x-local://wtv/wtv_lists.xmd" SPXML-FORM-ELEM="lists.organizational_forms.organizational_form"><id>' + oElem.code + '</id><name>' + oElem.name + '</name></organizational_form>';

  ms_tools.obtain_shared_list_elem(sListPathParam, sPrimaryKeyParam, oListElemParam);
}
