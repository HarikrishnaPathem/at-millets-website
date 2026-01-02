import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </LanguageProvider>
  );
}

export default App;
