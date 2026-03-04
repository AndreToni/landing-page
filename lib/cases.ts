/* ═══════════════════════════════════════════════════════════════════════════
   CASES — fonte única de verdade para todos os case studies
   Copy fiel às páginas Framer originais
═══════════════════════════════════════════════════════════════════════════ */

export interface CaseMeta {
  label: string
  value: string
}

export interface CaseMetric {
  value: string
  label: string
}

export interface CaseSection {
  label: string     // e.g. "01 / Contexto"
  title: string     // h2
  body?:  string[]  // parágrafos
  list?:  string[]  // itens em bullet
  img?:   string    // imagem opcional da seção
}

export interface Case {
  slug:        string
  tag:         string
  company:     string
  headline:    string
  desc:        string
  img:         string   // hero da página de case
  imgCard:     string   // thumbnail nos cards da home
  meta:        CaseMeta[]
  highlight:   string   // frase de impacto do topo
  metrics:     CaseMetric[]
  sections:    CaseSection[]
}

/* ── Dados ─────────────────────────────────────────────────────────────── */

export const cases: Case[] = [

  /* ── BALQ ────────────────────────────────────────────────────────────── */
  {
    slug:    'balq',
    tag:     'Produto industrial · B2B',
    company: 'Balq',
    headline:'Automação de pátio e gestão de máquinas com múltiplos SKUs',
    desc:    'Refatoração de produto para viabilizar pitch estratégico e fechar contrato enterprise.',
    img:     'https://framerusercontent.com/images/3xWCGBBnL5czxY6fEHoU3OEAU.png',
    imgCard: 'https://framerusercontent.com/images/rKctNAnTrk3sz5iC1oFTXht5wSo.png',
    highlight: 'O contrato com a Braskem foi fechado após o pitch, viabilizado diretamente pela solução construída.',
    meta: [
      { label: 'Empresa',    value: 'Balq'                },
      { label: 'Segmento',   value: 'Automação industrial' },
      { label: 'Plataforma', value: 'Web · Desktop'        },
      { label: 'Ano',        value: '2024'                 },
      { label: 'Papel',      value: 'Product Designer'     },
    ],
    metrics: [
      { value: 'Braskem',   label: 'Primeiro cliente enterprise fechado após o redesenho' },
      { value: '2',         label: 'Sprints de 15 dias para entregar a feature funcional'  },
      { value: '2 perfis',  label: 'Personas mapeadas: operador e gestor'                 },
    ],
    sections: [
      {
        label: '01 / Contexto',
        title: 'Contexto',
        body: [
          'A Balq é um SaaS voltado à automação e gestão de pátio industrial, utilizado por fabricantes de peças plásticas, de itens de alto volume a componentes automotivos.',
          'Com cerca de um ano de mercado, o produto cresceu de forma acelerada e orientada a demandas pontuais, o que gerou inconsistências estruturais na lógica do sistema e na experiência do usuário.',
        ],
      },
      {
        label: '02 / Problema',
        title: 'Problema',
        body: [
          'Durante uma negociação com a Braskem, surgiu a necessidade de suportar múltiplos SKUs sendo produzidos simultaneamente em uma mesma máquina. O sistema não estava preparado para esse cenário.',
          'Sem essa capacidade estrutural, o pitch estratégico não poderia acontecer, colocando em risco a entrada em um cliente enterprise. Sem essa funcionalidade estrutural, o pitch para a Braskem não aconteceria.',
        ],
      },
      {
        label: '03 / Restrições',
        title: 'Restrições',
        body: [
          'O projeto possuía restrições severas que impactaram diretamente decisões de design, validação e priorização:',
        ],
        list: [
          'Tempo: duas sprints de 15 dias para entregar a feature funcional.',
          'Usuários: operadores de fábrica com baixa familiaridade digital e, em muitos casos, baixa alfabetização.',
          'Ambiente de teste: testes de usabilidade precisariam acontecer no pátio da fábrica, em ambiente ruidoso, com interrupções constantes e sem possibilidade de gravação.',
          'Cultura organizacional: parte dos operadores enxergava o sistema como uma ferramenta de vigilância, o que gerava resistência ao uso.',
        ],
      },
      {
        label: '04 / Processo de decisão',
        title: 'Processo de decisão',
        body: [
          'Nos primeiros dias, mapeamos as jornadas das duas personas centrais: o operador, responsável por configurar e associar SKUs às máquinas, e o gestor, que precisava acompanhar a produção em tempo real por meio de um grid consolidado.',
          'A decisão foi priorizar os fluxos críticos para viabilizar o pitch, focando no que sustentava a nova lógica de múltiplos SKUs.',
        ],
      },
      {
        label: '05 / Erros e ajustes',
        title: 'Erros e ajustes',
        body: [
          'Inicialmente, subestimamos o impacto sistêmico da mudança. A introdução de múltiplos SKUs exigia ajustes em status de máquina, relatórios, alertas e publicação de problemas.',
          'Como o prazo era limitado, reorganizamos o roadmap, priorizando o essencial para o pitch e deixando refinamentos e microinterações para sprints posteriores.',
        ],
      },
      {
        label: '06 / Solução',
        title: 'Solução',
        body: [
          'A solução envolveu uma refatoração estrutural do produto para suportar múltiplos SKUs por máquina sem comprometer a clareza operacional. Priorizamos simplicidade e redução de carga cognitiva, considerando o contexto industrial e o perfil dos operadores.',
          'A validação ocorreu por meio de testes de usabilidade de guerrilha no ambiente real de trabalho. Estruturei um framework de testes documentado no Notion, que passou a ser utilizado como padrão pela empresa — antes disso, nenhum teste era conduzido com usuários reais.',
        ],
        img: 'https://framerusercontent.com/images/9ELpSwGKyOXBRB4SLVMAEreKaJs.png',
      },
      {
        label: '07 / Principais entregas',
        title: 'Principais entregas',
        list: [
          'Redesenho do fluxo de criação e gestão de SKUs',
          'Associação de múltiplos SKUs a uma mesma máquina',
          'Nova visualização de status e estatísticas de produção',
          'Ajustes de copy, iconografia e feedback visual após testes em campo',
        ],
      },
      {
        label: '08 / Impacto',
        title: 'Impacto',
        body: [
          'Garantimos um nível de usabilidade adequado mesmo em um contexto industrial complexo.',
          'Introduzimos uma cultura de testes com usuários na empresa, que passou a ser aplicada em evoluções futuras do produto.',
        ],
      },
      {
        label: '09 / Aprendizado',
        title: 'Aprendizado',
        list: [
          'Features de alta complexidade exigem mapeamento sistêmico mais profundo, mesmo sob pressão de tempo.',
          'O uso de wireframes de baixa fidelidade antes da UI final se mostrou essencial para validar decisões rapidamente.',
          'Microinterações ignoradas no curto prazo sempre retornam como dívida de UX — hoje esse aprendizado orienta melhor o planejamento de roadmap.',
        ],
      },
    ],
  },

  /* ── ANGEPLUS ─────────────────────────────────────────────────────────── */
  {
    slug:    'angeplus-prever',
    tag:     'Produto regulado · Mobile',
    company: 'Angeplus',
    headline:'Experiência digital para planos funerários multirregionais',
    desc:    'Estruturação de hub de acesso considerando regras por plano, estado e ano, com foco em uso mobile.',
    img:     'https://framerusercontent.com/images/txOCyg5H1jfBlRVlaM1YrjAvMZ8.png',
    imgCard: 'https://framerusercontent.com/images/xbaUJIExm3YfdwIkAUFmu8GIw.png',
    highlight: 'Aproximadamente 90% de adesão ao ambiente digital por parte dos assinantes.',
    meta: [
      { label: 'Empresa',    value: 'Angeplus / Prever'  },
      { label: 'Segmento',   value: 'Planos funerários'  },
      { label: 'Plataforma', value: 'Mobile · Web App'   },
      { label: 'Ano',        value: '2024'                },
      { label: 'Papel',      value: 'Product Designer'   },
    ],
    metrics: [
      { value: '90%',  label: 'De adesão ao ambiente digital pelos assinantes'           },
      { value: '3',    label: 'Estados atendidos: PR, SC e RS'                           },
      { value: 'Web App', label: 'Solução publicada nas stores iOS e Android'            },
    ],
    sections: [
      {
        label: '01 / Contexto',
        title: 'Contexto',
        body: [
          'A Ferreri atuava como software house no desenvolvimento do Angeplus, produto digital criado para a Prever, uma das maiores empresas do setor funerário do sul do Brasil.',
          'No período pós-pandemia, a Prever iniciou uma iniciativa estratégica para digitalizar todas as jornadas do cliente, facilitando o acesso a informações e benefícios relacionados aos planos funerários.',
        ],
      },
      {
        label: '02 / Problema',
        title: 'Problema',
        body: [
          'O desafio central estava na complexidade estrutural do produto, que resultava em fluxos fragmentados, dificuldade de navegação e alto risco de confusão para o usuário final:',
        ],
        list: [
          'Múltiplas frentes de serviço (funerário, saúde, pets, planos, clube de benefícios)',
          'Regras de acesso variáveis conforme plano contratado',
          'Variação de planos por estado (PR, SC e RS)',
          'Mudanças anuais de planos, gerando experiências diferentes para assinantes antigos e novos',
        ],
      },
      {
        label: '03 / Restrições',
        title: 'Restrições',
        body: [
          'O projeto possuía restrições relevantes que moldaram toda a estratégia de produto e experiência:',
        ],
        list: [
          'Impossibilidade de testes diretos com usuários, por decisão da Prever.',
          'Termos de uso e políticas de privacidade diferentes por estado, exigindo cuidado jurídico.',
          'Comportamento de uso: cerca de 90% dos acessos eram via celular, o que direcionou decisões de plataforma.',
          'Limitação técnica: ausência de time mobile nativo, impossibilitando o desenvolvimento de apps iOS e Android do zero.',
          'Restrições legislativas que impediam a unificação total das frentes em um único branding.',
          'Perfil do público (majoritariamente entre 35 e 50 anos), exigindo soluções simples e de fácil adoção.',
          'Planos versionados por ano, gerando regras de acesso diferentes para usuários de anos distintos.',
        ],
      },
      {
        label: '04 / Processo de decisão',
        title: 'Processo de decisão',
        body: [
          'Diante das limitações jurídicas, avaliamos duas alternativas: unificar todas as frentes do produto ou criar um hub central com controle de acesso por plano, estado e ano.',
          'Optamos pelo hub por ser mais viável no curto prazo, evitar conflitos legais e permitir escalabilidade. Como a maioria acessava via celular, decidimos lançar como Web App nas stores.',
        ],
      },
      {
        label: '05 / Erros e ajustes',
        title: 'Erros e ajustes',
        body: [
          'A decisão pelo hub gerou estranhamento inicial, exigindo ajustes na comunicação e na organização dos fluxos.',
          'Também subestimamos a complexidade de publicação nas stores sem time mobile. Refinamos a estrutura de acesso e adaptamos o Web App para garantir usabilidade consistente no ambiente mobile.',
        ],
      },
      {
        label: '06 / Solução',
        title: 'Solução',
        body: [
          'A solução consistiu na estruturação de um hub central de acesso, capaz de controlar permissões por plano, estado e ano, organizar as diferentes frentes do produto de forma clara e reduzir a complexidade percebida pelo usuário final.',
          'O foco não foi apenas visual, mas estrutural e estratégico, garantindo consistência mesmo com regras complexas por trás.',
        ],
        img: 'https://framerusercontent.com/images/CP2oQ5Lqw9fcrv3XHLvgrVZLJBw.png',
      },
      {
        label: '07 / Principais entregas',
        title: 'Principais entregas',
        list: [
          'Mapeamento das jornadas considerando as regras específicas de cada plano',
          'Prototipação focada em mobile, com ajustes mínimos para desktop',
          'Criação de interfaces claras e hierarquizadas, priorizando leitura e simplicidade',
          'Desenvolvimento de assets visuais (ícones, banners e identidade do app)',
          'Preparação e suporte para publicação do Web App nas lojas (App Store e Play Store)',
        ],
      },
      {
        label: '08 / Impacto',
        title: 'Impacto',
        body: [
          'Alto nível de satisfação do cliente e dos usuários, especialmente no uso mobile.',
          'Feedback positivo contínuo nas stores durante o período do projeto. Consolidação do Web App como principal ponto de contato digital da Prever com seus clientes.',
        ],
      },
      {
        label: '09 / Aprendizado',
        title: 'Aprendizado',
        list: [
          'A padronização de planos se mostrou essencial para a sustentabilidade do produto a longo prazo.',
          'A ausência de um time mobile nativo gera limitações importantes de escala e manutenção.',
          'Projetos com alta complexidade regulatória exigem decisões de UX fortemente alinhadas a jurídico e negócio.',
          'Mobile não era apenas um canal, mas o principal contexto de uso do produto.',
        ],
      },
    ],
  },

  /* ── DESIGN SYSTEM ───────────────────────────────────────────────────── */
  {
    slug:    'design-system',
    tag:     'Escala · Eficiência',
    company: 'Design System',
    headline:'Criação de Design System para múltiplos produtos digitais',
    desc:    'Padronização de tokens, componentes e governança para reduzir retrabalho e acelerar entregas de design e desenvolvimento.',
    img:     'https://framerusercontent.com/images/r6XbsGNAiDDbn0ThI6IBKGDtqmM.png',
    imgCard: 'https://framerusercontent.com/images/rXB1kqHNX67tEZWYCygg6TMdsS8.png',
    highlight: 'Redução de mais de 50% no tempo de produção, revisão e QA de novas telas.',
    meta: [
      { label: 'Contexto',   value: 'Ferreri — Multi-produto' },
      { label: 'Segmento',   value: 'Design Ops'              },
      { label: 'Plataforma', value: 'Figma · Web · Mobile'    },
      { label: 'Ano',        value: '2023'                    },
      { label: 'Papel',      value: 'Design System Lead'      },
    ],
    metrics: [
      { value: '+50%', label: 'Redução no tempo de produção, revisão e QA de novas telas' },
      { value: '100+', label: 'Componentes documentados e publicados no Figma'            },
      { value: '1',    label: 'Designer mantendo o sistema após ganho de eficiência'      },
    ],
    sections: [
      {
        label: '01 / Contexto',
        title: 'Contexto',
        body: [
          'A Ferreri é uma software house que atua no desenvolvimento de diversos produtos digitais, com naturezas, contextos e regras de negócio diferentes.',
          'Com o crescimento do portfólio de produtos, surgiu um problema estrutural recorrente: a construção de interfaces não era escalável. Componentes eram constantemente recriados com pequenas variações visuais, apesar de resolverem os mesmos problemas funcionais.',
        ],
      },
      {
        label: '02 / Problema',
        title: 'Problema',
        body: [
          'Ficou claro que, sem uma base sólida, o custo de manutenção e evolução dos produtos continuaria crescendo. Os principais sintomas eram:',
        ],
        list: [
          'Redundância de componentes',
          'Aumento de retrabalho',
          'Inconsistência visual',
          'Sobrecarga para os times de design e desenvolvimento',
        ],
      },
      {
        label: '03 / Restrições',
        title: 'Restrições',
        body: [
          'O projeto possuía algumas particularidades importantes que direcionaram o projeto para uma abordagem incremental e colaborativa:',
        ],
        list: [
          'Projeto interno, sem restrições rígidas de prazo, permitindo uma evolução mais orgânica.',
          'Necessidade de criar componentes altamente reutilizáveis, mesmo que isso reduzisse a "personalidade" visual de alguns produtos.',
          'Forte dependência de alinhamento técnico, já que o Design System deveria ser facilmente traduzido para código.',
          'Escolha consciente do Figma Dev como ferramenta principal de handoff, visando reduzir fricção entre design e desenvolvimento.',
        ],
      },
      {
        label: '04 / Processo de decisão',
        title: 'Processo de decisão',
        body: [
          'Por ser a primeira experiência do time com Design System, adotamos evolução incremental baseada em uso real. Revisamos os design tokens conforme o time amadurecia.',
          'Após avaliar ferramentas externas, centralizamos tudo no Figma para garantir adoção, eficiência e integração com desenvolvimento.',
        ],
      },
      {
        label: '05 / Erros e ajustes',
        title: 'Erros e ajustes',
        body: [
          'As primeiras versões estavam complexas demais e pouco práticas. A documentação dificultava aplicação consistente.',
          'Simplificamos a estrutura de tokens e reduzimos camadas desnecessárias, tornando o sistema mais utilizável, diminuindo fricção entre times e aumentando sustentabilidade.',
        ],
      },
      {
        label: '06 / Solução',
        title: 'Solução',
        body: [
          'O objetivo da solução era criar um Design System modular, funcionando como um "lego", capaz de reduzir significativamente o tempo de produção de design e código.',
          'Para evitar a criação de componentes desnecessários, instituiu-se um processo de decisão: componentes fora do padrão eram discutidos em conjunto com a liderança de design, avaliando se a criação de um novo componente era realmente necessária ou se geraria retrabalho. Esse processo se tornou um ritual recorrente no time.',
        ],
        img: 'https://framerusercontent.com/images/PkHRMlYNj9VHbFM0dnIqFhYf2E.png',
      },
      {
        label: '07 / Principais entregas',
        title: 'Principais entregas',
        body: [
          'Nos primeiros quatro meses, foi construída a base do sistema. Nos meses seguintes, aplicação dos tokens em telas existentes e padronização de componentes:',
        ],
        list: [
          'Definição de design tokens (cores, tipografia, espaçamentos)',
          'Organização da arquitetura do Design System',
          'Separação clara entre arquivo de tokens e arquivo de componentes',
          'Aplicação dos tokens em telas existentes',
          'Padronização de componentes com documentação detalhada por tela',
          'Documentação indicando componentes utilizados, espaçamentos e estrutura de layout',
        ],
      },
      {
        label: '08 / Impacto',
        title: 'Impacto',
        body: [
          'Os impactos foram claros e mensuráveis no dia a dia do time: diminuição significativa de retrabalho entre design e desenvolvimento.',
          'Mudança no foco das discussões — menos debate sobre telas, mais conversas estratégicas sobre produto. O ganho de eficiência permitiu, inclusive, a redução do time de design, mantendo apenas um designer responsável pela evolução do sistema.',
        ],
      },
      {
        label: '09 / Aprendizado',
        title: 'Aprendizado',
        list: [
          'Design Systems são produtos vivos e exigem evolução contínua, não soluções fechadas.',
          'A documentação de tokens precisa ser simples e didática, especialmente para novos membros do time.',
          'A criação de um processo de onboarding é essencial para garantir a continuidade do sistema.',
          'Alinhamento constante com times técnicos é um dos principais fatores de sucesso em Design Systems.',
        ],
      },
    ],
  },

  /* ── IPAM ─────────────────────────────────────────────────────────────── */
  {
    slug:    'ipam',
    tag:     'Sistema institucional · Campo',
    company: 'IPAM Amazônia',
    headline:'Reestruturação de coleta e gestão de dados em contexto de infraestrutura limitada',
    desc:    'Organização da arquitetura da informação e fluxos de navegação para apoiar tomada de decisão em contexto institucional.',
    img:     'https://framerusercontent.com/images/bt0ZROipXsOPYl0qB0tBXxH2Chs.png',
    imgCard: 'https://framerusercontent.com/images/QpNenxqzuNRKhryEkLDLbBqKJCI.png',
    highlight: 'Mesmo sem métricas quantitativas formais, o feedback qualitativo indicou ganho real em organização e confiabilidade da informação.',
    meta: [
      { label: 'Empresa',    value: 'IPAM Amazônia'      },
      { label: 'Segmento',   value: 'Pesquisa ambiental' },
      { label: 'Plataforma', value: 'Mobile · Web'       },
      { label: 'Ano',        value: '2023'                },
      { label: 'Papel',      value: 'Product Designer'   },
    ],
    metrics: [
      { value: '2',        label: 'Plataformas: app de campo e painel de gestão integrados' },
      { value: '0',        label: 'Formulários em papel no fluxo de coleta após a entrega'  },
      { value: 'Offline',  label: 'App projetado para funcionar sem conexão à internet'     },
    ],
    sections: [
      {
        label: '01 / Contexto',
        title: 'Contexto',
        body: [
          'O IPAM Amazônia atua com pesquisa e monitoramento ambiental, lidando com grandes volumes de dados sobre produção familiar, indicadores sociais e gestão de unidades de conservação. Essas informações sustentam decisões estratégicas em contextos institucionais complexos.',
          'Antes do projeto, a coleta era feita majoritariamente via Google Forms. O diagnóstico revelou que o problema não era apenas coletar dados, mas estruturar um sistema confiável de gestão e visualização para diferentes perfis internos.',
        ],
      },
      {
        label: '02 / Problema',
        title: 'Problema',
        body: [
          'O contrato previa apenas um app de coleta, mas o diagnóstico mostrou a necessidade de um sistema completo de gestão e análise. Os principais problemas identificados eram:',
        ],
        list: [
          'Falta de controle de autoria: formulários permitiam múltiplas respostas com o mesmo e-mail, sem controle real de quem enviava os dados.',
          'Dados inconsistentes: informações divergentes para o mesmo contexto dificultavam validação e comprometiam análises.',
          'Consolidação manual e fragmentada: ausência de estrutura central tornava o processo lento e pouco escalável.',
          'Sem visão estratégica: faltava painel de gestão para leitura consolidada e apoio à tomada de decisão.',
        ],
      },
      {
        label: '03 / Restrições',
        title: 'Restrições',
        body: [
          'O projeto apresentava restrições importantes que impactaram diretamente as decisões de UX, exigindo priorização estratégica e clareza de escopo:',
        ],
        list: [
          'Contexto institucional, com processos já estabelecidos e baixa flexibilidade para mudanças radicais.',
          'Múltiplos stakeholders, incluindo equipes técnicas e gestores com expectativas distintas.',
          'Perfis de usuários com diferentes níveis de escolaridade, exigindo adaptação de linguagem e tom.',
          'Limitação de infraestrutura nas unidades de conservação (acesso precário a internet e dispositivos).',
          'Alta densidade de informação, demandando arquitetura clara e hierarquia rigorosa.',
          'Prazo definido em contrato, com escopo inicialmente limitado à criação do app.',
        ],
      },
      {
        label: '04 / Processo de decisão',
        title: 'Processo de decisão',
        body: [
          'Antes de propor qualquer solução, mergulhei no fluxo real de coleta e uso dos dados (não apenas no modelo ideal documentado). Mapeei jornadas de campo e gestão, revisei a taxonomia existente e validei hipóteses com stakeholders.',
          'Durante essa imersão, ficou evidente que um app de coleta isolado não resolveria o problema estrutural. A decisão estratégica foi ampliar o escopo e incluir um painel de gestão para consolidar e dar sentido às informações.',
        ],
      },
      {
        label: '05 / Erros e ajustes',
        title: 'Erros e ajustes',
        body: [
          'Nas primeiras versões, algumas telas tentavam atender todos os perfis ao mesmo tempo, concentrando informação demais e aumentando a carga cognitiva. Isso tornava a navegação confusa.',
          'Ajustamos a abordagem segmentando fluxos por tipo de usuário e reorganizando a arquitetura da informação. O foco passou a ser clareza e priorização, não volume de dados.',
        ],
      },
      {
        label: '06 / Solução',
        title: 'Solução',
        body: [
          'A solução consistiu na criação de um ecossistema digital composto por um aplicativo de coleta de dados, pensado para contexto de campo e limitações de infraestrutura, e um painel de gestão para usuários internos, permitindo visualização consolidada, organização e análise estratégica das informações.',
          'O foco não foi apenas substituir formulários, mas estruturar um sistema confiável de coleta e gestão institucional de dados.',
        ],
        img: 'https://framerusercontent.com/images/9Fv0CuZx3xUjydIllsMSb0qxlc.png',
      },
      {
        label: '07 / Principais entregas',
        title: 'Principais entregas',
        list: [
          'Reestruturação completa da arquitetura da informação',
          'Definição de fluxos segmentados por perfil de usuário',
          'Criação de fluxogramas e protótipos interativos',
          'Organização de taxonomia e hierarquia de dados',
          'Interfaces focadas em clareza e eficiência',
        ],
      },
      {
        label: '08 / Impacto',
        title: 'Impacto',
        list: [
          'Maior controle sobre autoria e consistência das informações coletadas.',
          'Redução de inconsistências e duplicidade de dados.',
          'Melhoria significativa na clareza de navegação e compreensão dos fluxos.',
          'Alinhamento mais eficiente entre equipes técnicas e gestores.',
          'Base estruturada para evolução futura do sistema.',
        ],
      },
      {
        label: '09 / Aprendizado',
        title: 'Aprendizado',
        list: [
          'Projetos institucionais exigem entendimento profundo do contexto antes de qualquer decisão visual.',
          'Escopo inicial nem sempre resolve o problema real — é preciso coragem para propor ajustes estratégicos.',
          'Arquitetura da informação é determinante quando se lida com dados sensíveis e volumosos.',
          'Clareza e segmentação de fluxos reduzem drasticamente a sobrecarga cognitiva em sistemas complexos.',
          'Infraestrutura limitada deve ser considerada como insumo central no design da solução.',
        ],
      },
    ],
  },
]

/* ── Helpers ────────────────────────────────────────────────────────────── */

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find(c => c.slug === slug)
}

export function getOtherCases(slug: string): Case[] {
  return cases.filter(c => c.slug !== slug)
}
