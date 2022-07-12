import { useParams } from "react-router-dom";

export default function rank() {
  const { rank } = useParams();
  return (
    <div className="rank-description">
      Reactplate will be number <span className="rank">{rank}</span>
    </div>
  );
}
