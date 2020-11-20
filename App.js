import React from "react";
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import AllSongs from "./pages/AllSongs";
import Styles from "./pages/Styles";
import Add from "./pages/Add";
import Cart from "./pages/Cart";




function App() {
        return(
            <>
            <Header />
                <header>
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
                    </Switch>
                </header>
            </>
        )
}
export default App;




// const [songs, setSong] = useState([...Songs]); 

//     return(
//         <div>
//             {songs.map((song => 
//              (<li>{song.title}</li>)))}
//         </div>
//     )
// }