const fs = require('fs');

// 1 创建文件： （很少 的 操作）
// fs.writeFile('./log.txt', '', err => {
//   if (err) {
//     console.log('创建失败');
//     return;
//   }

//   console.log('创建成功');
// });

// 2 写入内容
var opCallback = err => {
  if (err) {
    return console.log('操作失败: ', err);
  }

  console.log('操作成功');
};
// fs.writeFile('./test.txt', 'this is a test content again. \n', opCallback);
// fs.appendFile('./test.txt', 'hehe,  我是被追加在最后边 的。\n', opCallback);

// 3 删除文件

// fs.unlink('./log.txt', opCallback);

// 4 读取文件内容

var readCallback = (err, data) => {
  if (err) {
    return console.log('读取失败：', err);
  }

  console.log(data);
};

// fs.readFile('./test.txt', 'utf-8', readCallback);

// 5 拷贝文件
// fs.copyFile('./test.txt', './test/test.txt', opCallback);
// fs.copyFile('./test.txt', './test/test-test.txt', opCallback);
// fs.copyFile('./test.txt', './test/test-test.log', opCallback);

// 6 创建文件夹
// fs.mkdir('./log/', opCallback);

// 7 删除文件夹
// fs.rmdir('./test/', opCallback);

// 8 读取文件夹下子内容（不是后代）
// fs.readdir('./test/', readCallback);

// 读取指定文件夹下所有文件的内容
fs.readdir('./test/', (err, files) => {
  // 发生错误
  if (err) {
    return console.log('failed');
  }
  // 没有异常
  // 遍历所有的文件
  files.forEach(file => {
    // 获取文件信息
    fs.stat('./test/' + file, (err, info) => {
      // 保证没有异常
      // 发生错误
      if (err) {
        return console.log('failed');
      }
      // 如果是文件夹 就 路过
      if (info.isDirectory()) {
        return;
      }
      // 如果 是 普通文件， 就读取内容
      fs.readFile('./test/' + file, 'utf-8', readCallback);
    });
  });
});
