import { XhrOptions } from '../types';

export default function request({
  action,
  withCredentials = false,
  headers = {},
  data = {},
  file,
  name = 'file',
  onError,
  onProgress,
  onSuccess,
}: XhrOptions) {
  const xhr = new XMLHttpRequest();
  if (withCredentials) {
    xhr.withCredentials = true;
  }

  // set send data
  const formData = new FormData();
  const sendData = typeof data === 'function' ? data(file) : data;
  Object.keys(sendData).forEach((key) => {
    formData.append(key, data[key]);
  });

  formData.append(name, file.raw);

  xhr.open('post', action, true);

  // custom request headers
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.onerror = (event: ProgressEvent) => onError({ event, file });

  if (xhr.upload) {
    xhr.upload.onprogress = function (event: ProgressEvent) {
      let percent = 0;
      if (event.total > 0) {
        percent = Math.round((event.loaded / event.total) * 100);
      }
      onProgress({ e: event, percent, file });
    };
  }

  xhr.onload = function (event: ProgressEvent) {
    let response;
    if (xhr.status < 200 || xhr.status >= 300) {
      return onError({ event, file, response });
    }
    const text = xhr.responseText || xhr.response;
    try {
      response = JSON.parse(text);
    } catch (e) {
      response = text;
    }
    onSuccess({ e: event, file, response });
  };

  xhr.send(formData);

  return xhr;
}
