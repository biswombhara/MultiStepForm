import Form from "./Form";
import loading from './assets/loading.gif'
function App() {
  return (
    <div>
      <div id="loader" className="h-screen flex items-center justify-center h-screen w-screen fixed z-10 bg-white">
        <img className=" scale-[0.35]" src={loading} alt="load"></img>
      </div>
      <Form />
    </div>
  );
}

export default App;