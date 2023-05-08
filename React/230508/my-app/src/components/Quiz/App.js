import Hello from '../Hello';
import Time from '../Time';
import Resume from './Resume';
import ColorText from './ColorText';

function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
			<Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;