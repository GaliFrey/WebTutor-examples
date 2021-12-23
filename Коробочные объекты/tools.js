/**
 * Библиотека Tools
 */
tools = {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680508003572070439}
 */
tools.lds_address = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_server_protocol = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.object_license = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.encode_course_folder = function(sCodeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.decode_course_folder = function(sCodeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680135779638461264}
 */
tools.load_course = function(fileUrl, sFileCharsetParam, docCourseParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680508545044712673}
 */
tools.copy_manifest_resources = function(fileUrl, baseUrl) {};

/**
 * TODO описание отсутствует на портале
 */
tools.open_course_package_server = function(sUrlPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.copy_url_temp_suffix = function(sDestUrlPARAM, sSourceUrlPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680508767511803836}
 */
tools.update_forum_entry = function(
    doc, iNewForumIDParam, iParentForumEntryIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680508964312008150}
 */
tools.update_document_comment_entry = function(doc, iNewPortalDocIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680509179603262228}
 */
tools.add_report = function(iActionReportIDParam, sTextParam,
    docActionReportParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680509698768708638}
 */
tools.upload_data = function(iExchangeSeverIDParam, dtLimitParam,
    iExchangeObjectIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680509901092641916}
 */
tools.download_data = function(iExchangeSeverIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680510112137364110}
 */
tools.create_data_package = function(iExchangeSeverIDParam, _report_id,
    sPackIDParam, dtLimitParam, iExchangeObjectIDParam, sPrimaryKeyUserData) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680510425386277160}
 */
tools.get_exchange_date = function(_source, _last_date) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680511747618771947}
 */
tools.send_file_to_server = function(_subject, _body, _send_file, _server_id,
    _report_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680512116937077900}
 */
tools.post_file_to_server = function(_send_file, _server_id, _report_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680512912520840039}
 */
tools.date_str = function(_cur_date) {};

/**
 * TODO описание отсутствует на портале
 */
tools.uni_process_package = function(sUrlPackageParam, fldFormParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.process_package = function(_url, fldPackagesValidParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680513667916573981}
 */
tools.get_param_error_text = function(_param_form) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680513873187512585}
 */
tools.download_package_list = function(iExchangeSeverID) {};

/**
 * TODO описание отсутствует на портале
 */
tools.download_package = function(
    iExchangeSeverID, iPackageID, sTempUrlParam, fldPackageValidParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680514175820586922}
 */
tools.package_process = function(_path, _type, _source, _report_id,
    _exchange_server_id, iDownloadPackageIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680514704099981177}
 */
tools.activate_course_to_person = function(oPersonID, _course_id, _event_id,
    _person_doc, _education_plan_id, _duration, _start_learning_date,
    dtLastLearningDateParam, _group_id, sEIDParam, bSkipDismissedParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680515191667126627}
 */
tools.activate_test_to_person = function(oPersonID, _test_id, _event_id,
    _person_doc, _test_doc, _event_doc, _duration, _start_learning_date,
    dtLastLearningDateParam, _group_id, _education_plan_id,
    bSkipDismissedParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680516059253972700}
 */
tools.activate_test_to_event = function(_even_id, _test_id, _doc_event,
    _duration, _start_learning_date, _last_learning_date, sActTypeParam,
    bSkipDismissed, bUseProctoring, iProctorPreferID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680516425647220861}
 */
tools.activate_course_to_event = function(_even_id, _course_id, _doc_event,
    _duration, _start_learning_date, _last_learning_date, bUseProctoring,
    iProctorPreferID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680516666792153075}
 */
tools.activate_education_program_to_person = function(
    _person_id, _education_program_id, _person_doc, _education_program_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680516924452467014}
 */
tools.get_time_from_duration = function(_duration) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680523427028277552}
 */
tools.get_time_from_seconds = function(_seconds) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680523800062684837}
 */
tools.delete_transaction = function(_transaction_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680524041062540191}
 */
tools.pay_new_transaction_by_object = function(iAccountObjectIDParam,
    sAccountCurrencyParam, rSumParam, sCommentParam, iObjectIDParam,
    iPersonIDParam, changeBalance) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680524370318483020}
 */
tools.pay_invoice = function(_invoice_id, _doc_invoice) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680524564614050260}
 */
tools.pay_courses = function(_org_id, _amount, _comment) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680524831324849394}
 */
tools.set_account = function(_org_id, _amount) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680524989514199595}
 */
tools.personal_pay = function(_org_id, _request_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680525281092723098}
 */
tools.create_notification = function(oTypeParam, iObjectIDParam, sTextParam,
    iSecondObjectIDParam, oObjectParam, oSecondObjectParam, teSourceParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680525604285327941}
 */
