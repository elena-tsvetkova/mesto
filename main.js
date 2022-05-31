(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_showInputError",(function(e,t){e.classList.add(o._errorClass);var n=o._form.querySelector(".".concat(e.id,"-error"));n&&(n.textContent=t,n.classList.add("form__input-error_active"))})),t(this,"_hideInputError",(function(e){e.classList.remove(o._errorClass);var t=o._form.querySelector(".".concat(e.id,"-error"));t&&(t.classList.remove("form__input-error_active"),t.textContent="")})),t(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),t(this,"_disableButtonElement",(function(){o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0})),t(this,"_activeButtonElement",(function(){o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?o._disableButtonElement(o._buttonElement):o._activeButtonElement(o._buttonElement)})),t(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o._toggleButtonState()}))}))})),t(this,"enableValidation",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),this._form=r,this._inputSelector=e.inputSelector,this._buttonSelector=e.buttonSelector,this._formSelector=e.formSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._errorClass=e.errorClass,this._inputList=Array.from(r.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._buttonSelector)}var r,o;return r=n,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,a=t.handleConfirmDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._name=o.name,this._link=o.link,this._likes=o.likes,this._userId=r,this._ownerId=o.owner._id,this._handleCardClick=i,this._handleConfirmDelete=a,this._titlePopupBigImage=document.querySelector(".popup-big-image__title"),this._popupBigImage=document.querySelector(".popup-big-image"),this._picturePopupBigImage=document.querySelector(".popup-big-image__opened")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._likeCount=this._element.querySelector(".element__like-count"),this._removal=this._element.querySelector(".element__trash"),this._imageNew=this._element.querySelector(".element__image"),this._titleImage=this._element.querySelector(".element__title"),this._imageNew.src=this._link,this._titleImage.textContent=this._name,this._imageNew.alt=this._name,this._likeCount.textContent=this._likes.length,this._ownerId!==this._userId&&(this._removal.style.display="none"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCard()})),this._removal.addEventListener("click",(function(){e._handleConfirmDelete()})),this._imageNew.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLikeCard",value:function(){this._like.classList.toggle("element__like-activ")}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._containerSelector=n,this._container=document.querySelector(this._containerSelector),this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");o.close(t)}},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t,this._popup=document.querySelector(this._popupSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup-big-image__opened"),t._imageName=t._popup.querySelector(".popup-big-image__title"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._imageName.textContent=e,p(_(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitCallback=r,n._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".form__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(){e._submitCallback(e._getInputValues())})),b(S(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){b(S(a.prototype),"close",this).call(this),this._formElement.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.profileName,r=t.profileStatus,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameValue=document.querySelector(n),this._jobValue=document.querySelector(r),this._avatarValue=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.username=this._nameValue.textContent,e.about=this._jobValue.textContent,e}},{key:"setUserInfo",value:function(e){this._nameValue.textContent=e.name,this._jobValue.textContent=e.about,this.setUserAvatar(e),console.log(e)}},{key:"setUserAvatar",value:function(e){this._avatarValue.src=e.avatar}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," ").concat(e.text().then((function(e){throw new Error(e)}))))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.status})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function B(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t._popupButton=t._popupForm.querySelector(".popup__button"),t._popupButtonTextContent=t._popupButton.textContent,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;q(T(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){console.log("sub"),t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"renderLoadingWhileDeleting",value:function(e){console.log("tew"),this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l),V=document.querySelector(".profile__button-edit"),D=document.querySelector(".popup__form-profile"),U=document.querySelector(".popup__input_type_name"),N=document.querySelector(".popup__input_type_job"),z=(document.querySelector(".popup__input_type_title"),document.querySelector(".popup__input_type_link"),document.querySelector(".profile__add-button")),F=document.querySelector(".popup__form-new-image"),W=(document.querySelector(".popup-big-image__close"),document.querySelectorAll(".popup"),document.querySelector(".element__image"),{formSelector:".form",inputSelector:".form__input",buttonSelector:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input-error_active",errorClass:"form__input_type_error"});function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=new n(W,D);J.enableValidation();var M=new n(W,F);M.enableValidation();var H=new d(".popup-big-image");H.setEventListeners();var $=new A(".popup-delete");console.log($),$.setEventListeners();var K=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"62c163bf-1af7-42e5-bc58-fbc19f858504","Content-Type":"application/json"}}),Q=function(e){var t=new o({data:e,handleCardClick:function(e,t){H.open(e,t)},handleConfirmDelete:function(){$.setSubmitAction((function(n){$.renderLoadingWhileDeleting(!0),K.delete(e._id).then((function(e){t.removeCard(),$.close()})).catch((function(e){return console.log(e)})).finally((function(e){return $.renderLoadingWhileDeleting(!1)}))})),$.open()}},".element-template",ee);return t.generateCard()},X=new a({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=Q(e);X.addItem(t)}},".elements"),Y=(K.getUserInfo({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"62c163bf-1af7-42e5-bc58-fbc19f858504","Content-Type":"application/json"}}),new O({profileName:".profile__name",profileStatus:".profile__status",profileAvatar:".profile__avatar"})),Z=new E({submitCallback:function(e){K.setUserInfoApi(e).then((function(e){Y.setUserInfo(e),Z.close()}))}},".popup-profile");Z.setEventListeners(),V.addEventListener("click",(function(){var e;e=Y.getUserInfo(),U.value=e.username,N.value=e.about,J.resetValidation(),Z.open()}));var ee,te=new E({submitCallback:function(e){K.addCard(e).then((function(e){var t=Q(e);X.addItem(t),te.close()}))}},".popup-new-image");te.setEventListeners(),z.addEventListener("click",(function(){M.resetValidation(),te.open()})),K.getAllNeededData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y.setUserInfo(i),ee=i._id,X.renderItems(o)})).catch((function(e){return console.log(e)}))})();