/* ============================================================
   GAMAA BURGUER – CONFIGURAÇÃO DA NUVEM (FIREBASE)
   ============================================================
   Este arquivo conecta o site ao servidor gratuito do Firebase Realtime Database.
   
   VANTAGENS PARA VOCÊ VENDER O SITE:
   1. Hospedagem 100% gratuita para você e seus clientes (Vercel, Netlify, GitHub Pages).
   2. Qualquer alteração feita no painel admin salva AUTOMATICAMENTE no servidor.
   3. Todos os celulares e computadores atualizam em tempo real.
   4. Você pode usar uma única conta Firebase para vários clientes diferentes,
      bastando alterar o "restaurantId" abaixo para cada restaurante!
   ============================================================ */

const DEFAULT_FIREBASE_CONFIG = {
  // Substitua pelos dados do seu projeto Firebase (ou configure direto na aba "Nuvem" do Admin)
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  
  // Identificador deste restaurante (ex: "gamaa-burguer", "pizzaria-roma", etc.)
  // Assim você pode usar o mesmo banco para múltiplos clientes!
  restaurantId: "restaurante_modelo"
};

