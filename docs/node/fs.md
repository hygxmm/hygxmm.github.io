# Node.js 文件系统
Node.js提供一组类似`UNIX(POSIX)`标准的文件操作API.Node导入文件系统模块的语法如下:
```js
const fs = require('fs');
```

### 同步和异步
Node.js文件系统模块中的方法均有异步和同步版本.异步的方法函数最后一个参数为回调函数,回调函数的第一个参数包含了错误信息.建议使用异步方法,比起同步,异步方法性能更高,速度更快,而且没有阻塞.


## 文件操作的基本方法

- ### 文件读取
```js
// 同步写法
let data = fs.readFileSync('1.txt','utf8');
// 异步写法
fs.readFile('1.txt','utf8',(err,data) => {})
```
- ### 文件写入
```js
// 同步写法
fs.writeFileSync("2.txt", "Hello world");
// 异步写法
fs.writeFile("2.txt", "Hello world",err => {});
```
- ### 文件追加写入
```js
// 同步写法
fs.appendFileSync("3.txt", " world");
// 异步写法
fs.appendFile("3.txt", " world", err => {});
```
- ### 文件拷贝写入
```js
// 同步写法
fs.copyFileSync("3.txt", "4.txt");
// 异步写法
fs.copyFile("3.txt", "4.txt", () => {});
```
- ### 打开文件
```js
fs.open("4.txt", "r", (err, fd) => {
    console.log(fd);
});
```
- ### 关闭文件
```js
fs.close(fd, err => {
    console.log("关闭成功");
});
```

## 文件目录操作方法

- ### 创建文件目录
```js
 // 同步方法
 fs.mkdirSync('/a/b');
 // 异步方法
 fs.mkdir("a/b/c", err => {
    if (!err) console.log("创建成功");
});
```
- ### 读取文件目录
```js
// 同步方法
let data = fs.readdirSync("a/b");
// 异步方法
fs.readdir("a/b", (err, data) => {
    if (!err) console.log(data);
});
```
- ### 删除文件目录
```js
// 同步方法
fs.rmdirSync("a/b");
// 异步方法
fs.rmdir("a/b", err => {
    if (!err) console.log("删除成功");
});
```
- ### 删除文件操作
```js
// 同步方法
fs.unlinkSync("a/inde.js");
// 异步方法
fs.unlink("a/index.js", err => {
    if (!err) console.log("删除成功");
});
```

## 递归创建目录
```js
const fs = require('fs');
const path = require('path');

async function mkPathSync(dirPath){
    let parts = dirPath.split(path.sep);
    for(let i=1;i<=parts.length;i++){
        let cur = parts.slice(0,i).join(path.sep);
        try{
            await fs.access()
        }catch(e){
            await fs.mkdir()
        }
    }
}
```

## fs.Dir 类

## fs.Dirent 类

## fs.FSWatcher 类

## fs.ReadStream 类

## fs.Stats 类
返回文件信息
- fs.stat
- fs.statSync
- fs.fstat
- fs.fstatSync
- fs.lstat
- fs.lstatSync
- fs.BigIntStats

## fs.WriteStream 类

## fs.readlink 和 fs.readlinkSync

## fs.read 和 fs.readSync
从指定的文件中读取数据

## fs.readFile 和 fs.readFileSync
读取文件内容

## fs.readdir 和 fs.readdirSync
读取目录内容

## fs.realpath 和 fs.realpathSync
解析路径

## fs.rename 和 fs.renameSync
重命名

## fs.rmdir 和 fs.rmdirSync


        fs.symlink
        fs.symlinkSync

        fs.truncate
        fs.truncateSync

        fs.unlink
        fs.unlinkSync

        fs.unwatchFile

        fs.utimes
        fs.utimesSync

        fs.watch
        fs.watchFile

        fs.write
        fs.writeFile

        fs.writeFileSync
        fs.writeSync

        fs.writev
        fs.writevSync
        
        fs.Dir
        fs.Dirent

        fs.ReadStream
        fs.WriteStream

        fs.access
        fs.accessSync

        fs.appendFile
        fs.appendFileSync

        fs.chmod
        fs.chmodSync

        fs.chown
        fs.chownSync

        fs.close
        fs.closeSync

        fs.copyFile
        fs.copyFileSync
        fs.createReadStream
        fs.createWriteStream
        fs.exists
        fs.existsSync
        fs.fchmod
        fs.fchmodSync
        fs.fchown
        fs.fchownSync
        fs.fdatasync
        fs.fdatasyncSync
       
        fs.fsync
        fs.fsyncSync
        fs.ftruncate
        fs.ftruncateSync
        fs.futimes
        fs.futimesSync
        fs.lchmod
        fs.lchmodSync
        fs.lchown
        fs.lchownSync
        fs.link
        fs.linkSync
       
        fs.mkdir
        fs.mkdirSync
        fs.mkdtemp
        fs.mkdtempSync

        fs.open
        fs.openSync
        fs.opendir
        fs.opendirSync




       
