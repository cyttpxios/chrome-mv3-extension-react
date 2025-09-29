// 火狐浏览器背景脚本 (Manifest V2)
// 与Chrome的service worker不同，火狐使用传统的background scripts

// 检测浏览器类型
const isFirefox = typeof browser !== 'undefined';
const browserAPI = isFirefox ? browser : chrome;

// 火狐浏览器不支持sidePanel，所以移除相关代码
// 如果需要类似功能，可以考虑使用popup或者新标签页

console.log('火狐浏览器背景脚本已加载');

// 处理扩展安装事件
if (isFirefox) {
  // 火狐浏览器事件处理
  browserAPI.runtime.onInstalled.addListener((details) => {
    console.log('扩展已安装:', details);
  });
} else {
  // Chrome浏览器事件处理
  chrome.runtime.onInstalled.addListener((details) => {
    console.log('扩展已安装:', details);
  });
}

// 通用的消息处理
browserAPI.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('收到消息:', message);
  
  // 处理来自content script或popup的消息
  if (message.type === 'GET_TAB_INFO') {
    browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ tabInfo: tabs[0] });
    });
    return true; // 保持消息通道开放
  }
  
  return false;
});