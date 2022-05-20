export class UserInfo {
  constructor ({profileName, profileStatus}) {
      this._nameValue = document.querySelector(profileName);
      this._jobValue = document.querySelector(profileStatus);
  }

  getUserInfo () {
      const data = {}
      data.username = this._nameValue.textContent;
      data.job = this._jobValue.textContent;
      return data;
  }

  setUserInfo (data) {
      this._nameValue.textContent = data.name;
      this._jobValue.textContent = data.status;
  }
}