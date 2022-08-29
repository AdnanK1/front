import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "./PageLayout";
import { CreatePost } from "./containers/CreatePost";
import { Home } from "./containers/Home";
import { Details } from "./containers/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
