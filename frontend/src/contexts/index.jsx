import React from "react";
import BillingProvider from "./Billing";
import ProductProvider from "./Product";
import ToastProvider from "./Toast";

const IndexProvider = ({ children }) => {
  return (
    <ToastProvider>
      <ProductProvider>
        <BillingProvider>{children}</BillingProvider>
      </ProductProvider>
    </ToastProvider>
  );
};
export default IndexProvider;
