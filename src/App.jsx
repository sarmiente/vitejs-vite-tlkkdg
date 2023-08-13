import Layout from '/Layout/Layout';
import './App.css';
import WordToPDFConverter from '../components/WordToPDFConverter';

function App() {
  return (
    <Layout>
      <p>Welcome to my website!</p>
      <WordToPDFConverter />
    </Layout>
  );
}

export default App;
