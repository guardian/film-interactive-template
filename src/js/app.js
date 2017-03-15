console.log('started');

// import mainHTML from './text/main.html!text';
// import { PimpedYouTubePlayer } from './lib/youtube';
import share from './lib/share';
import sheetToDomInnerHtml from './lib/sheettodom';
import emailsignupURL from './lib/emailsignupURL';
import { setAttributes, setData, setStyles } from './lib/dom';
import isMobile from './lib/detect';
import sheetNameFromShortId from './lib/sheetnamefromshortid';
import reqwest from 'reqwest';



window.addEventListener('scroll', ()=> {
    const s = window.scrollY;
    const bodyHeight = document.querySelector('body').offsetHeight;
    const windowHeight = window.innerHeight;
    const faders = document.querySelectorAll('.should-fade-in');

    if (s===0 && windowHeight<bodyHeight) {
        for (let i = 0; i < faders.length; i++) {
            faders[i].classList.remove('fade-in');
        }
    } else {
        for (let i = 0; i < faders.length; i++) {
            faders[i].classList.add('fade-in');
        }
    }
});
