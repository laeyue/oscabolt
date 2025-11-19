import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { FontScaleProvider } from './contexts/FontScaleContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PensionLookupPage } from './pages/PensionLookupPage';
import { StatisticsPage } from './pages/StatisticsPage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <LanguageProvider>
      <FontScaleProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pension-lookup" element={<PensionLookupPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </FontScaleProvider>
    </LanguageProvider>
  );
}

export default App;
