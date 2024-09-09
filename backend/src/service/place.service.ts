import type { PrismaClient } from "@prisma/client/extension";
import type { CreatePlaceDto } from "@src/dto/place/CreatePlaceDto";
import type { UpdatePlaceDto } from "@src/dto/place/UpdatePlaceDto";
import { PrismaProvider } from "@src/providers/prisma.provider";

class PlaceService {
  private client: PrismaClient;

  constructor() {
    this.client = PrismaProvider.prisma;
  }

  async getPlaces() {
    return this.client.place.findMany();
  }

  async getPlaceById(id: string) {
    return this.client.place.findUnique({
      where: {
        id,
      },
    });
  }

  async createPlace(place: CreatePlaceDto) {
    return this.client.place.create({
      data: place,
    });
  }

  async updatePlace(id: string, place: UpdatePlaceDto) {
    return this.client.place.update({
      where: {
        id,
      },
      data: place,
    });
  }

  async deletePlace(id: string) {
    return this.client.place.delete({
      where: {
        id,
      },
    });
  }
}

export const placeService = new PlaceService();
