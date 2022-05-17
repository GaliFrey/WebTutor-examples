/**
 * Логирует в отдельный файл
 * @param {string} [message] - текст сообщения
 * @param {string} [messageType] - тип сообщения
 */
function log(message, messageType) {
  logName = 'housing_program';
  EnableLog(logName, true);

  message = (messageType ? (StrUpperCase(messageType) + ':\t') : '') +
      (message ? message : '');
  LogEvent(logName, message);
}


