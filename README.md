# Sobre

  Este projeto é uma biblioteca React preparada para publicação no npm. 
  Essa biblioteca contem componentes de botao.

  - ActionButton: Botão de ação estilizado baseado no tema e com tipografia configurável via `variant`.
  - FormButtonGroup: Agrupador de botões "Deletar", Cancelar" e "Salvar" para uso **dentro** de formulários.
  - NavigationButton: Botão de navegação reutilizável baseado em um link (`<a>`), estilizado com Material UI.
  - NavigationLink: Link de navegação reutilizável baseado em um link (`<a>`), estilizado com Material UI. 
  
  
  Abaixo está o passo a passo para publicar ou atualizar a lib.

# Pré-requisitos

    1. Node.js instalado
        - Recomenda-se uma versão LTS. Verifique com: node -v        

# Como Publicar a biblioteca:

  1. Instalar dependências: npm install

  2. No package.json, altere o campo version de acordo com a semântica de versionamento.
    1.0.1 – correção de bug
    1.1.0 – nova funcionalidade compatível
    2.0.0 – mudanças incompatíveis

    - para publicar versão beta: "1.0.0-beta.x"

  3. Este pacote é publicado exclusivamente via CI/CD (GitHub Actions).

    - Releases são disparados apenas por tags Git (vX.Y.Z)
    - Publicações manuais (npm publish) são desabilitadas
    - A autenticação no npm utiliza Trusted Publishing (OIDC)
    - Nenhum token npm é armazenado ou utilizado
    - Tokens de publicação estão explicitamente desabilitados
    - Autenticação em dois fatores (2FA) é obrigatória
    - Versionamento segue Semantic Versioning (SemVer)

    Esse modelo garante publicações seguras, rastreáveis e reprodutíveis. 

# Comando:

  1. npm view pipesol-button versions --json - verifica todas as versões publicadas no npm.  