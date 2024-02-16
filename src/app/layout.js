// components/Layout.js
"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase  from '../utils/supabase/supabase'; // Import supabase instance

// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
//       {children}
//     </div>
//   );
// };

// export default Layout;
export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
);
}


