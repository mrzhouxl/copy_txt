const copy = (input = '', regex, { target = document.body } = {}) => {
    if (input.indexOf('#') != -1) {
        let dom = document.querySelector(input);
        let text = dom.innerHTML;
        if (dom.tagName !== 'INPUT' && dom.tagName !== 'TEXTAREA') {
            return selectCopy(text, regex, target);
        } else {
            return copyInputAndTextarea(dom);
        }
    } else {
        return selectCopy(input, regex, target);
    }
}

function selectCopy(text, regex, target) {
    let regexText = undefined;
    let element = document.createElement('textarea');
    if (regex) {
        regexText = text.match(regex);
    }
    element.value = regexText || text;
    element.setAttribute('readonly', '');
    element.style.opacity = 0;
    element.style.left = '-9999px';
    element.style.fontSize = '12pt';
    target.appendChild(element);
    element.select();
    const event = () => {
        if (clickbody) {
            target.removeEventListener('click', () => event)
        }
        if (element) {
            target.removeChild(element);
            element = null;
        }
    }
    let clickbody = target.addEventListener('click', () => {
        event()
    }) || true;
    try {
        let result = document.execCommand('copy');
        return result;

    } catch (_) { }
}

function copyInputAndTextarea(dom) {
    dom.select();
    let result = document.execCommand('copy');
    return result;
}


module.exports = copy;