tools.create_template_notification = function(sTypeParam, iObjectIDParam,
    sSubjectParam, sBodyParam, oObjectParam, teSourceParam,
    iObjectSecondIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680525789426565329}
 */
tools.send_notification = function(iActiveNotificationIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680525972724212373}
 */
tools.save_certificate = function(_learning_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680526252840927330}
 */
tools.random_string = function(_digit_num, _dict) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680526429171837284}
 */
tools.import_excel_persons = function(sParamsXml) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680526605395845773}
 */
tools.start_import_excel_persons = function(Ps) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680526820090531784}
 */
tools.get_sub_boss_by_person_id = function(_person_id, _person_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680527003284685323}
 */
tools.get_main_boss_by_person_id = function(_person_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680527172057764991}
 */
tools.add_lng = function(sLngUrlParam, bDoObtainParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680527316821742088}
 */
tools.get_web_str = function(sNameParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680527540630529763}
 */
tools.is_boss = function(iUserIDParam, iPersonIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680528103564071559}
 */
tools.is_user_boss = function(
    iManagerIdParam, iUserIdParam, _catalog_names, vBossType) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680528241434913184}
 */
tools.is_self_cur_user = function(iUserIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680528408818636816}
 */
tools.is_main_boss = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680528592005457323}
 */
tools.is_real_boss = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680528825658838584}
 */
tools.is_cost_center_boss = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529006119436598}
 */
tools.is_next_boss = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529203248725143}
 */
tools.is_boss_by_subdivision_id = function(_sub_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529422284958403}
 */
tools.is_by_position_id = function(_position_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529618609200955}
 */
tools.is_by_group_id = function(_group_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529798957126995}
 */
tools.is_person_func_manager = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680529963252336290}
 */
tools.is_person_org_func_manager = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680530142391647525}
 */
tools.is_func_manager = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.is_project_manager = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.is_statement_date = function(iActivityIDParam, sValueParam, sUslParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680530378737273848}
 */
tools.object_filling = function(_type, _source, _object_id, _object_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680532489196699609}
 */
tools.common_filling = function(
    _type, _source, _object_id, _object_doc, _custom_flag) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680769601259045916}
 */
tools.common_clear = function(_type, _source, _ps, _doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680769861701798273}
 */
tools.active_learning_finish = function(_learning_id, _source, _course_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680770116768253029}
 */
tools.active_test_learning_finish = function(
    _learning_id, _source, _assessment_doc, iPersonIDParam, bFinishTest) {return XmlDoc};

/**
 * TODO описание отсутствует на портале
 */
tools.active_test_learning_finish_link = function(
    activeLearningID, learningID, teLearning, teAssessment) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680770348059138317}
 */
tools.active_test_learning_finish_attempt = function(_learning_id,
    _learning_code, _assessment_doc, _flag_create_learning,
    docActiveLearning) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680770584753353621}
 */
tools.core_decrypt = function(_core, _qti_path, _qti_text, _learning_doc) {return XmlElem};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680770855518021837}
 */
tools.get_annals_from_core = function(sSourceParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680771103568628484}
 */
tools.get_annals_text_from_annals = function(fldAnnalsParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680771322825418426}
 */
tools.get_qti_path = function(oSource, fldPartParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680771528462514338}
 */
tools.xml_header = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680771727157571114}
 */
tools.annals_decrypt = function(oSourceParam, sQtiPathParam, sQtiTextParam,
    bNoSendCorrectAnswerParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680771993714769757}
 */
tools.report_decrypt = function(_source, _qti_path, _qti_text) {};

/**
 * TODO описание отсутствует на портале
 */
tools.fill_annals_timings = function(fldTarget, fldSource) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_data_answers = function(fldDataItem) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_item_points = function(fldQuestion) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680772387201773314}
 */
tools.fill_annals_text = function(fldAnnalsObjectsTarget, sQtiPathParam,
    sQtiTextParam, fldAnnalsObjectsSource, bNoSendCorrectAnswerParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680772757637979655}
 */
tools.get_annals_text = function(
    _annals, _qti_path, _qti_text, _learning_doc, oAnnalsTarget) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680773140045777212}
 */
tools.close_request = function(_request_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680773338440301179}
 */
tools.workflow_action_process = function(_source, _action_code, _workflow_id,
    _workflow_doc, _alterCurObjectID, dConditionProcess) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680773565617157737}
 */
tools.obtain_lists = function(_url, _list_name) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680773753934066054}
 */
tools.event_finish = function(_event_id, _event_doc, oScreenParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680773918082355027}
 */
tools.event_start = function(_event_id, _event_doc, oScreenParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680774105841874686}
 */
tools.check_access = function(_source_doc, _user_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680774286608201418}
 */
