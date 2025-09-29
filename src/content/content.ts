// 跨浏览器兼容的内容脚本
// 检测浏览器类型
const isFirefox = typeof browser !== 'undefined';
const browserAPI = isFirefox ? browser : chrome;

console.log(`内容脚本已加载 - 浏览器: ${isFirefox ? 'Firefox' : 'Chrome'}`);

// 跨浏览器的消息通信
function sendMessageToBackground(message: any) {
  return new Promise((resolve, reject) => {
    browserAPI.runtime.sendMessage(message, (response) => {
      if (browserAPI.runtime.lastError) {
        reject(browserAPI.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}

// 示例：获取当前标签页信息
sendMessageToBackground({ type: 'GET_TAB_INFO' })
  .then((response: any) => {
    console.log('标签页信息:', response);
  })
  .catch((error) => {
    console.error('获取标签页信息失败:', error);
  });

// Heart Beat (可选，用于保持与背景脚本的连接)
// var Port: any;
// function connect() {
//     Port = browserAPI.runtime.connect(browserAPI.runtime.id, { name: "HeartBeat" });
//     Port.postMessage("HeartBeat");
//     Port.onMessage.addListener(function (message: any, port: any) { return true; });
//     Port.onDisconnect.addListener(connect);
// }
// connect();