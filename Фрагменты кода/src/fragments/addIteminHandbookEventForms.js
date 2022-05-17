var arrData = [
  {code: '001', name: 'Конференция'},
  {code: '002', name: 'Очная'},
  {code: '003', name: 'Вебинар'}
]

for (oElem in arrData) {
  sListPathParam = 'lists.event_forms';
  sPrimaryKeyParam = oElem.code;
  oListElemParam = '<event_form SPXML-FORM="x-local://wtv/wtv_lists.xmd" SPXML-FORM-ELEM="lists.event_forms.event_form"><id>' + oElem.code + '</id><name>' + oElem.name + '</name></event_form>';

  ms_tools.obtain_shared_list_elem(sListPathParam, sPrimaryKeyParam, oListElemParam);
}