tools.get_object_form_url = function(sCatalogNameParam, bIsCatalogParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_screen_form_url = function(sCatalogNameParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680774664229509619}
 */
tools.new_doc_by_name = function(sCatalogNameParam, bIsCatalogParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680775154553869791}
 */
tools.create_package = function(_pak_url, _report_id, _param_source,
    sPackIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.create_list_package = function(sResultUrlParam, fldPackage) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680785092960219498}
 */
tools.get_doc_by_key = function(sObjectNameParam, oKeyParam, oKeyValueParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680785427788491269}
 */
tools.obtain_doc_by_key = function(
    sObjectNameParam, oKeyParam, oKeyValueParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680785987002985954}
 */
tools.get_seconds_from_duration = function(_duration) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680797948051866317}
 */
tools.assessment_filling_from_qti = function(
    _assessment_id, _source, _qti_text) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798106993384333}
 */
tools.submit_subscriptions = function(
    _document_id, documentDoc, iPersonIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798291553179197}
 */
tools.create_filter_xquery = function(_conditions, _cond, _elem_name) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798497173225868}
 */
tools.create_filter_javascript = function(
    _conditions, _first_cond, _elem_name) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798678056724831}
 */
tools.obtain_custom_templates = function(_url, _source) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798853907296519}
 */
tools.obtain_access_roles = function(_url, _list) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680798982959340616}
 */
tools.import_course = function(_file) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680799175201784735}
 */
tools.process_skk = function(_inst_flag) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680799355950485650}
 */
tools.make_password = function(PASSWORD, CHECK) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680799554876096983}
 */
tools.get_version = function(_type, bDateFlag) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680799737529721815}
 */
tools.get_custom_template = function(_catalog, _top_id, _source) {return XmlElem};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680799892463164066}
 */
tools.set_web_ban = function(_person_id, _status, _source, _check_admin) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800099537920353}
 */
tools.disp_block_filling_by_source = function(
    _source, _disp_block, _disp_object_blocks, _source_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800246355882765}
 */
tools.disp_block_filling = function(_source, _disp_block) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_order_query = function(sOrderParam, sDirParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800420970119629}
 */
tools.create_xquery = function(_catalog_name, _xquery_qual, _filter_xquery,
    _ft_filter, _order_str, _order_dir, _is_hier, _foreign_field, oColumnsParam,
    sSearchTypeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800596813707461}
 */
tools.request_processing = function(iRequestID, docRequest) {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_object_versions = function(
    docVersion, iVersionID, docObject, iPersonID, tePerson, sComment) {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_adding_objects = function(docObject, iObjectID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800764881147705}
 */
tools.request_rejecting = function(
    iRequestID, docRequest, iPersonID, dSaveParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680800940398478012}
 */
tools.add_person_to_event = function(iPersonIDParam, iEventIDParam,
    tePersonParam, docEventParam, iEducationPlanIDParam, iRequestPersonIDParam,
    iRequestIDParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680801090538073152}
 */
tools.del_person_from_event = function(
    _person_id, _event_id, _doc_event, _flag_save) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680801735792656902}
 */
tools.init_encrypt_lib = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680801916724468251}
 */
tools.encrypt_lib = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680802070488901816}
 */
tools.encrypt_lib_obj = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680802200003091807}
 */
tools.create_license = function(iLicenseId) {};

/**
 * TODO описание отсутствует на портале
 */
tools.create_license_complete = function(sTempDirectoryUrl) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680802353780949273}
 */
tools.recovery_empty_lng_const = function(_lng_id, _source) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680802585513428903}
 */
tools.start_agent = function(_agent_id, _element_id, _elems_id_str, dDateParam,
    sTenancyNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_learnings_course_parts_structure = function(learningArray,
    _course_doc_str) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803075703397693}
 */
tools.update_course_parts_structure = function(_learning_id, _course_doc,
    _doc_learning) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803222594744345}
 */
tools.get_direct_sub_person_ids = function(iUserId) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803358544050271}
 */
tools.get_sub_person_ids_by_subdivision_id = function(_subdivision_id,
    sConditionsParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803523486578709}
 */
tools.get_sub_persons_by_subdivision_id = function(_subdivision_id,
    sConditionsParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803681559403471}
 */
tools.get_sub_person_ids_by_func_manager_id = function(
    _manager_id, _catalog_names, vBossType, iLimitParam, sSearchParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680803883617836219}
 */
tools.get_sub_persons_by_func_manager_id = function(iManagerIDParam,
    sCatalogNamesParam, vBossType) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680804037312268783}
 */
tools.get_all_subs_by_func_manager_id = function(_manager_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680804672712413642}
 */
tools.eval_code_page_url = function(_url, _doc_id, _rnd_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680804892833706920}
 */
