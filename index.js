function copy(input, regex) {
    if (input.indexOf('#') != -1) {
        let dom = document.querySelector(input)
        let text = dom.innerHTML
        if (dom.tagName !== 'INPUT' && dom.tagName !== 'TEXTAREA') {
            return beginToCopy(text, regex)
        } else {
            return copyInputAndTextarea(dom)
        }
    } else {
        return beginToCopy(input, regex)
    }
}

function beginToCopy(text, regex) {
    let regexText = undefined
    let element = document.createElement('textarea')
    if (regex) {
        regexText = text.search(regex)
    }
    element.value = regexText || text
    element.setAttribute('readonly', '')
    element.style.opacity = 0
    document.body.appendChild(element)
    element.select()
    let clickbody = document.body.addEventListener('click', () => {
        if (clickbody) {
            document.body.removeEventListener('click', () => {

            })
        }
        document.body.removeChild(element)
        element = null
    }) || true
    let result = document.execCommand('copy')
    return result
}

function copyInputAndTextarea(dom) {
    dom.select()
    let result = document.execCommand('copy')
    return result
}
module.export = copy