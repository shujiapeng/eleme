import axios from 'axios'

// 添加响应拦截器，在响应前拦截，处理一些事情
axios.interceptors.response.use((res) => {
  if (res.data.errorno === 0) {
    return res;
  } else {
    return Promise.reject("服务器错误，错误码：" + res.data.errorno);
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const error = (res) => {
  console.log('error: ' + res)
}

const header = {
  getHeader(callBack) {
    axios.get('/api/seller').then((res)=>{
      callBack(res.data.data)
    }).catch((res)=>{
      error(res)
    })
  }
}


export default {
  header
}