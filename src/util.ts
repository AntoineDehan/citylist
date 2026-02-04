// Inutilisé mais c'est la version non-hook (l'intégreation dans Searchbar est louche)

export function debouncer<T extends (...args: any[]) => any>(
  func: T,
  timer: number,
): (...args: Parameters<T>) => void {
  let timeOutId: ReturnType<typeof setTimeout>;
  console.log("début debouncer");

  return function (this: unknown, ...args: Parameters<T>): void {
    console.log("return function effectuée");
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      console.log("timeout lancé");
      console.log(func);
      func.apply(this, args);
    }, timer);
  };
}
