import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "../../constants";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "QuickScan" },
    { name: "description", content: "Quick and Intelligent feedback on your resume!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
     <div className="page-heading py-16">
      <h1>QuickScan</h1>
      <h2>Quick and Intelligent feedback on your resume!</h2>
     </div>
  
     {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
    </main>
}
