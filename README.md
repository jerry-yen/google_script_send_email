# Google Apps Script - Gmail發信
Google Apps Script 以下簡稱 GAS<br />

## 需求
以往在開發案件程式時，常常因為客戶沒有郵件伺服器(SMTP)可以處理「聯絡我們」表單的發信功能<br />
所以在客戶規模不大時，我會請客戶使用自己的Google帳號，並幫他新增一個GAS專案<br />
貼上send_mail.js程式碼，利用客戶自己的Gmail來完成發信的功能。<br />

## 安裝(Install)
* 在GAS新增專案，並將 send_mail.js 的內容全數貼過去
* 在GAS的編輯選單選擇「發布」/「部署為網頁應用程式...」
* 新增一個發布版本, 並取得一個發布網址

## 如何使用
在安裝時所取得的發布網址，可以透過任何語言執行並透過HTTP POST的方式傳送以下參數：
 * @param string mailto    收件者信箱
 * @param string subject   主旨
 * @param string content   內容
 * @param string replyto   回覆給(信箱)
 * @param string replyname 回覆給(名稱)

就可以透過 Gmail 發送信件了。

## 請注意
印象中Gmail是有一天幾封信的限制。小規模的使用還可以。大規模使用，還是需要更專業的郵件伺服器(SMTP)