tools.cur_user_id = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805037813558536}
 */
tools.cur_user = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805179970363576}
 */
tools.cur_user_groups = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.cur_user_content_access = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.cur_user_admin_configuration = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.cur_user_admin_configuration_applications = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.cur_user_admin_type = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805343540679570}
 */
tools.get_cur_user = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805492893291993}
 */
tools.update_cur_user = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805686461531194}
 */
tools.get_cur_user_groups = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805825273228921}
 */
tools.update_cur_user_groups = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.cur_user_is_admin = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_cur_user_content_access = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_cur_user_content_access = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_cur_user_admin_configuration = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_cur_user_admin_configuration = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_cur_user_admin_configuration_applications = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6805889549369161234}
 */
tools.get_cur_user_application_access_level = function(iApplicationIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680805997171581569}
 */
tools.update_filter_conditions = function(_source_conditions, _catalog_name,
    _scheme_id, _set_flag) {};

/**
 * TODO описание отсутствует на портале
 */
tools.check_cur_user_admin_access = function(teObjectParam, curUser,
    fldAccessCalalogParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680806154298672708}
 */
tools.admin_access_filling = function(teObjectParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680806313545176323}
 */
tools.admin_access_copying = function(
    _to_obj_id, _to_obj_doc, _from_obj_id, _from_obj_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680806833396651058}
 */
tools.replace_temlate_tags = function(_str, _date) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807108232500467}
 */
tools.build_condition_eval_str = function(_conditions, iWorkflowIDParam,
    teWorkflowParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807276242359597}
 */
tools.update_document_persons = function(_obj_id, _obj_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807435729784862}
 */
tools.get_period_from_iso = function(_period) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807603123854817}
 */
tools.get_notification_document = function(oDocumentParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807761330264281}
 */
tools.get_cost_center_id_by_person_id = function(_person_id, _person_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680807894561928837}
 */
tools.get_cost_center_boss_by_person_id = function(_person_id, _person_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808032499562813}
 */
tools.get_sub_boss_by_sub_id = function(_sub_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808268388787639}
 */
tools.get_time = function(_str, _minite_flag, _second_flag) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808414541784320}
 */
tools.enable_log_web_request = function(_flag) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808529775317154}
 */
tools.desc_cleanup = function(_desc, _temp_dir) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808685178663065}
 */
tools.get_field_title = function(_field, curLngWeb) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680808861981506727}
 */
tools.fill_field_names = function(
    FIELD_NAMES, FORM, ISCATALOG, EVALPATH, PRETITLE, CUSTOMFIELDSTYPEID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809027743334485}
 */
tools.DateFunc = function(SRC1, SRC2, EVALSTR, PARAM1, PARAM2, PARAM3) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809247789691748}
 */
tools.AdjustDate = function(DATE_VAL, DAYS, HOURS, MINUTES, SECONDS) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809398137477221}
 */
tools.get_report_storage_field = function(sDatatype) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809573922318063}
 */
tools.build_report_remote = function(
    REPORT_ID, PS, docReportParam, sLngSHORT, bMetaOnly) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809715802729738}
 */
tools.get_sub_hierarchy = function(NODE_ID, NODE_CATALOG, NODE_PARENT_FIELD) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680809879472786777}
 */
tools.process_print_form = function(
    oFormParam, iTopElemParam, bReturnFilename) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810041865147695}
 */
tools.get_user_boss = function(OBJECT) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810274970098686}
 */
tools.path_subs_filling = function(_path_subs, _person_id, _person_doc) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810455427272648}
 */
tools.str_time_from_mseconds = function(_mseconds) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810600863047489}
 */
tools.person_list_staff_by_person_id = function(_personID, _personDoc, _depth,
    _top, _separator) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810729230370959}
 */
tools.convert_email_from_x40 = function(_x40_email, _end_mail) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680810876058166678}
 */
tools.add_person_to_assessment_appraise = function(_person_id,
    _assessment_appraise_id, _person_doc, _doc_assessment_appraise) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811029584963528}
 */
tools.get_tag_cloud = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811172161850858}
 */
tools.check_field_name = function(FIELD, IS_STRICT_BEGIN) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811326039929618}
 */
tools.get_doc_type_xmds = function(iDocTypeIDParam, teDocTypeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811472797724336}
 */
tools.generate_doc_type_xmds = function(DOC_TOPELEM, DOC_ID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811614951376241}
 */
tools.register_doc_type = function(docDocTypePARAM, iDocIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811755365477816}
 */
tools.create_certificate_to_event = function(
    _even_id, _type_id, _doc_event, bCreateByNotAssist) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680811944801300556}
 */
