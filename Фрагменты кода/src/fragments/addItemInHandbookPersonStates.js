var arrData = [
  {code: '1', name: 'Декрет'},
  {code: '2', name: 'Больничный'},
  {code: '3', name: 'Отпуск'}
]

for (oElem in arrData) {
  sListPathParam = 'lists.person_states';
  sPrimaryKeyParam = oElem.code;
  oListElemParam = '<person_state SPXML-FORM="x-local://wtv/wtv_lists.xmd" SPXML-FORM-ELEM="lists.person_states.person_state"><id>' + oElem.code + '</id><name>' + oElem.name + '</name></person_state>';

  ms_tools.obtain_shared_list_elem(sListPathParam, sPrimaryKeyParam, oListElemParam);
}
