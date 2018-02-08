class AddParams {
  constructor() {
    this.field = document.querySelector('.addParamFields');
    this.addButton = document.querySelector('.addButton');
    this.template = function() {
      return `
      <div class="col-md-4">
      <label for="parameter">Parameter</label>
      <input class="form-control" type="text" name="parameter">
      </div>

      <div class="col-md-4">
      <label for="monthlyFee">Monthly Fee</label>
      <input class="form-control" type="text" name="monthlyFee">
      </div>
      
      <div class="col-md-4">
      <label for="oneTimeFee">One time fee</label>
      <input class="form-control" type="text" name="oneTimeFee">
      </div>
      `
    }

    //initiate methods
    this.click();

  }

  //declare methods
  click() {
    let _this = this;
    this.addButton.addEventListener('click', function() {
      _this.field.insertAdjacentHTML('beforeend', _this.template());
    })
  }
}

export default AddParams;