import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import Dashboard from './Dashboard';
import UpdateVoucher from './voucher/UpdateVoucher';
import AddVoucher from './voucher/AddVoucher';
import VoucherList from './voucher/VoucherList';
import ShowVoucher from './voucher/ShowVoucher';
import SearchVoucher from './voucher/SearchVoucher';
import CategorieList from './categorie/CategorieList';
import AddCategorie from './categorie/AddCategorie';
import ShowCategorie from './categorie/ShowCategorie';
import UpdateCategorie from './categorie/UpdateCategorie';
import SearchCategorie from './categorie/SearchCategorie';
function App() {
  //localStorage.clear();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Comment */}
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/dashboard">
            <Protected Cmp={Dashboard} />
          </Route>

          {/*Vouchers */}
          <Route path="/addVoucher">
            <Protected Cmp={AddVoucher} />
            {/*<AddVoucher />*/}
          </Route>

          <Route path="/updateVoucher/:id">
            <Protected Cmp={UpdateVoucher} />
            {/*<UpdateVoucher />*/}
          </Route>
          {/*<Voucher List />*/}
          <Route path="/voucherlist">
            <Protected Cmp={VoucherList} />
          </Route>
          {/*<Show />*/}
          <Route path="/showVoucher/:id">
            <Protected Cmp={ShowVoucher} />
          </Route>
          {/*<Search />*/}
          <Route path="/searchVoucher">
            <Protected Cmp={SearchVoucher} />
          </Route>

          {/*Categories */}
          <Route path="/addCategorie">
            <Protected Cmp={AddCategorie} />
          </Route>
          <Route path="/categorielist">
            <Protected Cmp={CategorieList} />
          </Route>

          <Route path="/showCategorie/:id">
            <Protected Cmp={ShowCategorie} />
          </Route>

          <Route path="/updateCategorie/:id">
            <Protected Cmp={UpdateCategorie} />
          </Route>

          <Route path="/searchCategorie">
            <Protected Cmp={SearchCategorie} />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
