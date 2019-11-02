import wepy from "wepy"
//wepy 是一个对象

const baseUrl='https://uinav.com/api/public/v1'
//@title 提示信息的文字
//@icon  提示信息的图标
wepy.baseToast=function(title='获取数据失败',icon="none"){
    wepy.showToast({
        title,
        icon
    })
}

//get 请求

wepy.get=function(path,data={}){
  return wepy.request({
        url:baseUrl+path,
        data
    })
}

//post 请求
wepy.post=function(path,data={}){
    return wepy.request({
          url:baseUrl+path,
          data,
          method:'post'

      })
  }