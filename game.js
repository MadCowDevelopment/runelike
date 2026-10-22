const SKILL_ICON_ROOT = "assets/png/spellbookmegapack/spellbookmegapack/Flat_Skills_Icons/PNG";
const MOB_ICON_ROOT = "assets/png/mobsavataricons/mobsavataricons";
const RUNE_TYPES = {
  ember: { name: "Ember", image: `${SKILL_ICON_ROOT}/red/r_16.PNG`, effect: "Strike", color: "ember", rarity: "common" },
  ward: { name: "Ward", image: `${SKILL_ICON_ROOT}/blue/b_01.png`, effect: "Ward", color: "ward", rarity: "common" },
  bloom: { name: "Bloom", image: `${SKILL_ICON_ROOT}/green/g_12.png`, effect: "Mend", color: "bloom", rarity: "common" },
  venom: { name: "Venom", image: `${SKILL_ICON_ROOT}/green/g_29.png`, effect: "Poison", color: "venom", rarity: "common" },
  frost: { name: "Frost", image: `${SKILL_ICON_ROOT}/blue/b_25.png`, effect: "Weaken", color: "frost", rarity: "rare" },
  thorn: { name: "Thorn", image: `${SKILL_ICON_ROOT}/green/g_08.png`, effect: "Reflect", color: "thorn", rarity: "rare" },
  spark: { name: "Spark", image: `${SKILL_ICON_ROOT}/blue/b_31.PNG`, effect: "Shock", color: "spark", rarity: "epic" },
  leech: { name: "Leech", image: `${SKILL_ICON_ROOT}/red/r_32.png`, effect: "Drain", color: "leech", rarity: "legendary" },
  bleed: { name: "Rupture", image: `${SKILL_ICON_ROOT}/red/r_28.PNG`, effect: "Bleed", color: "bleed", rarity: "common" },
  arcane: { name: "Arcane", image: `${SKILL_ICON_ROOT}/blue/b_30.png`, effect: "Mark", color: "arcane", rarity: "rare" },
  tide: { name: "Tide", image: `${SKILL_ICON_ROOT}/blue/b_35.PNG`, effect: "Crush", color: "tide", rarity: "epic" },
  rift: { name: "Rift", image: `${SKILL_ICON_ROOT}/green/g_35.png`, effect: "Erode", color: "rift", rarity: "legendary" }
};

const STAGE_THEMES = [
  { id: "grove", name: "Whispering Grove", enemies: [["BOG HOPPER", "Pip", "Mobs_frog_01.png"], ["WILD THORN", "Thornmaw", "Mobs_Plant_Monster_01.png"], ["FEN STALKER", "Mudjaw", "Mobs_crocodile_01.png"], ["WEB WEAVER", "Silkfang", "Mobs_spider_01.png"], ["ROOT SENTINEL", "Rootbound", "Mobs_golem_01a.png"], ["MIRE CRAWLER", "Murk", "Mobs_snake_01.png"], ["BRAMBLE HOUND", "Briar", "Mobs_werewolf_01.png"], ["BLOOMING HORROR", "Petalmaw", "Mobs_Plant_Monster_01.png"]], boss: ["GROVE TYRANT · BOSS", "The Verdant King", "Mobs_dragon_10.png"] },
  { id: "crypt", name: "Sunken Crypt", enemies: [["RESTLESS DEAD", "The Shambler", "Mobs_zombie_01.png"], ["BONE STALKER", "Rattle", "Mobs_skeleton_01.png"], ["GLOAM WISP", "Gloamwisp", "Mobs_ghost_01.png"], ["CRYPT BAT", "Duskwings", "Mobs_bat_01.png"], ["DARK SENTINEL", "Graveguard", "Mobs_dark_knight_01.png"], ["BONE BEAST", "Ossifang", "Mobs_bone_beast.png"], ["ANCIENT VAMPIRE", "Count Noct", "Mobs_ancient_vampire.png"], ["ASHEN DEAD", "Cinderwake", "Mobs_ash_zombies.png"]], boss: ["CRYPT LORD · BOSS", "The Undying", "Mobs_dark_knight_04.png"] },
  { id: "inferno", name: "Cinder Wastes", enemies: [["EMBER IMP", "Scorch", "Mobs_demon_01.png"], ["ASHEN BEAST", "Cindermaw", "Mobs_demon_03.png"], ["FIRE STALKER", "Blazetail", "Mobs_snake_01.png"], ["HELLHOUND", "Ruin", "Mobs_werewolf_01.png"], ["OBSIDIAN GOLEM", "Blackglass", "Mobs_golem_02.png"], ["DEMON KNIGHT", "Redbrand", "Mobs_dark_knight_02.png"], ["WYRM", "Coilflame", "Mobs_dragon_03.png"], ["FURNACE BRUTE", "Kilnback", "Mobs_demon_06.png"]], boss: ["INFERNAL DRAKE · BOSS", "Ashen Sovereign", "Mobs_dragon_12.png"] },
  { id: "frost", name: "Frostfang Reach", enemies: [["ARCTIC WOLF", "Snowstep", "Mobs_Arctic_wolf.png"], ["ICE STALKER", "Rimefang", "Mobs_grey wolf_02.png"], ["FROST BAT", "Pale Wing", "Mobs_bat_01.png"], ["CRYSTAL GOLEM", "Shardback", "Mobs_crystal_golem_01.png"], ["WHITE BEAR", "Boreal", "Mobs_bear_01.png"], ["FROST WRAITH", "Stillwind", "Mobs_ghost_01.png"], ["SNOW TROLL", "Glacier", "Mobs_troll_01.png"], ["FROST KNIGHT", "Coldsteel", "Mobs_living_armor_03.png"]], boss: ["FROST COLOSSUS · BOSS", "The Long Winter", "Mobs_golem_04.png"] },
  { id: "wilds", name: "The Untamed March", enemies: [["ORC RAIDER", "Gruk", "Mobs_orc_01.png"], ["CAVE TROLL", "Mossknuckle", "Mobs_troll_01.png"], ["WILD BOAR", "Tusker", "Mobs_beest_01.png"], ["VENOM ASP", "Needle", "Mobs_snake_01.png"], ["WAR BEAR", "Ironhide", "Mobs_bear.png"], ["CROW BANDIT", "Blackfeather", "Mobs_crow_01.png"], ["CYCLOPS", "One-Eye", "Mobs_cyclop_01.png"], ["ORC WARLORD", "Dreadtusk", "Mobs_orc_05.png"]], boss: ["WARLORD · BOSS", "Gorath the Unbroken", "Mobs_cyclop_01.png"] }
];
const FUSION_NAMES = {
  "bloom+ember": {
    name: "Cinderbloom",
    image: `${SKILL_ICON_ROOT}/green/g_31.png`
  },
  "bloom+ward": {
    name: "Briarwell",
    image: `${SKILL_ICON_ROOT}/green/g_13.PNG`
  },
  "ember+ward": {
    name: "Cinderguard",
    image: `${SKILL_ICON_ROOT}/blue/b_04.png`
  },
  "bloom+ember+ward": {
    name: "Dawnroot",
    image: `${SKILL_ICON_ROOT}/green/g_32.png`
  }
};
const NODE_ICONS = {
  fight: `${SKILL_ICON_ROOT}/red/r_01.png`,
  rest: `${SKILL_ICON_ROOT}/blue/b_05.png`,
  forge: `${SKILL_ICON_ROOT}/green/g_10.PNG`,
  shrine: `${SKILL_ICON_ROOT}/green/g_13.PNG`,
  cache: `${SKILL_ICON_ROOT}/green/g_26.png`,
  merchant: `${SKILL_ICON_ROOT}/green/g_14.png`,
  mystery: `${SKILL_ICON_ROOT}/blue/b_07.png`,
  elite: `${SKILL_ICON_ROOT}/red/r_35.PNG`,
  boss: `${SKILL_ICON_ROOT}/red/r_35.PNG`
};
const BASE_DECK = [
  { type: "ember" }, { type: "ember" }, { type: "ember" }, { type: "ember" },
  { type: "ward" }, { type: "ward" }, { type: "ward" }, { type: "bloom" }
];
const ATTACK_EVERY_ACTIONS = 3;
const MAX_HP = 24;
const BOARD_SIZE = 16;
const MAX_MYTHIC_STORAGE_KEY = "rune-relay:max-unlocked-mythic";
const META_STORAGE_KEY = "rune-relay:meta";
const parsedMeta = JSON.parse(localStorage.getItem(META_STORAGE_KEY) || "{}");
const storedMeta = parsedMeta && typeof parsedMeta === "object" ? parsedMeta : {};
const storedMythicLevel = Number(localStorage.getItem(MAX_MYTHIC_STORAGE_KEY) || storedMeta.maxUnlockedMythic || 0);
let metaProgress = {
  shards: Math.max(0, Number.isInteger(storedMeta.shards) ? storedMeta.shards : 0),
  upgrades: Array.isArray(storedMeta.upgrades) ? storedMeta.upgrades : []
};
let maxUnlockedMythic = Number.isInteger(storedMythicLevel) && storedMythicLevel >= 0 ? storedMythicLevel : 0;

