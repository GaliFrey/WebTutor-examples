var arrData = [
  {code: '001', name: 'Первая компетенция'},
  {code: '002', name: 'Вторая компетенция'},
  {code: '003', name: 'Третья компетенция'}
]

for (oElem in arrData) {
  sListPathParam = 'lists.competence_types';
  sPrimaryKeyParam = oElem.code;
  oListElemParam = '<competence_type SPXML-FORM="x-local://wtv/wtv_lists.xmd" SPXML-FORM-ELEM="lists.competence_types.competence_type"><id>' + oElem.code + '</id><name>' + oElem.name + '</name></competence_type>';

  ms_tools.obtain_shared_list_elem(sListPathParam, sPrimaryKeyParam, oListElemParam);
}
