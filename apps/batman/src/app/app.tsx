import { PocPage } from '@mussia10/poc-page';
import { ThemeProvider } from '@mussia10/theme-provider';
import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to batman!</h1>
        </header>

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
            <li>
              <Link to="/poc-page">Poc page</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
        <Route path="/poc-page" exact render={() => <PocPage />} />
        {/* END: routes */}
      </div>
    </ThemeProvider>
  );
}

export default App;
