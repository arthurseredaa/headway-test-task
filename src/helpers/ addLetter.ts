export const addLetter = (index: number): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet.split("").filter((l: string, letterIndex: number) => letterIndex === index).join("");
  return letter.toUpperCase();
}
