export default function checkOrigin(req){
  if (req.headers.origin === undefined) return true;
  if (req.headers.origin === "https://ismacortgtz.github.io") return true;
  return false;
}