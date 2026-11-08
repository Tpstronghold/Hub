import './globals.css';
export const metadata = { title: 'Hub — Your school. Your study. Your tools.', description: 'A calm student study workspace.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
