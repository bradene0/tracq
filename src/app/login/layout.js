
"use client";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase  from '../../utils/supabase/supabase'; // Import supabase instance

const Layout = ({ children }) => {
  return (
    <div>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      {children}
    </div>
  );
};

export default Layout;