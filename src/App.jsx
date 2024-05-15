import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeature from "./components/KeyFeature";
import News from "./components/News";
import QuickAction from "./components/QuickAction";
import Team from "./components/Team";
const App = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <News />
      <Blog />
      <QuickAction />
      <KeyFeature />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
