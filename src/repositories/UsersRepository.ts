import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../models/user";

@EntityRepository(User)
class UsersRespository extends Repository<User>{


}

export { UsersRespository }