const CLASSES = {
  vanguard: {
    name: "Vanguard", image: "assets/png/rpgclassbadges/rpgclassbadges/Badges_png/Badge_warrior.png",
    description: "Starts each battle with 4 ward. Deck: 4 Ember, 3 Ward, 1 Bloom.",
    deck: BASE_DECK
  },
  arcanist: {
    name: "Arcanist", image: "assets/png/rpgclassbadges/rpgclassbadges/Badges_png/Badge_mage.png",
    description: "Ember runes deal +2 damage. Deck: 5 Ember, 2 Ward, 1 Bloom.",
    deck: [{ type: "ember" }, { type: "ember" }, { type: "ember" }, { type: "ember" }, { type: "ember" }, { type: "ward" }, { type: "ward" }, { type: "bloom" }]
  },
  warden: {
    name: "Warden", image: "assets/png/rpgclassbadges/rpgclassbadges/Badges_png/Badge_priest.PNG",
    description: "Bloom heals +2 and overhealing grants ward. Deck: 3 Ember, 2 Ward, 3 Bloom.",
    deck: [{ type: "ember" }, { type: "ember" }, { type: "ember" }, { type: "ward" }, { type: "ward" }, { type: "bloom" }, { type: "bloom" }, { type: "bloom" }]
  }
};
const META_UPGRADES = [
  { id: "ember-memory", name: "Ember Memory", cost: 4, description: "All Ember runes deal +1 damage each run.", icon: RUNE_TYPES.ember.image },
  { id: "ward-memory", name: "Ward Memory", cost: 4, description: "All Ward runes grant +1 block each run.", icon: RUNE_TYPES.ward.image },
  { id: "grove-heart", name: "Grove Heart", cost: 5, description: "Start each run with +2 maximum vitality.", icon: RUNE_TYPES.bloom.image },
  { id: "old-purse", name: "Old Purse", cost: 3, description: "Start each run with 5 gold.", icon: `${SKILL_ICON_ROOT}/green/g_26.png` }
];

const UPGRADES = [
  { id: "kindling", name: "Kindling", icon: `${SKILL_ICON_ROOT}/red/r_16.PNG`, description: "Ember runes deal +1 damage.", apply: (u) => u.emberDamage++ },
  { id: "bastion", name: "Bastion", icon: `${SKILL_ICON_ROOT}/blue/b_01.png`, description: "Ward runes grant +1 block.", apply: (u) => u.wardBlock++ },
  { id: "green-thumb", name: "Green Thumb", icon: `${SKILL_ICON_ROOT}/green/g_12.png`, description: "Bloom runes heal +1 vitality.", apply: (u) => u.bloomHeal++ },
  { id: "quick-fuse", name: "Quick Fuse", icon: `${SKILL_ICON_ROOT}/blue/b_06.png`, description: "Your first merge each fight does not advance the enemy attack.", apply: (u) => u.quickFuse = true },
  { id: "resonance", name: "Resonance", icon: `${SKILL_ICON_ROOT}/green/g_10.PNG`, description: "Same-element merges gain one extra rank.", apply: (u) => u.resonance = true },
  { id: "wild-alchemy", name: "Wild Alchemy", icon: `${SKILL_ICON_ROOT}/green/g_14.png`, description: "Mixed-element merges gain one extra rank.", apply: (u) => u.wildAlchemy = true },
  { id: "overgrowth", name: "Overgrowth", icon: `${SKILL_ICON_ROOT}/green/g_13.PNG`, description: "Bloom overhealing becomes ward.", apply: (u) => u.overgrowth = true },
  { id: "thorns", name: "Thorns", icon: `${SKILL_ICON_ROOT}/green/g_08.png`, description: "Ward reflects blocked damage back at the attacker.", apply: (u) => u.thorns = true },
  { id: "last-spark", name: "Last Spark", icon: `${SKILL_ICON_ROOT}/red/r_16.PNG`, description: "Once per run, survive a lethal hit at 1 vitality.", apply: (u) => u.lastSpark = true },
  { id: "deep-pockets", name: "Deep Pockets", icon: `${SKILL_ICON_ROOT}/green/g_26.png`, description: "Draw four runes instead of three.", apply: (u) => u.handSize = 4 },
  { id: "echo", name: "Echo", icon: `${SKILL_ICON_ROOT}/blue/b_31.PNG`, description: "Your first rune placement each fight triggers twice.", apply: (u) => u.echo = true },
  { id: "scavenger", name: "Scavenger", icon: `${SKILL_ICON_ROOT}/green/g_28.png`, description: "Defeating an enemy restores 2 vitality.", apply: (u) => u.scavenger = true },
  { id: "formation", name: "Tight Formation", icon: `${SKILL_ICON_ROOT}/green/g_24.PNG`, description: "A rune beside a matching element gains +1 effect.", apply: (u) => u.formation = true },
  { id: "volatile", name: "Volatile Core", icon: `${SKILL_ICON_ROOT}/red/r_29.PNG`, description: "Ember deals +3 damage, but costs 1 vitality.", apply: (u) => u.volatile = true }
];

