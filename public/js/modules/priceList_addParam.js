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
      <div class="form-group col-md-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="applySlaTop">
          <label class="form-check-label" for="applySlaTop">SLA Top</label>
          <label for="slaTopFee">Sla Top Add Fee</label>
          <input type="text" class="form-control" name="slaTopFee">
        </div>
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