type IframeData = {
  toUrl: string;
  iframeId: string;
  postData?: any;
};
//各应用之间跳转函数
export const jumpProject = ({
  toUrl = `http://${window.location.hostname}:${
    import.meta.env.VITE_APP_SYSTEM_PORT
  }/system-web`,
  iframeId = "myIframe",
  postData = {},
}: IframeData): void => {
  let iframe = document.createElement("iframe");
  iframe.id = iframeId;
  iframe.src = toUrl;
  iframe.style.display = "none";
  const app = document.getElementById("app");
  app && app.appendChild(iframe);
  let myIframe = document.getElementById(iframeId);
  myIframe &&
    myIframe.addEventListener(
      "load",
      function () {
        let data = postData;
        const icontentWindow =
          myIframe && (<HTMLIFrameElement>myIframe).contentWindow;
        icontentWindow && icontentWindow.postMessage(data, toUrl);
        setTimeout(() => {
          window.open(toUrl, "_self");
        }, 200);
        //要清除掉事件
        this.removeEventListener("load", arguments.call, false);
      },
      false
    );
};
