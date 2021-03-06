import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number | undefined;

  @column()
  public enabled: boolean | undefined;

  @column()
  public user_id: string | undefined;

  @column()
  public channel_id: string | undefined;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime | undefined;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime | undefined;
}
