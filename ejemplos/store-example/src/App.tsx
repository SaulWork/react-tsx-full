import ContadoresContainer from "./containers/ContadoresContainer";
import Footer from "./store/Footer";
import { StoreProvider } from "./store/store";


 

const App = () => {

  return <StoreProvider>
  

      <ContadoresContainer />

      <Footer></Footer>


  </StoreProvider>
}

export default App;
