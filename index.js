function copy(input, regex) {
    if (input.indexOf('#') != -1) {
        let dom = document.querySelector(input)
        let text = dom.innerHTML

        if (dom.tagName !== 'INPUT' && dom.tagName !== 'TEXTAREA') {
            beginToCopy(text, regex)
        } else {
            dom.select()
            document.execCommand('copy')
        }
    } else {
        beginToCopy(input, regex)
    }
}

function beginToCopy(text, regex) {
    let element = document.createElement('textarea')
    regexText = text.search(regex)
    element.value = regexText
    element.setAttribute('readonly', '')
    element.style.opacity = 0
    document.body.append(element)
    element.select()
    document.execCommand('copy')
}
module.export = copy