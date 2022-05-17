export class UserInfo {
  constructor ({nameValueSelector, jobValueSelector}) {
      this._nameValue = document.querySelector(nameValueSelector);
      this._jobValue = document.querySelector(jobValueSelector);

      this._nameInput = document.querySelector('.popup__input_type_name');
      this._jobInput = document.querySelector('.popup__input_type_job');
  }

  getUserInfo () {
      const data = {}
      this._nameInput.value = this._nameValue.textContent;
      this._jobInput.value = this._jobValue.textContent;
      data.username = this._nameInput.value;
      data.job = this._jobInput.value;
      return data;
  }

  setUserInfo (data) {
      this._nameValue.textContent = data.username;
      this._jobValue.textContent = data.job;
  }
}