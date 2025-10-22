export const metadata = {
  title: 'Signature M — It works',
  description: 'Minimal Next.js app to confirm deployment.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        background:'#0E1A1F',
        color:'#EAEAEA',
        fontFamily:'ui-sans-serif, system-ui, -apple-system',
        margin:0, padding:0
      }}>
        {children}
      </body>
    </html>
  );
}
