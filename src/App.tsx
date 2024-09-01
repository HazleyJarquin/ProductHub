import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./components/MainLayout";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
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
          <Route
            path="/products"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <Products />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
