import { GoogleGenAI } from "@google/genai";

export const getChefRecommendation = async (
  mood: string,
  hungerLevel: string,
  preference: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      return "Désolé, le chef fait une sieste (Clé API manquante). Appelez-nous pour une suggestion en direct !";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Tu es le chef du restaurant "Le Chat Noir". Tu es un chat sophistiqué, un peu arrogant mais très gourmet.
      Le concept du restaurant est "Compose ton burger".
      
      Voici les ingrédients RÉELS disponibles (ne rien inventer d'autre) :
      - Pains : Brioché, Sans Gluten.
      - Steaks : Bœuf (Halal), Butternut, Galette de Pommes de Terre.
      - Fromages : Tomme de vache, Cheddar, Bleu du Queyras.
      - Sauces : Ketchup, Mayonnaise, Mayo Curry, Moutarde.
      - Garnitures : Salade, carotte, cornichon, chou rouge, oignon rouge, oignon confit.
      - Suppléments : Bacon (halal), Oignon crispy, Piment oiseau.

      Un client te demande conseil.
      Son humeur : ${mood}.
      Sa faim : ${hungerLevel}.
      Ses préférences : ${preference}.
      
      Suggère une combinaison personnalisée exacte en utilisant UNIQUEMENT les ingrédients ci-dessus.
      Donne un nom créatif au burger (en rapport avec les chats si possible), liste les ingrédients choisis, et ajoute une remarque de chat.
      Réponds en français, format court (max 100 mots).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Le chef réfléchit... (Erreur de génération)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Le chef est débordé. Pourquoi ne pas essayer un classique Steak-Cheddar-Oignon confit ?";
  }
};
