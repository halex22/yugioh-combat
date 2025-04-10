export interface Card {
  id: number
  name: string
  type: string
  atk?: number
  def?: number
  humanReadableCardType: string
  frameType: string
  desc: string
  race: string
  archetype: string
  ygoprodeck_url: string
  card_sets: CardSet[]
  card_images: CardImage[]
  card_prices: CardPrice[]
}

export interface CardSet {
  set_name: string
  set_code: string
  set_rarity: string
  set_rarity_code: string
  set_price: string
}

export interface CardImage {
  id: number
  image_url: string
  image_url_small: string
  image_url_cropped: string
}

export interface CardPrice {
  cardmarket_price: string
  tcgplayer_price: string
  ebay_price: string
  amazon_price: string
  coolstuffinc_price: string
}
