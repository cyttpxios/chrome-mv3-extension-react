/// <reference types="vite/client" />

// 火狐浏览器WebExtensions API类型定义
declare namespace browser {
  namespace runtime {
    function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    function connect(extensionId?: string, connectInfo?: { name?: string }): any;
    const onMessage: {
      addListener(callback: (message: any, sender: any, sendResponse: (response?: any) => void) => boolean | void): void;
    };
    const onInstalled: {
      addListener(callback: (details: { reason: string }) => void): void;
    };
    const lastError: any;
    const id: string;
  }
  
  namespace tabs {
    function query(queryInfo: any, callback: (tabs: any[]) => void): void;
    function create(createProperties: any, callback?: (tab: any) => void): void;
  }
  
  namespace storage {
    namespace sync {
      function get(keys?: string | string[] | object, callback?: (items: any) => void): void;
      function set(items: object, callback?: () => void): void;
      function remove(keys: string | string[], callback?: () => void): void;
    }
  }
}

// 环境变量类型扩展
interface ImportMetaEnv {
  readonly VITE_IS_DEV: boolean;
  readonly VITE_API_URL: string;
  readonly VITE_BROWSER: 'chrome' | 'firefox';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="chrome-types/index" />
