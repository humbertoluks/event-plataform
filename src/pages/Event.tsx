import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  // TODO: Aplicar um placeholder, ou alguma coisa para que a tela
  // não fique em branco qndo não tiver aula selecionada, ou desviar
  // para a 1a. alua
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}
