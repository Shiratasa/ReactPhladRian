import Authen from "./1)Authen.js";
import D_Main from "./2)Donor_Main.js";
import D_Item from "./2.1)Donor_ItemDetail.js";
import D_Deli from "./2.2)Donor_Delivery.js";
import D_Rewa from "./2.3)Donor_RewardDetail.js";
import R_Main from "./3)Receiver_Main.js";
import R_Item from "./3.1)Receiver_ItemDetail.js";
import S_Main from "./4)Sponsor_Main.js";
import S_Rewa from "./4.1)Sponsor_RewardDetail.js";
import S_QR from "./4.2)Sponsor_QR.js";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'; 
export const history = createBrowserHistory();

<Router history={history}>
   <Route path="/authen" component={Authen} />
   <Route path="/d_main" component={D_Main} />
   <Route path="/d_item" component={D_Item} />
   <Route path="/d_deli" component={D_Deli} />
   <Route path="/d_rewa" component={D_Rewa} />
   <Route path="/r_main" component={R_Main} />
   <Route path="/r_item" component={R_Item} />
   <Route path="/s_main" component={S_Main} />
   <Route path="/s_rewa" component={S_Rewa} />
   <Route path="/s_qr" component={S_QR} />
</Router>