let state;
let victoryTimeout = null;
const elements = {
  board: document.querySelector("#board"), hand: document.querySelector("#hand"),
  wave: document.querySelector("#wave-label"), difficulty: document.querySelector("#difficulty-label"),
  turn: document.querySelector("#turn-label"),
  deckCount: document.querySelector("#deck-count"), playerHp: document.querySelector("#player-hp"),
  playerMaxHp: document.querySelector("#player-max-hp"), classAbility: document.querySelector("#class-ability"),
  playerHealthBar: document.querySelector("#player-health-bar"), block: document.querySelector("#block-value"),
  enemyKind: document.querySelector("#enemy-kind"), enemyName: document.querySelector("#enemy-name"),
  enemyIcon: document.querySelector("#enemy-icon"), enemyHp: document.querySelector("#enemy-hp"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"), intent: document.querySelector("#intent-label"),
  boardHint: document.querySelector("#board-hint"), handCount: document.querySelector("#hand-count"),
  turnNote: document.querySelector("#turn-note"), overlay: document.querySelector("#overlay"),
  dialogEyebrow: document.querySelector("#dialog-eyebrow"), dialogTitle: document.querySelector("#dialog-title"),
  dialog: document.querySelector("#dialog-panel"),
  dialogCopy: document.querySelector("#dialog-copy"), rewardOptions: document.querySelector("#reward-options"),
  dialogButton: document.querySelector("#dialog-button"), gold: document.querySelector("#gold-count")
};

function freshUpgrades() {
  return {
    emberDamage: 0, wardBlock: 0, bloomHeal: 0, quickFuse: false, resonance: false,
    wildAlchemy: false, overgrowth: false, thorns: false, lastSpark: false, sparkUsed: false,
    handSize: 3, echo: false, echoUsed: false, scavenger: false, formation: false, volatile: false
  };
}

function saveMetaProgress() {
  const progress = { shards: metaProgress.shards, upgrades: metaProgress.upgrades, maxUnlockedMythic };
  localStorage.setItem(META_STORAGE_KEY, JSON.stringify(progress));
  localStorage.setItem(MAX_MYTHIC_STORAGE_KEY, String(maxUnlockedMythic));
}

function showClassSelection() {
  openDialog("NEW RUN", "Choose your class", `Select a class and its unique deck. ${metaProgress.shards} legacy shards · ${maxUnlockedMythic ? `Mythic ${maxUnlockedMythic} unlocked` : "Mythic locked"}.`, false);
  Object.entries(CLASSES).forEach(([id, heroClass]) => {
    addOption(heroClass.image, heroClass.name, heroClass.description, () => showDifficultySelection(id));
  });
  addOption(NODE_ICONS.shrine, `Legacy upgrades · ${metaProgress.shards} shards`, "Buy permanent upgrades for future runs.", () => showMetaShop(showClassSelection));
}

function showDifficultySelection(classId) {
  openDialog("NEW RUN", `${CLASSES[classId].name} · choose difficulty`, "Standard is the baseline. Clear the final boss to unlock the next Mythic tier. Mythic enemies gain 15% health and +1 attack per tier.", false);
  addOption(NODE_ICONS.fight, "Standard", "A balanced run. Completing it unlocks Mythic 1.", () => startRun(classId, 0));
  for (let level = 1; level <= maxUnlockedMythic; level++) {
    addOption(NODE_ICONS.elite, `Mythic ${level}`, `Enemies gain ${level * 15}% health and +${level} attack.`, () => startRun(classId, level));
  }
  addOption(NODE_ICONS.shrine, `Legacy upgrades · ${metaProgress.shards} shards`, "Buy permanent upgrades for future runs.", () => showMetaShop(() => showDifficultySelection(classId)));
  addOption(NODE_ICONS.fight, "Back to classes", "Choose a different starting class.", showClassSelection);
  elements.dialogButton.hidden = true;
}

function showMetaShop(onBack = showClassSelection) {
  openDialog("LEGACY SHRINE", `Persistent upgrades · ${metaProgress.shards} shards`, "Legacy shards persist between runs. Purchased upgrades apply to every future run.", false);
  META_UPGRADES.forEach((upgrade) => {
    const owned = metaProgress.upgrades.includes(upgrade.id);
    addOption(upgrade.icon, `${upgrade.name} · ${owned ? "Owned" : `${upgrade.cost} shards`}`, upgrade.description, () => {
      if (owned || metaProgress.shards < upgrade.cost) return;
      metaProgress.shards -= upgrade.cost;
      metaProgress.upgrades.push(upgrade.id);
      saveMetaProgress();
      showMetaShop(onBack);
    }, owned || metaProgress.shards < upgrade.cost);
  });
  addOption(NODE_ICONS.fight, "Back", "Return to run setup.", onBack);
}

function startRun(classId, mythicLevel) {
  if (victoryTimeout !== null) {
    clearTimeout(victoryTimeout);
    victoryTimeout = null;
  }
  const heroClass = CLASSES[classId];
  const ownsMeta = (id) => metaProgress.upgrades.includes(id);
  state = {
    board: Array(BOARD_SIZE).fill(null), deck: heroClass.deck.map((rune) => ({ ...rune })),
    hand: [], selected: null, selectedTile: null, hoveredTile: null,
    hp: MAX_HP + (ownsMeta("grove-heart") ? 2 : 0), maxHp: MAX_HP + (ownsMeta("grove-heart") ? 2 : 0), block: 0,
    wave: 0, turn: 1, actionsUntilAttack: ATTACK_EVERY_ACTIONS, enemy: null,
    status: "playing", upgrades: freshUpgrades(), gold: ownsMeta("old-purse") ? 5 : 0, eliteNext: false,
    firstMerge: true, chosenNode: null, forgeSelection: [], shopOffer: null, nextBlock: 0,
    acquiredUpgradeIds: [], mythicLevel, classId, stageThemes: shuffle(STAGE_THEMES).slice(0, 3),
    metaShardsAwarded: 0, pendingFinalVictory: false, classReflect: 0
  };
  if (ownsMeta("ember-memory")) state.upgrades.emberDamage += 1;
  if (ownsMeta("ward-memory")) state.upgrades.wardBlock += 1;
  startWave(0);
  drawToHand();
  elements.overlay.hidden = true;
  render();
}

function startWave(index) {
  state.wave = index;
  const stageIndex = Math.floor(index / 9);
  const stageFight = index % 9;
  const theme = state.stageThemes[stageIndex];
  const enemyInfo = stageFight === 8
    ? theme.boss
    : theme.enemies[(stageFight + stageIndex) % theme.enemies.length];
  const boss = stageFight === 8;
  const baseHp = 18 + index * 4;
  const baseEnemy = {
    kind: enemyInfo[0],
    name: enemyInfo[1],
    image: `${MOB_ICON_ROOT}/${enemyInfo[2]}`,
    hp: Math.round(baseHp * (boss ? 1.65 : 1)),
    attack: 3 + Math.floor(index / 4) + (boss ? 2 : 0),
    boss,
    stageIndex,
    stageFight,
    theme
  };
  const healthMultiplier = 1 + state.mythicLevel * 0.15;
  const elite = state.eliteNext;
  const hp = Math.round(baseEnemy.hp * healthMultiplier * (elite ? 1.55 : 1));
  const attack = baseEnemy.attack + state.mythicLevel + (elite ? 2 : 0);
  state.enemy = {
    ...baseEnemy,
    hp,
    attack,
    maxHp: hp,
    elite,
    poison: 0,
    weakened: 0,
    bleed: 0,
    marked: 0
  };
  state.eliteNext = false;
  state.status = "playing";
  state.selected = null;
  state.selectedTile = null;
  state.turn = 1;
  state.actionsUntilAttack = ATTACK_EVERY_ACTIONS;
  state.block = state.nextBlock;
  state.nextBlock = 0;
  state.firstMerge = true;
  state.upgrades.echoUsed = false;
  state.classReflect = 0;
  if (state.classId === "vanguard") state.block += 4;
  state.board.fill(null);
}

function deckRuneName(rune) {
  const details = runeDetails(rune);
  return `${details.name} ${rune.rank ?? 1}`;
}

function drawToHand() {
  while (state.hand.length < state.upgrades.handSize) {
    const rune = state.deck[Math.floor(Math.random() * state.deck.length)];
    state.hand.push({ ...rune, elements: rune.elements ? [...rune.elements] : undefined, id: `${Date.now()}-${Math.random()}` });
  }
}

function render() {
  renderBattle();
  renderBoard();
  renderHand();
}

function renderBattle() {
  document.body.dataset.theme = state.enemy.theme.id;
  elements.difficulty.textContent = state.mythicLevel ? `MYTHIC ${state.mythicLevel}` : "STANDARD";
  elements.wave.textContent = `S${state.enemy.stageIndex + 1} · ${state.enemy.stageFight + 1}/9`;
  elements.turn.textContent = `MOVE ${state.turn}`;
  elements.deckCount.textContent = state.deck.length;
  elements.gold.textContent = state.gold;
  elements.playerHp.textContent = state.hp;
  elements.playerMaxHp.textContent = state.maxHp;
  elements.playerHealthBar.style.width = `${Math.max(0, state.hp / state.maxHp) * 100}%`;
  elements.classAbility.textContent = ({
    vanguard: "Vanguard · start each fight with 4 ward",
    arcanist: "Arcanist · Ember deals +2 damage",
    warden: "Warden · Bloom heals +2; overheal grants ward"
  })[state.classId];
  elements.block.textContent = state.block;
  elements.enemyKind.textContent = `${state.enemy.elite ? "ELITE · " : ""}${state.enemy.boss ? "BOSS · " : ""}${state.enemy.theme.name.toUpperCase()} · ${state.enemy.kind}`;
  elements.enemyName.textContent = state.enemy.name;
  elements.enemyIcon.src = state.enemy.image;
  elements.enemyIcon.alt = state.enemy.name;
  elements.enemyHp.textContent = state.enemy.hp;
  elements.enemyHealthBar.style.width = `${Math.max(0, state.enemy.hp / state.enemy.maxHp) * 100}%`;
  const attackDamage = Math.max(0, state.enemy.attack - state.enemy.weakened);
  const statuses = [
    state.enemy.poison ? `poison ${state.enemy.poison}` : "",
    state.enemy.bleed ? `bleed ${state.enemy.bleed}` : "",
    state.enemy.marked ? `marked +${state.enemy.marked}` : "",
    state.enemy.weakened ? `weakened −${state.enemy.weakened}` : ""
  ].filter(Boolean);
  elements.intent.textContent = `Attack in ${state.actionsUntilAttack} ${state.actionsUntilAttack === 1 ? "move" : "moves"} · ${attackDamage} damage${statuses.length ? ` · ${statuses.join(" · ")}` : ""}`;
}

function renderBoard() {
  elements.board.replaceChildren();
  state.board.forEach((tile, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = `board-cell ${tile ? "filled" : "empty"}`;
    if (index === state.selectedTile) cell.classList.add("selected-source");
    if (state.selectedTile !== null && tile && index !== state.selectedTile && canMerge(state.board[state.selectedTile], tile)) cell.classList.add("merge-target");
    if (!tile && state.selected) cell.classList.add("valid-target");
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", tile
      ? `${deckRuneName(tile)}. ${runeActionText(tile).join("; ")}. Position ${index + 1}`
      : `Empty tile, position ${index + 1}`);
    if (tile) {
      const details = runeDetails(tile);
      const icon = createRuneArt(tile, "tile-icon");
      cell.title = `${deckRuneName(tile)} · ${runeActionText(tile).join(" · ")}`;
      const rank = document.createElement("span");
      rank.className = "tile-rank";
      rank.textContent = tile.rank ?? 1;
      cell.classList.add(`${details.color}-cell`);
      cell.append(icon, rank);
    }
    cell.disabled = state.status !== "playing";
    cell.addEventListener("pointerenter", () => { state.hoveredTile = index; });
    cell.addEventListener("click", () => handleBoardClick(index));
    elements.board.append(cell);
  });
  elements.boardHint.textContent = state.selected
    ? `Place ${deckRuneName(state.selected)} on an empty tile.`
    : state.selectedTile !== null
      ? "Tap a highlighted rune to merge, or tap the selected rune to cancel."
      : "Hover a tile + press 1–3, or tap a rune then an empty tile.";
}

