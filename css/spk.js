//视频卡
function getVideoCardDriverName() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  if (ext) {
    const info = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
    return info;
  }
  return null;
}

const videoCardDriverName = getVideoCardDriverName();
console.log(videoCardDriverName);