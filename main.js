(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){e.classList.add(o._errorClass);var n=o._form.querySelector(".".concat(e.id,"-error"));n&&(n.textContent=t,n.classList.add("form__input-error_active"))})),t(this,"_hideInputError",(function(e){e.classList.remove(o._errorClass);var t=o._form.querySelector(".".concat(e.id,"-error"));t&&(t.classList.remove("form__input-error_active"),t.textContent="")})),t(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),t(this,"_disableButtonElement",(function(){o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0})),t(this,"_activeButtonElement",(function(){o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?o._disableButtonElement(o._buttonElement):o._activeButtonElement(o._buttonElement)})),t(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o._toggleButtonState()}))}))})),t(this,"enableValidation",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),this._form=r,this._inputSelector=e.inputSelector,this._buttonSelector=e.buttonSelector,this._formSelector=e.formSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._errorClass=e.errorClass,this._inputList=Array.from(r.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._buttonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._name=r.name,this._link=r.link,this._handleCardClick=o,this._titlePopupBigImage=document.querySelector(".popup-big-image__title"),this._popupBigImage=document.querySelector(".popup-big-image"),this._picturePopupBigImage=document.querySelector(".popup-big-image__opened")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._removal=this._element.querySelector(".element__trash"),this._imageNew=this._element.querySelector(".element__image"),this._titleImage=this._element.querySelector(".element__title"),this._imageNew.src=this._link,this._titleImage.textContent=this._name,this._imageNew.alt=this._name,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCard()})),this._removal.addEventListener("click",(function(){e._removeCard()})),this._imageNew.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLikeCard",value:function(){this._like.classList.toggle("element__like-activ")}},{key:"_removeCard",value:function(){this._element.remove(),this._element=null}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._containerSelector=n,this._container=document.querySelector(this._containerSelector),this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");o.close(t)}},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup-big-image__opened"),t._imageName=t._popup.querySelector(".popup-big-image__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._imageName.textContent=e,p(m(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function S(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitCallback=r,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(){e._submitCallback(e._getInputValues())})),b(w(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.profileName,r=t.profileStatus,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameValue=document.querySelector(n),this._jobValue=document.querySelector(r),this._avatarValue=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.username=this._nameValue.textContent,e.job=this._jobValue.textContent,e}},{key:"setUserInfo",value:function(e){this._nameValue.textContent=e.name,this._jobValue.textContent=e.about,this.setUserAvatar(e)}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?(console.log("sdt"),e.json()):Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userAbout})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__button-edit"),q=document.querySelector(".popup__form-profile"),I=document.querySelector(".popup__input_type_name"),A=document.querySelector(".popup__input_type_job"),R=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),document.querySelector(".profile__add-button")),B=document.querySelector(".popup__form-new-image"),T=(document.querySelector(".popup-big-image__close"),document.querySelectorAll(".popup"),document.querySelector(".element__image"),{formSelector:".form",inputSelector:".form__input",buttonSelector:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input-error_active",errorClass:"form__input_type_error"});function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=new n(T,q);x.enableValidation();var U=new n(T,B);U.enableValidation();var N=new y(".popup-big-image");N.setEventListeners();var D=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"62c163bf-1af7-42e5-bc58-fbc19f858504","Content-Type":"application/json"}}),z=function(e){return new o({data:e,handleCardClick:function(e,t){N.open(e,t)}},".element-template").generateCard()},G=new a({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=z(e);G.addItem(t)}},".elements"),M=(D.getUserInfo({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42/users/me",headers:{authorization:"62c163bf-1af7-42e5-bc58-fbc19f858504","Content-Type":"application/json"}}),new C({profileName:".profile__name",profileStatus:".profile__status",profileAvatar:".profile__avatar"})),H=new E({submitCallback:function(e){M.setUserInfo(e),H.close()}},".popup-profile");H.setEventListeners(),P.addEventListener("click",(function(){var e;e=M.getUserInfo(),I.value=e.username,A.value=e.userAbout,x.resetValidation(),H.open()}));var J=new E({submitCallback:function(e){var t=z(e);G.addItem(t),J.close()}},".popup-new-image");J.setEventListeners(),R.addEventListener("click",(function(){U.resetValidation(),J.open()})),D.getAllNeededData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(i),G.renderItems(o)})).catch((function(e){return console.log(e)}))})();