function renderHand() {
  elements.hand.replaceChildren();
  state.hand.forEach((rune, index) => {
    const details = runeDetails(rune);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `rune-card ${details.color}${state.selected === rune ? " selected" : ""}`;
    card.disabled = state.status !== "playing";
    card.setAttribute("aria-pressed", state.selected === rune ? "true" : "false");
    card.setAttribute("aria-keyshortcuts", String(index + 1));
    card.title = `Press ${index + 1} while hovering over an empty board tile to place`;
    const icon = createRuneArt(rune, "rune-card-icon");
    const copy = document.createElement("span");
    copy.className = "rune-card-copy";
    const name = document.createElement("strong");
    name.textContent = details.name;
    const detail = document.createElement("small");
    detail.className = "rune-rank";
    detail.textContent = `Rank ${rune.rank ?? 1} · ${runeRarity(rune)}`;
    const actions = document.createElement("span");
    actions.className = "rune-actions";
    runeActionLines(rune).forEach((action) => {
      const effect = document.createElement("span");
      effect.className = `rune-effect-line ${action.type}`;
      effect.textContent = action.label;
      actions.append(effect);
    });
    const shortcut = document.createElement("kbd");
    shortcut.className = "rune-shortcut";
    shortcut.textContent = index + 1;
    copy.append(name, detail, actions);
    card.append(icon, copy, shortcut);
    card.addEventListener("click", () => {
      if (state.status !== "playing") return;
      state.selected = state.selected === rune ? null : rune;
      state.selectedTile = null;
      elements.turnNote.textContent = state.selected
        ? `${details.name}: ${runeActionText(rune).join("; ")}. Choose an empty tile.`
        : "Select a rune to begin your move.";
      render();
    });
    elements.hand.append(card);
  });
  elements.handCount.textContent = `${state.hand.length} READY`;
  if (state.status === "playing") {
    elements.turnNote.textContent ||= "Each placement or merge is one move. Enemy attacks every 3 moves.";
  }
}

function runeElements(rune) {
  return rune.elements ?? [rune.type];
}

function runeIconImages(rune) {
  const types = runeElements(rune);
  if (types.length > 1 && !FUSION_NAMES[[...types].sort().join("+")]) {
    return types.map((type) => RUNE_TYPES[type].image);
  }
  return [runeDetails(rune).image];
}

function createRuneArt(rune, className) {
  const art = document.createElement("span");
  const images = runeIconImages(rune);
  const parts = images.length === 2 ? "parts-2" : images.length === 3 ? "parts-3" : images.length > 3 ? "parts-many" : "";
  art.className = `${className} rune-art ${rune.elements ? "fused-art" : ""} ${parts}`;
  art.setAttribute("aria-hidden", "true");
  images.forEach((src) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    image.draggable = false;
    art.append(image);
  });
  return art;
}

