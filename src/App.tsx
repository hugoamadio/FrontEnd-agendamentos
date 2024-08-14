import GlobalStyled from "./configs/GlobalStyled";
import ThemeDefault from "./configs/themes/ThemeDefault";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ThemeDefault>
        <AppRoutes />
        <GlobalStyled />
      </ThemeDefault>
    </>
  );
}

export default App;
