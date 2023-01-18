import { useState } from "react";
import Header from "../components/Header";
import ImgCatDefault from "../images/default-cat.svg";

export default function CatPage() {
  const [catCode, setCatCode] = useState('');
  const [isCodeSelected, setIsCodeSelected] = useState(false);

  const selectInputRange = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(null)
      .map((_, index) => start + index);
  };

  const handleSelectInput = (value: string) => {
    if (value === "") {
      setIsCodeSelected(false)
      return setCatCode('')
    };
    setIsCodeSelected(true);
    setCatCode(value);
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <h1>HTTP Cat response status code</h1>
          <select
            id="cat-status-code"
            onChange={({ target }) => { handleSelectInput(target.value) }}
          >
            <option value="">--choose a status code--</option>
            {selectInputRange(100, 599).map((codeNumber) => {
              return (
                <option key={codeNumber} value={codeNumber}>
                  {codeNumber}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {(!isCodeSelected)
          ? (<img src={ImgCatDefault} alt="search-for-a-cat" />)
          : (
            <img src={`https://http.cat/${catCode}`} alt={`status-${catCode}`} />
          )}
        </div>
      </main>
    </>
  );
}
