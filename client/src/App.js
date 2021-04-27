import Item from './Item/Item'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appbar from './appBar/Appbar';
import Collection from './collection/Collection';

function App() {
  return (
    <div>
      <Appbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Collection name={"all products"}/>
          </Route>
          <Route exact path="/:collection">
            {/* <Collection /> */}
          </Route>
          <Route exact path="/items/:id">
            <Item />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
