/**
 * Vector Icon Sets & Themes for Tilezy
 * 5 Rich Themes:
 * 1. 🍬 Buah & Manisan (Fruits & Sweets)
 * 2. 🐾 Hewan Lucu (Cute Animals)
 * 3. 🍔 Makanan Lezat (Fast Food & Snacks)
 * 4. 🌸 Bunga & Alam (Flowers & Nature)
 * 5. 🚀 Luar Angkasa (Cosmic & Magic)
 */

const THEMES = {
  fruits: {
    id: 'fruits',
    name: 'Buah & Manisan',
    badge: '🍬',
    icons: [
      // 1. Blueberries
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M42 22C46 16 52 18 54 22C52 26 46 26 42 22Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <path d="M22 22C18 16 12 18 10 22C12 26 18 26 22 22Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="24" cy="38" r="14" fill="#6B7FD7" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="40" cy="38" r="14" fill="#5869BD" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="28" r="13" fill="#8093F1" stroke="currentColor" stroke-width="2.5"/>
        <polygon points="32,24 33.5,27 36,27 34,29 35,32 32,30 29,32 30,29 28,27 30.5,27" fill="currentColor"/>
      </svg>`,

      // 2. Peppermint Candy
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="12,24 22,32 12,40 8,32" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <polygon points="52,24 42,32 52,40 56,32" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="32" r="16" fill="#FFFFFF" stroke="currentColor" stroke-width="3"/>
        <path d="M32 32 L32 16 A16 16 0 0 1 43 21 Z" fill="#FF8B7B"/>
        <path d="M32 32 L48 32 A16 16 0 0 1 43 43 Z" fill="#FF8B7B"/>
        <path d="M32 32 L32 48 A16 16 0 0 1 21 43 Z" fill="#FF8B7B"/>
        <path d="M32 32 L16 32 A16 16 0 0 1 21 21 Z" fill="#FF8B7B"/>
        <circle cx="32" cy="32" r="3" fill="#FFFFFF"/>
      </svg>`,

      // 3. Carrot
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 20C32 12 28 8 26 12M32 20C32 10 32 6 32 10M32 20C32 12 36 8 38 12" stroke="#9CD9C8" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M22 20C22 18 42 18 42 20C42 32 34 52 32 56C30 52 22 32 22 20Z" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="26" y1="26" x2="33" y2="26" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <line x1="31" y1="34" x2="38" y2="34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,

      // 4. Strawberry
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 54C21 46 14 36 16 26C17 19 25 19 32 23C39 19 47 19 48 26C50 36 43 46 32 54Z" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M32 21C28 15 22 16 20 19M32 21C36 15 42 16 44 19M32 21V13" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
        <circle cx="24" cy="28" r="1.5" fill="#FFD66B"/>
        <circle cx="32" cy="30" r="1.5" fill="#FFD66B"/>
        <circle cx="40" cy="28" r="1.5" fill="#FFD66B"/>
        <circle cx="28" cy="40" r="1.5" fill="#FFD66B"/>
        <circle cx="36" cy="40" r="1.5" fill="#FFD66B"/>
      </svg>`,

      // 5. Watermelon Slice
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M12 24C12 44 23 54 32 54C41 54 52 44 52 24H12Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <path d="M14 25C14 42 24 50 32 50C40 50 50 42 50 25H14Z" fill="#FFFFFF"/>
        <path d="M17 25C17 39 25 46 32 46C39 46 47 39 47 25H17Z" fill="#FF8B7B"/>
        <ellipse cx="25" cy="31" rx="1.5" ry="2.5" fill="currentColor"/>
        <ellipse cx="32" cy="33" rx="1.5" ry="2.5" fill="currentColor"/>
        <ellipse cx="39" cy="31" rx="1.5" ry="2.5" fill="currentColor"/>
      </svg>`,

      // 6. Banana
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M46 14C35 16 16 30 16 46C28 48 43 38 48 24C50 18 48 14 46 14Z" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M46 14L49 11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

      // 7. Cherry
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="23" cy="42" r="11" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="41" cy="38" r="10" fill="#E67262" stroke="currentColor" stroke-width="2.5"/>
        <path d="M23 31C25 20 33 13 40 14" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
        <path d="M41 28C39 20 37 15 40 14" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

      // 8. Avocado
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 12C24 12 18 22 18 36C18 48 24 54 32 54C40 54 46 48 46 36C46 22 40 12 32 12Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <path d="M32 16C26 16 22 23 22 36C22 46 26 51 32 51C38 51 42 46 42 36C42 23 38 16 32 16Z" fill="#D4F2E9"/>
        <circle cx="32" cy="39" r="8" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 9. Donut
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="34" rx="20" ry="18" fill="#F4D3A1" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="32" cy="33" rx="18" ry="16" fill="#B9ACF5"/>
        <ellipse cx="32" cy="34" rx="6.5" ry="5.5" fill="#FFF8EF" stroke="currentColor" stroke-width="2.5"/>
        <line x1="23" y1="25" x2="27" y2="23" stroke="#FFD66B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="37" y1="23" x2="41" y2="26" stroke="#9CD9C8" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 10. Ice Cream Cone
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="32,56 22,34 42,34" fill="#F4D3A1" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="26" r="11" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="26" cy="29" r="4.5" fill="#FF8B7B"/>
        <circle cx="38" cy="29" r="4.5" fill="#FF8B7B"/>
        <circle cx="32" cy="14" r="4" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 11. Lemon
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M16 20C12 28 16 42 26 48C36 54 48 46 52 36C56 26 46 14 36 12C26 10 20 14 16 20Z" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M46 18C50 14 54 16 52 20" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

      // 12. Grapes
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 14V20M32 14C36 12 39 15 37 18" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
        <circle cx="26" cy="24" r="6" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <circle cx="38" cy="24" r="6" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <circle cx="21" cy="32" r="6" fill="#9F8FE0" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="6" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <circle cx="43" cy="32" r="6" fill="#9F8FE0" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="44" r="6" fill="#7E6FC4" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 13. Apple
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 20C24 13 15 19 15 32C15 45 25 52 32 52C39 52 49 45 49 32C49 19 40 13 32 20Z" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M32 20V12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M32 14C37 12 41 15 39 18C36 19 33 17 32 14Z" fill="#9CD9C8" stroke="currentColor" stroke-width="1.8"/>
      </svg>`,

      // 14. Peach
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 22C24 15 15 22 17 36C19 46 27 52 32 52C37 52 45 46 47 36C49 22 40 15 32 22Z" fill="#FFB3A8" stroke="currentColor" stroke-width="2.5"/>
        <path d="M32 22V13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 15. Cupcake
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="20,38 24,54 40,54 44,38" fill="#F4D3A1" stroke="currentColor" stroke-width="2"/>
        <path d="M18 38C18 28 26 24 32 24C38 24 46 28 46 38Z" fill="#B9ACF5" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="22" r="4" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 16. Pineapple
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="38" rx="13" ry="16" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="23" y1="28" x2="41" y2="48" stroke="currentColor" stroke-width="1.5"/>
        <line x1="41" y1="28" x2="23" y2="48" stroke="currentColor" stroke-width="1.5"/>
        <path d="M32 24L26 14L32 17L38 14L32 24Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
      </svg>`
    ]
  },

  animals: {
    id: 'animals',
    name: 'Hewan Lucu',
    badge: '🐾',
    icons: [
      // 1. Dog
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="34" rx="20" ry="18" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M14 22C10 28 11 38 16 40C18 38 18 32 17 25Z" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <path d="M50 22C54 28 53 38 48 40C46 38 46 32 47 25Z" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="32" cy="39" rx="10" ry="7" fill="#FFFFFF"/>
        <ellipse cx="32" cy="35" rx="3.5" ry="2.5" fill="currentColor"/>
        <circle cx="24" cy="29" r="3" fill="currentColor"/>
        <circle cx="40" cy="29" r="3" fill="currentColor"/>
      </svg>`,

      // 2. Cat
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="16,18 24,26 14,30" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <polygon points="48,18 40,26 50,30" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="35" r="18" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <polygon points="32,38 29,35 35,35" fill="#FF8B7B"/>
        <circle cx="24" cy="32" r="3" fill="#9CD9C8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="40" cy="32" r="3" fill="#9CD9C8" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,

      // 3. Panda
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="16" cy="20" r="7.5" fill="currentColor"/>
        <circle cx="48" cy="20" r="7.5" fill="currentColor"/>
        <circle cx="32" cy="36" r="18" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="24" cy="33" rx="5" ry="4" transform="rotate(-15 24 33)" fill="currentColor"/>
        <ellipse cx="40" cy="33" rx="5" ry="4" transform="rotate(15 40 33)" fill="currentColor"/>
        <circle cx="24" cy="32" r="1.8" fill="#FFFFFF"/>
        <circle cx="40" cy="32" r="1.8" fill="#FFFFFF"/>
        <ellipse cx="32" cy="40" rx="3.5" ry="2.5" fill="currentColor"/>
      </svg>`,

      // 4. Frog
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="20" cy="22" r="8.5" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="44" cy="22" r="8.5" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="20" cy="21" r="5.5" fill="#FFFFFF"/>
        <circle cx="44" cy="21" r="5.5" fill="#FFFFFF"/>
        <circle cx="20" cy="21" r="3" fill="currentColor"/>
        <circle cx="44" cy="21" r="3" fill="currentColor"/>
        <ellipse cx="32" cy="38" rx="20" ry="15" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <path d="M25 38C28 42 36 42 39 38" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`,

      // 5. Bear
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="16" cy="20" r="7" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <circle cx="48" cy="20" r="7" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="36" r="18" fill="#C4927F" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="32" cy="41" rx="10" ry="7" fill="#FFF8EF"/>
        <ellipse cx="32" cy="37" rx="4" ry="2.8" fill="currentColor"/>
        <circle cx="23" cy="31" r="2.8" fill="currentColor"/>
        <circle cx="41" cy="31" r="2.8" fill="currentColor"/>
      </svg>`,

      // 6. Bunny
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="22" cy="18" rx="5.5" ry="12" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="22" cy="18" rx="3" ry="9" fill="#FFB3A8"/>
        <ellipse cx="42" cy="18" rx="5.5" ry="12" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="42" cy="18" rx="3" ry="9" fill="#FFB3A8"/>
        <circle cx="32" cy="38" r="17" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="24" cy="36" r="2.8" fill="currentColor"/>
        <circle cx="40" cy="36" r="2.8" fill="currentColor"/>
        <polygon points="32,41 29,39 35,39" fill="#FF8B7B"/>
      </svg>`,

      // 7. Pig
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="14,24 20,18 22,26" fill="#FFB3A8" stroke="currentColor" stroke-width="2"/>
        <polygon points="50,24 44,18 42,26" fill="#FFB3A8" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="36" r="18" fill="#FFB3A8" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="32" cy="40" rx="8" ry="5.5" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <circle cx="29" cy="40" r="1.5" fill="currentColor"/>
        <circle cx="35" cy="40" r="1.5" fill="currentColor"/>
        <circle cx="23" cy="32" r="2.8" fill="currentColor"/>
        <circle cx="41" cy="32" r="2.8" fill="currentColor"/>
      </svg>`,

      // 8. Chick
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="35" r="18" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="23" cy="31" r="2.8" fill="currentColor"/>
        <circle cx="41" cy="31" r="2.8" fill="currentColor"/>
        <polygon points="32,34 27,39 37,39" fill="#FF8B7B" stroke="currentColor" stroke-width="1.8"/>
      </svg>`,

      // 9. Koala
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="14" cy="26" r="8" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="26" r="8" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="37" r="17" fill="#E5E0FA" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="23" cy="32" r="2.8" fill="currentColor"/>
        <circle cx="41" cy="32" r="2.8" fill="currentColor"/>
        <ellipse cx="32" cy="39" rx="4" ry="6" fill="currentColor"/>
      </svg>`,

      // 10. Penguin
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="36" rx="18" ry="19" fill="currentColor"/>
        <ellipse cx="32" cy="38" rx="12" ry="14" fill="#FFFFFF"/>
        <circle cx="25" cy="30" r="2.8" fill="currentColor"/>
        <circle cx="39" cy="30" r="2.8" fill="currentColor"/>
        <polygon points="32,33 28,37 36,37" fill="#FFD66B"/>
      </svg>`,

      // 11. Monkey
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="14" cy="34" r="6.5" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <circle cx="50" cy="34" r="6.5" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="35" r="17" fill="#B3806D" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="26" cy="30" rx="7" ry="6" fill="#FFF8EF"/>
        <ellipse cx="38" cy="30" rx="7" ry="6" fill="#FFF8EF"/>
        <circle cx="26" cy="30" r="2.5" fill="currentColor"/>
        <circle cx="38" cy="30" r="2.5" fill="currentColor"/>
        <ellipse cx="32" cy="41" rx="11" ry="7" fill="#FFF8EF"/>
      </svg>`,

      // 12. Owl
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="36" rx="18" ry="19" fill="#C4927F" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="23" cy="31" r="7" fill="#FFF8EF" stroke="currentColor" stroke-width="2"/>
        <circle cx="41" cy="31" r="7" fill="#FFF8EF" stroke="currentColor" stroke-width="2"/>
        <circle cx="23" cy="31" r="2" fill="currentColor"/>
        <circle cx="41" cy="31" r="2" fill="currentColor"/>
        <polygon points="32,35 29,40 35,40" fill="#FFA96B"/>
      </svg>`,

      // 13. Sheep
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="20" cy="28" r="8" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="22" r="9" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <circle cx="44" cy="28" r="8" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="38" r="10" fill="#FFB3A8" stroke="currentColor" stroke-width="2"/>
        <circle cx="28" cy="36" r="2" fill="currentColor"/>
        <circle cx="36" cy="36" r="2" fill="currentColor"/>
      </svg>`,

      // 14. Turtle
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="36" rx="17" ry="15" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="19" r="6.5" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="30" cy="18" r="1.8" fill="currentColor"/>
        <circle cx="34" cy="18" r="1.8" fill="currentColor"/>
      </svg>`,

      // 15. Bee
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="38" rx="16" ry="14" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="16" y1="36" x2="48" y2="36" stroke="currentColor" stroke-width="3"/>
        <line x1="18" y1="42" x2="46" y2="42" stroke="currentColor" stroke-width="3"/>
        <circle cx="25" cy="31" r="2.5" fill="currentColor"/>
        <circle cx="39" cy="31" r="2.5" fill="currentColor"/>
      </svg>`,

      // 16. Lion
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="35" r="20" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="35" r="14" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <circle cx="26" cy="31" r="2.2" fill="currentColor"/>
        <circle cx="38" cy="31" r="2.2" fill="currentColor"/>
      </svg>`
    ]
  },

  food: {
    id: 'food',
    name: 'Makanan Lezat',
    badge: '🍔',
    icons: [
      // 1. Burger
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M14 26C14 18 22 14 32 14C42 14 50 18 50 26H14Z" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <rect x="12" y="28" width="40" height="5" rx="2.5" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <polygon points="12,35 52,35 48,40 16,40" fill="#FFD66B"/>
        <rect x="12" y="40" width="40" height="6" rx="3" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <rect x="14" y="48" width="36" height="5" rx="2.5" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 2. Pizza Slice
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 54L12 20C24 14 40 14 52 20L32 54Z" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M12 20C24 14 40 14 52 20" stroke="#FFA96B" stroke-width="5" stroke-linecap="round"/>
        <circle cx="28" cy="28" r="3.5" fill="#FF8B7B"/>
        <circle cx="36" cy="35" r="3" fill="#FF8B7B"/>
      </svg>`,

      // 3. French Fries
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="16,30 22,54 42,54 48,30" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <rect x="22" y="16" width="4" height="18" rx="2" fill="#FFD66B" stroke="currentColor" stroke-width="1.5"/>
        <rect x="28" y="12" width="4" height="22" rx="2" fill="#FFD66B" stroke="currentColor" stroke-width="1.5"/>
        <rect x="34" y="14" width="4" height="20" rx="2" fill="#FFD66B" stroke="currentColor" stroke-width="1.5"/>
        <rect x="40" y="18" width="4" height="16" rx="2" fill="#FFD66B" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,

      // 4. Boba Milk Tea
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="20,22 24,54 40,54 44,22" fill="#F4D3A1" stroke="currentColor" stroke-width="2.5"/>
        <line x1="16" y1="22" x2="48" y2="22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <rect x="30" y="10" width="4" height="14" fill="#B9ACF5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="28" cy="46" r="2.5" fill="currentColor"/>
        <circle cx="36" cy="46" r="2.5" fill="currentColor"/>
        <circle cx="32" cy="40" r="2.5" fill="currentColor"/>
      </svg>`,

      // 5. Popcorn
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="20,28 24,54 40,54 44,28" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="28" y1="28" x2="29" y2="54" stroke="#FFFFFF" stroke-width="2"/>
        <line x1="36" y1="28" x2="35" y2="54" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="26" cy="22" r="6" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <circle cx="38" cy="22" r="6" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="16" r="6" fill="#FFF8EF" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 6. Taco
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M12 40C12 24 22 18 32 18C42 18 52 24 52 40H12Z" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="24" cy="34" r="3" fill="#FF8B7B"/>
        <circle cx="40" cy="34" r="3" fill="#9CD9C8"/>
      </svg>`,

      // 7. Sushi Roll
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="34" rx="18" ry="16" fill="currentColor"/>
        <ellipse cx="32" cy="34" rx="13" ry="11" fill="#FFFFFF"/>
        <circle cx="32" cy="34" r="5" fill="#FF8B7B"/>
        <circle cx="29" cy="32" r="2" fill="#9CD9C8"/>
      </svg>`,

      // 8. Croissant
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M14 42C12 36 18 24 32 24C46 24 52 36 50 42C44 40 38 36 32 36C26 36 20 40 14 42Z" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="32" cy="30" rx="6" ry="7" fill="#FFD66B"/>
      </svg>`,

      // 9. Hotdog
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="12" y="24" width="40" height="16" rx="8" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <rect x="8" y="29" width="48" height="6" rx="3" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <path d="M16 32C20 29 24 35 28 32C32 29 36 35 40 32C44 29 48 35 48 32" stroke="#FFD66B" stroke-width="2" stroke-linecap="round"/>
      </svg>`,

      // 10. Coffee Cup
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="18" y="24" width="28" height="24" rx="5" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <path d="M46 30C52 30 52 40 46 40" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="18" y="32" width="28" height="8" fill="#B3806D"/>
      </svg>`,

      // 11. Ramen Bowl
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M14 28C14 44 22 50 32 50C42 50 50 44 50 28H14Z" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="12" y1="28" x2="52" y2="28" stroke="currentColor" stroke-width="3"/>
        <circle cx="28" cy="24" r="5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="28" cy="24" r="2.5" fill="#FFD66B"/>
      </svg>`,

      // 12. Fried Chicken
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="36" cy="30" rx="16" ry="12" transform="rotate(-30 36 30)" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <rect x="18" y="42" width="6" height="12" rx="3" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 13. Pancake Stack
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="46" rx="20" ry="6" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="32" cy="38" rx="19" ry="6" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="32" cy="30" rx="18" ry="6" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <rect x="28" y="22" width="8" height="6" rx="2" fill="#FFD66B" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,

      // 14. Cookie
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="34" r="18" fill="#F4D3A1" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="26" cy="28" r="2.5" fill="currentColor"/>
        <circle cx="38" cy="30" r="2.5" fill="currentColor"/>
        <circle cx="30" cy="40" r="2.5" fill="currentColor"/>
        <circle cx="40" cy="42" r="2" fill="currentColor"/>
      </svg>`,

      // 15. Sandwich
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="14,46 50,46 50,18" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <polygon points="18,44 48,44 48,24" fill="#9CD9C8"/>
        <polygon points="22,42 46,42 46,28" fill="#FF8B7B"/>
      </svg>`,

      // 16. Chocolate Bar
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="16" y="16" width="32" height="34" rx="4" fill="#B3806D" stroke="currentColor" stroke-width="2.5"/>
        <rect x="16" y="32" width="32" height="18" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <line x1="32" y1="16" x2="32" y2="32" stroke="currentColor" stroke-width="2"/>
      </svg>`
    ]
  },

  nature: {
    id: 'nature',
    name: 'Bunga & Alam',
    badge: '🌸',
    icons: [
      // 1. Sunflower
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="10" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="4" fill="#FFA96B"/>
      </svg>`,

      // 2. Tulip
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 36V54" stroke="#9CD9C8" stroke-width="3" stroke-linecap="round"/>
        <path d="M22 22C20 34 32 38 32 38C32 38 44 34 42 22C38 28 34 24 32 20C30 24 26 28 22 22Z" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,

      // 3. Daisy
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="22" r="6" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="32" cy="42" r="6" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="22" cy="32" r="6" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="42" cy="32" r="6" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="32" cy="32" r="7" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 4. Cactus
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="28" y="16" width="8" height="34" rx="4" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <path d="M28 28H20V36H28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M36 24H44V32H36" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="22" y="48" width="20" height="8" rx="2" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 5. Mushroom
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M16 34C16 20 23 16 32 16C41 16 48 20 48 34H16Z" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <rect x="27" y="34" width="10" height="18" rx="4" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
        <circle cx="26" cy="24" r="2.5" fill="#FFFFFF"/>
        <circle cx="38" cy="26" r="2.5" fill="#FFFFFF"/>
      </svg>`,

      // 6. Clover
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="26" cy="24" r="7" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="38" cy="24" r="7" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="26" cy="36" r="7" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <circle cx="38" cy="36" r="7" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <path d="M32 36C32 44 34 52 36 54" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 7. Cherry Blossom
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="18" r="6" fill="#FFB3A8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="44" cy="26" r="6" fill="#FFB3A8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="6" fill="#FFB3A8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="24" cy="40" r="6" fill="#FFB3A8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="20" cy="26" r="6" fill="#FFB3A8" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="32" cy="30" r="5" fill="#FF8B7B"/>
      </svg>`,

      // 8. Monstera Leaf
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 14C20 18 16 32 20 44C24 48 32 52 32 52C32 52 40 48 44 44C48 32 44 18 32 14Z" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <line x1="32" y1="16" x2="32" y2="52" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 9. Lotus
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="34" rx="8" ry="16" fill="#FFB3A8" stroke="currentColor" stroke-width="2"/>
        <path d="M32 48C20 46 16 34 22 24C26 34 32 48 32 48Z" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
        <path d="M32 48C44 46 48 34 42 24C38 34 32 48 32 48Z" fill="#B9ACF5" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 10. Rose
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="16" fill="#FF8B7B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="32" r="9" fill="#E67262" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="4" fill="#FFFFFF"/>
      </svg>`,

      // 11. Tree Sprout
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 28V52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <path d="M32 28C24 24 20 32 32 38" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <path d="M32 34C40 30 44 38 32 44" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 12. Maple Leaf
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="32,16 36,26 44,22 42,32 50,34 42,42 32,38 22,42 14,34 22,32 20,22 28,26" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <line x1="32" y1="38" x2="32" y2="52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 13. Bamboo
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="28" y="14" width="8" height="38" rx="2" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <line x1="26" y1="26" x2="38" y2="26" stroke="currentColor" stroke-width="2.5"/>
        <line x1="26" y1="40" x2="38" y2="40" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,

      // 14. Hibiscus
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="16" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="32" r="6" fill="#FFD66B"/>
        <line x1="32" y1="32" x2="42" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,

      // 15. Acorn
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M22 28C22 42 32 50 32 50C32 50 42 42 42 28H22Z" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <rect x="20" y="20" width="24" height="10" rx="4" fill="#B3806D" stroke="currentColor" stroke-width="2"/>
        <line x1="32" y1="20" x2="32" y2="14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 16. Lavender Sprig
      `<svg viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="16" x2="32" y2="52" stroke="#9CD9C8" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="28" cy="22" r="4" fill="#B9ACF5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="36" cy="24" r="4" fill="#B9ACF5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="28" cy="32" r="4" fill="#B9ACF5" stroke="currentColor" stroke-width="1.5"/>
        <circle cx="36" cy="34" r="4" fill="#B9ACF5" stroke="currentColor" stroke-width="1.5"/>
      </svg>`
    ]
  },

  space: {
    id: 'space',
    name: 'Luar Angkasa',
    badge: '🚀',
    icons: [
      // 1. Rocket
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M32 14C24 22 22 34 22 40H42C42 34 40 22 32 14Z" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="28" r="4" fill="#6B7FD7"/>
        <polygon points="22,34 14,44 22,42" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <polygon points="42,34 50,44 42,42" fill="#FF8B7B" stroke="currentColor" stroke-width="2"/>
        <polygon points="28,40 32,50 36,40" fill="#FFD66B"/>
      </svg>`,

      // 2. Saturn Planet
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="14" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="32" cy="32" rx="24" ry="7" transform="rotate(-20 32 32)" stroke="#FFD66B" stroke-width="3.5"/>
      </svg>`,

      // 3. Star
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="32,12 37,24 50,26 40,36 43,49 32,42 21,49 24,36 14,26 27,24" fill="#FFD66B" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>`,

      // 4. Moon Crescent
      `<svg viewBox="0 0 64 64" fill="none">
        <path d="M40 16C26 16 18 26 18 36C18 46 26 50 38 48C28 44 26 34 32 24C36 18 40 16 40 16Z" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,

      // 5. Astronaut Helmet
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="18" fill="#FFFFFF" stroke="currentColor" stroke-width="2.5"/>
        <rect x="22" y="24" width="20" height="14" rx="7" fill="#6B7FD7" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 6. UFO Saucer
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="28" rx="10" ry="8" fill="#9CD9C8" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="32" cy="36" rx="22" ry="7" fill="#B9ACF5" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,

      // 7. Crystal Gem
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="20,20 44,20 52,30 32,52 12,30" fill="#6B7FD7" stroke="currentColor" stroke-width="2.5"/>
        <polygon points="20,20 44,20 38,30 26,30" fill="#8093F1"/>
      </svg>`,

      // 8. Magic Potion
      `<svg viewBox="0 0 64 64" fill="none">
        <rect x="28" y="16" width="8" height="8" rx="2" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="38" r="14" fill="#B9ACF5" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="38" r="4" fill="#FFFFFF" opacity="0.6"/>
      </svg>`,

      // 9. Royal Crown
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="14,44 18,22 26,32 32,18 38,32 46,22 50,44" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="18" cy="22" r="2.5" fill="#FF8B7B"/>
        <circle cx="32" cy="18" r="2.5" fill="#FF8B7B"/>
        <circle cx="46" cy="22" r="2.5" fill="#FF8B7B"/>
      </svg>`,

      // 10. Magic Wand
      `<svg viewBox="0 0 64 64" fill="none">
        <line x1="16" y1="48" x2="42" y2="22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <polygon points="44,14 46,20 52,22 46,24 44,30 42,24 36,22 42,20" fill="#FFD66B"/>
      </svg>`,

      // 11. Comet
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="22" cy="42" r="10" fill="#FFA96B" stroke="currentColor" stroke-width="2"/>
        <path d="M28 34L50 16M22 32L46 12M32 42L52 24" stroke="#FFD66B" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,

      // 12. Alien Face
      `<svg viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="34" rx="16" ry="18" fill="#9CD9C8" stroke="currentColor" stroke-width="2.5"/>
        <ellipse cx="26" cy="32" rx="4" ry="6" transform="rotate(-15 26 32)" fill="currentColor"/>
        <ellipse cx="38" cy="32" rx="4" ry="6" transform="rotate(15 38 32)" fill="currentColor"/>
      </svg>`,

      // 13. Sun
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="12" fill="#FFA96B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="32" y1="12" x2="32" y2="16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="32" y1="48" x2="32" y2="52" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="12" y1="32" x2="16" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="48" y1="32" x2="52" y2="32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>`,

      // 14. Sparkles
      `<svg viewBox="0 0 64 64" fill="none">
        <polygon points="32,16 35,28 46,32 35,36 32,48 29,36 18,32 29,28" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
      </svg>`,

      // 15. Golden Key
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="28" r="8" fill="#FFD66B" stroke="currentColor" stroke-width="2"/>
        <line x1="32" y1="28" x2="48" y2="28" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        <line x1="42" y1="28" x2="42" y2="34" stroke="currentColor" stroke-width="2.5"/>
        <line x1="48" y1="28" x2="48" y2="34" stroke="currentColor" stroke-width="2.5"/>
      </svg>`,

      // 16. Golden Coin
      `<svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="16" fill="#FFD66B" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="32" cy="32" r="11" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="32" y="38" font-size="16" font-weight="900" text-anchor="middle" fill="currentColor">★</text>
      </svg>`
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { THEMES };
}
