export const programa = [
  {
    id: "1",
    nome: "Programa de Incubação 2021",
    ano: "2021",
    descricao: "Ciclo focado em inovação digital e negócios escaláveis.",
    startups: [
      {
        nome: "TechWave",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        descricao:
          "A TechWave desenvolve soluções baseadas em IA para análise de grandes volumes de dados."
      },
      {
        nome: "AgroByte",
        logo: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
        descricao:
          "A AgroByte cria ferramentas de monitoramento agrícola usando sensores e aprendizado de máquina."
      },
      {
        nome: "SkyLabs",
        logo: "https://www.dji.com/favicon.ico",
        descricao:
          "A SkyLabs trabalha com drones autônomos voltados para segurança e inspeção industrial."
      }
    ]
  },
  {
    id: "2",
    nome: "Programa de Incubação 2022",
    ano: "2022",
    descricao: "Foco em soluções sustentáveis e tecnologias verdes.",
    startups: [
      {
        nome: "EcoFlow",
        logo: "https://cdn.worldvectorlogo.com/logos/leaflet.svg",
        descricao:
          "A EcoFlow desenvolve sistemas inteligentes para redução de consumo energético."
      },
      {
        nome: "GreenScale",
        logo: "https://cdn.worldvectorlogo.com/logos/green-electricity.svg",
        descricao:
          "A GreenScale cria tecnologia para otimização de painéis solares em larga escala."
      },
      {
        nome: "BioHive",
        logo: "https://cdn.worldvectorlogo.com/logos/bio-86337.svg",
        descricao:
          "A BioHive trabalha com biotecnologia aplicada ao controle de pragas e agricultura sustentável."
      }
    ]
  },
  {
    id: "3",
    nome: "Programa de Incubação 2023",
    ano: "2023",
    descricao: "Ciclo voltado para inovação em saúde e tecnologias médicas.",
    startups: [
      {
        nome: "MediTrack",
        logo: "https://cdn.worldvectorlogo.com/logos/vector-2.svg",
        descricao:
          "A MediTrack cria sistemas para monitoramento remoto de pacientes em tempo real."
      },
      {
        nome: "HealthSync",
        logo: "https://cdn.worldvectorlogo.com/logos/heartbeat.svg",
        descricao:
          "A HealthSync desenvolve plataformas de interoperabilidade para hospitais."
      },
      {
        nome: "NeuroPulse",
        logo: "https://cdn.worldvectorlogo.com/logos/mentalup-2.svg",
        descricao:
          "A NeuroPulse trabalha com soluções de IA para diagnósticos neurológicos assistidos."
      }
    ]
  },
  {
    id: "4",
    nome: "Programa de Incubação 2024",
    ano: "2024",
    descricao: "Ciclo dedicado a robótica, automação e indústria 4.0.",
    startups: [
      {
        nome: "RoboMind",
        logo: "https://cdn.worldvectorlogo.com/logos/robot.svg",
        descricao:
          "A RoboMind cria robôs colaborativos para linhas de produção industriais."
      },
      {
        nome: "AutoFlux",
        logo: "https://cdn.worldvectorlogo.com/logos/nizhegorodsky-autoclub.svg",
        descricao:
          "A AutoFlux desenvolve sistemas de automação baseados em visão computacional."
      },
      {
        nome: "SteelAI",
        logo: "https://cdn.worldvectorlogo.com/logos/google-ai-1.svg",
        descricao:
          "A SteelAI aplica IA para otimização de processos industriais pesados."
      }
    ]
  }
];

export function getProgramaById(id: string) {
  return programa.find((p) => p.id === id);
}
