import Header from "./components/header";
import MicromarketPage from "./pages/MicromarketPage";

function App() {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Header />
      <MicromarketPage />
    </div>
  );
}

export default App;
