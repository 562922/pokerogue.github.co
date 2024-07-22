import { WeatherType } from "./data/weather";
import { Variant } from "./data/variant";
import { TempBattleStat } from "./data/temp-battle-stat";
import { Nature } from "./data/nature";
import { Type } from "./data/type";
import { Stat } from "./data/pokemon-stat";
import { PokeballCounts } from "./battle-scene";
import { PokeballType } from "./data/pokeball";
import { Gender } from "./data/gender";
import { StatusEffect } from "./data/status-effect";
import { SpeciesStatBoosterItem, modifierTypes } from "./modifier/modifier-type";
import { VariantTier } from "./enums/variant-tiers";
import { EggTier } from "#enums/egg-type";
import { allSpecies } from "./data/pokemon-species"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Abilities } from "#enums/abilities";
import { BerryType } from "#enums/berry-type";
import { Biome } from "#enums/biome";
import { Moves } from "#enums/moves";
import { Species } from "#enums/species";
import { TimeOfDay } from "#enums/time-of-day";

/**
 * Overrides for testing different in game situations
 * if an override name starts with "STARTING", it will apply when a new run begins
 */

/**
 * OVERALL OVERRIDES
 */

// a specific seed (default: a random string of 24 characters)
export const SEED_OVERRIDE: string = "";
export const WEATHER_OVERRIDE: WeatherType = WeatherType.NONE;
export const DOUBLE_BATTLE_OVERRIDE: boolean = false;
export const SINGLE_BATTLE_OVERRIDE: boolean = false;
export const STARTING_WAVE_OVERRIDE: integer = null;
export const STARTING_BIOME_OVERRIDE: Biome = Biome.TOWN;
export const ARENA_TINT_OVERRIDE: TimeOfDay = null;
// Multiplies XP gained by this value including 0. Set to null to ignore the override
export const XP_MULTIPLIER_OVERRIDE: number = null;
// default 1000
export const STARTING_MONEY_OVERRIDE: integer = 9999999999999;
export const FREE_CANDY_UPGRADE_OVERRIDE: boolean = true;
export const POKEBALL_OVERRIDE: { active: boolean, pokeballs: PokeballCounts } = {
  active: true,
  pokeballs: {
    [PokeballType.POKEBALL]: 50,
    [PokeballType.GREAT_BALL]: 50,
    [PokeballType.ULTRA_BALL]: 50,
    [PokeballType.ROGUE_BALL]: 50,
    [PokeballType.MASTER_BALL]: 50,
  }
};

/**
 * PLAYER OVERRIDES
 */

/**
 * Set the form index of any starter in the party whose `speciesId` is inside this override
 * @see {@link allSpecies} in `src/data/pokemon-species.ts` for form indexes
 * @example
 * ```
 * const STARTER_FORM_OVERRIDES = {
 *   [Species.DARMANITAN]: 1
 * }
 * ```
 */
export const STARTER_FORM_OVERRIDES: Partial<Record<Species, number>> = {};

// default 5 or 20 for Daily
export const STARTING_LEVEL_OVERRIDE: integer = null;
/**
 * SPECIES OVERRIDE
 * will only apply to the first starter in your party or each enemy pokemon
 * default is 0 to not override
 * @example SPECIES_OVERRIDE = Species.Bulbasaur;
 */
export const STARTER_SPECIES_OVERRIDE: Species.RAYQUAZA | integer = 384;
export const ABILITY_OVERRIDE: Abilities = Abilities.WONDER_GUARD;
export const PASSIVE_ABILITY_OVERRIDE: Abilities = Abilities.SPEED_BOOST;
export const STATUS_OVERRIDE: StatusEffect = StatusEffect.NONE;
export const GENDER_OVERRIDE: Gender = null;
export const MOVESET_OVERRIDE: Array<Moves> = ["DYNAMAX_CANNON", "BOOMBURST", "TEN_MILLION_VOLT_THUNDERBOLT", "EARTHQUAKE"];
export const SHINY_OVERRIDE: boolean = true;
export const VARIANT_OVERRIDE: Variant = 2;

/**
 * OPPONENT / ENEMY OVERRIDES
 */

