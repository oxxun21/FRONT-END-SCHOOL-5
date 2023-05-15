import Counter from "./HookUseEffect/Counter";
import Time from "./HookUseEffect/Time";
import UseRefDom from "./HookUseRef/UseRefDom";
import CounterRef from "./HookUseRef/CounterRef";
import UseMemo from "./HookUseMemo/UseMemo";

function App() {
  return (
    <div className="App">
      {/* <Time /> */}
      {/* <Counter /> */}
      {/* <CounterRef /> */}
      {/* <UseRefDom /> */}
      <UseMemo />
    </div>
  );
}

export default App;