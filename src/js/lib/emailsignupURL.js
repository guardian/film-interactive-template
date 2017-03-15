export default function emailsignupURL(listId) {
    const isApp = window.location.protocol === 'file:';
    return window.location.origin === 'https://www.theguardian.com' || isApp ? `https://www.theguardian.com/email/form/plaindark/${listId}` : `https://m.code.dev-theguardian.com/email/form/plaindark/${listId}`;
}
