export interface CardDeck {
    name: string;
    types: string[];
}


export interface Card {
    cardId: string;
    cardSet: string;
    img: string;
    imgGold: string;
    name: string;

    cost: number;
    type: string;

    dbfId: string;
    faction: string;
    locale: string;
    playerClass: string;
    text: string;
}
