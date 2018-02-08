import DashboardContIt1 from './modules/dashboard_c_it1';
import DashboardContIt2 from './modules/dashboard_c_it2';
import DashboardContIt3 from './modules/dashboard_c_it3';
import AddParams from './modules/priceList_addParam'


let dashboardContIt1 = new DashboardContIt1();
let dashboardContIt2 = new DashboardContIt2();
let dashboardContIt3 = new DashboardContIt3();

// window.onbeforeunload = function(e) {
  
  //   dashboardContIt1.destroy()
  //   dashboardContIt2.destroy()
  //   dashboardContIt3.destroy()
  // }
  
  if (AddParams.addButton != null) {
    let addParams = new AddParams();
  }
