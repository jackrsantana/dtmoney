import { Dasgboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dasgboard/>
      <GlobalStyle/>
    </>
  );
}