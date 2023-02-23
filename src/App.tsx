import Header from "./Components/Header/Header";
import Dashboard from "./Container/Dashboard";
import useInitValues from "./Hooks/useInitValues";
import Home from "./Pages/Home";
import { useWindowDimentions } from "./Store/windowDimentions";

function App() {
  useInitValues();
  const { width } = useWindowDimentions();

  if (width < 600) {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3 style={{
          textAlign:"center"
        }}>
          We are sorry mobile responsiove banana bahut boring hai. So kabi to
          karege pr ab abhi nahi
        </h3>
      </div>
    );
  }

  return (
    <div className='w-[100vw]'>
      <Dashboard />
    </div>
  );
}

export default App;