function runeDetails(rune) {
  const types = runeElements(rune);
  if (types.length === 1) return RUNE_TYPES[types[0]];
  const key = [...types].sort().join("+");
  const fusion = FUSION_NAMES[key] ?? {
    name: [...types].sort().map((type) => ({
      ember: "Cinder", ward: "Guard", bloom: "Bloom", venom: "Venom",
      frost: "Frost", thorn: "Briar", spark: "Storm", leech: "Siphon",
      bleed: "Rupture", arcane: "Arcane", tide: "Tide", rift: "Rift"
    })[type]).join(""),
    image: RUNE_TYPES[types[0]].image
  };
  return {
    name: fusion.name,
    image: fusion.image,
    effect: types.map((type) => RUNE_TYPES[type].effect).join(" + "),
    color: "fusion",
    rarity: runeRarity(rune)
  };
}

const RARITY_RANK = { common: 0, rare: 1, epic: 2, legendary: 3 };

function runeRarity(rune) {
  if (rune.rarity) return rune.rarity;
  return runeElements(rune).map((type) => RUNE_TYPES[type].rarity)
    .reduce((highest, rarity) => RARITY_RANK[rarity] > RARITY_RANK[highest] ? rarity : highest, "common");
}

function runeActionText(rune) {
  return runeActionLines(rune).map((action) => action.description);
}

function runeActionLines(rune) {
  const rank = rune.rank ?? 1;
  const amount = rank * 3;
  const precision = rank * 2;
  const actions = [];
  for (const type of runeElements(rune)) {
    if (type === "ember") {
      const classBonus = state.classId === "arcanist" ? 2 : 0;
      const bonus = state.upgrades.emberDamage + classBonus + (state.upgrades.volatile ? 3 : 0);
      const damage = amount + bonus;
      actions.push({
        type,
        label: `ATTACK ${damage}`,
        description: `Deal ${damage} damage${state.upgrades.volatile ? " · lose 1 HP" : ""}`
      });
    } else if (type === "ward") {
      const block = amount + state.upgrades.wardBlock;
      actions.push({ type, label: `BLOCK ${block}`, description: `Gain ${block} block` });
    } else if (type === "bloom") {
      const healing = amount + state.upgrades.bloomHeal + (state.classId === "warden" ? 2 : 0);
      actions.push({
        type,
        label: `HEAL +${healing}`,
        description: `Restore up to ${healing} HP${state.upgrades.overgrowth || state.classId === "warden" ? " · overheal grants block" : ""}`
      });
    } else if (type === "venom") {
      actions.push({ type, label: `POISON +${precision}`, description: `Poison the enemy for ${precision} damage each attack` });
    } else if (type === "frost") {
      actions.push({ type, label: `WEAKEN +${precision}`, description: `Reduce the next enemy attack by ${precision}` });
    } else if (type === "thorn") {
      actions.push({ type, label: `REFLECT ${precision}`, description: `Reflect the next ${precision} incoming damage` });
    } else if (type === "spark") {
      actions.push({ type, label: `SHOCK ${precision}`, description: `Deal ${precision} damage and delay the next attack` });
    } else if (type === "leech") {
      actions.push({ type, label: `DRAIN ${precision} · HEAL +${rank}`, description: `Deal ${precision} damage and restore ${rank} HP` });
    } else if (type === "bleed") {
      actions.push({ type, label: `BLEED +${precision}`, description: `Deal ${precision} damage after each of your moves` });
    } else if (type === "arcane") {
      actions.push({ type, label: `MARK +${precision}`, description: `Your next damaging rune deals ${precision} extra damage` });
    } else if (type === "tide") {
      actions.push({ type, label: `CRUSH ${amount} + WARD`, description: `Deal ${amount} damage plus your block, then consume all block` });
    } else if (type === "rift") {
      const percent = Math.min(50, rank * 10);
      actions.push({ type, label: `ERODE ${percent}%`, description: `Deal ${percent}% of the enemy's current vitality` });
    }
  }
  return actions;
}

function canMerge(first, second) {
  return Boolean(first && second && (first.rank ?? 1) === (second.rank ?? 1));
}

function handleBoardClick(index) {
  if (state.status !== "playing") return;
  const tile = state.board[index];
  if (state.selected) {
    if (!tile) { placeRune(index); return; }
    state.selected = null;
  }
  if (!tile) { state.selectedTile = null; render(); return; }
  if (state.selectedTile === null || state.selectedTile === index) {
    state.selectedTile = state.selectedTile === index ? null : index;
    elements.turnNote.textContent = state.selectedTile === null ? "Rune selection cleared." : "Now tap another highlighted rune to merge the pair.";
    render();
    return;
  }
  const firstIndex = state.selectedTile;
  const first = state.board[firstIndex];
  if (canMerge(first, tile)) { mergeRunes(firstIndex, index); return; }
  elements.turnNote.textContent = "Those runes are different ranks. Only equal-rank runes can merge.";
  state.selectedTile = index;
  render();
}

function placeRune(index) {
  if (state.status !== "playing" || !state.selected || state.board[index]) return;
  const rune = state.selected;
  state.board[index] = { ...rune, id: undefined };
  state.hand = state.hand.filter((item) => item !== rune);
  state.selected = null;
  state.hoveredTile = null;
  const repeated = state.upgrades.echo && !state.upgrades.echoUsed;
  resolveRune(state.board[index], index, repeated ? 2 : 1);
  if (repeated) state.upgrades.echoUsed = true;
  if (state.enemy.hp <= 0) finishWave();
  else advanceAction();
  if (state.status === "playing") drawToHand();
  elements.turnNote.textContent = `${runeDetails(rune).name} placed. Select two board runes to merge.`;
  render();
}

function mergeResult(first, second) {
  const combined = { elements: [...new Set([...runeElements(first), ...runeElements(second)])], rank: (first.rank ?? 1) + 1 };
  combined.rarity = runeRarity(combined);
  return {
    ...combined
  };
}

function mergeRunes(firstIndex, secondIndex) {
  const first = state.board[firstIndex];
  const second = state.board[secondIndex];
  if (!canMerge(first, second)) return;
  const sameElements = runeElements(first).length === runeElements(second).length &&
    runeElements(first).every((type) => runeElements(second).includes(type));
  const result = mergeResult(first, second);
  if (sameElements && state.upgrades.resonance) result.rank += 1;
  if (!sameElements && state.upgrades.wildAlchemy) result.rank += 1;
  state.board[firstIndex] = null;
  state.board[secondIndex] = result;
  state.selectedTile = null;
  resolveRune(result, secondIndex);
  if (state.enemy.hp <= 0) finishWave();
  else advanceAction({ merge: true });
  elements.turnNote.textContent = `${runeDetails(result).name} merged into rank ${result.rank}!`;
  render();
}

function advanceAction(options = {}) {
  if (state.enemy.bleed > 0) {
    state.enemy.hp = Math.max(0, state.enemy.hp - state.enemy.bleed);
    if (state.enemy.hp === 0) {
      finishWave();
      return;
    }
  }
  if (options.merge && state.upgrades.quickFuse && state.firstMerge) {
    state.firstMerge = false;
    state.turn += 1;
    return;
  }
  state.firstMerge = false;
  state.turn += 1;
  state.actionsUntilAttack -= 1;
  if (state.actionsUntilAttack === 0) {
    enemyTurn();
    state.actionsUntilAttack = ATTACK_EVERY_ACTIONS;
  }
}

function adjacentMatch(index, types) {
  const row = Math.floor(index / 4);
  const column = index % 4;
  const neighbors = [];
  if (row > 0) neighbors.push(index - 4);
  if (row < 3) neighbors.push(index + 4);
  if (column > 0) neighbors.push(index - 1);
  if (column < 3) neighbors.push(index + 1);
  return neighbors.some((neighborIndex) => {
    const tile = state.board[neighborIndex];
    return tile && runeElements(tile).some((type) => types.includes(type));
  });
}

