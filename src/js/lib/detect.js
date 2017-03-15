function isMobile() {
    const isIOS = () => /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent);
    const isAndroid = () => /Android/i.test(navigator.userAgent);

    return isIOS() || isAndroid();
}

export { isMobile };
