# 🌦️ Weather API - Node.js + TypeScript

API REST em Node.js com TypeScript que retorna informações climáticas em tempo real utilizando a API gratuita da [Visual Crossing Weather](https://www.visualcrossing.com/). A aplicação implementa cache com Redis para otimizar requisições e suporta variáveis de ambiente.

---

## 🚀 Funcionalidades

- 🔍 Busca por cidade com dados atuais de temperatura, condição do tempo e umidade.
- ⚡ Cache inteligente com Redis (TTL configurável).
- 📦 Variáveis de ambiente para separar configurações.
- 🧪 Testes automatizados com Jest.
- 🔒 Tratamento global de erros.

---

## 📁 Estrutura do Projeto

```
weather-api/
├── src/
│   ├── config/             # Configurações de Redis
│   ├── controllers/        # Controladores da API
│   ├── middlewares/        # Middleware de tratamento de erros
│   ├── routes/             # Rotas Express
│   ├── services/           # Lógica de consumo de API externa + cache
│   ├── __tests__/          # Testes unitários com Jest
│   └── server.ts           # Ponto de entrada da aplicação
├── .env                    # Variáveis de ambiente
├── package.json
├── tsconfig.json
└── jest.config.ts
```

---

## ⚙️ Variáveis de Ambiente (`.env`)

```env
PORT=3000
WEATHER_API_KEY=SUA_CHAVE_DA_API
WEATHER_API_BASE_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
REDIS_HOST=localhost
REDIS_PORT=6379
CACHE_TTL=43200
```

---

## 🛠️ Instalação e Execução Local

1. **Clone o projeto**:

```bash
git clone https://github.com/seu-usuario/weather-api.git
cd weather-api
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Crie um `.env` com suas configurações** (veja exemplo acima).

4. **Inicie o Redis (requerido)**:

```bash
docker run -p 6379:6379 redis
```

5. **Inicie a API em modo dev**:

```bash
npm run dev
```

---

## 🧪 Executar os Testes

```bash
npm test
```

---

## 📬 Exemplo de Requisição

```
GET /weather/Sao Paulo
```

**Resposta:**

```json
{
  "cidade": "Sao Paulo",
  "temperatura": 24.3,
  "descricao": "Clear",
  "umidade": 55
}
```

---
