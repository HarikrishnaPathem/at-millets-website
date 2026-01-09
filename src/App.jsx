import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./i18n/LanguageContext";
import FallingLeaves from "./components/effects/FallingLeaves";
import WhatsAppFloat from "./components/common/WhatsAppFloat";

function App() {
  return (
    <LanguageProvider>
      <FallingLeaves />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      <WhatsAppFloat />
    </LanguageProvider>
  );
}

export default App;
