/**
 * Class used to player setting
 */
export default class PlayerSetting {
  /**
   * Contain hexa of theme color
   */
  public themeColor: string;

  /**
   * Name of the player
   */
  private playerName: string;

  /**
   * Score started by the player, by default = 0
   */
  private startingScore: number = 0;

  public constructor(themeColor: string) {
    this.themeColor = themeColor;
  }
}
