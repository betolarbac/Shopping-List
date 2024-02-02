import { ListProvider} from "./context/listContext";
import { Header } from "./components/header";
import { List } from "./components/list/list";
import { Footer } from "./components/footer/footer";

export function App() {

  return (
    <>
      <ListProvider>
        <Header />
        <List />
       <Footer />
      </ListProvider>
    </>
  );
}

