## umi 下载文件流示例

```js
import { request } from 'umi';

const downloadFile = async () => {
    const res = await request(url,{
        method: 'GET',
        params: data,
        responseType: 'blob',
    })
    const blob = new Blob([result.data], { type: 'application/vnd.ms-excel' });
    const contentDisposition = result.response.headers.get('content-disposition');
    const patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*');
    const encodeFileName = patt.exec(contentDisposition)?.[1];
    const fileName = decodeURI(encodeFileName as string);
    const objectURL = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const body = document.querySelector('body');
    body?.appendChild(a);
    a.download = fileName;
    a.href = objectURL;
    a.click();
    URL.revokeObjectURL(objectURL);
    body?.removeChild(a);
}
```
