import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route element={<MainLayout />}>
        {/* Here it may be the next routes, inside mainlayout */}
        <Route
          path="/home"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
