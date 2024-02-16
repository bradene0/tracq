// pages/index.js
"use client";
// import Image from "next/image";
import { createClient } from '@supabase/supabase-js'
import ExerciseGrid from "../components/ExerciseGrid";
import { Auth } from '@supabase/auth-ui-react'

const supabase = createClient('https://zlfgnhxpdmferbreloor.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZmduaHhwZG1mZXJicmVsb29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NTYxMDEsImV4cCI6MjAyMzUzMjEwMX0.LuI_szNiNjMugsYveKCUmcHm_r8BlqVg_3mPUUxIq_8')

const App = () => <Auth supabaseClient={supabase}/>


export default function Home() {
  return (
    <main>

      <div className="flex flex-row p-11">
      </div>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Exercise Tracking</h1>
        <ExerciseGrid />
      </div>
    </main>
  );
}
