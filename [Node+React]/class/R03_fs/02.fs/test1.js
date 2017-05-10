//首先引入fs模組
var fs = require('fs');

//1.查看模組內容
//console.log(fs);
//可以看到許多function包含Sync，例如：readFile與readFileSync，前者代表異步，後者代表同步

//同步:  會照著行數一行結束再執行下一行，所以如果某行執行時間過久會造成阻塞，也就是程式會卡在該行
//異步:  不會讓程式碼卡在某一行，例如丟出迴力鏢後我們可以繼續喝口水，都回力鏢回來後再接住，異步執行完後要執行的東西通常寫在後面的參數，稱為callback


//參考如下範例，展示同步與異步
//1.可以異步讀取檔案的內容
// fs.readFile('./test.jpg', function (err, buffer) {
//   if (err) throw err;
//   console.log(buffer);
// });
//  console.log('before');

//2.可以同步讀取檔案內容

// var file2 = fs.readFileSync('test.txt', 'utf-8');
// console.log(file2);
// console.log('after');



// 為什麼要有buffer?
 //電腦裡有很多檔案其實不是文字檔案來的。實際上，大部分我們開啟的檔案都是二進制檔案，例如圖片檔案，音訊檔案，簡報等，所有檔案裡的資料其實都是以二進制表示的。所以我們就用Buffer物件去表示檔案的內容，和方便我們閱讀檔案資料的每個位元組。

//讀取的內容為buffer，可以用toString轉換為文字
// fs.readFile('./test.sql', function (err, buffer) {
//   if (err) throw err;
//   console.log(buffer);
//   console.log(buffer.toString());
// });

//寫入文字到檔案
// fs.writeFile('./test.txt', 'Banana', (err) => {
//   if (err) throw err;
//   console.log('saved!');
// });

//但發現這樣會把內容覆蓋

//改用下面方法，即可不覆蓋，而是在最後面加入文字
// fs.appendFile('./test.txt', ' is me', function (err) {
//    if (err) throw err;
//    console.log('saved!');
// });

//查看檔案是否存在
// fs.exists('./test.txt', function (exists) {
//   if (exists) {
//     console.log('檔案存在');
//   } else {
//     console.log('檔案不存在');  
//   }
// });

//以下為不存在的檔案
// fs.exists('./test123.txt', function (exists) {
//   if (exists) {
//     console.log('檔案存在');
//   } else {
//     console.log('檔案不存在');  
//   }
// });


//創建資料夾
// fs.mkdir('./testDir',0777, function (err) {
//   if (err) throw err;
// });

//但0777是什麼?

// 讀取 Read = R = 4
// 寫入 Write = W = 2
// 執行 eXecute = X = 1

// Owner = 程式擁有人
// Group = 同一群組的其它帳號
// Other = 訪客


//  (1) 如果您要開放檔案給任何人 "讀取"、並能 "寫入"，那麼：

// Owner (程式擁有人) = 4 + 2 + 0 = 6
// Group (同一群組) = 4 + 2 + 0 = 6
// Other (訪客) = 4 + 2 + 0 = 6

//  所以 Owner Group Other = 666
// 每個數字對應一個使用者權限，每個數字代表每個使用者權限的能力總和

//  (2) 如果您要開放檔案給任何人執行，自己可以更改檔案，但是不希望其它人更改您的檔案，那麼：

//  Owner (程式擁有人) = 4 + 2 + 1 = 7
//  Group (同一群組) = 4 + 0 + 1 = 5
//  Other (訪客) = 4 + 0 + 1 = 5

//  所以 Owner Group Other = 755


//--------------------

//讀取目錄內檔案

// fs.readdir('../', function (err, files) {
//   if (err) {
//     console.log(err);
//     return;
//   };
//   console.log(files);
// });

  //./ 代表同層  ../ 代表上一層

//查看檔案狀態
// fs.stat('./test.txt', function (err, stats) {
//   if (err) throw err;
//   console.log(stats);
// });


//監聽檔案的變更，修改後儲存即可看到console訊息
// fs.watchFile('./test.txt', function (curr, prev) {
//   console.log('現在時間是: ' + curr.mtime);
//   console.log('上次修改時間: ' + prev.mtime);
// });

//更改檔案名稱，先創建一個test11.txt
//  fs.rename('./test11.txt', './test123.txt', function(err) {
//    if (err) throw err;
//    console.log('file name changed!')  
//  })

//刪除檔案，先創建一個test123.txt
// fs.unlink('./test123.txt', function(err) {
//   if (err) throw err;
//   console.log('deleted!')  
// })



//刪除資料夾，新增一個資料夾名為dir
// fs.rmdir('./dir', function(err) {
//   if (err) throw err;
//   console.log('deleted!')  
// })

//複製檔案
// function copy(src, target) {
//   console.log(target);
//   fs.writeFileSync(target, fs.readFileSync(src));
// }
// copy("./test.txt","./test2.txt");

//但上面這種方式效能不好，且會造成內存泄露
//可使用如下的stream方式

// function copy(src, target) {
//   fs.createReadStream(src).pipe(fs.createWriteStream(target));
// };
// copy("./test.txt","./test2.txt");

// 想像pipe是一個水管，把水流從A直接流到B
// createReadStream 為水從水管進入那一端 createWriteStream為流出水的那一端


//https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback