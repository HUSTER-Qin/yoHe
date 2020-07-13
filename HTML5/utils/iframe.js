// form post 加载iframe
function createInput(value, name) {
	let input = document.createElement("input");
	input.value = value;
	input.name = name;
	input.type = "hidden";
	return input;
  }
function createIframe(id, url, style = {}){
    let fun = function(id, url, style = {}) {
      let uuid = guid();
      let form = document.createElement("form");
      let curUrl = url.host + "?";
      form.method = "post";
      for (const key in url.query) {
        if (url.query.hasOwnProperty(key)) {
			form.appendChild(createInput(url.query[key], key));
			// 有些特定URL参数  需要 get
        //   if (key != "form_data") {
        //     curUrl += key + "=" + url.query[key] + "&";
        //   }
        }
      }
      form.enctype = "application/x-www-form-urlencoded";
      form.action = curUrl.substring(0, curUrl.length - 1);
      form.target = uuid;
      let iframe = document.createElement("iframe");
      iframe.name = uuid;
      iframe.height = style.height || 450;
      iframe.width = style.width || 450;
      iframe.seamless = true;
      iframe.frameBorder = 0;
      iframe.scrolling = "no";
      document.querySelector(id).appendChild(form);
      document.querySelector(id).appendChild(iframe);
      form.submit();
    };
    setTimeout(fun(id, url, style), 5);
  }