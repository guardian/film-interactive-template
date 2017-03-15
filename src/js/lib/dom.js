function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(attr => el.setAttribute(attr, attrs[attr]));
}

function setData(el, data) {
    Object.keys(data).forEach(key => el.dataset[key] = data[key]);
}

function setStyles(el, styles) {
    Object.keys(styles).forEach(style => el.style[style] = styles[style]);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

export {setAttributes, setData, setStyles, scrollTo};
