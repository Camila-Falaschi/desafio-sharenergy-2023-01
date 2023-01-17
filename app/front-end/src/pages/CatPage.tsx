import { useEffect, useState } from "react";
import Header from "../components/Header";
import ImgCatDefault from "../images/default-cat.svg";
import catNotFound from "../images/not-found-cat.svg";
import catCodeImage from "../services/APIHTTPCats";

export default function CatPage() {
  const [imageSrc, setImageSrc] = useState(ImgCatDefault);

  useEffect(() => {}, [imageSrc]);

  const selectInputRange = (start: number, end: number) => {
    return Array(end - start + 1)
      .fill(null)
      .map((_, index) => start + index);
  };

  const changingCatImage = async (codeNumber: string) => {
    const image = await catCodeImage(codeNumber);
    setImageSrc(image);
  };

  return (
    <>
      <Header />
      <main>
        <div>
          <h1>HTTP Cat response status code</h1>
          <select
            id="cat-status-code"
            onChange={({ target }) => changingCatImage(target.value)}
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
          {imageSrc === undefined ? (
            <img src={catNotFound} alt="cat not found" />
          ) : (
            <img src={imageSrc} alt={imageSrc.split("/")[2]} />
          )}
        </div>
      </main>
    </>
  );
}
