const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  ping: () => ipcRenderer.invoke('db:ping')
});
