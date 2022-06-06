import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = lazy(() => import('../App'));
const HomePage = lazy(() => import('../pages/homepage'));
const CategoryContainer = lazy(
  () => import('../components/category-container')
);
const CheckoutPage = lazy(() => import('../pages/checkout'));
const SignInSignUp = lazy(() => import('../pages/sign-in-sign-up'));
const CategorySingle = lazy(() => import('../components/category-single'));
const NotFound = lazy(() => import('../pages/notfound'));
const ShopPage = lazy(() => import('../pages/shop'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<h2>...</h2>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="shop" element={<ShopPage />}>
              <Route index element={<CategoryContainer />} />
              <Route path=":categoryId" element={<CategorySingle />} />
            </Route>

            <Route path="signin" element={<SignInSignUp />} />
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