function resolveRune(rune, index, triggers = 1) {
  let amount = (rune.rank ?? 1) * 3;
  const precision = (rune.rank ?? 1) * 2;
  const types = runeElements(rune);
  if (state.upgrades.formation && adjacentMatch(index, types)) amount += 1;
  for (let trigger = 0; trigger < triggers; trigger++) {
    for (const type of types) {
      if (type === "ember") {
        const damage = amount + state.upgrades.emberDamage + (state.classId === "arcanist" ? 2 : 0) + (state.upgrades.volatile ? 3 : 0);
        damageEnemy(damage);
        if (state.upgrades.volatile) state.hp = Math.max(1, state.hp - 1);
      } else if (type === "ward") {
        state.block += amount + state.upgrades.wardBlock;
      } else if (type === "bloom") {
        const healing = amount + state.upgrades.bloomHeal + (state.classId === "warden" ? 2 : 0);
        const restored = Math.min(state.maxHp - state.hp, healing);
        state.hp += restored;
        if (state.upgrades.overgrowth || state.classId === "warden") state.block += healing - restored;
      } else if (type === "venom") {
        state.enemy.poison += precision;
      } else if (type === "frost") {
        state.enemy.weakened += precision;
      } else if (type === "thorn") {
        state.classReflect += precision;
      } else if (type === "spark") {
        damageEnemy(precision);
        state.actionsUntilAttack = Math.min(ATTACK_EVERY_ACTIONS, state.actionsUntilAttack + 1);
      } else if (type === "leech") {
        damageEnemy(precision);
        state.hp = Math.min(state.maxHp, state.hp + (rune.rank ?? 1));
      } else if (type === "bleed") {
        state.enemy.bleed += precision;
      } else if (type === "arcane") {
        state.enemy.marked += precision;
      } else if (type === "tide") {
        damageEnemy(amount + state.block);
        state.block = 0;
      } else if (type === "rift") {
        const percent = Math.min(0.5, (rune.rank ?? 1) * 0.1);
        damageEnemy(Math.max(1, Math.floor(state.enemy.hp * percent)));
      }
    }
  }
}

function damageEnemy(amount) {
  const damage = amount + state.enemy.marked;
  state.enemy.marked = 0;
  state.enemy.hp = Math.max(0, state.enemy.hp - damage);
}

function enemyTurn() {
  if (state.enemy.poison > 0) {
    state.enemy.hp = Math.max(0, state.enemy.hp - state.enemy.poison);
    if (state.enemy.hp === 0) {
      finishWave();
      return;
    }
  }
  const incoming = Math.max(0, state.enemy.attack - state.enemy.weakened);
  state.enemy.weakened = 0;
  const absorbed = Math.min(state.block, incoming);
  state.block -= absorbed;
  if (state.upgrades.thorns) state.enemy.hp = Math.max(0, state.enemy.hp - absorbed);
  const reflected = Math.min(incoming, state.classReflect);
  state.classReflect = 0;
  state.enemy.hp = Math.max(0, state.enemy.hp - reflected);
  state.hp -= incoming - absorbed;
  if (state.hp <= 0 && state.upgrades.lastSpark && !state.upgrades.sparkUsed) {
    state.hp = 1;
    state.upgrades.sparkUsed = true;
  } else if (state.hp <= 0) {
    state.hp = 0;
    state.status = "lost";
    showEndDialog(false);
    return;
  }
  if (state.enemy.hp <= 0) finishWave();
}

function finishWave() {
  if (state.status !== "playing") return;
  if (state.upgrades.scavenger) state.hp = Math.min(state.maxHp, state.hp + 2);
  state.gold += state.enemy.elite ? 6 : 3;
  const shardReward = state.enemy.boss ? 5 : 1;
  metaProgress.shards += shardReward;
  state.metaShardsAwarded += shardReward;
  saveMetaProgress();
  state.pendingFinalVictory = state.wave === 26;
  state.status = "reward";
  showVictoryBeat();
}

function showVictoryBeat() {
  const isBoss = state.enemy.boss;
  const goldReward = state.enemy.elite ? 6 : 3;
  const shardReward = isBoss ? 5 : 1;
  openDialog(
    isBoss ? "BOSS DEFEATED" : "VICTORY",
    `${state.enemy.name} defeated!`,
    `+${goldReward} gold · +${shardReward} legacy ${shardReward === 1 ? "shard" : "shards"}`,
    false
  );
  elements.dialog.classList.add("victory-dialog");
  victoryTimeout = setTimeout(() => {
    victoryTimeout = null;
    if (state.status === "reward") showRuneReward();
  }, 1100);
}

const NODE_DATA = {
  fight: { name: "Battle", image: NODE_ICONS.fight, description: "Face the next enemy." },
  rest: { name: "Rest site", image: NODE_ICONS.rest, description: "Recover 7 vitality." },
  forge: { name: "Forge", image: NODE_ICONS.forge, description: "Fuse two runes from your deck into a rank-2 rune." },
  shrine: { name: "Shrine", image: NODE_ICONS.shrine, description: "Choose a powerful blessing." },
  cache: { name: "Cache", image: NODE_ICONS.cache, description: "Take a small supply before moving on." },
  merchant: { name: "Merchant", image: NODE_ICONS.merchant, description: "Spend gold on supplies and upgrades." },
  mystery: { name: "Mystery", image: NODE_ICONS.mystery, description: "Choose how to deal with the unknown." },
  elite: { name: "Elite", image: NODE_ICONS.elite, description: "A dangerous fight with a bigger payout." },
  boss: { name: "Boss", image: NODE_ICONS.boss, description: "Face the guardian of this stage." }
};

function showPathDialog() {
  const stageFight = state.wave % 9;
  const stageIndex = Math.floor(state.wave / 9);
  const nextEncounter = stageFight === 7
    ? `The ${state.stageThemes[stageIndex].name} boss is next. Its fight is mandatory.`
    : stageFight === 8
      ? `Stage ${stageIndex + 2} begins in ${state.stageThemes[stageIndex + 1].name}.`
      : "Choose one route benefit before the next mandatory fight.";
  const nodeTypes = ["rest", "forge", "shrine", "cache", "merchant", "mystery"];
  if (stageFight !== 7) nodeTypes.push("elite");
  const choices = shuffle(nodeTypes).slice(0, 3);
  openDialog(`FIGHT ${state.wave + 1} CLEARED`, "Choose a route benefit", nextEncounter, false);
  choices.forEach((type) => {
    const data = NODE_DATA[type];
    addOption(data.image, data.name, data.description, () => chooseNode(type));
  });
}

const RARITY_LABELS = ["common", "rare", "epic", "legendary"];

function rollRuneRarity(availableTypes) {
  const difficulty = state.mythicLevel + Math.floor(state.wave / 9) + (state.enemy.boss ? 2 : 0);
  const weights = {
    common: Math.max(25, 70 - difficulty * 8),
    rare: 22 + difficulty * 4,
    epic: 7 + difficulty * 3,
    legendary: 1 + difficulty * 2
  };
  const total = RARITY_LABELS.reduce((sum, rarity) => sum + weights[rarity], 0);
  let roll = Math.random() * total;
  for (const rarity of RARITY_LABELS) {
    roll -= weights[rarity];
    if (roll < 0 && availableTypes.some((type) => RUNE_TYPES[type].rarity === rarity)) return rarity;
  }
  return availableTypes[0] ? RUNE_TYPES[availableTypes[0]].rarity : "common";
}