export const OPP_SPECIES_OVERRIDE: Species | integer = 0;
export const OPP_LEVEL_OVERRIDE: number = 0;
export const OPP_ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const OPP_PASSIVE_ABILITY_OVERRIDE: Abilities = Abilities.NONE;
export const OPP_STATUS_OVERRIDE: StatusEffect = StatusEffect.NONE;
export const OPP_GENDER_OVERRIDE: Gender = null;
export const OPP_MOVESET_OVERRIDE: Array<Moves> = [];
export const OPP_SHINY_OVERRIDE: boolean = false;
export const OPP_VARIANT_OVERRIDE: Variant = null;
export const OPP_IVS_OVERRIDE: integer | integer[] = [];

/**
 * EGG OVERRIDES
 */

export const EGG_IMMEDIATE_HATCH_OVERRIDE: boolean = true;
export const EGG_TIER_OVERRIDE: EggTier = 4;
export const EGG_SHINY_OVERRIDE: boolean = true;
export const EGG_VARIANT_OVERRIDE: VariantTier = 2;
export const EGG_FREE_GACHA_PULLS_OVERRIDE: boolean = true;
export const EGG_GACHA_PULL_COUNT_OVERRIDE: number = 999;

/**
 * MODIFIER / ITEM OVERRIDES
 * if count is not provided, it will default to 1
 * @example Modifier Override [{name: "EXP_SHARE", count: 2}]
 * @example Held Item Override [{name: "LUCKY_EGG"}]
 *
 * Some items are generated based on a sub-type (i.e. berries), to override those:
 * @example [{name: "BERRY", count: 5, type: BerryType.SITRUS}]
 * types are listed in interface below
 * - TempBattleStat is for TEMP_STAT_BOOSTER / X Items (Dire hit is separate)
 * - Stat is for BASE_STAT_BOOSTER / Vitamin
 * - Nature is for MINT
 * - Type is for TERA_SHARD or ATTACK_TYPE_BOOSTER (type boosting items i.e Silk Scarf)
 * - BerryType is for BERRY
 * - SpeciesStatBoosterItem is for SPECIES_STAT_BOOSTER
 */
interface ModifierOverride {
    name: keyof typeof modifierTypes & string,
    count?: integer
    type?: TempBattleStat|Stat|Nature|Type|BerryType|SpeciesStatBoosterItem
}
export const STARTING_MODIFIER_OVERRIDE: Array<ModifierOverride> = [];
export const OPP_MODIFIER_OVERRIDE: Array<ModifierOverride> = [];

export const STARTING_HELD_ITEMS_OVERRIDE: Array<ModifierOverride> = [
  {name: "EXP_SHARE", count: 5},
  {name: "EXP_BALANCE", count: 5},
  {name: "EXP_CHARM", count: 200},
  {name: "SUPER_EXP_CHARM", count: 300},
  {name: "CANDY_JAR", count: 399},
  {name: "HEALING_CHARM", count: 5},
  {name: "GOLDEN_EXP_CHARM", count: 50},
  {name: "GOLDEN_POKEBALL", count: 5},
  {name: "GOLDEN_EGG", count: 99},
  {name: "GOLDEN_PUNCH", count: 99},
  {name: "LOCK_CAPSULE", count: 1},
  {name: "GRIP_CLAW", count: 15},
  {name: "QUICK_CLAW", count: 99},
  {name: "KINGS_ROCK", count: 99},
  {name: "LEFTOVERS", count: 99},
  {name: "SHELL_BELL", count: 99},
  {name: "SHINY_CHARM", count: 99},
  {name: "ABILITY_CHARM", count: 99},
  {name: "MINI_BLACK_HOLE", count: 99},
  {name: "AMULET_COIN", count: 99},
  {name: "MEGA_BRACELET", count: 1},
  {name: "DYNAMAX_BAND", count: 1}
];
export const OPP_HELD_ITEMS_OVERRIDE: Array<ModifierOverride> = [];
export const NEVER_CRIT_OVERRIDE: boolean = true;

/**
 * An array of items by keys as defined in the "modifierTypes" object in the "modifier/modifier-type.ts" file.
 * Items listed will replace the normal rolls.
 * If less items are listed than rolled, only some items will be replaced
 * If more items are listed than rolled, only the first X items will be shown, where X is the number of items rolled.
 */
export const ITEM_REWARD_OVERRIDE: Array<String> = ["RARER_CANDY"];
