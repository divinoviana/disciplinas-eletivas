# 🎓 Disciplinas Eletivas - EEFPN

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)](https://github.com/seu-usuario/disciplinas-eletivas)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Sistema moderno e responsivo para escolha de disciplinas eletivas da **Escola Estadual Frederico José Pedreira Neto**

## 🌟 Demonstração

🔗 **[Ver Site Online](https://seu-usuario.github.io/disciplinas-eletivas)**

![Screenshot do Site](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Screenshot+do+Site)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para facilitar o processo de inscrição em disciplinas eletivas pelos alunos da Escola Estadual Frederico José Pedreira Neto. O site apresenta uma interface moderna, intuitiva e totalmente responsiva.

### ✨ Funcionalidades

- 🎨 **Interface Moderna**: Design atrativo com gradientes e animações suaves
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔍 **Sistema de Busca**: Filtro em tempo real por disciplina ou professor
- 📊 **Painel de Estatísticas**: Visão geral das disciplinas disponíveis
- 🔗 **Integração Direta**: Links diretos para formulários do Google Forms
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida

### 🎯 Disciplinas Disponíveis

O sistema apresenta **13 disciplinas eletivas** organizadas por turmas:

| Disciplina | Professor | Turma |
|------------|-----------|-------|
| Boatemática e a Cultura Maker | Marcus Sales | 13-01 |
| Desenvolvimento Sustentável | Alex | 13.02 |
| Cientificamente Falando | Cristiane | 13.03 |
| Navegando em Mares Gregos | Renata | 13.04 |
| Ler, Contar e Escrever | Washington | 23.01 |
| Lógica Matemática | Ana Carolina | 23.02 |
| Escrever bem, que mal tem? | Carla Andreia | 23.03 |
| O tratado da emenda do intelecto de Spinoza | Divino Viana | 23.04 |
| Germinando Vida | Camila | 33.01 |
| Educação Financeira | Joneidson | 33.02 |
| A química que comemos | Thaylon | 33.03 |
| A físico-química do artesanato de argila e porcelana | Francisco | 33.04 |
| Performance e Gestão Esportiva | Ricardo | 33.05 |

## 🚀 Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** - Biblioteca JavaScript para interfaces de usuário
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida e moderna
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de interface modernos
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/disciplinas-eletivas.git

# Entre no diretório
cd disciplinas-eletivas

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:5173
```

### Build de Produção

```bash
# Gere o build de produção
pnpm run build

# Visualize o build localmente
pnpm run preview
```

## 📁 Estrutura do Projeto

```
disciplinas-eletivas/
├── 📁 public/                 # Arquivos públicos
├── 📁 src/
│   ├── 📁 assets/            # Recursos estáticos
│   │   └── disciplinas_eletivas.json
│   ├── 📁 components/        # Componentes React
│   │   └── 📁 ui/           # Componentes de interface
│   ├── 📄 App.jsx           # Componente principal
│   ├── 📄 App.css          # Estilos principais
│   └── 📄 main.jsx         # Ponto de entrada
├── 📁 .github/
│   └── 📁 workflows/        # GitHub Actions
├── 📄 package.json         # Dependências
├── 📄 vite.config.js       # Configuração Vite
└── 📄 README.md           # Este arquivo
```

## 🚀 Deploy

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Deploy Automático

1. Faça push para a branch `main`
2. O GitHub Actions irá automaticamente:
   - Instalar dependências
   - Executar o build
   - Fazer deploy no GitHub Pages

### Deploy Manual

```bash
# Gere o build
pnpm run build

# Faça upload dos arquivos da pasta dist/ para seu servidor
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Personalização

### Adicionando/Editando Disciplinas

Para modificar as disciplinas disponíveis, edite o arquivo `src/assets/disciplinas_eletivas.json`:

```json
{
  "id": 14,
  "professor": "Nome do Professor",
  "disciplina": "Nome da Disciplina",
  "turma": "XX.XX",
  "link": "https://docs.google.com/forms/..."
}
```

### Customizando Cores

As cores podem ser alteradas no arquivo `src/App.css` através das variáveis CSS customizadas.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Desenvolvedor** - *Desenvolvimento inicial* - [Seu GitHub](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Escola Estadual Frederico José Pedreira Neto
- Professores e coordenação pedagógica
- Comunidade React e open source

---

<div align="center">
  <p>Feito com ❤️ para a educação pública brasileira</p>
  <p>
    <a href="#top">Voltar ao topo</a>
  </p>
</div>

