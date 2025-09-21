import Database from "../libs/Database";

class DinosaurRepository {
  public async findAll(): Promise<any[]> {
    try {
      const result = await Database.query(
        "SELECT * FROM dinosaures ORDER BY common_name ASC;"
      );
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la récupérations des dinosaures: ", error);
      return [];
    }
  }
}

export default new DinosaurRepository();