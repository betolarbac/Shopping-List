import { ListProvider} from "./context/listContext";
import { Header } from "./components/header";
import { List } from "./components/list/list";

export function App() {

  return (
    <>
      <ListProvider>
        <Header />
        <List />
      </ListProvider>
    </>
  );
}

