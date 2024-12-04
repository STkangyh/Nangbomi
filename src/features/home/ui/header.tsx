import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>냉보미</div>
      <Link to="settings">설정</Link>
    </div>
  );
}
