import Comment from "./pages/Comment";
import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Comment/>
    </GlobalProvider>
  );
}

export default App;