function showRuneReward() {
  const offeredTypes = [];
  while (offeredTypes.length < 3) {
    const remaining = Object.keys(RUNE_TYPES).filter((type) => !offeredTypes.includes(type));
    const rarity = rollRuneRarity(remaining);
    const sameRarity = remaining.filter((type) => RUNE_TYPES[type].rarity === rarity);
    const pool = sameRarity.length ? sameRarity : remaining;
    offeredTypes.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  const label = state.enemy.boss ? `BOSS DEFEATED · ${state.enemy.theme.name.toUpperCase()}` : `FIGHT ${state.wave + 1} CLEARED`;
  openDialog(label, "Choose a rune for your deck", "Pick one of these three, or skip the reward. Higher stages and Mythic tiers improve rarity odds.", false);
  offeredTypes.forEach((type) => {
    const rune = { type, rarity: RUNE_TYPES[type].rarity };
    const rarity = rune.rarity;
    const copy = `${rarity.toUpperCase()} · ${runeActionText(rune).join(" · ")}`;
    const option = makeOption(RUNE_TYPES[type].image, RUNE_TYPES[type].name, copy, () => {
      state.deck.push(rune);
      finishPostCombatReward();
    });
    option.classList.add(`rarity-${rarity}`);
    elements.rewardOptions.append(option);
  });
  addOption(NODE_ICONS.fight, "Skip", "Leave your deck unchanged.", finishPostCombatReward);
}

function finishPostCombatReward() {
  if (state.pendingFinalVictory) {
    state.status = "won";
    showEndDialog(true);
    return;
  }
  showPathDialog();
}

function chooseNode(type) {
  state.chosenNode = type;
  if (type === "fight" || type === "boss") { continueToNextFight(); return; }
  if (type === "elite") {
    state.eliteNext = true;
    continueToNextFight();
    return;
  }
  if (type === "rest") {
    showRestSite();
  } else if (type === "forge") {
    showForge();
  } else if (type === "shrine") {
    showShrine();
  } else if (type === "cache") {
    state.gold += 3;
    state.nextBlock += 3;
    showNodeResult("Supply cache", "You find 3 gold and begin the next fight with 3 ward.", continueToNextFight);
  } else if (type === "merchant") {
    showMerchant();
  } else if (type === "mystery") {
    showMystery();
  }
}

function showRestSite() {
  state.status = "path";
  openDialog("REST SITE", "Take a breather", "Recover vitality or remove a rune from your set to make your draws more focused.", false);
  addOption(`${SKILL_ICON_ROOT}/blue/b_05.png`, "Rest · recover 7 vitality", "Heal before the next fight.", () => {
    const healed = Math.min(7, state.maxHp - state.hp);
    state.hp += healed;
    showNodeResult("Rest site", `You recover ${healed} vitality.`, continueToNextFight);
  });
  addOption(`${SKILL_ICON_ROOT}/red/r_30.PNG`, "Purge a rune", "Remove one rune from your deck.", () => {
    if (state.deck.length <= 1) {
      showNodeResult("Deck already focused", "Your deck needs at least one rune.", continueToNextFight);
      return;
    }
    openDialog("REST SITE", "Choose a rune to remove", "The selected rune will be removed from your deck.", false);
    state.deck.forEach((rune, index) => {
      const details = runeDetails(rune);
      addOption(runeIconImages(rune), deckRuneName(rune), details.effect, () => {
        state.deck.splice(index, 1);
        showNodeResult("Rune removed", `${deckRuneName(rune)} is no longer in your deck.`, continueToNextFight);
      });
    });
  });
}

function continueToNextFight() {
  const nextWave = state.wave + 1;
  state.hand = [];
  startWave(nextWave);
  drawToHand();
  elements.overlay.hidden = true;
  render();
}

function showForge() {
  state.status = "forge";
  state.forgeSelection = [];
  openDialog("FORGE", "Fuse two runes", "Choose two runes of the same rank. They become one rune of the next rank with both effects.", true);
  renderDeckChoices(true);
  updateForgeButton();
}

function renderDeckChoices(selectable) {
  elements.rewardOptions.replaceChildren();
  state.deck.forEach((rune, index) => {
    const details = runeDetails(rune);
    const selected = state.forgeSelection.includes(index);
    const selectedRank = state.forgeSelection.length === 1 ? (state.deck[state.forgeSelection[0]].rank ?? 1) : null;
    const incompatible = selectable && !selected && selectedRank !== null && selectedRank !== (rune.rank ?? 1);
    const option = makeOption(runeIconImages(rune), deckRuneName(rune), `${runeRarity(rune).toUpperCase()} · ${details.effect}`, () => {
      if (!selectable) return;
      if (selected) state.forgeSelection = state.forgeSelection.filter((slot) => slot !== index);
      else if (!incompatible && state.forgeSelection.length < 2) state.forgeSelection.push(index);
      renderDeckChoices(selectable);
      updateForgeButton();
    }, incompatible);
    if (!selectable) option.classList.add("deck-entry");
    option.classList.toggle("selected", selected);
    elements.rewardOptions.append(option);
  });
}

function updateForgeButton() {
  elements.dialogButton.hidden = false;
  elements.dialogButton.textContent = "Forge selected runes";
  elements.dialogButton.disabled = state.forgeSelection.length !== 2;
  elements.dialogButton.onclick = forgeSelectedRunes;
}

function forgeSelectedRunes() {
  if (state.forgeSelection.length !== 2) return;
  const [firstIndex, secondIndex] = [...state.forgeSelection].sort((a, b) => b - a);
  const first = state.deck[firstIndex];
  const second = state.deck[secondIndex];
  const fused = { elements: [...new Set([...runeElements(first), ...runeElements(second)])], rank: (first.rank ?? 1) + 1 };
  fused.rarity = runeRarity(fused);
  state.deck.splice(firstIndex, 1);
  state.deck.splice(secondIndex, 1);
  state.deck.push(fused);
  state.status = "path";
  showNodeResult("Runes fused", `${deckRuneName(fused)} joins your deck. The two ingredients were consumed.`, continueToNextFight);
}

function showShrine() {
  state.status = "path";
  openDialog("ANCIENT SHRINE", "Choose a blessing", "A powerful gift with a price. Choose one.", false);
  const offers = shuffle(availableUpgrades()).slice(0, 3);
  if (offers.length === 0) {
    addOption(NODE_ICONS.fight, "Shrine exhausted", "You have already claimed every blessing.", continueToNextFight);
    return;
  }
  offers.forEach((upgrade) => addOption(upgrade.icon, upgrade.name, upgrade.description, () => {
    acquireUpgrade(upgrade);
    showNodeResult(`${upgrade.name} gained`, upgrade.description, continueToNextFight);
  }));
}

function showMerchant() {
  state.status = "path";
  openDialog(`MERCHANT · ${state.gold} GOLD`, "Browse wares", "Choose one purchase, or leave without buying.", false);
  addOption("assets/png/potionicons/potionicons/az_bottle1.png", "Vitality draught · 4 gold", "Restore 8 vitality.", () => {
    if (!spendGold(4)) return;
    state.hp = Math.min(state.maxHp, state.hp + 8);
    showNodeResult("Draught bought", "You recover up to 8 vitality.", continueToNextFight);
  }, state.gold < 4);
  addOption(NODE_ICONS.forge, "Rune upgrade · 5 gold", "Choose one rune in your deck and raise its rank by 1.", () => {
    if (!spendGold(5)) return;
    showDeckUpgrade();
  }, state.gold < 5);
  const blessingsAvailable = availableUpgrades().length > 0;
  addOption(NODE_ICONS.shrine, "Random blessing · 6 gold",
    blessingsAvailable ? "Gain a permanent run upgrade." : "You already have every available upgrade.",
    () => {
    if (!spendGold(6)) return;
    const upgrade = shuffle(availableUpgrades())[0];
    if (!upgrade) return;
    acquireUpgrade(upgrade);
    showNodeResult(`${upgrade.name} bought`, upgrade.description, continueToNextFight);
  }, state.gold < 6 || !blessingsAvailable);
  addOption(NODE_ICONS.fight, "Leave", "Continue on your route.", continueToNextFight);
}

function showDeckUpgrade() {
  state.forgeSelection = [];
  openDialog("MERCHANT", "Upgrade a rune", "Choose one rune to raise by one rank.", false);
  elements.dialogButton.hidden = true;
  state.deck.forEach((rune, index) => {
    const details = runeDetails(rune);
    addOption(runeIconImages(rune), deckRuneName(rune), details.effect, () => {
      state.deck[index] = { ...rune, rank: (rune.rank ?? 1) + 1 };
      showNodeResult("Rune upgraded", `${deckRuneName(state.deck[index])} is now in your deck.`, continueToNextFight);
    });
  });
}

function showMystery() {
  state.status = "path";
  openDialog("MYSTERY", "A quiet traveler", "A traveler offers a strange bargain: take a blessing, or share your supplies.", false);
  const upgrade = shuffle(availableUpgrades())[0];
  if (upgrade) addOption(upgrade.icon, `Take ${upgrade.name}`, `${upgrade.description} Gain it, but lose 4 vitality.`, () => {
    state.hp = Math.max(1, state.hp - 4);
    acquireUpgrade(upgrade);
    showNodeResult(`${upgrade.name} gained`, "The bargain leaves you a little weaker, but better prepared.", continueToNextFight);
  });
  addOption(`${SKILL_ICON_ROOT}/blue/b_05.png`, "Share a meal", "Spend 3 gold to recover 7 vitality.", () => {
    if (!spendGold(3)) {
      showNodeResult("Not enough gold", "You have no gold to spare, but the traveler lets you continue.", continueToNextFight);
      return;
    }
    state.hp = Math.min(state.maxHp, state.hp + 7);
    showNodeResult("A kind exchange", "You recover 7 vitality.", continueToNextFight);
  });
  addOption(NODE_ICONS.fight, "Move along", "Decline the offer.", continueToNextFight);
}

function availableUpgrades() {
  return UPGRADES.filter((upgrade) => !state.acquiredUpgradeIds.includes(upgrade.id));
}

function acquireUpgrade(upgrade) {
  if (state.acquiredUpgradeIds.includes(upgrade.id)) return false;
  upgrade.apply(state.upgrades);
  state.acquiredUpgradeIds.push(upgrade.id);
  return true;
}

function showNodeResult(title, copy, onContinue) {
  state.status = "path";
  openDialog("PATH NODE", title, copy, true);
  elements.dialogButton.textContent = "Continue to next fight";
  elements.dialogButton.disabled = false;
  elements.dialogButton.onclick = onContinue;
}

function showEndDialog(won) {
  let unlockCopy = "";
  if (won && state.mythicLevel >= maxUnlockedMythic) {
    maxUnlockedMythic = state.mythicLevel + 1;
    unlockCopy = ` Mythic ${maxUnlockedMythic} is now unlocked.`;
  }
  if (won) saveMetaProgress();
  openDialog(won ? "RUN COMPLETE" : "RUN ENDED",
    won ? "The grove is quiet." : "The wild takes the grove.",
    won ? `You cleared 3 stages and 27 fights on ${state.mythicLevel ? `Mythic ${state.mythicLevel}` : "Standard"} as the ${CLASSES[state.classId].name}, with ${state.hp} vitality and ${state.gold} gold remaining. You earned ${state.metaShardsAwarded} legacy shards.${unlockCopy}` : `You reached fight ${state.wave % 9 + 1} of stage ${Math.floor(state.wave / 9) + 1} on ${state.mythicLevel ? `Mythic ${state.mythicLevel}` : "Standard"}. You earned ${state.metaShardsAwarded} legacy shards.`,
    true);
  elements.rewardOptions.replaceChildren();
  elements.dialogButton.textContent = "Play again";
  elements.dialogButton.onclick = showClassSelection;
}

function openDialog(eyebrow, title, copy, showButton) {
  if (victoryTimeout !== null) {
    clearTimeout(victoryTimeout);
    victoryTimeout = null;
  }
  elements.dialog.classList.remove("victory-dialog");
  elements.dialogEyebrow.textContent = eyebrow;
  elements.dialogTitle.textContent = title;
  elements.dialogCopy.textContent = copy;
  elements.rewardOptions.replaceChildren();
  elements.dialogButton.hidden = !showButton;
  elements.dialogButton.disabled = false;
  elements.dialogButton.onclick = null;
  elements.overlay.hidden = false;
}

function makeOption(icon, title, copy, callback, disabled = false) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "reward-option";
  const symbol = document.createElement("span");
  symbol.className = "option-icon";
  const images = Array.isArray(icon) ? icon : [icon];
  images.forEach((source) => {
    if (source.startsWith("assets/")) {
      const image = document.createElement("img");
      image.src = source;
      image.alt = "";
      image.draggable = false;
      symbol.append(image);
    } else {
      symbol.textContent = source;
    }
  });
  const text = document.createElement("span");
  const strong = document.createElement("strong");
  strong.textContent = title;
  const small = document.createElement("small");
  small.textContent = copy;
  text.append(strong, small);
  option.append(symbol, text);
  option.disabled = disabled;
  option.addEventListener("click", callback);
  return option;
}

