import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <input type="text" id="search-bar" placeholder="Search for name, email or username" />
      </main>
    </>
  )
}