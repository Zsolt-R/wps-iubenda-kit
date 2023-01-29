/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************************!*\
  !*** ./src/wps-iubenda-kit.js ***!
  \********************************/
function getYouTubeVideoID(url) {
  const videoID = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return videoID[2];
}
function getCookie(cookieName) {
  let cookieValue = document.cookie,
    cookieStart = cookieValue.indexOf(' ' + cookieName + '=');
  if (cookieStart === -1) cookieStart = cookieValue.indexOf(cookieName + '=');
  if (cookieStart === -1) {
    cookieValue = null;
  } else {
    cookieStart = cookieValue.indexOf('=', cookieStart) + 1;
    let cookieEnd = cookieValue.indexOf(';', cookieStart);
    if (cookieEnd === -1) {
      cookieEnd = cookieValue.length;
    }
    cookieValue = unescape(cookieValue.substring(cookieStart, cookieEnd));
  }
  return cookieValue;
}
function getMessage() {
  const currentLanguage = getCookie('wp-wpml_current_language');
  let message = 'Accetta i cookie per vedere il contenuto.';
  if (currentLanguage) {
    if ('en' === currentLanguage || 'fr' === currentLanguage || 'de' === currentLanguage) {
      message = 'Accept cookies to see content.';
    }
  }
  return message;
}
function createWrapperUI(item, iubendaButton) {
  const wrapper = document.createElement('div');
  const inner = document.createElement('div');
  wrapper.classList.add('wps-iub-locked-wrapper');
  inner.classList.add('wps-iub-locked-button');
  inner.innerHTML = `<span class="message">${getMessage()}</span>`;
  inner.addEventListener('click', function () {
    iubendaButton.click();
  });

  // Check the suppressedsrc attribute value string contains https://www.youtube.com or https://www.google.com/maps
  if (item?.attributes?.suppressedsrc?.value) {
    if (item.attributes.suppressedsrc.value.includes('https://www.youtube.com')) {
      const videoID = getYouTubeVideoID(item.attributes.suppressedsrc.value);
      wrapper.style.backgroundImage = `url(https://img.youtube.com/vi/${videoID}/maxresdefault.jpg)`;
    } else if (item.attributes.suppressedsrc.value.includes('https://www.google.com/maps')) {
      wrapper.classList.add('wps-iub-locked-wrapper--is-map');
      if (item.attributes.height) {
        wrapper.style.maxHeight = `${item.attributes.height.value}px`;
      }
    }
  }

  // Insert the new node before the item
  wrapper.appendChild(inner);
  item.parentNode.insertBefore(wrapper, item);
  wrapper.appendChild(item);
}
function addIubendaNotice(iubendaButton) {
  /**
   * Find all elements with class _iub_cs_activate
   * Check if they have class _iub_cs_activate-activated
   * If not check the suppressedsrc attribute value string contains https://www.youtube.com or https://www.google.com/maps
   * If string is found wrap the item in <div class="wps-iub-locked-wrapper"><div class="wps-iub-locked-button">...</div></div>
   */
  const content = document.querySelectorAll('iframe._iub_cs_activate');
  if (content.length > 0) {
    content.forEach(item => {
      const hasIubendaAccepted = item.classList.contains('_iub_cs_activate-activated');
      if (hasIubendaAccepted) {
        return null;
      }
      createWrapperUI(item, iubendaButton);
    });
  }
}
function getIubendaButton() {
  const iubendaButton = document.querySelector('.iubenda-cs-preferences-link');
  return iubendaButton;
}
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Check if we have iubenda button and if not check again every 300ms for
   * a maximum of 10 times
   * If we have button add the notice
   */
  let iubendaButton = getIubendaButton();
  let i = 0;
  const interval = setInterval(function () {
    console.log(iubendaButton);
    if (iubendaButton) {
      clearInterval(interval);
      addIubendaNotice(iubendaButton);
    } else {
      iubendaButton = getIubendaButton();
      i++;
    }
    if (i > 20) {
      clearInterval(interval);
    }
  }, 300);
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/wps-iubenda-kit.css ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=wps-iubenda-kit.js.map