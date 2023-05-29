import CharactersList from "./components/CharactersList";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="px-6 pt-10">
          <CharactersList />
        </section>
      </main>
    </div>
  );
}

export default App;
