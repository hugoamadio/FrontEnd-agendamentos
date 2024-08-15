import LocalizationProviderComponent from "./components/LocalizationProviderComponent";
import GlobalStyled from "./configs/GlobalStyled";
import ThemeDefault from "./configs/themes/ThemeDefault";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <LocalizationProviderComponent>
        <ThemeDefault>
          <AppRoutes />
          <GlobalStyled />
        </ThemeDefault>
      </LocalizationProviderComponent>
    </>
  );
}

export default App;
