import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id.toString();
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).send({ error: "Bad Request" });
    }
  }
}

export { ListAllUsersController };
