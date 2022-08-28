import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout, Home, Albums, Posts } from "./components";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title="Home"
                description="Halaman ini berisi informasi tentang tugas yang di berikan bang dea"
              />
            }
          />
          <Route
            path="albums"
            element={
              <Albums
                title="Albums"
                description="Halaman ini berisi image yang di ambil dari dummy data "
              />
            }
          />
          <Route
            path="posts"
            element={
              <Posts
                title="Posts"
                description="Halaman ini berisi posts yang di ambil dari dummy data"
              />
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
