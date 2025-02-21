import { Suspense, lazy } from "react";

const LazyComp = lazy(() => import("../SignUp.jsx"));

const LazyLoad = () => {
  return (
    <div>
      <h2>This is LazyComponent</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComp />
      </Suspense>
    </div>
  );
};

export default LazyLoad;
