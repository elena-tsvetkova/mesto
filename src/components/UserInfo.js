export class UserInfo {
  constructor ({profileName, profileStatus, profileAvatar}) {
      this._nameValue = document.querySelector(profileName);
      this._jobValue = document.querySelector(profileStatus);
      this._avatarValue = document.querySelector(profileAvatar);
  }

  getUserInfo () {
      const data = {}
      data.username = this._nameValue.textContent;
      data.about = this._jobValue.textContent;
      return data;
  }

  setUserInfo (data) {
      this._nameValue.textContent = data.name;
      this._jobValue.textContent = data.about;
      this.setUserAvatar(data)
      console.log(data)
  }


  setUserAvatar(data) {
    this._avatarValue.src = data.avatar
  }
}