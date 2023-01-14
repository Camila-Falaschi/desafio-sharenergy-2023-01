import Header from "../components/Header";

export default function CatPage() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>HTTP Cat response status code</h1>
          <select id='cat-status-code'>
            <option value="">--choose a status code--</option>
          </select>
        </div>
      </main>
    </>
  )
}