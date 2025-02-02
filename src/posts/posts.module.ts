import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from "./entities/post.entity";
import { User } from "src/users/entities/user.entity";
import { PostsResolver } from "./posts.resolver";
import { UsersResolver } from "src/users/users.resolver";
import { UsersService } from "src/users/users.service";

@Module({
  imports: [TypeOrmModule.forFeature([Posts, User])],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver, UsersResolver, UsersService],
})
export class PostsModule {}
