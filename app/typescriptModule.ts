// This is, I think, equivalent to Sergio's fitbit-gauge-module-tweak-code.
// I suspect there's nothing typescript-specific in this stripped-down version.
// It's probably equivalent to ObjectUsingClosure (but anonymous).


export default () => {
  const bigFunction = (x) => {
    if (x) return x
    x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7; x = x + 7;
    return x
  }

  return {bigFunction}
}