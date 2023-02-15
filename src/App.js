import "bootstrap/dist/css/bootstrap.min.css";
import AOBArea from "./components/alwaysOnBrowser/AOBArea";
import Router from "./shared/Router";
import GlobalStyle from "./style/GlobalStyle";
import { useSelector } from "react-redux";

function App() {
  const isDarkmode = useSelector((state) => {
    return state.darkMode.isDarkMode;
  });
  return (
    <>
      <GlobalStyle isDarkMode={isDarkmode} />
      <Router />
      <AOBArea />
    </>
  );
}

export default App;
