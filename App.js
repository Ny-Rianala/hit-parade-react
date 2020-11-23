import React from "react";
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import AllSongs from "./pages/PopularSongs";
import Styles from "./pages/Styles";
import SongsDetails from "./pages/SongsDetails";
import Add from "./pages/Add";
import Cart from "./pages/Cart";




function App() {
        return(
            <>
            <Header />
                <nav>
                    <Switch>
                       <Route exact path="/">
                            <AllSongs />
                       </Route>
                       <Route path="/styles">
                            <Styles />
                       </Route>
                       <Route path="/add">
                            <Add />
                       </Route>
                       <Route path="/cart">
                            <Cart />
                       </Route>
                       <Route path="/styles/:idParam">
                            <SongsDetails />
                       </Route>
                    </Switch>
                </nav>
            </>
        )
}
export default App;

