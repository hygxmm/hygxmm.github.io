if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(res => {
            console.log(res)
            console.log("Service Worker 注册成功")
        })
        .catch(err => {
            console.log(err)
        })
}