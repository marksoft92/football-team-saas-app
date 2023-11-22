export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  console.log(children);
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>LAYout dla dashboardo / id</nav>

      {children}
    </section>
  );
}