tools.create_certificate_to_person = function(
    _person_id, _type_id, _event_id, _person_doc, _type_doc, _event_doc) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812074392356328}
 */
tools.get_main_forum_entry_by_forum_entry_id = function(iForumEntryParam,
    teForumEntryParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812245784941634}
 */
tools.assign_qualification_to_person = function(_person_id, _event_id,
    _qualification_id, _assignment_date, _expiration_date,
    _qualification_test_array, _qualification_course_array, _send_mail,
    _in_process, bAssignTestsParam, bAssignCoursesParam,
    bUnconditionalAssignmentParam, _qualification_assignment_doc,
    teQualification, tePerson, bGivePointParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812386543364011}
 */
tools.assign_qualification_to_event = function(_even_id, _doc_event,
    _qualification_id, _date) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812516553617134}
 */
tools.save_custom_ui_form = function(TEMPLATE) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_custom_ui_form = function(oCustomAdminTemplateParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812674279089009}
 */
tools.get_custom_document_form = function(CATALOG_NAME) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812826066577630}
 */
tools.get_custom_document_data_form_url = function(sCatalogNameParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680812974704512004}
 */
tools.knowledge_part_path_by_knowledge_part_id = function(
    _knowledge_partID, _knowledge_partDoc, _depth, _top, _separator) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_func_manager_substitution = function(arrFuncManagerParam, oParams) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680813176663924079}
 */
tools.get_uni_user_bosses = function(objectParam, oParams) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680813332686004945}
 */
tools.get_uni_user_boss = function(objectParam, oParams) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680813491126744170}
 */
tools.workflow_escalation_process = function(_source, _escalation_code,
    _workflow_id, _workflow_doc, _alterCurObjectID) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680813800242290283}
 */
tools.get_user_comp_profiles = function(objectParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_package_log = function(sUrlPackageParam, oParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680813958572178250}
 */
tools.package_log_filling = function(fldPackageTarget, fldSourceParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814144167548940}
 */
tools.wvars_to_script = function(listWVarsPARAM, bWarily) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814345416419347}
 */
tools.wvars_to_object = function(listWVarsPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814487369223972}
 */
tools.copy_directory = function(sSourceDirPARAM, sDestDirPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814650236343326}
 */
tools.send_event_notifications = function(_event_id, _doc_event, send_type) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814814935920067}
 */
tools.read_object = function(sSomeObjectPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680814968813071098}
 */
tools.array_to_text = function(_aArrayPARAM, _sFormatPARAM, _sNamePARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680815131505548137}
 */
tools.merge_text_array = function(_aDataPARAM, _sName, _bObj, _sFormatPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680815316760933716}
 */
tools.object_to_text = function(objectPARAM, sFormatPARAM, iMaxDepthPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680815466040280974}
 */
tools.create_object_version = function(oDocParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680815707350196785}
 */
tools.get_mandatory_learnings = function(
    iPersonIDParam, iObjectIDParam, tePersonParam, teObjectParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680815884279813905}
 */
tools.get_relative_boss_types = function(objectParam, oPersonParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680816299664618452}
 */
tools.get_relative_operations = function(oManagerParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680825749362010277}
 */
tools.check_relative_operation = function(oManagerParam, oOperationParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680825928914245358}
 */
tools.get_object_relative_boss_types = function(
    iUserIDParam, iObjectIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680826217137444319}
 */
tools.get_relative_operations_by_boss_types = function(
    arrBossTypesParam, sCatalogNameParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680826462128732865}
 */
tools.get_object_relative_operations = function(
    iUserIDParam, iObjectIDParam, sCatalogNameParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680826878835183389}
 */
tools.check_operation_rights = function(
    arrOperationsParam, teCurUserParam, sActionParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680827070976642324}
 */
tools.extend_object = function(oObjectRecipient, oObjectSource) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680827677364585664}
 */
tools.current_user_boss_type = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680827856790492792}
 */
tools.get_current_user_operations = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828012759096156}
 */
tools.assign_elems = function(fldTarget, fldSourceParam, arrFieldNamesParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.assign_elems_exclude = function(
    fldTarget, fldSourceParam, arrFieldNamesParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828146164573602}
 */
tools.get_foreign_field = function(
    fldForeignFieldParam, sFieldParam, sErrTextParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828338891545906}
 */
tools.get_user_by_login = function(Login, AuthType) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828558251667488}
 */
tools.set_form_last_seved_data = function(sCatalogNameParam, bValueParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828913625748248}
 */
tools.get_knowledge_parts_by_person_id = function(person_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829112495981128}
 */
tools.get_experts_by_person_id = function(person_id) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829284192123284}
 */
tools.get_object_name_field_value = function(oObjectParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829451617528575}
 */
