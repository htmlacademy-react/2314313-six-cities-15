import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  placeCountCard: number;
}

function App({ placeCountCard }: AppProps): JSX.Element {
  return (
    <MainScreen placeCountCard={placeCountCard} />
  );
}

export default App;