function addOption(icon, title, copy, callback, disabled = false) {
  elements.rewardOptions.append(makeOption(icon, title, copy, callback, disabled));
}

function spendGold(amount) {
  if (state.gold < amount) return false;
  state.gold -= amount;
  renderBattle();
  return true;
}

function openDeckViewer() {
  openDialog("YOUR SET", `Rune deck · ${state.deck.length} runes`, "These are the runes that can appear in your hand. Fused runes keep all their component effects.", false);
  renderDeckChoices(false);
  elements.dialogButton.hidden = false;
  elements.dialogButton.textContent = "Close deck";
  elements.dialogButton.onclick = () => { elements.overlay.hidden = true; };
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

document.querySelector("#restart-button").addEventListener("click", showClassSelection);
document.querySelector("#deck-button").addEventListener("click", openDeckViewer);
elements.board.addEventListener("pointerleave", () => { state.hoveredTile = null; });
document.addEventListener("keydown", (event) => {
  if (!["1", "2", "3"].includes(event.key) || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  if (!elements.overlay.hidden || state.status !== "playing" || state.hoveredTile === null || state.board[state.hoveredTile]) return;
  const rune = state.hand[Number(event.key) - 1];
  if (!rune) return;
  event.preventDefault();
  state.selected = rune;
  state.selectedTile = null;
  placeRune(state.hoveredTile);
});
showClassSelection();
