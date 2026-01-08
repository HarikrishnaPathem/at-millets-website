import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./i18n/LanguageContext";
import FallingLeaves from "./components/effects/FallingLeaves";

function App() {
  return (
    <LanguageProvider>
      <FallingLeaves />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </LanguageProvider>
  );
}

export default App;