tools.copy_url = function(sDestDirPARAM, sSourceDirPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829618543265439}
 */
tools.zip_extract = function(sSourceDirPARAM, sDestDirPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829768925003620}
 */
tools.zip_create = function(
    sArchivePathPARAM, sContentPathPARAM, sContentDirPathPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.sys_db_type = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.sys_db_capability = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.sys_db_capability_ex = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.sys_db_capability_role_tags = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.uid = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_BASIC = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_BLOB_STREAM = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_CLUSTER = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_WORKER_ROLE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_WEB_ROLE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_IMPORT_DOCS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_IMPORT_CATALOG_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_IMPORT_BLOBS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_IMPORT_LOCAL_BLOBS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_EXPORT_DOCS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_EXPORT_CATALOG_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_EXPORT_BLOBS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_EXPORT_LOCAL_BLOBS_BATCH = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_FT_INDEX = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_MULTI_TENANCY = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_AZURE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_MSSQL = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_ORACLE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_DATA_STORAGE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_USER_CACHE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_DISTR_CACHE = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_SYNC_CATALOG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_TEMP_OBJECTS_IN_MEMORY = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_FT_INDEX_BLOBS = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_PD = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_APP_INSIGHTS = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_AGENT_MANAGER = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_INVENTORY = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_ALL_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_AGENT_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_NOTIFICATION_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_SCRIPT_QUEUE_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_WEBSOCKET_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_WEBONLY_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_VCLASS_RECORDER_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_MEDIA_HANDLER_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_CAP_NEURAL_HANDLER_ROLE_TAG = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.spxml_unibridge = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.app_insights_threshold = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.spxml_unibridge_stage = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_STAGE_INIT = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.UNI_STAGE_COMPLETE = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680829948416186067}
 */
tools.doc_types_catalog_hashes = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680830210625114500}
 */
tools.doc_types_catalog_registered = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.register_doc_types_catalog_by_serialized_str = function(sSerializedCatalogsToRegPARAM,
    bServerCheck) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680830409045252153}
 */
tools.register_doc_types_catalog = function(
    aCatalogsToRegPARAM, bServerCheck) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680830674661888357}
 */
tools.get_disp_name_value = function(oObjectParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680830850293520673}
 */
tools.read_selected_date = function(sSomeObjectPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680830988127517349}
 */
tools.get_sum_sid = function(sIdParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680831135117950208}
 */
tools.check_sum_sid = function(sIdParam, sSumParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680831297786242309}
 */
tools.build_simple_phone = function(strPhoneParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680831571960486479}
 */
tools.build_phone = function(strPhoneParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680831727832350092}
 */
tools.recommend_library_material_to_person = function(iPersonIDParam,
    iMaterialIDParam, tePersonParam, teMaterialParam, bSendNotificationParam,
    iEducationPlanID, bCommentParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680831874340896863}
 */
tools.opt_date = function(oDateParam, oDefaultParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832014928778560}
 */
tools.str_negative_number = function(iNumberParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832186372072153}
 */
tools.beautify_file_size = function(iByteSizePARAM, bAddUnitPARAM) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832362622973211}
 */
tools.get_ft_value = function(sValueParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.set_tenancy_by_host = function(sTenancyNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_default_tenancy_name = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832561517118135}
 */
tools.get_agent_command_queue_xml = function(iServerAgentIDParam,
    sElementIDParam, sElemsIDParam, dDateParam, sTenancyNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_thread_tenancy_name = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_env_thread_tenancy_name = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832732921675848}
 */
tools.get_uid_cached_doc = function(sUIDParam, sUrlParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680832943220998681}
 */
tools.check_and_refresh_cached_docs = function(sUrlParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680833101470844983}
 */
tools.open_str_win_ini = function(sFileText) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680833252611342867}
 */
tools.open_doc_win_ini = function(sUrlParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680833505948881210}
 */
tools.log = function(
    sTextParam, sMessageTypeParam, bShowAdditionalInfoParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680833659403843619}
 */
tools.get_sibscriber_subscriptions = function(
    iPersonIDParam, sMessageTypeParam, bShowAdditionalInfoParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680833841033121912}
 */
