export function clickChangeStyle(setClick){
  setClick(true);
  setTimeout(() => { setClick(false); }, 100);
}