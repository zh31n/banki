import AppContainer from "@/containers/AppContainer";
import "./globals.scss";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <AppContainer>
          <Header />
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
