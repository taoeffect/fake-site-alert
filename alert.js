// alert.js

var striped_lines_box = document.createElement('div');
striped_lines_box.style.cssText = "background-image: url(https://i.imgur.com/m5Wjo7h.png); height: 20px;width: 100%;position: fixed; z-index: 99999; opacity: 0.7;";

var inner_text = document.createElement('span');
inner_text.textContent = "This is a known fake news site!";
inner_text.style.cssText = "font-family: 'Lucida Console', Monaco, monospacecolor: white; margin: auto; background: black; display: block; height: 20px; width: 300px; text-align: center; font-size: 14px;";

striped_lines_box.appendChild(inner_text);

document.body.insertBefore(striped_lines_box, document.body.firstChild);
