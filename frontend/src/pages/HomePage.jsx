import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1>RunFlex</h1>
      <p>An app for runners to track and share their achievements.</p>
      <p>
        <Link to="/runs">All Runs</Link>
      </p>
    </div>
  )
}
