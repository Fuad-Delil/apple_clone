import "./css/styles.css";
import "./css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchPage from "./Components/pages/Search";

import Header from "./Components/Header/Header";
import Main from "./Components/MainSection/Main";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import Footer from "./Components/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import Ipad from "./Components/pages/Ipad";
import Mac from "./Components/pages/Mac";
import Music from "./Components/pages/Music";
import Support from "./Components/pages/Support";
import Tv from "./Components/pages/Tv";
import Watch from "./Components/pages/Watch";
import Iphone from "./Components/pages/Iphone";
import Four04 from "./Components/pages/Four04";
import SinglePage from "./Components/pages/SinglePage";
import SharedLayouts from "./Components/pages/SharedLayouts";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SharedLayouts />}>  // //to use shared layouts like header and footer
          <Route path="/" element={<Main />} />
          <Route path="/apple" element={<Main />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="music" element={<Music />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<SinglePage />} />
          <Route path="tv" element={<Tv />} />
          <Route path="watch" element={<Watch />} />
          <Route path="support" element={<Support />} />
          <Route path="Search" element={<SearchPage />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    
  );
}

export default App;
