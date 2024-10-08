import type { Metadata } from "next";
import styles from "./page.module.css";
import "../themes/main.scss";
import store from "@/store/store";
import { Provider } from "react-redux";
export const metadata: Metadata = {
  title: "Covid tracker",
  description: "Generated by Ajai kc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Provider store={store}> */}
        <body className={styles.pageBackground}>{children}</body>
      {/* </Provider> */}
    </html>
  );
}
