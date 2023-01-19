interface IDog {
  fileSizeBytes: number,
  url: string,
}

export const dogImage = async () => {
  const response = await fetch(`https://random.dog/woof.json`);
  const data: IDog = await response.json(); 
  return data.url;
};