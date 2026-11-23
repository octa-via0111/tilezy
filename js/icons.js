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
      // 1. Domba Hijau Lucu (Green Fluffy Sheep)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Fluffy Wool Afro -->
        <circle cx="20" cy="22" r="11" fill="#8FD347"/>
        <circle cx="32" cy="15" r="12" fill="#9CE250"/>
        <circle cx="44" cy="22" r="11" fill="#8FD347"/>
        <circle cx="15" cy="34" r="10" fill="#83C93D"/>
        <circle cx="49" cy="34" r="10" fill="#83C93D"/>
        <circle cx="22" cy="46" r="10" fill="#75BA30"/>
        <circle cx="34" cy="48" r="10" fill="#75BA30"/>
        <circle cx="42" cy="46" r="10" fill="#75BA30"/>
        <!-- Ears -->
        <ellipse cx="11" cy="34" rx="7" ry="4" transform="rotate(-15 11 34)" fill="#FFAAA6"/>
        <ellipse cx="11" cy="34" rx="4.5" ry="2" transform="rotate(-15 11 34)" fill="#FF7B89"/>
        <ellipse cx="53" cy="34" rx="7" ry="4" transform="rotate(15 53 34)" fill="#FFAAA6"/>
        <ellipse cx="53" cy="34" rx="4.5" ry="2" transform="rotate(15 53 34)" fill="#FF7B89"/>
        <!-- Face -->
        <circle cx="32" cy="35" r="16" fill="#FFE5D9"/>
        <ellipse cx="23" cy="38" rx="3" ry="2" fill="#FFAAA6" opacity="0.6"/>
        <ellipse cx="41" cy="38" rx="3" ry="2" fill="#FFAAA6" opacity="0.6"/>
        <!-- Eyes -->
        <ellipse cx="25" cy="33" rx="3.2" ry="4" fill="#242126"/>
        <circle cx="24" cy="31.5" r="1.4" fill="#FFFFFF"/>
        <circle cx="26.5" cy="34.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="39" cy="33" rx="3.2" ry="4" fill="#242126"/>
        <circle cx="38" cy="31.5" r="1.4" fill="#FFFFFF"/>
        <circle cx="40.5" cy="34.5" r="0.7" fill="#FFFFFF"/>
        <!-- Nose & Smile -->
        <ellipse cx="32" cy="38.5" rx="2" ry="1.4" fill="#FF8A8A"/>
        <path d="M30 41C31 42.5 33 42.5 34 41" stroke="#874D43" stroke-width="1.6" stroke-linecap="round"/>
        <!-- Forehead Wool Curls -->
        <circle cx="30" cy="23" r="4.5" fill="#B2EE6B"/>
        <circle cx="36" cy="24" r="4" fill="#B2EE6B"/>
      </svg>`,

      // 2. Berang-Berang Cokelat Gigi Kelinci (Cute Otter / Beaver with Buck Teeth)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Ears -->
        <circle cx="17" cy="18" r="6" fill="#693B20"/>
        <circle cx="17" cy="18" r="3.5" fill="#FFE5D4"/>
        <circle cx="47" cy="18" r="6" fill="#693B20"/>
        <circle cx="47" cy="18" r="3.5" fill="#FFE5D4"/>
        <!-- Head -->
        <ellipse cx="32" cy="34" rx="20" ry="19" fill="#8F5635"/>
        <!-- Chubby Cream Muzzle -->
        <ellipse cx="32" cy="41" rx="14" ry="10" fill="#FFF0DE"/>
        <!-- Buck Teeth -->
        <rect x="29" y="44" width="2.8" height="4.5" rx="1" fill="#FFFFFF" stroke="#8F5635" stroke-width="0.8"/>
        <rect x="32.2" y="44" width="2.8" height="4.5" rx="1" fill="#FFFFFF" stroke="#8F5635" stroke-width="0.8"/>
        <!-- Nose -->
        <ellipse cx="32" cy="38" rx="4" ry="2.6" fill="#301A10"/>
        <ellipse cx="31" cy="37.2" rx="1.5" ry="0.8" fill="#FFFFFF" opacity="0.6"/>
        <!-- Mouth Line -->
        <path d="M28 42C29.5 43.5 31.5 43.5 32 42C32.5 43.5 34.5 43.5 36 42" stroke="#693B20" stroke-width="1.4" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="23" cy="30" rx="3.5" ry="4.2" fill="#211510"/>
        <circle cx="21.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="24.2" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="41" cy="30" rx="3.5" ry="4.2" fill="#211510"/>
        <circle cx="39.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="42.2" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <!-- Whisker Dots -->
        <circle cx="25" cy="41" r="0.8" fill="#B38063"/>
        <circle cx="23" cy="43" r="0.8" fill="#B38063"/>
        <circle cx="39" cy="41" r="0.8" fill="#B38063"/>
        <circle cx="41" cy="43" r="0.8" fill="#B38063"/>
      </svg>`,

      // 3. Rusa Manis Mata Bintang (Sweet Anime Deer / Fawn)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Antlers -->
        <path d="M22 19L19 11M20 15L16 14" stroke="#804F2E" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M42 19L45 11M44 15L48 14" stroke="#804F2E" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Ears -->
        <ellipse cx="14" cy="25" rx="8" ry="4.5" transform="rotate(-30 14 25)" fill="#D48D55"/>
        <ellipse cx="14" cy="25" rx="5" ry="2.5" transform="rotate(-30 14 25)" fill="#FFAFA8"/>
        <ellipse cx="50" cy="25" rx="8" ry="4.5" transform="rotate(30 50 25)" fill="#D48D55"/>
        <ellipse cx="50" cy="25" rx="5" ry="2.5" transform="rotate(30 50 25)" fill="#FFAFA8"/>
        <!-- Head -->
        <ellipse cx="32" cy="36" rx="18" ry="17" fill="#D48D55"/>
        <!-- Cream Eye Patches & Snout -->
        <ellipse cx="23" cy="34" rx="7" ry="8" fill="#FFF5EB"/>
        <ellipse cx="41" cy="34" rx="7" ry="8" fill="#FFF5EB"/>
        <ellipse cx="32" cy="42" rx="8" ry="6" fill="#FFF5EB"/>
        <!-- Big Sparkle Anime Eyes -->
        <ellipse cx="24" cy="34" rx="4.5" ry="5.5" fill="#241812"/>
        <circle cx="22.5" cy="32" r="2" fill="#FFFFFF"/>
        <circle cx="25.5" cy="36.5" r="1.1" fill="#FFFFFF"/>
        <circle cx="22" cy="36.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="40" cy="34" rx="4.5" ry="5.5" fill="#241812"/>
        <circle cx="38.5" cy="32" r="2" fill="#FFFFFF"/>
        <circle cx="41.5" cy="36.5" r="1.1" fill="#FFFFFF"/>
        <circle cx="38" cy="36.5" r="0.7" fill="#FFFFFF"/>
        <!-- Nose & Smile -->
        <ellipse cx="32" cy="40.5" rx="2.5" ry="1.8" fill="#361D13"/>
        <path d="M30.5 43.5C31.5 44.5 32.5 44.5 33.5 43.5" stroke="#7A4526" stroke-width="1.4" stroke-linecap="round"/>
        <!-- White Spots on Forehead -->
        <circle cx="32" cy="24" r="1.3" fill="#FFFFFF" opacity="0.9"/>
        <circle cx="29" cy="26" r="1" fill="#FFFFFF" opacity="0.9"/>
        <circle cx="35" cy="26" r="1" fill="#FFFFFF" opacity="0.9"/>
      </svg>`,

      // 4. Rubah Merah Ceria (Bright Red Fox)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Tall Fox Ears -->
        <polygon points="12,32 17,10 27,24" fill="#FF5E36"/>
        <polygon points="15,28 18,14 25,24" fill="#291A18"/>
        <polygon points="17,26 19,17 24,24" fill="#FFB0BD"/>
        <polygon points="52,32 47,10 37,24" fill="#FF5E36"/>
        <polygon points="49,28 46,14 39,24" fill="#291A18"/>
        <polygon points="47,26 45,17 40,24" fill="#FFB0BD"/>
        <!-- Head -->
        <ellipse cx="32" cy="36" rx="19" ry="16" fill="#FF5E36"/>
        <!-- Fluffy White Cheeks -->
        <path d="M14 36C14 46 25 48 32 49C39 48 50 46 50 36C50 31 43 32 38 35C35 37 33 40 32 40C31 40 29 37 26 35C21 32 14 31 14 36Z" fill="#FFFDF8"/>
        <!-- Fox Eyes -->
        <ellipse cx="23" cy="33" rx="3.5" ry="3.8" transform="rotate(-10 23 33)" fill="#201715"/>
        <circle cx="22" cy="31.8" r="1.4" fill="#FFFFFF"/>
        <circle cx="24.2" cy="34" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="41" cy="33" rx="3.5" ry="3.8" transform="rotate(10 41 33)" fill="#201715"/>
        <circle cx="40" cy="31.8" r="1.4" fill="#FFFFFF"/>
        <circle cx="42.2" cy="34" r="0.7" fill="#FFFFFF"/>
        <!-- Shiny Black Fox Nose -->
        <ellipse cx="32" cy="43" rx="2.8" ry="2" fill="#201715"/>
        <ellipse cx="31.2" cy="42.3" rx="1.2" ry="0.6" fill="#FFFFFF" opacity="0.7"/>
        <path d="M30.5 45.5C31.5 46.5 32.5 46.5 33.5 45.5" stroke="#402018" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,

      // 5. Zebra Loreng Belang (Striped Safari Zebra)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Ears -->
        <ellipse cx="20" cy="16" rx="5" ry="8" transform="rotate(-15 20 16)" fill="#FFFDF8" stroke="#2B2633" stroke-width="1.5"/>
        <ellipse cx="20" cy="16" rx="2.5" ry="5" transform="rotate(-15 20 16)" fill="#FFAFA8"/>
        <ellipse cx="44" cy="16" rx="5" ry="8" transform="rotate(15 44 16)" fill="#FFFDF8" stroke="#2B2633" stroke-width="1.5"/>
        <ellipse cx="44" cy="16" rx="2.5" ry="5" transform="rotate(15 44 16)" fill="#FFAFA8"/>
        <!-- Mane Mohawk -->
        <path d="M30 11C30 8 34 8 34 11L33 22H31L30 11Z" fill="#2B2633"/>
        <!-- Head -->
        <ellipse cx="32" cy="34" rx="18" ry="18" fill="#FFFDF8"/>
        <!-- Zebra Stripes -->
        <path d="M32 18L32 26" stroke="#2B2633" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M24 20L28 25" stroke="#2B2633" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M40 20L36 25" stroke="#2B2633" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M15 31C18 31 22 33 24 35" stroke="#2B2633" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M49 31C46 31 42 33 40 35" stroke="#2B2633" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M16 38C20 38 23 40 24 42" stroke="#2B2633" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M48 38C44 38 41 40 40 42" stroke="#2B2633" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Muzzle -->
        <ellipse cx="32" cy="44" rx="11" ry="7" fill="#8C8494"/>
        <ellipse cx="28.5" cy="43.5" rx="1.5" ry="1" fill="#2B2633"/>
        <ellipse cx="35.5" cy="43.5" rx="1.5" ry="1" fill="#2B2633"/>
        <path d="M30 46.5C31.2 47.5 32.8 47.5 34 46.5" stroke="#2B2633" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="25" cy="31" rx="3.2" ry="4" fill="#2B2633"/>
        <circle cx="23.8" cy="29.5" r="1.4" fill="#FFFFFF"/>
        <ellipse cx="39" cy="31" rx="3.2" ry="4" fill="#2B2633"/>
        <circle cx="37.8" cy="29.5" r="1.4" fill="#FFFFFF"/>
      </svg>`,

      // 6. Ayam Jago / Hen Jengger Merah (Colorful Rooster / Chicken)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Bright Red Crown / Comb -->
        <circle cx="27" cy="16" r="5" fill="#FF3848"/>
        <circle cx="34" cy="13" r="6" fill="#FF3848"/>
        <circle cx="41" cy="17" r="4.5" fill="#FF3848"/>
        <!-- Body / Neck Collar (Sky Blue) -->
        <ellipse cx="32" cy="46" rx="14" ry="9" fill="#58A8E8"/>
        <!-- Head -->
        <circle cx="32" cy="32" r="16" fill="#FFFDF8"/>
        <!-- Red Wattle below beak -->
        <ellipse cx="30" cy="44" rx="2.5" ry="4" fill="#FF3848"/>
        <ellipse cx="34" cy="44" rx="2.5" ry="4" fill="#FF3848"/>
        <!-- Golden Beak -->
        <polygon points="26,35 38,35 32,43" fill="#FFA928"/>
        <polygon points="28,35 36,35 32,38" fill="#FF8D10"/>
        <!-- Eyes -->
        <ellipse cx="23" cy="30" rx="3.2" ry="3.8" fill="#241F28"/>
        <circle cx="22" cy="28.8" r="1.4" fill="#FFFFFF"/>
        <circle cx="24" cy="31.2" r="0.6" fill="#FFFFFF"/>
        <ellipse cx="41" cy="30" rx="3.2" ry="3.8" fill="#241F28"/>
        <circle cx="40" cy="28.8" r="1.4" fill="#FFFFFF"/>
        <circle cx="42" cy="31.2" r="0.6" fill="#FFFFFF"/>
        <!-- Rosy Cheeks -->
        <circle cx="20" cy="35" r="2.5" fill="#FFAAA6" opacity="0.6"/>
        <circle cx="44" cy="35" r="2.5" fill="#FFAAA6" opacity="0.6"/>
      </svg>`,

      // 7. Kelinci Lilac Imut (Lilac Lavender Bunny)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Tall Bunny Ears -->
        <ellipse cx="21" cy="18" rx="6" ry="13" transform="rotate(-8 21 18)" fill="#A99CF0"/>
        <ellipse cx="21" cy="18" rx="3.2" ry="9.5" transform="rotate(-8 21 18)" fill="#FFCAD4"/>
        <ellipse cx="43" cy="18" rx="6" ry="13" transform="rotate(8 43 18)" fill="#A99CF0"/>
        <ellipse cx="43" cy="18" rx="3.2" ry="9.5" transform="rotate(8 43 18)" fill="#FFCAD4"/>
        <!-- Head -->
        <circle cx="32" cy="36" r="18" fill="#A99CF0"/>
        <!-- Chubby White Cheeks -->
        <ellipse cx="26" cy="41" rx="8" ry="6" fill="#FFFDF8"/>
        <ellipse cx="38" cy="41" rx="8" ry="6" fill="#FFFDF8"/>
        <!-- Eyes -->
        <ellipse cx="23" cy="32" rx="3.5" ry="4.2" fill="#241D30"/>
        <circle cx="21.8" cy="30.5" r="1.6" fill="#FFFFFF"/>
        <circle cx="24.2" cy="33.8" r="0.8" fill="#FFFFFF"/>
        <ellipse cx="41" cy="32" rx="3.5" ry="4.2" fill="#241D30"/>
        <circle cx="39.8" cy="30.5" r="1.6" fill="#FFFFFF"/>
        <circle cx="42.2" cy="33.8" r="0.8" fill="#FFFFFF"/>
        <!-- Pink Bunny Nose & Mouth -->
        <polygon points="32,38 29.5,35.5 34.5,35.5" fill="#FF7B90"/>
        <path d="M29.5 40C31 41.5 32 41.5 32 39.5C32 41.5 33 41.5 34.5 40" stroke="#7A6894" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="14" y1="39" x2="20" y2="40" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="14" y1="42" x2="20" y2="42" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="50" y1="39" x2="44" y2="40" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="50" y1="42" x2="44" y2="42" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,

      // 8. Anak Anjing Lidah Menjulur (Happy Puppy with Sticking Tongue)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Floppy Ears -->
        <path d="M16 22C11 25 10 37 15 42C18 39 18 32 17 24Z" fill="#754425"/>
        <path d="M48 22C53 25 54 37 49 42C46 39 46 32 47 24Z" fill="#754425"/>
        <!-- Head -->
        <circle cx="32" cy="34" r="18" fill="#9E6845"/>
        <!-- White Blaze down muzzle -->
        <path d="M30 18C30 16 34 16 34 18L37 32C42 33 45 37 45 42C45 47 39 49 32 49C25 49 19 47 19 42C19 37 22 33 27 32L30 18Z" fill="#FFF8EE"/>
        <!-- Eyes -->
        <ellipse cx="24" cy="30" rx="3.5" ry="4" fill="#261710"/>
        <circle cx="22.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="25" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="40" cy="30" rx="3.5" ry="4" fill="#261710"/>
        <circle cx="38.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="41" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <!-- Glossy Black Nose -->
        <ellipse cx="32" cy="38" rx="3.8" ry="2.6" fill="#201511"/>
        <ellipse cx="31" cy="37.2" rx="1.3" ry="0.7" fill="#FFFFFF" opacity="0.6"/>
        <!-- Panting Pink Tongue Sticking Out -->
        <ellipse cx="35" cy="46" rx="3" ry="4" fill="#FF6B82"/>
        <line x1="35" y1="43" x2="35" y2="47" stroke="#D93E58" stroke-width="0.8"/>
        <!-- Mouth Line -->
        <path d="M28 41C30 42.5 32 42.5 32 41C32 42.5 34 42.5 36 41" stroke="#754425" stroke-width="1.4" stroke-linecap="round"/>
      </svg>`,

      // 9. Anak Gajah Biru Belalai Melengkung (Sky Blue Baby Elephant with Trunk & Tusks)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Big Round Flapping Ears -->
        <circle cx="15" cy="34" r="11" fill="#5FB3F5"/>
        <circle cx="15" cy="34" r="7" fill="#FFAFC2"/>
        <circle cx="49" cy="34" r="11" fill="#5FB3F5"/>
        <circle cx="49" cy="34" r="7" fill="#FFAFC2"/>
        <!-- Head -->
        <ellipse cx="32" cy="34" rx="18" ry="17" fill="#6EC1FA"/>
        <!-- Tusks -->
        <path d="M26 42C24 44 24 47 26 48C28 47 28 44 27 42" fill="#FFFFFF"/>
        <path d="M38 42C40 44 40 47 38 48C36 47 36 44 37 42" fill="#FFFFFF"/>
        <!-- Curled Trunk -->
        <path d="M30 33C30 38 29 44 32 46C35 48 38 46 38 42C38 39 35 39 34 41" stroke="#4B9FE0" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="23" cy="29" rx="3.2" ry="4" fill="#1C2C3D"/>
        <circle cx="21.8" cy="27.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="24" cy="30.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="41" cy="29" rx="3.2" ry="4" fill="#1C2C3D"/>
        <circle cx="39.8" cy="27.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="42" cy="30.5" r="0.7" fill="#FFFFFF"/>
        <!-- Rosy Blush -->
        <ellipse cx="20" cy="35" rx="2.5" ry="1.5" fill="#FFAEB9" opacity="0.7"/>
        <ellipse cx="44" cy="35" rx="2.5" ry="1.5" fill="#FFAEB9" opacity="0.7"/>
      </svg>`,

      // 10. Singa Berbulu Lebat (Fluffy Smiling Lion)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Huge Fluffy Orange Mane -->
        <circle cx="20" cy="20" r="9" fill="#FF8726"/>
        <circle cx="32" cy="14" r="10" fill="#FF9238"/>
        <circle cx="44" cy="20" r="9" fill="#FF8726"/>
        <circle cx="14" cy="33" r="9" fill="#E86E10"/>
        <circle cx="50" cy="33" r="9" fill="#E86E10"/>
        <circle cx="20" cy="46" r="9" fill="#D65F05"/>
        <circle cx="32" cy="50" r="10" fill="#D65F05"/>
        <circle cx="44" cy="46" r="9" fill="#D65F05"/>
        <!-- Ears -->
        <circle cx="20" cy="22" r="5" fill="#FFAA33"/>
        <circle cx="20" cy="22" r="2.8" fill="#753C12"/>
        <circle cx="44" cy="22" r="5" fill="#FFAA33"/>
        <circle cx="44" cy="22" r="2.8" fill="#753C12"/>
        <!-- Golden Face -->
        <circle cx="32" cy="35" r="16" fill="#FFD166"/>
        <!-- Cream Snout -->
        <ellipse cx="32" cy="41" rx="8" ry="5.5" fill="#FFF4D6"/>
        <!-- Nose & Smile -->
        <polygon points="32,39 29.5,36.5 34.5,36.5" fill="#693714"/>
        <path d="M29.5 42C30.8 43.5 32 43.5 32 41C32 43.5 33.2 43.5 34.5 42" stroke="#693714" stroke-width="1.4" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="25" cy="31" rx="3.2" ry="4" fill="#2B1A0E"/>
        <circle cx="24" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="26" cy="32.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="39" cy="31" rx="3.2" ry="4" fill="#2B1A0E"/>
        <circle cx="38" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="40" cy="32.5" r="0.7" fill="#FFFFFF"/>
      </svg>`,

      // 11. Jerapah Bintik Manis (Giraffe with Cute Spots & Horns)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Knobby Horns (Ossicones) -->
        <line x1="26" y1="20" x2="23" y2="10" stroke="#8A4A1C" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="23" cy="10" r="3" fill="#63310F"/>
        <line x1="38" y1="20" x2="41" y2="10" stroke="#8A4A1C" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="41" cy="10" r="3" fill="#63310F"/>
        <!-- Ears -->
        <ellipse cx="14" cy="26" rx="7" ry="3.5" transform="rotate(-25 14 26)" fill="#FFD242"/>
        <ellipse cx="14" cy="26" rx="4" ry="2" transform="rotate(-25 14 26)" fill="#FFAFA8"/>
        <ellipse cx="50" cy="26" rx="7" ry="3.5" transform="rotate(25 50 26)" fill="#FFD242"/>
        <ellipse cx="50" cy="26" rx="4" ry="2" transform="rotate(25 50 26)" fill="#FFAFA8"/>
        <!-- Head -->
        <ellipse cx="32" cy="36" rx="17" ry="18" fill="#FFD242"/>
        <!-- Brown Spots -->
        <circle cx="22" cy="25" r="3.2" fill="#B86826"/>
        <circle cx="42" cy="25" r="3.2" fill="#B86826"/>
        <circle cx="32" cy="22" r="2.5" fill="#B86826"/>
        <circle cx="18" cy="35" r="2.8" fill="#B86826"/>
        <circle cx="46" cy="35" r="2.8" fill="#B86826"/>
        <!-- Cream Snout -->
        <ellipse cx="32" cy="44" rx="10" ry="7.5" fill="#FFF3D9"/>
        <ellipse cx="29" cy="43.5" rx="1.6" ry="1.2" fill="#63310F"/>
        <ellipse cx="35" cy="43.5" rx="1.6" ry="1.2" fill="#63310F"/>
        <path d="M30 46.5C31.2 47.5 32.8 47.5 34 46.5" stroke="#8A4A1C" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="25" cy="31" rx="3.5" ry="4.2" fill="#24160A"/>
        <circle cx="23.8" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="26" cy="32.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="39" cy="31" rx="3.5" ry="4.2" fill="#24160A"/>
        <circle cx="37.8" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="40" cy="32.5" r="0.7" fill="#FFFFFF"/>
      </svg>`,

      // 12. Tupai Pipi Tembem Garis Belang (Chipmunk with Striped Cheeks)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Ears -->
        <circle cx="18" cy="18" r="5.5" fill="#7D421B"/>
        <circle cx="18" cy="18" r="3" fill="#FFAFA8"/>
        <circle cx="46" cy="18" r="5.5" fill="#7D421B"/>
        <circle cx="46" cy="18" r="3" fill="#FFAFA8"/>
        <!-- Head -->
        <ellipse cx="32" cy="35" rx="18" ry="17" fill="#9E582A"/>
        <!-- Striped Cheeks -->
        <path d="M14 34L25 36" stroke="#2B150A" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 37L25 39" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round"/>
        <path d="M14 40L25 42" stroke="#2B150A" stroke-width="2" stroke-linecap="round"/>
        <path d="M50 34L39 36" stroke="#2B150A" stroke-width="2" stroke-linecap="round"/>
        <path d="M50 37L39 39" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round"/>
        <path d="M50 40L39 42" stroke="#2B150A" stroke-width="2" stroke-linecap="round"/>
        <!-- Chubby Cream Cheeks & Chin -->
        <ellipse cx="26" cy="42" rx="7" ry="6" fill="#FFF2DE"/>
        <ellipse cx="38" cy="42" rx="7" ry="6" fill="#FFF2DE"/>
        <ellipse cx="32" cy="44" rx="5" ry="4" fill="#FFF2DE"/>
        <!-- Eyes -->
        <ellipse cx="23" cy="30" rx="3.5" ry="4.2" fill="#211208"/>
        <circle cx="21.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="24" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="41" cy="30" rx="3.5" ry="4.2" fill="#211208"/>
        <circle cx="39.8" cy="28.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="42" cy="31.8" r="0.7" fill="#FFFFFF"/>
        <!-- Nose -->
        <ellipse cx="32" cy="38" rx="2.8" ry="1.8" fill="#3D1E0C"/>
        <path d="M30.5 41C31.5 42 32.5 42 33.5 41" stroke="#7D421B" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,

      // 13. Walrus Bertaring Panjang (Walrus with Long White Tusks)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Head -->
        <ellipse cx="32" cy="34" rx="19" ry="18" fill="#B56754"/>
        <!-- Eyes -->
        <ellipse cx="24" cy="27" rx="3" ry="3.5" fill="#26120E"/>
        <circle cx="23" cy="25.8" r="1.3" fill="#FFFFFF"/>
        <ellipse cx="40" cy="27" rx="3" ry="3.5" fill="#26120E"/>
        <circle cx="39" cy="25.8" r="1.3" fill="#FFFFFF"/>
        <!-- Long White Tusks -->
        <path d="M26 40C25 46 25 51 27 52C28 50 29 45 29 40" fill="#FFFDF8" stroke="#D1C3B4" stroke-width="0.8"/>
        <path d="M38 40C39 46 39 51 37 52C36 50 35 45 35 40" fill="#FFFDF8" stroke="#D1C3B4" stroke-width="0.8"/>
        <!-- Puffy Cream Whisker Pads -->
        <ellipse cx="27" cy="39" rx="8" ry="6.5" fill="#FCE4D6"/>
        <ellipse cx="37" cy="39" rx="8" ry="6.5" fill="#FCE4D6"/>
        <!-- Nose -->
        <ellipse cx="32" cy="33.5" rx="3.5" ry="2.2" fill="#381B15"/>
        <!-- Whisker Dots -->
        <circle cx="24" cy="38" r="0.8" fill="#B56754"/>
        <circle cx="22" cy="40.5" r="0.8" fill="#B56754"/>
        <circle cx="25" cy="41" r="0.8" fill="#B56754"/>
        <circle cx="40" cy="38" r="0.8" fill="#B56754"/>
        <circle cx="42" cy="40.5" r="0.8" fill="#B56754"/>
        <circle cx="39" cy="41" r="0.8" fill="#B56754"/>
      </svg>`,

      // 14. Panda Mata Hitam Bintang (Sweet Panda Bear)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Round Black Ears -->
        <circle cx="16" cy="18" r="7.5" fill="#28242E"/>
        <circle cx="48" cy="18" r="7.5" fill="#28242E"/>
        <!-- Pure White Head -->
        <circle cx="32" cy="35" r="18" fill="#FFFDF8" stroke="#E6E0D8" stroke-width="1"/>
        <!-- Tilted Black Eye Patches -->
        <ellipse cx="23" cy="32" rx="5.5" ry="4.5" transform="rotate(-20 23 32)" fill="#28242E"/>
        <ellipse cx="41" cy="32" rx="5.5" ry="4.5" transform="rotate(20 41 32)" fill="#28242E"/>
        <!-- Sparkling White Pupils -->
        <circle cx="23.5" cy="31" r="1.8" fill="#FFFFFF"/>
        <circle cx="22" cy="33.5" r="0.8" fill="#FFFFFF"/>
        <circle cx="40.5" cy="31" r="1.8" fill="#FFFFFF"/>
        <circle cx="42" cy="33.5" r="0.8" fill="#FFFFFF"/>
        <!-- Triangular Nose & Smile -->
        <path d="M30 39L34 39L32 41.5Z" fill="#28242E"/>
        <path d="M30 43C31 44 32 44 32 42C32 44 33 44 34 43" stroke="#28242E" stroke-width="1.3" stroke-linecap="round"/>
      </svg>`,

      // 15. Rusa Hidung Merah Bersinar (Red-Nosed Rudolph Reindeer)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Antlers -->
        <path d="M22 20L18 10M19 14L15 13" stroke="#754422" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M42 20L46 10M45 14L49 13" stroke="#754422" stroke-width="2.4" stroke-linecap="round"/>
        <!-- Ears -->
        <ellipse cx="14" cy="27" rx="7" ry="4" transform="rotate(-30 14 27)" fill="#BA7F50"/>
        <ellipse cx="14" cy="27" rx="4" ry="2" transform="rotate(-30 14 27)" fill="#FFAFA8"/>
        <ellipse cx="50" cy="27" rx="7" ry="4" transform="rotate(30 50 27)" fill="#BA7F50"/>
        <ellipse cx="50" cy="27" rx="4" ry="2" transform="rotate(30 50 27)" fill="#FFAFA8"/>
        <!-- Head -->
        <ellipse cx="32" cy="36" rx="17" ry="17" fill="#BA7F50"/>
        <!-- Cream Snout -->
        <ellipse cx="32" cy="42" rx="9" ry="6.5" fill="#FFF3E3"/>
        <!-- Glowing Cherry-Red Nose -->
        <circle cx="32" cy="38" r="4.5" fill="#FF334B"/>
        <circle cx="30.5" cy="36.5" r="1.5" fill="#FFFFFF"/>
        <!-- Smile -->
        <path d="M30 44C31 45.2 33 45.2 34 44" stroke="#754422" stroke-width="1.4" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="24" cy="31" rx="3.5" ry="4.2" fill="#24150D"/>
        <circle cx="22.8" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="25" cy="32.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="40" cy="31" rx="3.5" ry="4.2" fill="#24150D"/>
        <circle cx="38.8" cy="29.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="41" cy="32.5" r="0.7" fill="#FFFFFF"/>
      </svg>`,

      // 16. Kucing Belang Mata Hijau (Cute Kitten with Emerald Eyes)
      `<svg viewBox="0 0 64 64" fill="none">
        <!-- Pointed Cat Ears -->
        <polygon points="14,28 20,12 28,24" fill="#FFA366"/>
        <polygon points="17,25 21,16 26,23" fill="#FFAFA8"/>
        <polygon points="50,28 44,12 36,24" fill="#FFA366"/>
        <polygon points="47,25 43,16 38,23" fill="#FFAFA8"/>
        <!-- Head -->
        <circle cx="32" cy="36" r="17" fill="#FFA366"/>
        <!-- White Cheeks -->
        <ellipse cx="25" cy="41" rx="7" ry="5.5" fill="#FFFDF8"/>
        <ellipse cx="39" cy="41" rx="7" ry="5.5" fill="#FFFDF8"/>
        <!-- Sparkling Emerald Green Eyes -->
        <ellipse cx="24" cy="32" rx="3.8" ry="4.5" fill="#27C487"/>
        <ellipse cx="24" cy="32" rx="2" ry="3.5" fill="#143D2B"/>
        <circle cx="22.8" cy="30.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="25" cy="33.5" r="0.7" fill="#FFFFFF"/>
        <ellipse cx="40" cy="32" rx="3.8" ry="4.5" fill="#27C487"/>
        <ellipse cx="40" cy="32" rx="2" ry="3.5" fill="#143D2B"/>
        <circle cx="38.8" cy="30.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="41" cy="33.5" r="0.7" fill="#FFFFFF"/>
        <!-- Pink Nose & Cute Mouth -->
        <polygon points="32,38 30,36 34,36" fill="#FF7B90"/>
        <path d="M29.5 40C31 41.5 32 41.5 32 39.5C32 41.5 33 41.5 34.5 40" stroke="#7A3D14" stroke-width="1.3" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="14" y1="39" x2="20" y2="40" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="14" y1="42" x2="20" y2="42" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="50" y1="39" x2="44" y2="40" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="50" y1="42" x2="44" y2="42" stroke="#FFFDF8" stroke-width="1.3" stroke-linecap="round"/>
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
