import { characterService } from "@src/service/character.service";
import type { Request, Response } from "express";

class CharacterController {
  static async getCharacters(req: Request, res: Response) {
    const characters = await characterService.getCharacters();
    res.status(200).json(characters);
  }

  static async getCharacter(req: Request, res: Response) {
    const character = await characterService.getCharacterById(req.params.id);
    res.status(200).json(character);
  }

  static async createCharacter(req: Request, res: Response) {
    const character = await characterService.createCharacter(req.body);
    res.status(201).json(character);
  }

  static async updateCharacter(req: Request, res: Response) {
    const character = await characterService.updateCharacter(
      req.params.id,
      req.body
    );
    res.status(200).json(character);
  }

  static async deleteCharacter(req: Request, res: Response) {
    const character = await characterService.deleteCharacter(req.params.id);
    res.status(200).json(character);
  }
}