tools.file_url_exists = function(sFilePathParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_url_exists_server = function(sFilePathParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.load_url_text_server = function(sFilePathParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.load_url_data_server = function(sFilePathParam, iSizeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.read_directory_server = function(sFilePathParam, bDirParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_directory_server = function(sDirParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.zip_extract_server = function(sSourceUrlParam, sTargetUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_trash_url_server = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.alert_server = function(sMessageParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.log_event_server = function(sTypeParam, sTextParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.replace_cached_doc_server = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.copy_url_server = function(sDestUrlParam, sSourceUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.url_file_size_server = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.put_url_text_server = function(sUrlParam, sTextParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.load_share_url_server = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_hash_server = function(sTextParam, sTypeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680834028682477918}
 */
tools.sync_catalog = function(catalogName) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680834236447064433}
 */
tools.update_commons_event_types = function(bUpdateServersParam, oTarget) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680837185645865496}
 */
tools.DigitalVerifyDoc = function(iDocIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680837405582258417}
 */
tools.DigitalVerify = function(strTextParam, strSignatureParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774654076788369051}
 */
tools.process_custom_packs = function(arrAddPacksParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774654376891278933}
 */
tools.check_resource_size = function(iFileSizeParam, iPersonIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774654880696981940}
 */
tools.include_person_to_personnel_reserve_position = function(iPersonIdParam,
    teRequestParam, iCareerReserveTypeIdParam, iPositionIdParam, strStateParam,
    iPositionCommonIdParam, sIncludeDateParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774656237368640759}
 */
tools.extract_bfields_by_list = function(
    fldSPXML, sFieldList, bNoValidation) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774656627662784303}
 */
tools.get_opened_doc = function(teObjectParam) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774657044044278930}
 */
tools.html_to_pdf = function(sHtmlText, sResourcesDirPath, sOutFilePath) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774670891584935443}
 */
tools.set_project_participant_type = function(iProjectParticipantIDParam,
    docProjectParticipantParam, iBossTypeIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774671741588351565}
 */
tools.create_project_participant = function(iObjectIDParam, teObjectParam,
    iProjectIDParam, iBossTypeIDParam, bWithoutAgreement) {return XmlDoc};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774672000538510598}
 */
tools.set_profile_log = function(sIDParam, Request, sTypeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774672398505940318}
 */
tools.clear_good_instance_status = function(oSourceGoodInstance) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774672704943243823}
 */
tools.get_form_upload_data = function(sIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774673029836534019}
 */
tools.set_field_to_form_upload_data = function(
    fldFormTarget, fldObjParam, oObjIDParam, bInvariableParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6798428856463733051}
 */
tools.get_default_object_id = function(
    sCatalogNameParam, sTypeParam, teObjectParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774674066158793430}
 */
tools.get_notification_system = function(oParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774674357588935096}
 */
tools.call_notification_system_method = function(
    oParam, sMethodNameParam, oArrParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.create_tenancy_entry = function(sHost) {};

/**
 * TODO описание отсутствует на портале
 */
tools.add_tenancy_host = function(sTenancyCode, sNewHost) {};

/**
 * TODO описание отсутствует на портале
 */
tools.copy_tenancy = function(sSourceCode, sDestinationTenancyCode) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_tenancy = function(sTenancyCode) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_tenancy_host = function(sTenancyCode, sHostToDelete) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_tenancy_object = function(oTenancy) {};

/**
 * TODO описание отсутствует на портале
 */
tools.disable_tenancy = function(sTenancyCode) {};

/**
 * TODO описание отсутствует на портале
 */
tools.enable_tenancy = function(sTenancyCode) {};

/**
 * TODO описание отсутствует на портале
 */
tools.add_tenancy_storage = function(
    sTenancyHost, sAccountName, sAccountKey) {};

/**
 * TODO описание отсутствует на портале
 */
tools.set_thread_tenancy = function(sTenancyNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.is_disable_tenancy = function(sHostName) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774674667487631230}
 */
tools.set_event_type_id = function(ftTarget, sEventTypeParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774674941346851114}
 */
tools.add_script_to_queue = function(sScriptParam, sCodeParam,
    bDeleteAutomaticallyParam, iDelayParam, dStartDate) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774675324971450658}
 */
tools.wait_script_queue = function(iScriptIdParam, bDeleteScript) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774675654727853892}
 */
tools.open_course_version = function(iCourseIdParam, sBaseUrlParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774675937527208732}
 */
tools.evalReplace = function(strEvalParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6774676213731516150}
 */
tools.xquery = function(sQueryParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6680828755432653634}
 */
tools.get_catalog_limits = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.xhttp_ini = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.load_xhttp_ini = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_xhttp_ini = function(sIniVarName) {};

/**
 * TODO описание отсутствует на портале
 */
tools.resource_pic_envelope = function(
    sMode, vParam1, vParam2, vParam3, vParam4) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_get_upload_file_url = function(iFileSourceIdParam,
    sFileNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_upload_file = function(
    iFileSourceIdParam, sFileUrlParam, sTempFileUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_get_file_to_save_url = function(
    iFileSourceIdParam, iResourceIdParam, sUidPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_get_files_list = function(iFileSourceIdParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_download_file = function(
    iFileSourceIdParam, sUidPARAM, oRequestPARAM, oResponsePARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.file_source_get_file_url = function(iFileSourceIdParam, sUidPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.call_webinar_system_method = function(
    iWebinarSystemIdParam, sMethodNameParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools.call_library_system_method = function(
    iLibrarySystemIdParam, sMethodNameParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools.calculate_statistic_rec = function(iStatisticRecId, iObjectIdParam,
    bIgnorePeriodSettingsParam, bCalculateCatalogsParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_statistic_data = function(iStatisticRecId, iObjectIdParam,
    sPeriodTypeParam, dDateStartParam, dDateEndParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.obtain_statistic_data = function(StatisticRec, iObjectIdParam,
    sPeriodTypeParam, dDateStartParam, dDateEndParam, bVirtual, bForceRedo) {};

/**
 * TODO описание отсутствует на портале
 */
tools.assign_from_object = function(fldTarget, oSourceParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6825300336575741439}
 */
tools.open_doc = function(iDocID) {return XmlDoc};

/**
 * TODO описание отсутствует на портале
 */
tools.filling_learning_parts = function(TopElem) {};

/**
 * TODO описание отсутствует на портале
 */
tools.parse_email_address = function(sAddressParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.safe_execution = function(sCodeSaveExecutionParam, oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_content_access = function(iPersonID, tePerson) {};

/**
 * TODO описание отсутствует на портале
 */
tools.update_content_access = function(idOrTE_UserPARAM, sCatalogPARAM,
    idOrTE_ObjectID, bCanEditPARAM, bCanDeletePARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.set_default_content = function(teContentPARAM, teSubjectPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools.upgrade_locked = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.in_place_upgrade = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.set_upgrade_locked = function(bParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.os_type = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.dotnet_host = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.object_assembly = function() {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6857020682929111618}
 */
tools.get_object_assembly = function(sLibNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.create_committee_member = function(iObjectIDParam, teObjectParam,
    iPersonnelCommitteeIDParam, strCommitteeMemberTypeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.activate_poll_to_person = function(
    oPersonID, oPollID, iPollProcedureID, iEducationPlanID) {};

/**
 * TODO описание отсутствует на портале
 */
tools.delete_poll_result = function(oPollResultParam, tePollParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.array_opt_find_by_key = function(arrParam, sKeyParam, oValueParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.crypto_obj = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.crypto_obj_init = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_default_proctoring_system_id = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.data_type = function(v, detailed) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_list_lngs = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.check_periodity = function(
    fldPeriodityParam, _cur_date, iSleepSecParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.upload_begin = function(sUrlParam, iLenghtParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.upload_range = function(
    sIDParam, iStartIndexParam, iFinishIndexParam, sDataParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.upload_end = function(sIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_oapi_schemas = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.dotnet_xhttp_middleware = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.is_simple_array_field = function(fldParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.restore_doc = function(iObjectIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.ValidateName = function(str, is_var) {};

/**
 * TODO описание отсутствует на портале
 */
tools.check_event_fields = function(iEventID, docEvent, teEvent) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_code_library = function(oLibraryParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6847410742331060912}
 */
tools.call_code_library_method = function(
    oLibraryParam, sMethodNameParam, arrParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_params_code_library = function(oLibraryParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_code_library_error_message = function(oLibResParam, oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_code_library_result_object = function(oLibResParam, oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.amgr_get_agent_list_json = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.amgr_cancel_agent = function(roleUID, threadID) {};

/**
 * TODO описание отсутствует на портале
 */
tools.amgr_kill_role = function(nodeId, roleUID) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_doc_desc = function(teObjectParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_client_data = function(sLogin, sPassword) {};

/**
 * TODO описание отсутствует на портале
 */
tools.webinar_conversation_participants_obj = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_webinar_conversation_participants = function(iWebinarSystemId) {};

/**
 * TODO описание отсутствует на портале
 */
tools.system_event_handlers_obj = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools.get_system_event_handlers = function(iSystemEventId) {};

/**
 * TODO описание отсутствует на портале
 */
tools.add_system_event_handlers_to_obj = function(
    iSystemEventId, iSystemEventHandlerId, teSystemEventHandler) {};

/**
 * TODO описание отсутствует на портале
 */
tools.del_system_event_handlers_from_obj = function(
    iSystemEventId, iSystemEventHandlerId) {};

/**
 * TODO описание отсутствует на портале
 */
tools.add_object_to_package = function(
    docObject, iObjectID, Screen, fldPackage, oParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools.generate_qr = function(text, options) {};

/**
 * TODO описание отсутствует на портале
 */
tools.repeate_learning_activation = function(oLeartningParam) {};
