/**
 * 串接時，POST接收函式
 */
function doPost(e) {
  // 接收參數
  var param = e.parameter;
  
  // 收件者信箱
  var mailto = param.mailto;
  
  // 主旨
  var subject = param.subject;
  
  // 內容
  var content = param.content;
  
  // 回覆給(信箱)
  var replyto = param.replyto;
  
  // 回覆給(名稱)
  var replyname = param.replyname;
  
  // 如果沒有「收件者」、「主旨」、「內容」那寄個毛啊！
  if(mailto != '' && subject != '' && content != ''){
    send_email(mailto, subject, content, replyto, replyname);
  }
  
  // 印出 success，讓串接程式知道發送成功
  return ContentService.createTextOutput('success');
}

/**
 * 發信函式
 *
 * @param string mailto    收件者信箱
 * @param string subject   主旨
 * @param string content   內容
 * @param string replyto   回覆給(信箱)
 * @param string replyname 回覆給(名稱)
 */
function send_email(mailto, subject, content, replyto, replyname){
  MailApp.sendEmail({
    to: mailto,
    subject: subject,
    htmlBody: content,
    name: replyname,
    replyTo:replyto
  });
}
