/**
 * Библиотека Tools_web
 */
tools_web = {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.put_query_string = function(_param_str, _page_name) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.web_url = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.doc_link = function(oAttributesParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_object_link = function(sObjectNameParam, iObjectIDParam, teObjectParam, iDocIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6805092676950891059}
 */
tools_web.get_web_str = function(sNameParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_web_const = function(sNameParam, fldLngParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.eval_web_column_const = function(sNameParam, fldLngParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_web_desc = function(sSourceHtml, oUrl, _path, Env) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6802816693264850642}
 */
tools_web.get_sum_sid = function(sIdParam, iSessionIdParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6802817083116385810}
 */
tools_web.check_sum_sid = function(sIdParam, sSumParam, iSessionIdParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.custom_elems_filling = function(fldTarget, oSourceParam, arrCustomElemsParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.web_custom_elems_filling = function(_catalog, _top_id, _source, _request_form, _value_flag, sCharsetParam, arrFields) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.update_object_from_context = function(docObjectParam, oContextParam, arrFieldNamesParam, sPrefixParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_query_string_from_url = function(sUrlParam, _flag, _params) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_query_string = function(_flag, _params) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_url_protocol = function(_url) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_url_protocol = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_cur_lng_name = function(sTextParam, sShortIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_access = function(_source_doc, personDocID, personDoc, Session) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_web_param = function(listParamsTarget, sParamNameParam, sDefaultValueParam, bEmptyFlagParam, sOverrideWebTemplateID) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_web_params = function(listParamsTarget, listWvarsParam, bRewriteFlagParam, iOverrideWebTemplateIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.write_custom_web_template = function(oCustomWebTemplateParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_override_web_template = function(iOverrideWebTemplateIDParam, Session, curUserID, curUser, curAnonymousAccess, teActiveWebTemplateParam, bAddingParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_override_web_templates = function(Session, oZoneParam, curActiveWebTemplate, bAddWebTemplate) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.place_zone = function(sZoneParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.place_override_web_template = function(iOverrideWebTemplateIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_operation_script = function(OPERATION_ID, S_SCRIPT_TYPE, O_PARAMS) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.eval_operation_script = function(OPERATION_ID, S_SCRIPT_TYPE, O_PARAMS) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.is_moderator_forum = function(iForumIDParam, iUserIDParam, teForumParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.is_privilege_collaborator = function(iForumEntryIDParam, teUserParam, iUserIDParam, teForumEntryParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.is_forum_readed = function(_forum_id, _user_id) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_forum_entry_access = function(catForumEntryParam, teUserParam, iUserIDParam, teForumParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.remove_forum_entry = function(iForumEntryIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.close_forum_entry = function(iForumEntryIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.draw_calendar = function(_object_name, _object_value, format) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.web_files_process = function(_source_files_doc) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_xhttp_res = function(_text_area, _source_desc) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_my_person_object_link_card = function(CATALOG, USER_ID, DOC_HIMSELF, MAKE_NEW_ON_ABSENCE) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_person_object_info = function(sCatalogPARAM, iUserIDPARAM, teUserPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_person_object_info = function(sCatalogPARAM, iUserIDPARAM, teUserPARAM, aObjectsMetaPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_object_owners = function(iObjectIDPARAM, sCatalog) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.insert_custom_code = function(iCustomWebTemplateID_PARAM, teCustomWebTemplate_PARAM, bEval_PARAM, bNaked_PARAM, iDepth_PARAM, aOfFldNativeParamsArr_PARAM, bExternalEnvelope_PARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.place_xaml = function(iCustomWebTemplateID_PARAM, teCWebTemplate_PARAM, oPlaceXamlParams_PARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.place_xaml_player = function(iCustomWebTemplatePARAM, curWebDesignPARAM, Request, oPlaceXamlParams_PARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_xss = function(sTextParam, sTypeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.reg_exp_init = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_bbcode_to_html = function(sMessageSource, objRegExp) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_html_to_bbcode = function(sMessageSource, objRegExp) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_bbtags_to_html = function(sMessageSource, objRegExp) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_bbcode_tag_ids = function(sMessageSource, objRegExp) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_new_request_by_query = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.update_community_authors = function(iObjectIDPARAM, vAuthorsPARAM, nbDeletePARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.evaluate_remote_action = function(vRemoteActionDoc, Request) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.Unsqueeze = function(sTxt, iIdx) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_collection_param = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.external_eval = function(sCommandParam, oParams, Env) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.env_to_script = function(oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.object_init = function(oSessionTarget, oQueryParam, bObjectEnvSaveParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_column_width = function(sTypeParam, sModeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_catalog_list_arrays = function(oCollectionParam, Env, EnvLngCommon) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_session_user = function(Request, iUserIDParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6969890400621391731}
 */
tools_web.is_true = function(oParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.init_cur_active_web_template = function(Env, bCreateParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.save_cur_active_web_template = function(teActiveWebTemplateDocParam, bFinishSaveParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.drop_active_web_templates = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_session_lng = function(Session) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_site_access = function(tePersonParam, oSiteParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_resource_url = function(iObjectIDParam, Session) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_custom_web_template_url = function(iTemplateIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_object_source_url = function(sCatalogTypeParam, iObjectIDParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.GetTalentPoolObjectsList = function(iPersonIdParam, bAddFuncSubordinatesParam, bHideDissmissedParam, vBossTypeParam, iCareerReserveTypeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.GetRequiredQualificationsList = function(iPersonIDParam, sSearchListParam, bCatalogListParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_recommended_materials = function(iPersonIDParam, sSearchListParam, bCatalogListParam, iRootIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_var_eval = function(sVarNamaParam, curVars, oEvalParam, sEvalTypeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_var_eval = function(sVarNamaParam, curVars, oEvalParam, sEvalTypeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_desc_to_html = function(sDescParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_user_recommended_learning = function(iUserIdParam, teUser) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_user_data = function(oConditionsParam, oValueParam, iDurationParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_user_data = function(oConditionsParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.remove_user_data = function(sKeyParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.obtain_text_area = function(iDocIDParam, teDocTarget) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_host_name = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_cur_host_name = function(teHostParam, oRequestParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_cur_host_path = function(teHostParam, oRequestParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_cur_host_path_by_url = function(teHostParam, sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_cur_host = function(oRequestParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.is_correct_question = function(fldquestionParam, teItemParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.save_cur_object_doc = function(docObjectParam, oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.build_query_url = function(sUrlPARAM, sHostAndPathPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.build_relative_url = function(sUrlPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_modified_response_status = function(oRequestTarget, sUrlParam, dtLastModifiedParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.str_utc_mime_date = function(dtDateParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_tracking_url = function(fldLocationParam, curHostPath) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.create_resource_from_attacment = function(oAttachmentParam, iPersonIDParam, tePersonParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_key_positions_list = function(iPersonIdParam, oStructParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.url_std_content_type = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.is_vfs = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.write_url_to_response = function(sUrl, oRequestParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.encrypt_launch_id = function(sLaunchIDParam, dEndDateParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.decrypt_launch_id = function(sLaunchIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_valid_url = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_active_web_template_hash = function(sModeParam, sAccessLevelParam, sAccessRoleParam, sSiteIDParam, sWebDesignIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.build_submatched_string = function(sSourceString, sRealString, sDestString) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_auth_hash = function(sSourceParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.user_init = function(Request, oParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.GetProjectManagementObjectsList = function(iPersonIDParam, arrCurLngParam, bAddFuncSubordinatesParam, bHideDissmissedParam, bShowProjectManagersParam, bOverdueParam, bProjectTreeParam, bCheckTaskSeeRightsParam, vBossTypeParam, oStructParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.CheckRelativeFileVisibility = function(fldFileParam, iUserIDParam, iObjectIDParam, teObjectParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_date_passed_string = function(dDateParam, sCurLngId) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_date_remain_string = function(dDateParam, sCurLngId) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_host_obj = function(Request) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_default_lng_web = function(oUserParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_profiling_statistic_rec_id = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.start_profiling_record = function(oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.finish_profiling_record = function(sID) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.GetVacancyResponseStatus = function(obVacancyResponseParam, iVacancyResponseIDParam, curLngCommonParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.html_decode = function(sParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.html_to_imput_value = function(sParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.content_types = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_app_ui = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_st_category = function(curUserParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_child_by_key_value = function(fldSourceParam, sKeyParam, sDefaultValueParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_object_image_url = function(oObjectParam, bDispDefaultParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.str_file_size = function(iSizeParam, bDispDefaultParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_base_url_path = function(oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_base_url_path = function(sUrlParam, oEnvParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_menu_items = function(sMenuCodeParam, iLevelsToShowParam, bShowDescParam, iCacheTimeParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_secid = function(iSessionIdParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_secid = function(sSumParam, iSessionIdParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.clear_person_pict_cache = function(iPersonIDParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_item_objectives_value = function(fldItemParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.obtain_item_objectives_value = function(fldTarget, rValueParam, sActionParam) {};

/**
 * [Документация]{@link https://news.websoft.ru/_wt/wiki_base/6823566947404887057}
 */
tools_web.send_message = function(vApplication, sMessagePARAM, sDomainPARAM, aUserPARAM, oOptionsPARAM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.replace_condition_operators = function(oConditionsParam, iValueParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_header_obj = function(sHeaderParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_multipart_array = function(Request) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_game_rating = function(curUser, bCheckLevel, sCurrencyTypeID, bAllLevel, bDispSub, iSubDepth, iGrpColl, oPaging, curUserID, bRange, iAmntCollsRating, sGap, bSamePlace, bShowTopRating) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_game_rating_all = function(bAllLevel, bCheckLevel, iLevelID, bDispSub, iSubdivID, iSubdivNum, sCurrencyTypeID, iGrpColl, oPaging, bRange, iAmntCollsRating, bSamePlace, bShowTopRating) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_timezone = function(iObjectId, catObject, bReturnNull) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_timezone_date = function(dDate, catTimeZone1, catTimeZone2) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_class_for_status = function(sStatus) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_url_query = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.transform_fancy_url = function(source) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_lng_fullname = function(tePersonParam, fldLngParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_language_desc = function(sDesc, oEnv) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.set_override_web_params = function(curParamsTarget, catOverrideWebTemplateParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.access_exists = function(fldAccessParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.str_period_date = function(dtParam, curLngWeb) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.enabled_web_rules_date = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.enabled_web_rules_obj = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_enabled_web_rules = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.std_web_rules_obj = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_std_web_rules = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.clear_std_web_rules = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_mode_clean_url = function(sModeParam, iObjectIDParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_web_mode_clean_url = function(oWebModeParam, iObjectIDParam, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.convert_mode_clean_url = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_clean_url_exc_query = function(sUrlParam, sExcParams, oParams) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.obtain_shared_temp_file = function(sSuffixParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.encode_url_reserved = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.decode_url_reserved = function(sUrlParam) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_remote_action_param = function(aNames, TOPELEM) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.check_collection_access = function(oCurUserParam, oObjectParam, sPersonAccessType) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_empty_env = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_empty_request = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_admin_request = function() {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.parse_multiple_parameter = function(Param) {};

/**
 * TODO описание отсутствует на портале
 */
tools_web.get_md5_id = function(sHashStr) {};

