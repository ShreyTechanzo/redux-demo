import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import { CssBaseline, GlobalStyles, Stack } from "@mui/material";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalStyles styles={{ "html , body, #root": { height: '100%' } }} />
        <Stack height="100%">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
