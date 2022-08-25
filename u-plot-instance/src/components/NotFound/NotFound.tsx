import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div>
    <p className="error">
      Could not find the requested page. Are you sure it exists?
    </p>
    <p>
      Go back <Link to="/">to the dashboard</Link>.
    </p>
  </div>
);

export default NotFound;