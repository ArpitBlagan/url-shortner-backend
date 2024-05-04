import { PrismaClient } from "@prisma/client";
export class DB {
  private static prismaInstance: any;
  constructor() {
    //nothing...
  }
  static getInstance() {
    if (!this.prismaInstance) {
      return (this.prismaInstance = new PrismaClient());
    }
    return this.prismaInstance;
  }
}
