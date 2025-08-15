# 🚀 Guia de Configuração do GitHub

Este guia te ajudará a colocar o projeto no GitHub e configurar o deploy automático.

## 📋 Pré-requisitos

- Conta no GitHub ([criar conta](https://github.com/join))
- Git instalado no seu computador ([baixar Git](https://git-scm.com/))

## 🔧 Passo a Passo

### 1️⃣ Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** → **"New repository"**
3. Configure o repositório:
   - **Repository name:** `disciplinas-eletivas`
   - **Description:** `Sistema de inscrição em disciplinas eletivas - EEFPN`
   - **Visibility:** Public ✅
   - **Initialize:** ❌ NÃO marque nenhuma opção (README, .gitignore, license)
4. Clique em **"Create repository"**

### 2️⃣ Fazer Upload dos Arquivos

**Opção A: Via Interface Web (Mais Fácil)**

1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos do projeto para a área de upload
3. Escreva uma mensagem de commit: `Initial commit - Site de disciplinas eletivas`
4. Clique em **"Commit changes"**

**Opção B: Via Git (Linha de Comando)**

```bash
# 1. Clone o repositório vazio
git clone https://github.com/SEU-USUARIO/disciplinas-eletivas.git
cd disciplinas-eletivas

# 2. Copie todos os arquivos do projeto para esta pasta

# 3. Adicione os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Initial commit - Site de disciplinas eletivas"

# 5. Envie para o GitHub
git push origin main
```

### 3️⃣ Configurar GitHub Pages

1. No seu repositório, vá em **Settings** (aba superior)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Source:** `GitHub Actions`
4. Clique em **Save**

### 4️⃣ Ativar Deploy Automático

O deploy automático já está configurado! Quando você fizer push para a branch `main`:

1. O GitHub Actions irá automaticamente:
   - ✅ Instalar dependências
   - ✅ Executar o build
   - ✅ Fazer deploy no GitHub Pages

2. Você pode acompanhar o progresso em:
   - **Actions** (aba superior do repositório)

### 5️⃣ Acessar o Site

Após o primeiro deploy (2-5 minutos), seu site estará disponível em:

```
https://SEU-USUARIO.github.io/disciplinas-eletivas/
```

## 🔄 Atualizações Futuras

Para atualizar o site:

1. **Via Interface Web:**
   - Edite arquivos diretamente no GitHub
   - Ou faça upload de novos arquivos

2. **Via Git:**
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   git push origin main
   ```

3. **Deploy Automático:**
   - O site será atualizado automaticamente em 2-5 minutos

## 📊 Monitoramento

### Verificar Status do Deploy

1. Vá em **Actions** no seu repositório
2. Veja o status dos workflows:
   - ✅ Verde = Deploy bem-sucedido
   - ❌ Vermelho = Erro no deploy
   - 🟡 Amarelo = Em andamento

### Logs de Deploy

- Clique em qualquer workflow para ver logs detalhados
- Útil para debugar problemas

## 🛠️ Configurações Avançadas

### Domínio Personalizado

1. Em **Settings** → **Pages**
2. Em **Custom domain**, digite seu domínio
3. Configure DNS do seu domínio para apontar para GitHub Pages

### Configurações de Segurança

1. Em **Settings** → **Security**
2. Configure **Dependabot alerts** ✅
3. Configure **Code scanning** ✅

## 🆘 Solução de Problemas

### Deploy Falhou

1. Vá em **Actions** e clique no workflow falhado
2. Veja os logs de erro
3. Problemas comuns:
   - Erro de build: Verifique sintaxe do código
   - Erro de dependências: Verifique package.json

### Site Não Carrega

1. Verifique se o deploy foi bem-sucedido
2. Aguarde alguns minutos (cache do GitHub)
3. Teste em modo anônimo/incógnito

### Mudanças Não Aparecem

1. Verifique se o commit foi feito na branch `main`
2. Aguarde o deploy automático terminar
3. Limpe o cache do navegador (Ctrl+F5)

## 📞 Suporte

- **GitHub Docs:** [docs.github.com](https://docs.github.com)
- **GitHub Support:** [support.github.com](https://support.github.com)
- **Issues do Projeto:** Use a aba Issues do repositório

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Arquivos enviados
- [ ] GitHub Pages configurado
- [ ] Primeiro deploy executado
- [ ] Site acessível online
- [ ] README.md atualizado com URL do site

**🎉 Parabéns! Seu site está online!**

