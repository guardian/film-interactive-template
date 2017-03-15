import sheetUrl from './sheetURL';
import reqwest from 'reqwest';
import startsWith from 'lodash.startswith';


export function sheetToDomInnerHtml(sheetID, sheetName, el, comingSoonSheetName, callback) {

    var sheet = sheetUrl(sheetID);

    reqwest({
        'url': sheet,
        'type': 'json',
        'crossOrigin': true,
        'success': resp => {

            //get list of elements with data-sheet-attribute
            for (const node of el.querySelectorAll('[data-sheet-attribute]')) {
                const value = node.getAttribute('data-sheet-attribute');

                if(startsWith(value, `${comingSoonSheetName}-`)){
                    node.innerHTML = resp.sheets[comingSoonSheetName][0][value.split(`${comingSoonSheetName}-`)[1]];
                }
                else {
                    node.innerHTML = resp.sheets[sheetName][0][value];
                }
            }
            callback(resp);

        }
    });
}

export default sheetToDomInnerHtml;
