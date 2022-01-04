import Contact from "./components/Contact";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Home from "./components/Home";
import TikTokToe from "./components/TikTokToe";
import "./style/index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/tiktoktoe" element={<TikTokToe />} />
          {/* <Route path="/news" element={<News />} /> */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
